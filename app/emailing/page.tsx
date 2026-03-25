import type { Metadata } from 'next'
import EmailingContent from './EmailingContent'

export const metadata: Metadata = {
  title: 'Intégration Emailing & Newsletter',
  description: 'Création et intégration de newsletters HTML responsive. Templates compatibles Mailchimp, Brevo, Klaviyo. À partir de 190 €.',
}

export default function EmailingPage() {
  return <EmailingContent />
}
