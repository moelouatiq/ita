import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const baseURL = process.env.AUDIT_BASE_URL ?? 'http://localhost:3000'
const phase = process.argv.includes('--before') ? 'before' : 'after'
const moduleEntry = process.env.PLAYWRIGHT_MODULE
const screenshotRefreshOnly = process.env.AUDIT_SCREENSHOT_REFRESH === '1'

if (!moduleEntry) {
  throw new Error('PLAYWRIGHT_MODULE doit pointer vers le fichier index.mjs d’une installation Playwright locale.')
}

const { chromium } = await import(pathToFileURL(moduleEntry).href)
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})

const allRoutes = [
  { slug: 'accueil', path: '/' },
  { slug: 'a-propos', path: '/a-propos' },
  { slug: 'emailing', path: '/emailing' },
  { slug: 'landing-page', path: '/landing-page' },
  { slug: 'developpement-web', path: '/developpement-web' },
  { slug: 'contact', path: '/contact' },
  { slug: 'mentions-legales', path: '/mentions-legales' },
]

const allViewports = [
  { name: '320', width: 320, height: 800 },
  { name: '375', width: 375, height: 812 },
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 900 },
  { name: '1440', width: 1440, height: 1000 },
  { name: '1920', width: 1920, height: 1080 },
]

const requestedRoutes = process.env.AUDIT_ROUTES?.split(',').filter(Boolean)
const requestedWidths = process.env.AUDIT_WIDTHS?.split(',').map(Number).filter(Boolean)
const routes = requestedRoutes
  ? allRoutes.filter((route) => requestedRoutes.includes(route.path))
  : allRoutes
const viewports = requestedWidths
  ? allViewports.filter((viewport) => requestedWidths.includes(viewport.width))
  : allViewports
const outputTag = process.env.AUDIT_OUTPUT_TAG ?? phase
const outputDir = path.resolve('test-results', 'visual-audit', outputTag)
await mkdir(outputDir, { recursive: true })
const results = []

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport, reducedMotion: 'no-preference' })

  await context.route('**/*', async (route) => {
    const url = route.request().url()
    if (!url.startsWith(baseURL) && !url.startsWith('data:') && !url.startsWith('blob:')) {
      await route.abort('blockedbyclient')
      return
    }
    await route.continue()
  })

  for (const route of routes) {
    const page = await context.newPage()
    const consoleErrors = []
    const pageErrors = []

    page.on('console', (message) => {
      if (message.type() === 'error' && !message.text().includes('/_next/webpack-hmr')) {
        consoleErrors.push(message.text())
      }
    })
    page.on('pageerror', (error) => pageErrors.push(error.message))

    const response = await page.goto(`${baseURL}${route.path}`, { waitUntil: 'networkidle' })
    const initialOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )

    await page.evaluate(async () => {
      const step = Math.max(240, Math.floor(window.innerHeight * 0.65))
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((resolve) => setTimeout(resolve, 180))
      }
    })
    await page.waitForTimeout(900)

    const metrics = await page.evaluate(() => {
      const roundedDecorators = []
      const clippedText = []

      for (const element of document.body.querySelectorAll('*')) {
        const style = getComputedStyle(element)
        const rect = element.getBoundingClientRect()
        if (rect.width <= 0 || rect.height <= 0) continue

        const parent = element.parentElement
        const isAccentRing = element.classList.contains('card-accent-border')
        if (parent && style.position === 'absolute' && (rect.height <= 8 || isAccentRing)) {
          const parentStyle = getComputedStyle(parent)
          const parentRect = parent.getBoundingClientRect()
          const radius = Number.parseFloat(parentStyle.borderTopLeftRadius) || 0
          const nearTop = Math.abs(rect.top - parentRect.top) <= 2
          const spansTop = rect.width >= parentRect.width - 4

          if (radius > 0 && nearTop && spansTop) {
            const accentRadius = Number.parseFloat(style.borderTopLeftRadius) || 0
            const maskComposite = style.maskComposite || style.webkitMaskComposite || ''
            const borderBoxAligned =
              Math.abs(rect.left - parentRect.left) <= 0.1 &&
              Math.abs(rect.right - parentRect.right) <= 0.1 &&
              Math.abs(rect.top - parentRect.top) <= 0.1
            roundedDecorators.push({
              type: isAccentRing ? 'masked-border-ring' : 'short-bar',
              parent: parent.tagName.toLowerCase(),
              parentClass: typeof parent.className === 'string' ? parent.className : '',
              decoratorClass: typeof element.className === 'string' ? element.className : '',
              parentOverflow: parentStyle.overflow,
              parentRadius: radius,
              accentRadius,
              maskComposite,
              clipPath: style.clipPath,
              parentLeft: Math.round(parentRect.left * 10) / 10,
              parentRight: Math.round(parentRect.right * 10) / 10,
              parentTop: Math.round(parentRect.top * 10) / 10,
              lineLeft: Math.round(rect.left * 10) / 10,
              lineRight: Math.round(rect.right * 10) / 10,
              lineTop: Math.round(rect.top * 10) / 10,
              structuralIssue: isAccentRing && (
                Math.abs(accentRadius - radius) > 0.1 ||
                style.clipPath === 'none' ||
                !/exclude|xor/.test(maskComposite) ||
                !borderBoxAligned
              ),
            })
          }
        }

        const text = element.textContent?.replace(/\s+/g, ' ').trim() ?? ''
        const clipsX = element.scrollWidth > element.clientWidth + 1
        const clipsY = element.scrollHeight > element.clientHeight + 1
        const clipsOverflow = ['hidden', 'clip'].includes(style.overflow) ||
          ['hidden', 'clip'].includes(style.overflowX) ||
          ['hidden', 'clip'].includes(style.overflowY)
        const ignored = element.matches('html, body, main, section, svg, path, input, textarea, select') ||
          element.classList.contains('marquee-wrap') ||
          element.getAttribute('aria-hidden') === 'true'

        if (text && text.length < 500 && clipsOverflow && (clipsX || clipsY) && !ignored) {
          clippedText.push({
            tag: element.tagName.toLowerCase(),
            className: typeof element.className === 'string' ? element.className : '',
            text: text.slice(0, 90),
            clipsX,
            clipsY,
            clientWidth: element.clientWidth,
            scrollWidth: element.scrollWidth,
            clientHeight: element.clientHeight,
            scrollHeight: element.scrollHeight,
          })
        }
      }

      return {
        finalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        roundedDecorators: roundedDecorators.slice(0, 30),
        clippedText: clippedText.slice(0, 30),
      }
    })

    const hoverChecks = []
    const hoverCards = page.locator('.card, a.rounded-2xl, div.rounded-2xl').filter({ visible: true })
    const hoverCount = screenshotRefreshOnly ? 0 : Math.min(await hoverCards.count(), 12)
    for (let index = 0; index < hoverCount; index += 1) {
      const card = hoverCards.nth(index)
      try {
        await card.hover({ timeout: 1_000 })
        await page.waitForTimeout(80)
        hoverChecks.push(await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        ))
      } catch {
        // Some animated cards can move between lookup and hover; later cards remain covered.
      }
    }

    // The real motion states are measured above. For deterministic full-page QA images,
    // expose elements left in their initial hidden state by headless IntersectionObserver.
    await page.evaluate(() => {
      for (const element of document.body.querySelectorAll('[style]')) {
        if (!(element instanceof HTMLElement)) continue
        const style = getComputedStyle(element)
        if (style.opacity === '0' && style.transform !== 'none') {
          element.style.setProperty('opacity', '1', 'important')
          element.style.setProperty('transform', 'none', 'important')
          element.style.setProperty('filter', 'none', 'important')
        }
      }
    })

    if ((route.path === '/emailing' || route.path === '/landing-page') &&
      (viewport.width === 390 || viewport.width === 1440)) {
      for (const cardName of ['UNICEF France', 'Chiens Guides IDF']) {
        const card = page.locator('a', { hasText: cardName }).first()
        if (await card.isVisible()) {
          await card.scrollIntoViewIfNeeded()
          await page.waitForTimeout(900)
          await card.hover()
          await page.waitForTimeout(250)
          await card.screenshot({
            path: path.join(outputDir, `${route.slug}-${cardName.startsWith('UNICEF') ? 'unicef' : 'chiens-guides'}-hover-${viewport.name}.png`),
          })
        }
      }
    }

    const targetCardStates = await page.locator('a').evaluateAll((links) =>
      links
        .filter((link) => /UNICEF France|Chiens Guides IDF/.test(link.textContent ?? ''))
        .map((link) => {
          const ancestors = []
          let current = link
          for (let depth = 0; current && depth < 4; depth += 1, current = current.parentElement) {
            const style = getComputedStyle(current)
            const rect = current.getBoundingClientRect()
            ancestors.push({
              tag: current.tagName.toLowerCase(),
              className: typeof current.className === 'string' ? current.className : '',
              opacity: style.opacity,
              visibility: style.visibility,
              transform: style.transform,
              top: Math.round(rect.top),
              height: Math.round(rect.height),
            })
          }
          return { text: link.textContent?.replace(/\s+/g, ' ').trim() ?? '', ancestors }
        }),
    )

    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(250)
    await page.screenshot({
      path: path.join(outputDir, `${route.slug}-${viewport.name}.jpg`),
      fullPage: true,
      type: 'jpeg',
      quality: 78,
    })

    const focusChecks = []
    await page.evaluate(() => window.scrollTo(0, 0))
    const focusCount = screenshotRefreshOnly ? 0 : 12
    for (let index = 0; index < focusCount; index += 1) {
      await page.keyboard.press('Tab')
      const focus = await page.evaluate(() => {
        const active = document.activeElement
        if (!(active instanceof HTMLElement)) return null
        const style = getComputedStyle(active)
        return {
          tag: active.tagName.toLowerCase(),
          text: active.textContent?.replace(/\s+/g, ' ').trim().slice(0, 60) ?? '',
          ariaLabel: active.getAttribute('aria-label') ?? '',
          outlineStyle: style.outlineStyle,
          outlineWidth: style.outlineWidth,
          boxShadow: style.boxShadow,
        }
      })
      if (focus) focusChecks.push(focus)
    }

    if (route.path === '/contact' && (viewport.width === 390 || viewport.width === 1440)) {
      const nameInput = page.locator('input[name="name"]')
      if (await nameInput.isVisible()) {
        await nameInput.focus()
        await page.waitForTimeout(150)
        await nameInput.screenshot({
          path: path.join(outputDir, `contact-input-focus-${viewport.name}.png`),
        })
      }
    }

    results.push({
      route: route.path,
      viewport: viewport.width,
      status: response?.status() ?? 0,
      initialOverflow,
      ...metrics,
      hoverOverflow: hoverChecks.filter((value) => value > 1),
      focusChecks,
      targetCardStates,
      consoleErrors,
      pageErrors,
    })

    await page.close()
  }

  await context.close()
}

await browser.close()
await writeFile(path.join(outputDir, 'results.json'), `${JSON.stringify(results, null, 2)}\n`, 'utf8')

const failures = results.filter((result) =>
  result.status >= 400 ||
  result.initialOverflow > 1 ||
  result.finalOverflow > 1 ||
  result.hoverOverflow.length > 0 ||
  result.roundedDecorators.some((decorator) => decorator.structuralIssue) ||
  result.consoleErrors.length > 0 ||
  result.pageErrors.length > 0
)

console.log(JSON.stringify({ phase, checks: results.length, failures }, null, 2))
process.exitCode = failures.length > 0 ? 1 : 0
