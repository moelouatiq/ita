import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez ITA Advanced, agence digitale basée à Marrakech depuis plus de 6 ans. Notre histoire, nos valeurs et notre équipe.',
}

const values = [
  {
    icon: '🎯',
    title: 'Rigueur',
    description: 'Chaque livrable est testé, validé et documenté. Nous ne livrons que ce dont nous sommes fiers.',
  },
  {
    icon: '🤝',
    title: 'Proximité',
    description: 'Vous avez un interlocuteur dédié, disponible et qui connaît votre projet sur le bout des doigts.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Nous suivons les évolutions du web pour vous proposer des solutions modernes et pérennes.',
  },
  {
    icon: '🌿',
    title: 'Transparence',
    description: 'Prix affichés, délais tenus, pas de surprises. Une relation client basée sur la confiance.',
  },
]

const team = [
  {
    name: 'Yassine El Alaoui',
    role: 'Fondateur & Lead Developer',
    description: 'Expert Next.js, WordPress et intégration emailing. Passionné de performance web et d\'expérience utilisateur.',
    initial: 'Y',
  },
  {
    name: 'Fatima Zahra Bennis',
    role: 'Designer UI/UX',
    description: 'Spécialiste design orienté conversion. Crée des interfaces qui séduisent et convertissent.',
    initial: 'F',
  },
  {
    name: 'Mehdi Tazi',
    role: 'Chef de projet & SEO',
    description: 'Garant de la relation client et de la performance organique. 5 ans d\'expérience en SEO technique.',
    initial: 'M',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="badge bg-orange-900/50 text-accent mb-6 inline-block">
              Notre histoire
            </span>
            <h1 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Une agence digitale née à{' '}
              <span className="text-accent">Marrakech</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Fondée il y a plus de 6 ans, ITA Advanced accompagne les entreprises dans leur transformation digitale
              avec expertise, réactivité et une relation client authentique.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Équipe ITA Advanced Marrakech"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <span className="badge">Notre parcours</span>
              <h2 className="font-title text-3xl font-bold text-primary mt-4 mb-6">
                6 ans à construire votre présence digitale
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  ITA Advanced a été fondée à Marrakech avec une conviction simple : les entreprises marocaines
                  et francophones méritent des solutions digitales de niveau international, à des tarifs accessibles
                  et avec un service client irréprochable.
                </p>
                <p>
                  Depuis notre création, nous avons accompagné plus de <strong className="text-primary">80 clients</strong> en France,
                  Belgique, Suisse et au Maroc. Chaque projet nous a appris quelque chose de nouveau et renforcé
                  notre approche : écouter, proposer, livrer, améliorer.
                </p>
                <p>
                  Notre particularité ? Être à la fois proches de nos clients et techniquement très exigeants.
                  Chaque ligne de code, chaque pixel, chaque email intégré reflète notre engagement pour l&apos;excellence.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '6+', label: 'Ans d\'exp.' },
                  { value: '150+', label: 'Projets' },
                  { value: '80+', label: 'Clients' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-title font-bold text-3xl text-accent">{s.value}</p>
                    <p className="text-text-secondary text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">Nos valeurs</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Ce qui nous définit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-title font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge">L&apos;équipe</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Des experts passionnés
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-orange-700 flex items-center justify-center text-white font-title font-bold text-2xl mx-auto mb-5 shadow-lg">
                  {member.initial}
                </div>
                <h3 className="font-title font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-orange-900/50 text-accent">Notre approche client</span>
          <h2 className="font-title text-3xl font-bold text-white mt-4 mb-6">
            Votre succès est notre portfolio
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Nous ne cherchons pas à accumuler les clients. Nous cherchons à construire des relations durables
            basées sur des résultats concrets. C&apos;est pourquoi 80% de nos projets viennent de recommandations.
          </p>
          <Link href="/contact" className="btn-primary text-base py-4 px-8 inline-flex">
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  )
}
