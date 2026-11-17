import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez ITA Advanced, agence digitale à Marrakech. Devis gratuit, réponse sous 24h.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
}

export default function ContactPage() {
  return <ContactContent />
}
