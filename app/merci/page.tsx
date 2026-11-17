import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Merci — Demande reçue',
  description: 'Votre demande a bien été reçue. Nous vous contactons sous 24h.',
  robots: { index: false },
  alternates: { canonical: '/merci' },
}

export default function MerciPage() {
  return (
    <section className="min-h-screen bg-bg-light flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="card py-16 px-8">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-title text-3xl font-bold text-primary mb-4">
            Merci pour votre message !
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Votre demande a bien été reçue. Notre équipe vous contacte sous <strong className="text-primary">24 heures</strong> avec une réponse personnalisée.
          </p>

          <div className="bg-orange-50 rounded-xl p-5 mb-8 text-left space-y-2">
            <p className="text-sm text-text-dark font-medium">En attendant, vous pouvez :</p>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Découvrir nos réalisations
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Nous écrire à {siteConfig.contact.email}
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary justify-center">
              Retour à l&apos;accueil
            </Link>
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-primary px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
              Nous écrire par e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
