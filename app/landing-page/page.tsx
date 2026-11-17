import type { Metadata } from 'next'
import LandingPageContent from './LandingPageContent'

export const metadata: Metadata = {
  title: 'Création Landing Pages',
  description: 'Landing pages optimisées conversion. Design sur mesure, SEO on-page, formulaires de capture. À partir de 220 € par jour de travail.',
  alternates: { canonical: '/landing-page' },
  openGraph: { url: '/landing-page' },
}

export default function LandingPagePage() {
  return <LandingPageContent />
}
