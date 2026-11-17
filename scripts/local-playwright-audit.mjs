import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const baseURL = process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:3002'
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

const outputDir = path.resolve('test-results', 'audit', phase)
await mkdir(outputDir, { recursive: true })

const defaultPages = [
  '/',
  '/a-propos',
  '/emailing',
  '/landing-page',
  '/developpement-web',
  '/contact',
  '/mentions-legales',
]
const pages = process.env.AUDIT_ROUTES?.split(',').filter(Boolean) ?? defaultPages

const defaultViewports = [
  { name: 'mobile-320', width: 320, height: 800 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 1000 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
]
const requestedViewports = process.env.AUDIT_VIEWPORTS?.split(',').filter(Boolean)
const viewports = requestedViewports
  ? defaultViewports.filter((viewport) => requestedViewports.includes(viewport.name))
  : defaultViewports

const results = []

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport })
  await context.route('**/*', async (route) => {
    const url = route.request().url()
    const isRemoteImageProxy =
      url.startsWith(`${baseURL}/_next/image`) && /[?&]url=https?%3A/i.test(url)

    if (isRemoteImageProxy || (!url.startsWith(baseURL) && !url.startsWith('data:') && !url.startsWith('blob:'))) {
      await route.abort('blockedbyclient')
      return
    }

    await route.continue()
  })

  for (const route of pages) {
    const page = await context.newPage()
    const consoleErrors = []
    const pageErrors = []
    const failedRequests = []

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => pageErrors.push(error.message))
    page.on('requestfailed', (request) => {
      const url = request.url()
      if (url.startsWith(baseURL)) failedRequests.push(`${request.failure()?.errorText ?? 'échec'} ${url}`)
    })

    const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
    const status = response?.status() ?? 0
    const metrics = await page.evaluate(() => {
      const clientWidth = document.documentElement.clientWidth
      return {
        clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        h1: document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() ?? '',
        brokenImages: [...document.images]
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
        overflowElements: [...document.body.querySelectorAll('*')]
          .map((element) => {
            const rect = element.getBoundingClientRect()
            return {
              tag: element.tagName.toLowerCase(),
              className: typeof element.className === 'string' ? element.className : '',
              text: element.textContent?.replace(/\s+/g, ' ').trim().slice(0, 80) ?? '',
              left: Math.round(rect.left),
              right: Math.round(rect.right),
            }
          })
          .filter((element) => element.left < -1 || element.right > clientWidth + 1)
          .slice(0, 15),
      }
    })

    results.push({
      viewport: viewport.name,
      route,
      status,
      overflow: metrics.scrollWidth > metrics.clientWidth + 1,
      overflowPixels: metrics.scrollWidth - metrics.clientWidth,
      overflowElements: metrics.overflowElements,
      h1: metrics.h1,
      brokenImages: metrics.brokenImages,
      consoleErrors,
      pageErrors,
      failedRequests,
    })

    const shouldCapture =
      (route === '/' && (viewport.name === 'mobile-320' || viewport.name === 'desktop-1440')) ||
      (route === '/contact' && (viewport.name === 'mobile-390' || viewport.name === 'desktop-1440'))

    if (shouldCapture) {
      await page.waitForTimeout(1_800)
      await page.evaluate(async () => {
        const step = Math.max(300, Math.floor(window.innerHeight * 0.7))
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y)
          await new Promise((resolve) => setTimeout(resolve, 200))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(800)
      const slug = route === '/' ? 'accueil' : 'contact'
      await page.screenshot({
        path: path.join(outputDir, `${slug}-${viewport.name}.png`),
        fullPage: true,
      })
    }

    await page.close()
  }

  await context.close()
}

await browser.close()

await writeFile(
  path.join(outputDir, 'results.json'),
  `${JSON.stringify(results, null, 2)}\n`,
  'utf8',
)

const failures = results.filter((result) =>
  result.status >= 400 ||
  result.status === 0 ||
  result.overflow ||
  !result.h1 ||
  result.brokenImages.length > 0 ||
  result.consoleErrors.length > 0 ||
  result.pageErrors.length > 0 ||
  result.failedRequests.length > 0
)

console.log(JSON.stringify({ phase, checks: results.length, failures }, null, 2))
process.exitCode = failures.length > 0 ? 1 : 0
