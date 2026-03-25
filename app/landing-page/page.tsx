import type { Metadata } from 'next'
import LandingPageContent from './LandingPageContent'

export const metadata: Metadata = {
  title: 'Création Landing Pages',
  description: 'Landing pages optimisées conversion. Design sur mesure, SEO on-page, formulaires de capture. À partir de 220 € / jour.',
}

export default function LandingPagePage() {
  return <LandingPageContent />
}
