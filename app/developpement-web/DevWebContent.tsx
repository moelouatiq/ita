'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }

const projectTypes = [
  { num: '01', icon: '🏢', title: 'Sites vitrines', description: 'Présence en ligne professionnelle et performante pour votre activité.', gradient: 'from-violet-600 to-purple-800', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', tags: ['Next.js', 'WordPress', 'SEO'] },
  { num: '02', icon: '🛒', title: 'E-commerce', description: 'Boutiques en ligne complètes, gestion des stocks, paiement sécurisé.', gradient: 'from-accent to-orange-700', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80', tags: ['WooCommerce', 'Stripe', 'Shopify'] },
  { num: '03', icon: '🔧', title: 'Applications métier', description: 'Outils sur mesure pour automatiser vos processus internes.', gradient: 'from-blue-600 to-indigo-700', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', tags: ['React', 'Node.js', 'API'] },
  { num: '04', icon: '🌐', title: 'Portails & plateformes', description: 'Espaces membres, portails B2B, marketplace et solutions multi-utilisateurs.', gradient: 'from-emerald-600 to-teal-700', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', tags: ['Laravel', 'Auth', 'Multi-user'] },
]

const stack = [
  { name: 'Next.js', category: 'Frontend' }, { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Langage' }, { name: 'Tailwind CSS', category: 'UI' },
  { name: 'WordPress', category: 'CMS' }, { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Laravel', category: 'Backend' }, { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Base de données' }, { name: 'Vercel', category: 'Hébergement' },
  { name: 'Stripe', category: 'Paiement' }, { name: 'Figma', category: 'Design' },
]

const steps = [
  { number: '01', title: 'Analyse', description: 'Audit de vos besoins, objectifs et contraintes techniques.' },
  { number: '02', title: 'Conception', description: 'Architecture, wireframes et choix technologiques validés.' },
  { number: '03', title: 'Développement', description: 'Intégration et développement agile avec points réguliers.' },
  { number: '04', title: 'Recette', description: 'Tests fonctionnels, QA et corrections avant lancement.' },
  { number: '05', title: 'Livraison', description: 'Mise en production, documentation et formation si nécessaire.' },
]

const portfolioWP = [
  { title: 'Maison Montfort', description: 'Site vitrine institutionnel pour cette maison d\'accueil et retraites spirituelles.', url: 'https://www.maisonmontfort.com/', tag: 'Site vitrine', color: 'from-accent to-orange-700' },
  { title: 'Info Endométriose', description: 'Portail d\'information médicale sur l\'endométriose — contenu, témoignages, ressources.', url: 'https://www.info-endometriose.fr/', tag: 'Santé · Associatif', color: 'from-rose-500 to-pink-700' },
  { title: 'Paytrip', description: 'Plateforme de paiement en ligne pour agences de voyage — interface B2B complète.', url: 'http://www.paytrip.fr/', tag: 'Fintech · Voyages', color: 'from-blue-500 to-indigo-700' },
  { title: 'Gabarroca', description: 'Site e-commerce pour artisan vigneron — boutique, histoire de domaine, réservations.', url: 'https://gabarroca.fr/', tag: 'E-commerce · Vins', color: 'from-amber-600 to-orange-700' },
  { title: 'The Barber Company', description: 'Site vitrine et prise de rendez-vous en ligne pour réseau de barbershops.', url: 'https://thebarbercompany.fr/', tag: 'Services · Beauté', color: 'from-slate-600 to-gray-800' },
  { title: 'RH CD Consulting', description: 'Site corporate pour cabinet de conseil RH — blog, espace client, formulaires.', url: 'https://www.rh-cdconsulting.fr/', tag: 'Consulting · RH', color: 'from-violet-500 to-purple-700' },
]

const portfolioERP = [
  { title: 'DocatWeb', description: 'Application web de gestion documentaire et de workflow pour entreprises.', url: 'https://docatweb.fr/', tag: 'Application · SaaS', color: 'from-blue-600 to-indigo-700' },
  { title: 'Ribanjou', description: 'Plateforme e-commerce spécialisée en produits artisanaux et circuits courts.', url: 'https://www.ribanjou.com/', tag: 'E-commerce', color: 'from-emerald-500 to-teal-700' },
  { title: 'Kitchen Diet', description: 'Site e-commerce livraison de repas diététiques — commandes récurrentes, abonnements.', url: 'https://www.kitchendiet.fr/', tag: 'Food · E-commerce', color: 'from-orange-500 to-red-600' },
  { title: 'Dietbon', description: 'E-commerce de programmes nutritionnels personnalisés avec espace membres.', url: 'https://www.dietbon.fr/', tag: 'Nutrition · E-commerce', color: 'from-amber-500 to-orange-700' },
  { title: 'The Good Kitchen', description: 'Plateforme de livraison de repas gastronomiques — interface client et back-office.', url: 'https://www.thegoodkitchen.com/', tag: 'Restauration · Tech', color: 'from-rose-500 to-pink-700' },
]

export default function DevWebContent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative hero-gradient noise overflow-hidden min-h-[75vh] flex items-center pt-20">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/12 rounded-full blob blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-blue-500/8 rounded-full blob blur-[60px] pointer-events-none" style={{ animationDelay: '7s' }} />
        <div className="absolute top-36 right-[18%] w-14 h-14 border border-violet-400/20 rounded-2xl float-y opacity-40 rotate-12 pointer-events-none" />
        <div className="absolute bottom-40 right-[32%] w-6 h-6 bg-violet-400/20 rounded-full float-y opacity-60 pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-2.5 bg-violet-500/12 border border-violet-400/20 text-violet-300 text-sm px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  Développement Web Sur Mesure
                </span>
              </motion.div>

              <h1 className="font-title font-bold leading-[1.02] tracking-tight mb-8">
                {[
                  { text: 'Des solutions web', size: 'text-4xl md:text-5xl lg:text-6xl text-white' },
                  { text: 'taillées pour', size: 'text-4xl md:text-5xl lg:text-6xl text-white/60' },
                  { text: 'vos besoins.', size: 'text-4xl md:text-5xl lg:text-6xl gradient-text' },
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

              <motion.p className="text-white/55 text-lg leading-relaxed mb-12 max-w-lg"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                Sites vitrines, e-commerce, applications métier. Nous construisons des solutions digitales robustes, performantes et évolutives sur mesure.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="#devis" className="btn-primary btn-pulse text-base py-4 px-9">
                    Décrire mon projet
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
              </motion.div>

              <motion.div className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {['Devis gratuit', 'Stack moderne', 'Livraison garantie', 'Support inclus'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-white/40 text-sm">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                  alt="Développement web" width={600} height={450} className="w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-3">
                    {['React', 'Next.js', 'TypeScript'].map((tech) => (
                      <span key={tech} className="glass text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        >
          <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
            <motion.div className="w-1 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══ PROJECT TYPES — dark cards ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Types de projets</span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight">
                Quel que soit<br />
                <span className="gradient-text">votre projet</span>
              </h2>
            </div>
            <p className="text-white/40 text-base max-w-xs leading-relaxed">
              Du simple site vitrine à la plateforme complexe, nous livrons des solutions robustes.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {projectTypes.map((type, i) => (
              <ScrollReveal key={type.num} delay={i * 0.1}>
                <motion.div
                  className="group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden cursor-default"
                  whileHover={{ borderColor: 'rgba(249,115,22,0.3)', backgroundColor: 'rgba(255,255,255,0.06)' }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image src={type.image} alt={type.title} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-primary/85" />
                  </div>

                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-7 md:p-10">
                    <span className="font-title text-6xl font-bold text-white/8 group-hover:text-accent/20 transition-colors leading-none flex-shrink-0 select-none">{type.num}</span>
                    <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        {type.icon}
                      </div>
                      <h3 className="font-title text-xl font-bold text-white">{type.title}</h3>
                    </div>
                    <p className="text-white/45 group-hover:text-white/70 transition-colors leading-relaxed flex-1">{type.description}</p>
                    <div className="flex gap-2 flex-wrap flex-shrink-0">
                      {type.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/35 border border-white/12 px-2.5 py-1 rounded-full group-hover:border-accent/30 group-hover:text-accent/70 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="badge">Stack technologique</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Technologies modernes et éprouvées</h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">Nous choisissons les outils les plus adaptés à votre projet pour une solution durable.</p>
          </ScrollReveal>
          <motion.div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {stack.map((tech) => (
              <motion.div key={tech.name} variants={fadeUp}
                whileHover={{ scale: 1.07, y: -3 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 hover:border-accent hover:shadow-md transition-all duration-200 cursor-default group"
              >
                <span className="font-semibold text-primary group-hover:text-accent transition-colors text-sm">{tech.name}</span>
                <span className="text-xs text-text-secondary bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">{tech.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS — dark ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Notre processus</span>
            <h2 className="font-title text-3xl font-bold text-white">De l&apos;idée à la mise en ligne</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/8" />
                )}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="font-title font-semibold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO WORDPRESS ══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="badge">Projets WordPress</span>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Sites & e-commerces livrés</h2>
            </div>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">Des solutions sur mesure déployées pour des clients en France et au Maroc.</p>
          </ScrollReveal>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            {portfolioWP.map((project) => (
              <motion.a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer"
                variants={fadeUp} whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="group card p-0 overflow-hidden block"
              >
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-title font-bold text-primary">{project.title}</h3>
                    <svg className="w-4 h-4 text-text-secondary group-hover:text-accent flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
                  <span className="inline-block bg-orange-50 text-accent text-xs font-semibold px-3 py-1 rounded-full">{project.tag}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PORTFOLIO ERP ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">ERP & Frameworks</span>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-white">Applications <span className="gradient-text">sur mesure</span></h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">Plateformes complexes, logique métier avancée, intégrations API.</p>
          </ScrollReveal>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {portfolioERP.map((project) => (
              <motion.a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer"
                variants={fadeUp} whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.35)' }}
                className="group relative rounded-2xl border border-white/10 bg-white/4 p-6 transition-colors duration-300 block"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color} rounded-t-2xl`} />
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-title font-bold text-white">{project.title}</h3>
                  <svg className="w-4 h-4 text-white/25 group-hover:text-accent flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-white/45 text-sm leading-relaxed mb-4 group-hover:text-white/65 transition-colors">{project.description}</p>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white/90`}>{project.tag}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA DARK + FORM ══ */}
      <section id="devis" className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[100px] blob pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/6 rounded-full blur-[80px] blob pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/60 text-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Démarrer votre projet web
              </span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Décrivez votre projet, <span className="gradient-text">on s&apos;en occupe</span>.
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10">
                Devis personnalisé gratuit. Nous analysons votre besoin et vous proposons la solution technique la plus adaptée.
              </p>
              <div className="space-y-4 mb-10">
                {['Devis personnalisé sous 24h', 'Stack moderne et pérenne', 'Livraison et support inclus'].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-white/60">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-white/8 flex items-center gap-4">
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp direct
                </a>
                <span className="text-white/25 text-sm">ou remplissez le formulaire →</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="glass rounded-3xl p-8 md:p-10">
                <h3 className="font-title text-xl font-bold text-white mb-6">Décrivez votre projet</h3>
                <ContactForm compact defaultSubject="Développement Web" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
