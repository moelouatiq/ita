import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domains locked to a single page — all other routes are blocked
const SINGLE_PAGE_MAP: Record<string, string> = {
  'emailing.local':          '/emailing',
  'landing-page.local':      '/landing-page',
  'developpement-web.local': '/developpement-web',
}

// Domains with full app access (no restriction)
const FULL_ACCESS_HOSTS = new Set(['site-main.local'])

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  // Strip port to get bare hostname
  const host = hostname.split(':')[0]

  // Keep a single public origin for SEO and sharing metadata.
  if (host === 'it-a.fr') {
    const canonicalUrl = request.nextUrl.clone()
    canonicalUrl.protocol = 'https'
    canonicalUrl.hostname = 'www.it-a.fr'
    canonicalUrl.port = ''
    return NextResponse.redirect(canonicalUrl, 308)
  }

  // Full-access local domains — behave exactly like localhost
  if (FULL_ACCESS_HOSTS.has(host)) return NextResponse.next()

  const mappedPath = SINGLE_PAGE_MAP[host]

  // Not a managed local domain — let everything through normally
  if (!mappedPath) return NextResponse.next()

  const { pathname } = request.nextUrl

  // Always allow Next.js internals and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api') ||
    /\.(.+)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Root → rewrite to the domain's assigned page
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(mappedPath, request.url))
  }

  // Any other path on a single-page domain → 404
  return NextResponse.rewrite(new URL('/not-found', request.url))
}

export const config = {
  // Run on every route except static files already served by Next.js
  matcher: ['/((?!_next/static|_next/image).*)'],
}
