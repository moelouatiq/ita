import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ITA Advanced — Agence Digitale à Marrakech',
    template: '%s | ITA Advanced Marrakech',
  },
  description:
    'Agence digitale basée à Marrakech. Intégration emailing, création de landing pages, développement web sur mesure. Plus de 6 ans d\'expérience.',
  keywords: [
    'agence digitale Marrakech',
    'intégration emailing',
    'création landing page',
    'développement web sur mesure',
    'newsletter HTML',
    'agence web Maroc',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/logo.jpg', type: 'image/jpeg', sizes: '200x200' }],
    apple: [{ url: '/logo.jpg', type: 'image/jpeg', sizes: '200x200' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'ITA Advanced — Agence Digitale à Marrakech',
    description: 'Votre présence digitale, notre expertise.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'ITA Advanced',
    url: '/',
    images: [
      {
        url: '/logo.jpg',
        width: 200,
        height: 200,
        alt: 'Logo ITA Advanced',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'ITA Advanced — Agence Digitale à Marrakech',
    description: 'Emailing, landing pages et développement web sur mesure.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.jpg`,
    image: `${siteConfig.url}/logo.jpg`,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressCountry: 'MA',
    },
    areaServed: ['Maroc', 'France'],
    knowsAbout: ['Intégration emailing', 'Landing pages', 'Développement web'],
  }

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="bg-bg-light text-text-dark font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
