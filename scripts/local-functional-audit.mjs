import { writeFile, mkdir } from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const baseURL = process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:3002'
const moduleEntry = process.env.PLAYWRIGHT_MODULE
if (!moduleEntry) throw new Error('PLAYWRIGHT_MODULE est requis.')

const { chromium } = await import(pathToFileURL(moduleEntry).href)
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
await context.route('**/*', async (route) => {
  const url = route.request().url()
  if (!url.startsWith(baseURL) && !url.startsWith('data:') && !url.startsWith('blob:')) {
    await route.abort('blockedbyclient')
    return
  }
  await route.continue()
})

const checks = []
const record = (name, passed, details = '') => checks.push({ name, passed, details })
const page = await context.newPage()

await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
const menuButton = page.locator('button[aria-controls="mobile-navigation"]')
await menuButton.click()
record('menu-mobile-ouverture', await page.getByRole('navigation', { name: '' }).last().isVisible())
record('menu-mobile-liens', (await page.getByRole('navigation').last().getByRole('link').count()) >= 6)
record('menu-mobile-aria', (await menuButton.getAttribute('aria-expanded')) === 'true')

await page.keyboard.press('Escape')
await page.keyboard.press('Tab')
record('navigation-clavier', await page.evaluate(() => ['A', 'BUTTON'].includes(document.activeElement?.tagName ?? '')))

await page.goto(`${baseURL}/contact`, { waitUntil: 'networkidle' })
const submitButton = page.getByRole('button', { name: 'Envoyer ma demande' })
let apiCalls = 0
page.on('request', (request) => {
  if (request.url().endsWith('/api/contact') && request.method() === 'POST') apiCalls += 1
})
await submitButton.click()
record('validation-native-formulaire', apiCalls === 0 && page.url().endsWith('/contact'))

await page.getByLabel('Nom & Prénom *').fill('Test local ITA')
await page.getByLabel('Email *').fill('test-local@example.test')
await page.getByLabel('Téléphone / WhatsApp').fill('0600000000')
await page.getByLabel('Sujet *').selectOption('Création Landing Page')
await page.getByLabel('Décrivez votre projet *').fill('Validation locale Playwright du champ message et de sa transmission.')

let submittedPayload = null
page.on('request', (request) => {
  if (request.url().endsWith('/api/contact') && request.method() === 'POST') {
    submittedPayload = request.postDataJSON()
  }
})
const [apiResponse] = await Promise.all([
  page.waitForResponse((response) => response.url().endsWith('/api/contact') && response.request().method() === 'POST'),
  submitButton.click(),
])
await page.waitForURL('**/merci')
const apiResult = await apiResponse.json()
record('formulaire-api-200', apiResponse.status() === 200 && apiResult.mode === 'local-mock')
record('formulaire-message-transmis', submittedPayload?.message === 'Validation locale Playwright du champ message et de sa transmission.')
record('formulaire-redirection-merci', page.url().endsWith('/merci'))

const routes = ['/', '/a-propos', '/emailing', '/landing-page', '/developpement-web', '/contact', '/mentions-legales']
const internalLinks = new Set()
for (const route of routes) {
  await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  const expectedCanonical = route === '/' ? 'https://www.it-a.fr' : `https://www.it-a.fr${route}`
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
  const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content')
  record(`canonical-${route}`, canonical === expectedCanonical, canonical ?? '')
  record(`open-graph-${route}`, ogUrl === expectedCanonical, ogUrl ?? '')
  record(`h1-${route}`, (await page.locator('h1').count()) === 1)

  const hrefs = await page.locator('a[href]').evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href') ?? ''))
  for (const href of hrefs) {
    if (href.startsWith('/') && !href.startsWith('//')) internalLinks.add(href.split('#')[0] || '/')
  }
}

const publicEmail = 'amine@it-a.fr'
for (const route of ['/', '/contact', '/mentions-legales', '/merci']) {
  await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  const pageContent = (await page.locator('body').innerText()).toLowerCase()
  const emailLinks = await page.locator('a[href^="mailto:"]').evaluateAll((anchors) =>
    anchors.map((anchor) => anchor.getAttribute('href')?.toLowerCase()),
  )
  record(`email-public-${route}`, pageContent.includes(publicEmail) && emailLinks.includes(`mailto:${publicEmail}`))
  record(`ancienne-email-absente-${route}`, !pageContent.includes('contact@ita-advanced.ma'))
}

for (const href of internalLinks) {
  const response = await context.request.get(`${baseURL}${href}`, { maxRedirects: 0 })
  record(`lien-interne-${href}`, response.status() < 400, String(response.status()))
}

await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
const jsonLd = await page.locator('script[type="application/ld+json"]').textContent()
const schema = jsonLd ? JSON.parse(jsonLd) : null
record('schema-professional-service', schema?.['@type'] === 'ProfessionalService' && !('telephone' in schema))
record('schema-email-public', schema?.email === publicEmail, schema?.email ?? '')
record('favicon-local', (await page.locator('link[rel="icon"]').getAttribute('href'))?.includes('logo.jpg') ?? false)
record('whatsapp-neutralise', (await page.locator('a[href*="wa.me"]').count()) === 0)

for (const route of ['/', '/contact', '/mentions-legales']) {
  await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  const smallTargets = await page.locator('a:visible, button:visible, summary:visible, input:visible, select:visible, textarea:visible').evaluateAll((elements) =>
    elements
      .map((element) => {
        const rect = element.getBoundingClientRect()
        return {
          label: element.getAttribute('aria-label') || element.textContent?.replace(/\s+/g, ' ').trim().slice(0, 60) || element.getAttribute('name') || element.tagName,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top),
          bottom: Math.round(rect.bottom),
        }
      })
      .filter((target) =>
        target.label !== 'Open Next.js Dev Tools' &&
        target.bottom > 0 &&
        target.top < window.innerHeight &&
        (target.width < 44 || target.height < 44),
      ),
  )
  record(`zones-tactiles-${route}`, smallTargets.length === 0, JSON.stringify(smallTargets))
}

const robotsResponse = await context.request.get(`${baseURL}/robots.txt`)
const robots = await robotsResponse.text()
record('robots', robotsResponse.status() === 200 && robots.includes('Disallow: /merci') && robots.includes('Sitemap: https://www.it-a.fr/sitemap.xml'))

const sitemapResponse = await context.request.get(`${baseURL}/sitemap.xml`)
const sitemap = await sitemapResponse.text()
record('sitemap', sitemapResponse.status() === 200 && !sitemap.includes('/merci') && !sitemap.includes('/mentions-legales') && sitemap.includes('/contact'))

const notFoundResponse = await context.request.get(`${baseURL}/page-inexistante`, { maxRedirects: 0 })
record('page-404', notFoundResponse.status() === 404)

const canonicalRedirect = await new Promise((resolve, reject) => {
  const request = http.get(`${baseURL}/contact?source=test`, { headers: { host: 'it-a.fr' } }, (response) => {
    response.resume()
    response.on('end', () => resolve({ status: response.statusCode, location: response.headers.location }))
  })
  request.on('error', reject)
})
record('redirection-domaine-canonique', canonicalRedirect.status === 308 && canonicalRedirect.location === 'https://www.it-a.fr/contact?source=test', JSON.stringify(canonicalRedirect))

await browser.close()

const outputDir = path.resolve('test-results', 'audit', 'after')
await mkdir(outputDir, { recursive: true })
await writeFile(path.join(outputDir, 'functional-results.json'), `${JSON.stringify(checks, null, 2)}\n`, 'utf8')

const failures = checks.filter((check) => !check.passed)
console.log(JSON.stringify({ checks: checks.length, failures }, null, 2))
process.exitCode = failures.length ? 1 : 0
