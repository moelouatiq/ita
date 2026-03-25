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

const includes = [
  { icon: '🎨', title: 'Design sur mesure', description: 'Interface unique à votre marque, moderne et orientée conversion.', color: 'from-accent to-orange-700' },
  { icon: '📱', title: '100% Responsive', description: 'Expérience parfaite sur mobile, tablette et desktop.', color: 'from-blue-500 to-indigo-700' },
  { icon: '🔍', title: 'SEO on-page', description: 'Balises title, meta, Hn, images alt — tout est optimisé pour Google.', color: 'from-emerald-500 to-teal-700' },
  { icon: '📈', title: 'Optimisation CRO', description: 'Hiérarchie visuelle, CTA, social proof — chaque élément booste la conversion.', color: 'from-violet-500 to-purple-700' },
  { icon: '📋', title: 'Formulaire de conversion', description: 'Formulaire intégré connecté à votre CRM ou outil préféré.', color: 'from-sky-500 to-blue-700' },
  { icon: '⚡', title: 'Performance > 90', description: 'Lighthouse > 90, temps de chargement < 2 secondes.', color: 'from-amber-500 to-orange-700' },
]

const sectors = [
  'E-commerce', 'Immobilier', 'Événementiel', 'Formation', 'Services B2B',
  'SaaS', 'Santé & Bien-être', 'Restauration', 'Finance', 'Mode & Beauté',
]

const steps = [
  { number: '01', title: 'Brief', description: 'Analyse de votre objectif, cible et marché.' },
  { number: '02', title: 'Wireframe', description: 'Structure validée ensemble avant le design.' },
  { number: '03', title: 'Design', description: 'Maquette fidèle à votre identité de marque.' },
  { number: '04', title: 'Développement', description: 'Intégration responsive sur votre CMS.' },
  { number: '05', title: 'Livraison', description: 'QA, corrections, mise en ligne finale.' },
]

const portfolio = [
  { title: 'Fondation ARC', desc: 'Campagne de dons contre le cancer — page de collecte optimisée.', url: 'https://luttecontrelecancer.fondation-arc.org/', tag: 'Association · Santé', color: 'from-rose-500 to-pink-700' },
  { title: 'UNICEF France', desc: "Landing page campagne Eau 2023 — collecte de dons internationale.", url: 'http://dev.hopening.fr/2023/unicef/eau23', tag: 'ONG · Humanitaire', color: 'from-blue-500 to-indigo-700' },
  { title: 'Chiens Guides IDF', desc: 'Page de collecte de fonds pour l\'accompagnement des personnes aveugles.', url: 'https://www.agir.chiens-guides-idf.fr/', tag: 'Association · Handicap', color: 'from-amber-500 to-orange-700' },
  { title: 'Hopening', desc: 'Landing page "Bien Rentrer" — campagne événementielle à fort taux de conversion.', url: 'https://dev2.hopening.fr/2022/apr/lp-bien-rentrer/', tag: 'Événementiel', color: 'from-violet-500 to-purple-700' },
  { title: "Œuvre d'Orient", desc: 'Campagne Carême — page de don avec formulaire de collecte intégré.', url: 'https://careme.oeuvre-orient.fr/', tag: 'Association · Humanitaire', color: 'from-emerald-500 to-teal-700' },
]

const faqs = [
  { q: 'Quel est le délai de livraison d\'une landing page ?', a: 'En général 5 à 10 jours ouvrés selon la complexité. Un délai express est possible sur demande.' },
  { q: 'Qui s\'occupe de l\'hébergement ?', a: 'Vous pouvez héberger la page chez votre hébergeur existant. Nous pouvons aussi recommander des solutions adaptées.' },
  { q: 'Combien de révisions sont incluses ?', a: '2 tours de révision graphique et 1 tour de révision technique sont inclus dans chaque prestation.' },
  { q: 'Proposez-vous l\'A/B testing ?', a: 'Oui, nous pouvons créer 2 versions d\'une page pour tester différentes approches. Un forfait spécifique s\'applique.' },
  { q: 'Peut-on connecter la page à un CRM ?', a: 'Absolument. Nous connectons les formulaires à HubSpot, Salesforce, Pipedrive, Mailchimp, Brevo ou via Zapier/Make.' },
]

export default function LandingPageContent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative hero-gradient noise overflow-hidden min-h-[75vh] flex items-center pt-20">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-accent/12 rounded-full blob blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-violet-500/8 rounded-full blob blur-[60px] pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute top-36 right-[20%] w-14 h-14 border border-accent/25 rounded-2xl float-y opacity-40 rotate-12 pointer-events-none" />
        <div className="absolute bottom-32 right-[10%] w-8 h-8 bg-accent/20 rounded-full float-y opacity-50 pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute top-48 left-[25%] w-4 h-4 bg-white/15 rounded-full float-y opacity-50 pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span className="inline-flex items-center gap-2.5 bg-orange-500/12 border border-orange-400/20 text-orange-300 text-sm px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Création Landing Pages — À partir de 220 € / jour
              </span>
            </motion.div>

            <h1 className="font-title font-bold leading-[1.02] tracking-tight mb-8">
              {[
                { text: 'Des landing pages qui', size: 'text-4xl md:text-5xl lg:text-6xl text-white' },
                { text: 'convertissent vos', size: 'text-4xl md:text-5xl lg:text-6xl text-white/60' },
                { text: 'visiteurs en clients.', size: 'text-4xl md:text-5xl lg:text-6xl gradient-text' },
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
              Pages d&apos;atterrissage pensées pour la conversion. Design sur mesure, SEO on-page,
              formulaires optimisés. Prêtes pour vos campagnes Google Ads et Meta Ads.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="#devis" className="btn-primary btn-pulse text-base py-4 px-9">
                  Demander un devis
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
              {['Livraison 5–10 jours', 'Mobile-first', 'SEO intégré', 'Lighthouse > 90'].map((t) => (
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

      {/* ══ PRICE BAND ══ */}
      <section className="relative bg-accent overflow-hidden">
        <div className="shimmer-line absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-1">Création Landing Page</p>
              <p className="font-title font-bold text-white text-2xl">À partir de <span className="text-4xl">220 €</span> / jour de travail</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 justify-center">
              {['Design sur mesure', 'SEO on-page', 'CRO optimisé', 'Responsive'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  {f}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="#devis" className="btn-outline whitespace-nowrap">Obtenir un devis</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ INCLUDES — dark cards ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Ce qui est inclus</span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight">
                Une page qui travaille<br />
                <span className="gradient-text">pour vous 24h/24</span>
              </h2>
            </div>
            <p className="text-white/40 text-base max-w-xs leading-relaxed">
              Chaque élément est pensé pour maximiser votre taux de conversion.
            </p>
          </ScrollReveal>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            {includes.map((item) => (
              <motion.div key={item.title} variants={fadeUp}
                whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.3)' }}
                className="group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-7 cursor-default transition-colors duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-title font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Portfolio références */}
          <div className="mt-16">
            <ScrollReveal className="mb-8">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Quelques réalisations</p>
            </ScrollReveal>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {portfolio.map((p) => (
                <motion.a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" variants={fadeUp}
                  whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.35)' }}
                  className="group relative rounded-2xl border border-white/10 bg-white/4 p-6 transition-colors duration-300"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color} rounded-t-2xl`} />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-title font-bold text-white text-base leading-tight">{p.title}</h3>
                    <svg className="w-4 h-4 text-white/25 group-hover:text-accent flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-4 group-hover:text-white/60 transition-colors">{p.desc}</p>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white/90`}>{p.tag}</span>
                </motion.a>
              ))}
              {/* Dernier card CTA */}
              <motion.div variants={fadeUp}
                className="rounded-2xl border border-accent/20 bg-accent/6 p-6 flex flex-col items-center justify-center text-center gap-3"
              >
                <p className="text-white/60 text-sm">Et bien d&apos;autres projets…</p>
                <a href="#devis" className="text-accent text-sm font-semibold hover:underline">Obtenir un devis →</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="badge">Notre processus</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">Du brief à la mise en ligne</h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto">Un processus éprouvé en 5 étapes pour des résultats prévisibles.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
                )}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-700 text-white font-title font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="font-title font-semibold text-primary mb-2 text-sm">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORS ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl blob pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Secteurs d&apos;activité</span>
            <h2 className="font-title text-3xl font-bold text-white">Nous travaillons dans tous les secteurs</h2>
          </ScrollReveal>
          <motion.div className="flex flex-wrap gap-3 justify-center"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {sectors.map((sector) => (
              <motion.span key={sector} variants={fadeUp}
                whileHover={{ scale: 1.07, borderColor: 'rgba(249,115,22,0.5)', color: 'rgb(249,115,22)' }}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/70 transition-all duration-200 text-sm cursor-default bg-white/4"
              >
                {sector}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="section-padding bg-white">
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

      {/* ══ CTA DARK + FORM ══ */}
      <section id="devis" className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] blob pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/6 rounded-full blur-[80px] blob pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/60 text-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Lancer votre landing page
              </span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Prêt à <span className="gradient-text">multiplier vos conversions</span> ?
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10">
                Devis personnalisé en moins de 24h. Nous analysons votre cible et vos objectifs pour créer une page qui convertit vraiment.
              </p>
              <div className="space-y-4 mb-10">
                {['Devis personnalisé sous 24h', 'Design orienté conversion', 'SEO & performance intégrés'].map((b) => (
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
                <h3 className="font-title text-xl font-bold text-white mb-6">Demande de devis landing page</h3>
                <ContactForm compact defaultSubject="Création Landing Page" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
