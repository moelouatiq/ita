import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const baseURL = process.env.AUDIT_BASE_URL ?? 'http://localhost:3000'
const phase = process.argv.includes('--before') ? 'before' : 'after'
const moduleEntry = process.env.PLAYWRIGHT_MODULE

if (!moduleEntry) {
  throw new Error('PLAYWRIGHT_MODULE doit pointer vers le fichier index.mjs d’une installation Playwright locale.')
}

const { chromium } = await import(pathToFileURL(moduleEntry).href)
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})

const widths = [375, 390, 768, 1024, 1440]
const portfolioNames = [
  'Fondation ARC',
  'UNICEF France',
  'Chiens Guides IDF',
  'Hopening',
  "Œuvre d'Orient",
]
const outputDir = path.resolve('test-results', 'card-corners', phase)
await mkdir(outputDir, { recursive: true })
const results = []

const slugify = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/œ/gi, 'oe')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: width < 600 ? 844 : 1000 },
    deviceScaleFactor: 3,
  })

  await context.route('**/*', async (route) => {
    const url = route.request().url()
    if (!url.startsWith(baseURL) && !url.startsWith('data:') && !url.startsWith('blob:')) {
      await route.abort('blockedbyclient')
      return
    }
    await route.continue()
  })

  const page = await context.newPage()
  const response = await page.goto(`${baseURL}/landing-page`, { waitUntil: 'networkidle' })

  for (const name of portfolioNames) {
    const card = page.locator('a', { hasText: name }).first()
    await card.scrollIntoViewIfNeeded()
    await page.waitForTimeout(900)
    await card.evaluate((element) => {
      let current = element
      for (let depth = 0; current && depth < 4; depth += 1, current = current.parentElement) {
        if (!(current instanceof HTMLElement)) continue
        const style = getComputedStyle(current)
        if (style.opacity === '0') current.style.setProperty('opacity', '1', 'important')
        if (style.transform !== 'none') current.style.setProperty('transform', 'none', 'important')
        if (style.filter !== 'none') current.style.setProperty('filter', 'none', 'important')
      }
    })

    const capture = async (state) => {
      const box = await card.boundingBox()
      if (!box) throw new Error(`Carte introuvable : ${name}`)
      const margin = 6
      const clip = {
        x: Math.max(0, box.x - margin),
        y: Math.max(0, box.y - margin),
        width: Math.min(width, box.width + margin * 2),
        height: Math.min(38, box.height + margin * 2),
      }
      await page.screenshot({
        path: path.join(outputDir, `${width}-${slugify(name)}-${state}-top-corners.png`),
        clip,
        animations: 'disabled',
      })
    }

    await page.mouse.move(1, 1)
    await card.evaluate((element) => element.blur())
    await page.waitForTimeout(150)
    await capture('normal')

    await card.hover()
    await page.waitForTimeout(250)
    await capture('hover')

    await page.mouse.move(1, 1)
    await card.focus()
    await page.waitForTimeout(150)
    await capture('focus')

    const metrics = await card.evaluate((element) => {
      const accent = element.querySelector('.card-accent-border')
      if (!(accent instanceof HTMLElement)) return { missingAccent: true }
      const parentStyle = getComputedStyle(element)
      const accentStyle = getComputedStyle(accent)
      const parentRect = element.getBoundingClientRect()
      const accentRect = accent.getBoundingClientRect()
      return {
        missingAccent: false,
        parentRadius: Number.parseFloat(parentStyle.borderTopLeftRadius) || 0,
        accentRadius: Number.parseFloat(accentStyle.borderTopLeftRadius) || 0,
        maskComposite: accentStyle.maskComposite || accentStyle.webkitMaskComposite || '',
        clipPath: accentStyle.clipPath,
        leftDelta: Math.abs(parentRect.left - accentRect.left),
        rightDelta: Math.abs(parentRect.right - accentRect.right),
        topDelta: Math.abs(parentRect.top - accentRect.top),
      }
    })

    results.push({ width, name, status: response?.status() ?? 0, ...metrics })
  }

  await page.close()
  await context.close()
}

await browser.close()
await writeFile(path.join(outputDir, 'results.json'), `${JSON.stringify(results, null, 2)}\n`, 'utf8')

const failures = results.filter((result) =>
  result.status !== 200 ||
  result.missingAccent ||
  Math.abs(result.parentRadius - result.accentRadius) > 0.1 ||
  result.clipPath === 'none' ||
  !/exclude|xor/.test(result.maskComposite) ||
  result.leftDelta > 0.1 ||
  result.rightDelta > 0.1 ||
  result.topDelta > 0.1
)

console.log(JSON.stringify({ phase, checks: results.length, failures }, null, 2))
process.exitCode = failures.length > 0 ? 1 : 0
