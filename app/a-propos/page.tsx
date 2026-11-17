import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez ITA Advanced, agence digitale basée à Marrakech depuis plus de 6 ans. Notre histoire, nos valeurs et notre équipe.',
  alternates: { canonical: '/a-propos' },
  openGraph: { url: '/a-propos' },
}

export default function AboutPage() {
  return <AboutContent />
}
