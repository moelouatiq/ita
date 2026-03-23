import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Développement Web Sur Mesure',
  description:
    'Sites vitrines, e-commerce, applications métier. Développement web sur mesure à Marrakech. Devis gratuit.',
}

const projectTypes = [
  {
    icon: '🏢',
    title: 'Sites vitrines',
    description: 'Présence en ligne professionnelle et performante pour votre activité.',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Boutiques en ligne complètes, gestion des stocks, paiement sécurisé.',
  },
  {
    icon: '🔧',
    title: 'Applications métier',
    description: 'Outils sur mesure pour automatiser vos processus internes.',
  },
  {
    icon: '🌐',
    title: 'Portails & plateformes',
    description: 'Espaces membres, portails B2B, marketplace et solutions multi-utilisateurs.',
  },
]

const stack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Langage' },
  { name: 'Tailwind CSS', category: 'UI' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Base de données' },
  { name: 'Vercel', category: 'Hébergement' },
  { name: 'Stripe', category: 'Paiement' },
  { name: 'Figma', category: 'Design' },
]

const steps = [
  { number: '01', title: 'Analyse', description: 'Audit de vos besoins, objectifs et contraintes techniques.' },
  { number: '02', title: 'Conception', description: 'Architecture, wireframes et choix technologiques validés.' },
  { number: '03', title: 'Développement', description: 'Intégration et développement agile avec points réguliers.' },
  { number: '04', title: 'Recette', description: 'Tests fonctionnels, QA et corrections avant lancement.' },
  { number: '05', title: 'Livraison', description: 'Mise en production, documentation et formation si nécessaire.' },
]

const portfolio = [
  {
    title: 'Plateforme SaaS B2B',
    description: 'Outil de gestion client avec dashboard analytics, facturation automatisée et API.',
    tag: 'Application Web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
  },
  {
    title: 'E-commerce Cosmétiques',
    description: 'Boutique WooCommerce avec 2000+ produits, système de fidélité et paiement multi-devises.',
    tag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
  },
  {
    title: 'Site Agence Immobilière',
    description: 'Vitrine avec moteur de recherche de biens, prise de RDV intégrée et CRM connecté.',
    tag: 'Site vitrine',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
]

export default function DevWebPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-primary to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="badge bg-violet-900/50 text-violet-300 mb-6 inline-block">
              Développement Web
            </span>
            <h1 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Des solutions web taillées pour{' '}
              <span className="text-accent">vos besoins</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Sites vitrines, e-commerce, applications métier. Nous construisons des solutions digitales
              robustes, performantes et évolutives. Chaque projet est unique, chaque solution aussi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#devis" className="btn-primary text-base py-4 px-8">
                Décrire mon projet
              </a>
              <span className="inline-flex items-center text-white/60 text-sm gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Devis personnalisé gratuit
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-20 bottom-0 w-2/5">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
            alt="Développement web"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Types de projets</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Quel que soit votre projet
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type) => (
              <div key={type.title} className="card text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-4xl mb-4 block">{type.icon}</span>
                <h3 className="font-title font-semibold text-primary mb-2">{type.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Stack technologique</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Technologies modernes et éprouvées
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              Nous choisissons les outils les plus adaptés à votre projet, pas les plus à la mode.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {stack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2.5 bg-bg-light rounded-xl border border-border-light hover:border-accent transition-colors group">
                <span className="font-semibold text-primary group-hover:text-accent transition-colors text-sm">{tech.name}</span>
                <span className="text-xs text-text-secondary bg-white px-2 py-0.5 rounded-full">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-orange-900/50 text-accent">Notre processus</span>
            <h2 className="font-title text-3xl font-bold text-white mt-4">
              De l&apos;idée à la mise en ligne
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10" />
                )}
                <div className="w-16 h-16 rounded-full bg-accent text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-title font-semibold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Portfolio</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Quelques réalisations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <div key={project.title} className="card p-0 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge text-xs">{project.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-title font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
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
              Parlons de votre projet
            </h2>
            <p className="text-text-secondary">
              Décrivez votre besoin, nous vous contactons sous 24h avec une proposition adaptée.
            </p>
          </div>
          <div className="card">
            <ContactForm defaultSubject="Développement Web" />
          </div>
        </div>
      </section>
    </>
  )
}
