import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Création Landing Pages',
  description:
    'Landing pages optimisées conversion. Design sur mesure, SEO on-page, formulaires de capture. À partir de 220 € / jour.',
}

const includes = [
  { icon: '🎨', title: 'Design sur mesure', description: 'Interface unique à votre marque, moderne et orientée conversion.' },
  { icon: '📱', title: '100% Responsive', description: 'Expérience parfaite sur mobile, tablette et desktop.' },
  { icon: '🔍', title: 'SEO on-page', description: 'Balises title, meta, Hn, images alt — tout est optimisé pour Google.' },
  { icon: '📈', title: 'Optimisation CRO', description: 'Hiérarchie visuelle, CTA, social proof — chaque élément booste la conversion.' },
  { icon: '📋', title: 'Formulaire de conversion', description: 'Formulaire intégré connecté à votre CRM ou outil préféré.' },
  { icon: '⚡', title: 'Performance optimisée', description: 'Lighthouse > 90, temps de chargement < 2 secondes.' },
]

const sectors = [
  'E-commerce', 'Immobilier', 'Événementiel', 'Formation', 'Services B2B',
  'SaaS', 'Santé & Bien-être', 'Restauration', 'Finance', 'Mode & Beauté',
]

const steps = [
  { number: '01', title: 'Brief', description: 'Analyse de votre objectif, cible et marché.' },
  { number: '02', title: 'Wireframe', description: 'Structure et arborescence de la page validées ensemble.' },
  { number: '03', title: 'Design', description: 'Maquette graphique fidèle à votre univers de marque.' },
  { number: '04', title: 'Développement', description: 'Intégration HTML/CSS ou sur votre CMS, responsive.' },
  { number: '05', title: 'Tests & livraison', description: 'QA, corrections et mise en ligne sur votre hébergeur.' },
]

const faqs = [
  {
    q: 'Quel est le délai de livraison d\'une landing page ?',
    a: 'En général 5 à 10 jours ouvrés selon la complexité. Pour les campagnes urgentes, un délai express est possible (contactez-nous).',
  },
  {
    q: 'Qui s\'occupe de l\'hébergement ?',
    a: 'Vous pouvez héberger la page chez votre hébergeur existant. Nous pouvons aussi recommander des solutions adaptées à votre budget.',
  },
  {
    q: 'Combien de révisions sont incluses ?',
    a: '2 tours de révision graphique et 1 tour de révision technique sont inclus dans chaque prestation.',
  },
  {
    q: 'Proposez-vous l\'A/B testing ?',
    a: 'Oui, nous pouvons créer 2 versions d\'une page pour tester différentes approches. Un forfait spécifique s\'applique.',
  },
  {
    q: 'Peut-on connecter la page à un CRM ?',
    a: 'Absolument. Nous connectons les formulaires à HubSpot, Salesforce, Pipedrive, Mailchimp, Brevo ou toute solution via Zapier/Make.',
  },
]

export default function LandingPagePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-primary to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="badge mb-6 inline-block">
              Création Landing Pages
            </span>
            <h1 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Des landing pages qui convertissent vos{' '}
              <span className="text-accent">visiteurs en clients</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Pages d&apos;atterrissage pensées pour la conversion. Design sur mesure, SEO on-page,
              formulaires optimisés. Prêtes pour vos campagnes Google Ads et Meta Ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#devis" className="btn-primary text-base py-4 px-8">
                Demander un devis
              </a>
              <div className="text-white/60 text-sm">
                <span className="text-accent font-bold text-xl">220 €</span>
                <span className="ml-2">/ jour — tarif transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="bg-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-title font-bold text-xl">Création Landing Page</p>
          <div className="text-center">
            <span className="text-white font-bold text-3xl">À partir de 220 €</span>
            <span className="text-white/80 text-sm ml-2">/ jour de travail</span>
          </div>
          <a href="#devis" className="btn-outline whitespace-nowrap">
            Obtenir un devis
          </a>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Ce qui est inclus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Une page qui travaille pour vous 24h/24
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
                alt="Conception web design"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80"
                alt="Design studio"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Notre processus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Du brief à la mise en ligne
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border-light" />
                )}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-700 text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-title font-semibold text-primary mb-2 text-sm">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge bg-orange-900/50 text-accent">Secteurs d&apos;activité</span>
            <h2 className="font-title text-3xl font-bold text-white mt-4">
              Nous travaillons dans tous les secteurs
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:border-accent hover:text-accent transition-colors text-sm cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge">FAQ</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4">Questions fréquentes</h2>
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
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="devis" className="section-padding bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge">Demande de devis</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4 mb-3">
              Lançons votre landing page
            </h2>
            <p className="text-text-secondary">
              Dites-nous en plus sur votre projet. Réponse personnalisée sous 24h.
            </p>
          </div>
          <div className="card">
            <ContactForm defaultSubject="Création Landing Page" />
          </div>
        </div>
      </section>
    </>
  )
}
