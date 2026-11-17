import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ITA Advanced — Agence Digitale',
    short_name: 'ITA Advanced',
    description: 'Agence digitale à Marrakech spécialisée en emailing, landing pages et développement web.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    lang: 'fr',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '200x200',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  }
}
