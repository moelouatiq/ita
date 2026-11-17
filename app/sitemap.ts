import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

const publicRoutes = [
  '/',
  '/a-propos',
  '/emailing',
  '/landing-page',
  '/developpement-web',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route, index) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route === '/contact' ? 0.8 : 0.7,
  }))
}
