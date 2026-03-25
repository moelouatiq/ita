import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Création Landing Pages',
  description: 'Landing pages optimisées conversion. Design sur mesure, SEO on-page, formulaires de capture. À partir de 220 € / jour.',
}

const includes = [
  { icon: '🎨', title: 'Design sur mesure', description: 'Interface unique à votre marque, moderne et orientée conversion.' },
  { icon: '📱', title: '100% Responsive', description: 'Expérience parfaite sur mobile, tablette et desktop.' },
  { icon: '🔍', title: 'SEO on-page', description: 'Balises title, meta, Hn, images alt — tout est optimisé pour Google.' },
  { icon: '📈', title: 'Optimisation CRO', description: 'Hiérarchie visuelle, CTA, social proof — chaque élément booste la conversion.' },
  { icon: '📋', title: 'Formulaire de conversion', description: 'Formulaire intégré connecté à votre CRM ou outil préféré.' },
  { icon: '⚡', title: 'Performance > 90', description: 'Lighthouse > 90, temps de chargement < 2 secondes.' },
]

const sectors = [
  'E-commerce', 'Immobilier', 'Événementiel', 'Formation', 'Services B2B',
  'SaaS', 'Santé & Bien-être', 'Restauration', 'Finance', 'Mode & Beauté',
]

const steps = [
  { number: '01', title: 'Brief', description: 'Analyse de votre objectif, cible et marché.' },
  { number: '02', title: 'Wireframe', description: 'Structure validée ensemble.' },
  { number: '03', title: 'Design', description: 'Maquette fidèle à votre identité.' },
  { number: '04', title: 'Développement', description: 'Intégration responsive sur votre CMS.' },
  { number: '05', title: 'Livraison', description: 'QA, corrections, mise en ligne.' },
]

const faqs = [
  { q: 'Quel est le délai de livraison d\'une landing page ?', a: 'En général 5 à 10 jours ouvrés selon la complexité. Un délai express est possible sur demande.' },
  { q: 'Qui s\'occupe de l\'hébergement ?', a: 'Vous pouvez héberger la page chez votre hébergeur existant. Nous pouvons aussi recommander des solutions adaptées.' },
  { q: 'Combien de révisions sont incluses ?', a: '2 tours de révision graphique et 1 tour de révision technique sont inclus dans chaque prestation.' },
  { q: 'Proposez-vous l\'A/B testing ?', a: 'Oui, nous pouvons créer 2 versions d\'une page pour tester différentes approches. Un forfait spécifique s\'applique.' },
  { q: 'Peut-on connecter la page à un CRM ?', a: 'Absolument. Nous connectons les formulaires à HubSpot, Salesforce, Pipedrive, Mailchimp, Brevo ou via Zapier/Make.' },
]

export default function LandingPagePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-gradient noise overflow-hidden pt-20">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-accent/12 rounded-full blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/5 w-80 h-80 bg-violet-500/8 rounded-full blob blur-3xl pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating shapes */}
        <div className="absolute top-36 right-[20%] w-14 h-14 border border-accent/25 rounded-2xl float-y opacity-40 rotate-12 pointer-events-none" />
        <div className="absolute bottom-32 right-[10%] w-10 h-10 bg-accent/15 rounded-full float-y opacity-50 pointer-events-none" style={{ animationDelay: '3s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.05}>
              <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/20 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Création Landing Pages
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h1 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Des landing pages qui convertissent vos{' '}
                <span className="gradient-text">visiteurs en clients</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                Pages d&apos;atterrissage pensées pour la conversion. Design sur mesure, SEO on-page,
                formulaires optimisés. Prêtes pour vos campagnes Google Ads et Meta Ads.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="#devis" className="btn-primary btn-pulse text-base py-4 px-8">
                  Demander un devis
                </Link>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <span className="text-accent font-bold text-2xl">220 €</span>
                  <span>/ jour de travail</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRICE BAND */}
      <section className="relative bg-accent overflow-hidden">
        <div className="shimmer-line absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-title font-bold text-xl">Création Landing Page</p>
          <div className="text-center">
            <span className="text-white font-bold text-3xl">À partir de 220 €</span>
            <span className="text-white/75 text-sm ml-2">/ jour de travail</span>
          </div>
          <Link href="#devis" className="btn-outline whitespace-nowrap">Obtenir un devis</Link>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="badge">Ce qui est inclus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Une page qui travaille pour vous 24h/24</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="card card-tilt glow-hover h-full">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-title font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80" alt="Web design" width={600} height={400} className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80" alt="Design studio" width={600} height={400} className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="badge">Notre processus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Du brief à la mise en ligne</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-700 text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-title font-semibold text-primary mb-2 text-sm">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block bg-orange-900/50 text-accent text-sm font-semibold px-4 py-1.5 rounded-full">Secteurs d&apos;activité</span>
            <h2 className="font-title text-3xl font-bold text-white mt-4">Nous travaillons dans tous les secteurs</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector} delay={i * 0.05} direction="none">
                <span className="px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:border-accent hover:text-accent transition-all duration-200 text-sm cursor-default hover:bg-accent/5">
                  {sector}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="badge">FAQ</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4">Questions fréquentes</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.07}>
                <details className="faq-item card p-0 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 font-semibold text-primary cursor-pointer hover:text-accent transition-colors">
                    {faq.q}
                    <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="devis" className="section-padding bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="badge">Demande de devis</span>
            <h2 className="font-title text-3xl font-bold text-primary mt-4 mb-3">Lançons votre landing page</h2>
            <p className="text-text-secondary">Dites-nous en plus sur votre projet. Réponse personnalisée sous 24h.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card glow-hover">
              <ContactForm defaultSubject="Création Landing Page" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
