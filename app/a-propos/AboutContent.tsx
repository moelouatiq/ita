'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }

const stats = [
  { target: 6, suffix: '+', label: "Années d'expérience" },
  { target: 150, suffix: '+', label: 'Projets livrés' },
  { target: 80, suffix: '+', label: 'Clients actifs' },
  { target: 98, suffix: '%', label: 'Satisfaction client' },
]

const values = [
  { icon: '🎯', title: 'Rigueur', description: 'Chaque livrable est testé, validé et documenté. Nous ne livrons que ce dont nous sommes fiers.', color: 'from-accent to-orange-700' },
  { icon: '🤝', title: 'Proximité', description: 'Vous avez un interlocuteur dédié, disponible et qui connaît votre projet sur le bout des doigts.', color: 'from-blue-500 to-indigo-700' },
  { icon: '💡', title: 'Innovation', description: 'Nous suivons les évolutions du web pour vous proposer des solutions modernes et pérennes.', color: 'from-violet-500 to-purple-700' },
  { icon: '🌿', title: 'Transparence', description: 'Prix affichés, délais tenus, pas de surprises. Une relation client basée sur la confiance.', color: 'from-emerald-500 to-teal-700' },
]

const team = [
  { name: 'Yassine El Alaoui', role: 'Fondateur & Lead Developer', description: "Expert Next.js, WordPress et intégration emailing. Passionné de performance web et d'UX.", initial: 'Y', color: 'from-blue-500 to-indigo-600' },
  { name: 'Fatima Zahra Bennis', role: 'Designer UI/UX', description: 'Spécialiste design orienté conversion. Crée des interfaces qui séduisent et convertissent.', initial: 'F', color: 'from-accent to-orange-700' },
  { name: 'Mehdi Tazi', role: 'Chef de projet & SEO', description: "Garant de la relation client et de la performance organique. 5 ans d'expérience en SEO technique.", initial: 'M', color: 'from-violet-500 to-purple-700' },
]

export default function AboutContent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative hero-gradient noise overflow-hidden min-h-[65vh] flex items-center pt-20">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blob blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-indigo-500/8 rounded-full blob blur-[60px] pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="absolute top-36 right-[15%] w-12 h-12 border border-white/10 rounded-2xl float-y opacity-30 rotate-12 pointer-events-none" />
        <div className="absolute bottom-32 right-[28%] w-5 h-5 bg-accent/20 rounded-full float-y opacity-60 pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span className="inline-flex items-center gap-2.5 bg-white/6 border border-white/12 text-white/75 text-sm px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                🇲🇦 Agence Digitale — Marrakech · Depuis 2018
              </span>
            </motion.div>

            <h1 className="font-title font-bold leading-[1.02] tracking-tight mb-8">
              {[
                { text: 'Une agence digitale', size: 'text-4xl md:text-5xl lg:text-6xl text-white' },
                { text: 'née à', size: 'text-4xl md:text-5xl lg:text-6xl text-white/60' },
                { text: 'Marrakech.', size: 'text-4xl md:text-5xl lg:text-6xl gradient-text' },
              ].map((line, i) => (
                <motion.div key={i} className={`block ${line.size}`}
                  initial={{ opacity: 0, x: -40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.13, ease: EASE }}
                >
                  {line.text}
                </motion.div>
              ))}
            </h1>

            <motion.p className="text-white/55 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              Fondée il y a plus de 6 ans, ITA Advanced accompagne les entreprises dans leur transformation digitale avec expertise, réactivité et une relation client authentique.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {['6 ans d\'expérience', '+150 projets livrés', '+80 clients', '98% satisfaction'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="relative bg-accent overflow-hidden">
        <div className="shimmer-line absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-10"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="font-title text-5xl md:text-6xl font-bold text-white leading-none">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-white/65 text-sm mt-3 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Équipe ITA Advanced Marrakech" width={600} height={450}
                  className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="glass text-white text-sm font-semibold px-4 py-2 rounded-full">Marrakech, Maroc 🇲🇦</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="badge">Notre parcours</span>
              <h2 className="font-title text-3xl font-bold text-primary mt-4 mb-6">
                6 ans à construire<br />votre présence digitale
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  ITA Advanced a été fondée à Marrakech avec une conviction simple : les entreprises marocaines et francophones méritent des solutions digitales de niveau international, à des tarifs accessibles et avec un service client irréprochable.
                </p>
                <p>
                  Depuis notre création, nous avons accompagné plus de <strong className="text-primary">80 clients</strong> en France, Belgique, Suisse et au Maroc. Chaque projet nous a appris quelque chose de nouveau.
                </p>
                <p>
                  Notre particularité ? Être à la fois proches de nos clients et techniquement très exigeants. Chaque ligne de code, chaque pixel reflète notre engagement pour l&apos;excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Rigueur', 'Proximité', 'Innovation', 'Transparence'].map((v) => (
                  <motion.span key={v}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-orange-50 text-accent text-sm font-semibold rounded-xl border border-orange-100 cursor-default"
                  >
                    {v}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ VALUES — dark ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Nos valeurs</span>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-white">Ce qui nous <span className="gradient-text">définit</span></h2>
          </ScrollReveal>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp}
                whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.3)' }}
                className="group rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-7 cursor-default transition-colors duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="font-title font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="badge">L&apos;équipe</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Des experts passionnés</h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto">Une équipe soudée autour d&apos;un objectif commun : votre succès digital.</p>
          </ScrollReveal>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="card glow-hover text-center relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`} />
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-title font-bold text-2xl mx-auto mb-5 mt-3 shadow-lg`}>
                  {member.initial}
                </div>
                <h3 className="font-title font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA DARK ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl blob pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl blob pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/60 text-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Notre approche client
            </span>
            <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-6">
              Votre succès est notre <span className="gradient-text">portfolio</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Nous ne cherchons pas à accumuler les clients. Nous construisons des relations durables basées sur des résultats concrets. 80% de nos projets viennent de recommandations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-primary btn-pulse text-base py-4 px-9">
                  Démarrer un projet
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-base py-4 px-9"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
