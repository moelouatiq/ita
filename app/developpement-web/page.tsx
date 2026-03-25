import type { Metadata } from 'next'
import DevWebContent from './DevWebContent'

export const metadata: Metadata = {
  title: 'Développement Web Sur Mesure',
  description: 'Sites vitrines, e-commerce, applications métier. Développement web sur mesure à Marrakech. Devis gratuit.',
}

export default function DevWebPage() {
  return <DevWebContent />
}
