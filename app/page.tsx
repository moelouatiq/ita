import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'ITA Advanced — Agence Digitale à Marrakech',
  description:
    'Agence digitale basée à Marrakech, 6 ans d\'expérience. Emailing, landing pages, développement web sur mesure. Devis gratuit.',
}

const stats = [
  { value: '6+', label: 'Ans d\'expérience' },
  { value: '150+', label: 'Projets livrés' },
  { value: '80+', label: 'Clients satisfaits' },
  { value: '98%', label: 'Taux de satisfaction' },
]

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Intégration Emailing',
    description: 'Templates HTML responsive compatibles tous clients mail. De la conception à la livraison sur votre plateforme.',
    price: 'À partir de 190 €',
    href: '/emailing',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Création Landing Pages',
    description: 'Pages d\'atterrissage optimisées conversion. Design sur mesure, SEO on-page, formulaires de capture.',
    price: 'À partir de 220 € / jour',
    href: '/landing-page',
    color: 'from-accent to-orange-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce, applications métier. Solutions sur mesure adaptées à vos besoins.',
    price: 'Sur devis',
    href: '/developpement-web',
    color: 'from-violet-500 to-violet-700',
  },
]

const advantages = [
  {
    icon: '🎯',
    title: 'Expertise technique pointue',
    description: 'Plus de 6 ans à livrer des projets digitaux exigeants pour des clients en France, Belgique et au Maroc.',
  },
  {
    icon: '⚡',
    title: 'Réactivité garantie',
    description: 'Réponse sous 24h, livrables respectés. Votre projet avance sans attendre.',
  },
  {
    icon: '💰',
    title: 'Tarifs transparents',
    description: 'Prix affichés clairement, sans mauvaise surprise. Devis détaillé avant tout engagement.',
  },
  {
    icon: '📍',
    title: 'Basés à Marrakech',
    description: 'Ancrés localement, nous comprenons le marché marocain et francophone pour mieux vous servir.',
  },
]

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Directrice Marketing, E-Shop Paris',
    content: 'ITA Advanced a intégré nos newsletters avec une qualité impressionnante. Nos taux d\'ouverture ont augmenté de 28% après l\'optimisation des templates.',
    rating: 5,
  },
  {
    name: 'Karim Benali',
    role: 'Fondateur, Agence Immobilière Marrakech',
    content: 'La landing page créée pour notre campagne publicitaire a généré 3x plus de leads qu\'avant. ROI exceptionnel dès le premier mois.',
    rating: 5,
  },
  {
    name: 'Marie Dubois',
    role: 'CEO, StartUp SaaS Lyon',
    content: 'Équipe sérieuse, réactive et très professionnelle. Notre site a été livré en avance avec une qualité de code impeccable.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-accent to-transparent" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="badge bg-orange-900/50 text-accent mb-6 inline-block">
              🇲🇦 Agence Digitale — Marrakech
            </span>
            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre présence digitale,{' '}
              <span className="text-accent">notre expertise</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Emailing professionnel, landing pages qui convertissent, développement web sur mesure.
              Plus de <strong className="text-white">6 ans d&apos;expérience</strong> au service de votre croissance digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base py-4 px-8">
                Obtenir un devis gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="btn-outline text-base py-4 px-8">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Parler sur WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/50">
              <span className="flex items-center gap-1.5">✓ <span>Réponse sous 24h</span></span>
              <span className="flex items-center gap-1.5">✓ <span>Devis gratuit</span></span>
              <span className="flex items-center gap-1.5">✓ <span>Sans engagement</span></span>
            </div>
          </div>
        </div>

        {/* Hero image overlay */}
        <div className="hidden lg:block absolute right-0 bottom-0 top-20 w-2/5">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
            alt="Équipe agence digitale"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-title text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Nos prestations</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              3 expertises, 1 seul objectif
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Chaque prestation est conçue pour générer des résultats concrets et mesurables pour votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-accent">{service.price}</span>
                  <span className="text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all inline-flex items-center gap-1 text-sm">
                    Découvrir
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge">Pourquoi nous choisir</span>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
                Votre succès digital commence ici
              </h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                Depuis 6 ans, nous accompagnons des PME, startups et indépendants dans leur transformation digitale.
                Notre force : conjuguer technique et stratégie pour des résultats concrets.
              </p>

              <div className="space-y-6">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl flex-shrink-0">
                      {adv.icon}
                    </div>
                    <div>
                      <h3 className="font-title font-semibold text-primary mb-1">{adv.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                  alt="Analytics et performance digitale"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 border border-border-light">
                <p className="font-title font-bold text-2xl text-primary">+150</p>
                <p className="text-text-secondary text-sm">projets livrés</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent rounded-2xl shadow-lg p-4 text-white text-center">
                <p className="font-title font-bold text-xl">98%</p>
                <p className="text-xs text-white/80">satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Témoignages</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-dark leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-700 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{t.name}</p>
                    <p className="text-text-secondary text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-800" />
            <div className="relative">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-white mb-4">
                Démarrons votre projet
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Décrivez votre besoin en 2 minutes. Notre équipe vous contacte sous 24h avec une proposition personnalisée.
              </p>
              <div className="bg-white rounded-2xl p-8">
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
