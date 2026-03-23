import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Intégration Emailing & Newsletter',
  description:
    'Création et intégration de newsletters HTML responsive. Templates compatibles Mailchimp, Brevo, Klaviyo. À partir de 190 €.',
}

const includes = [
  {
    icon: '📐',
    title: 'Template HTML responsive',
    description: 'Code HTML/CSS compatible avec 95%+ des clients mail (Gmail, Outlook, Apple Mail…).',
  },
  {
    icon: '🔗',
    title: 'Intégration sur votre plateforme',
    description: 'Intégration directe sur Mailchimp, Brevo (Sendinblue), Klaviyo, Campaign Monitor ou autre.',
  },
  {
    icon: '🧪',
    title: 'Tests de rendu multi-clients',
    description: 'Vérification du rendu sur les principaux clients mail et appareils mobiles.',
  },
  {
    icon: '📊',
    title: 'Tracking & analytics',
    description: 'Liens trackés, taux d\'ouverture, taux de clic — tout est prêt à analyser.',
  },
  {
    icon: '🚀',
    title: 'Délivrabilité optimisée',
    description: 'Bonnes pratiques anti-spam respectées pour que vos emails arrivent en boîte principale.',
  },
  {
    icon: '✏️',
    title: 'Révisions incluses',
    description: '2 tours de révision inclus pour affiner le rendu selon vos retours.',
  },
]

const steps = [
  { number: '01', title: 'Brief & assets', description: 'Vous partagez vos contenus, vos visuels et vos consignes de marque.' },
  { number: '02', title: 'Design & intégration', description: 'Nous créons ou intégrons le template HTML selon vos maquettes.' },
  { number: '03', title: 'Tests multi-clients', description: 'Vérification du rendu sur tous les clients mail principaux.' },
  { number: '04', title: 'Livraison', description: 'Mise en ligne sur votre plateforme, prêt à envoyer.' },
]

const faqs = [
  {
    q: 'Combien de temps pour intégrer une newsletter ?',
    a: 'En général 2 à 5 jours ouvrés selon la complexité du design. Pour les campagnes urgentes, contactez-nous directement.',
  },
  {
    q: 'Quelles plateformes d\'emailing supportez-vous ?',
    a: 'Mailchimp, Brevo (Sendinblue), Klaviyo, Campaign Monitor, HubSpot, Sarbacane et la majorité des ESPs du marché.',
  },
  {
    q: 'Vous travaillez sur mes maquettes ou vous proposez le design ?',
    a: 'Les deux. Nous pouvons intégrer vos maquettes existantes ou proposer un design from scratch selon votre charte graphique.',
  },
  {
    q: 'Que se passe-t-il si le rendu n\'est pas bon sur Outlook ?',
    a: 'Nous garantissons la compatibilité Outlook. Les tests sont inclus dans la prestation et les corrections font partie du prix.',
  },
  {
    q: 'Les révisions sont-elles incluses dans le tarif ?',
    a: 'Oui, 2 tours de révision sont inclus dans chaque prestation. Au-delà, un tarif horaire s\'applique.',
  },
]

export default function EmailingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-950 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="badge bg-blue-900/50 text-blue-300 mb-6 inline-block">
              Intégration Emailing
            </span>
            <h1 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Des emailings qui arrivent en{' '}
              <span className="text-accent">boîte de réception</span>, pas en spam
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Newsletters HTML responsive, compatibles tous clients mail, intégrées directement sur votre plateforme.
              Résultat garanti dès le premier envoi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#devis" className="btn-primary text-base py-4 px-8">
                Demander un devis
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <span className="text-accent font-bold text-xl">190 €</span>
                <span>par newsletter — tarif transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE HIGHLIGHT */}
      <section className="bg-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-title font-bold text-xl">Intégration Newsletter</p>
          <div className="text-center">
            <span className="text-white font-bold text-3xl">À partir de 190 €</span>
            <span className="text-white/80 text-sm ml-2">/ newsletter</span>
          </div>
          <a href="#devis" className="btn-outline whitespace-nowrap">
            Obtenir un devis
          </a>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Ce qui est inclus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Tout ce dont vous avez besoin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="card">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-title font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-card-hover">
            <Image
              src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80"
              alt="Email marketing workspace"
              width={1200}
              height={500}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Notre processus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              4 étapes, livraison rapide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border-light" />
                )}
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="font-title font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge">FAQ</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item card p-0 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 font-semibold text-primary cursor-pointer">
                  {faq.q}
                  <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="devis" className="section-padding bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge">Demande de devis</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4 mb-3">
              Démarrons votre projet emailing
            </h2>
            <p className="text-text-secondary">
              Partagez-nous votre besoin. Nous vous répondons sous 24h avec une proposition.
            </p>
          </div>
          <div className="card">
            <ContactForm defaultSubject="Intégration Emailing" />
          </div>
        </div>
      </section>
    </>
  )
}
