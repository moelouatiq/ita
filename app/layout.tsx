import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
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
  openGraph: {
    title: 'ITA Advanced — Agence Digitale à Marrakech',
    description: 'Votre présence digitale, notre expertise.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'ITA Advanced',
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
  return (
    <html lang="fr">
      <body className="bg-bg-light text-text-dark font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
