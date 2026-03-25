'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import VideoModal from '@/components/VideoModal'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}


const services = [
  {
    num: '01',
    icon: '✉️',
    title: 'Intégration Emailing',
    description: 'Templates HTML responsive compatibles tous clients mail. De la conception à la livraison sur votre plateforme en 2 à 5 jours.',
    price: 'À partir de 190 €',
    href: '/emailing',
    gradient: 'from-blue-600 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    tags: ['Mailchimp', 'Brevo', 'Klaviyo', 'HTML/CSS'],
  },
  {
    num: '02',
    icon: '🖥️',
    title: 'Création Landing Pages',
    description: 'Pages d\'atterrissage pensées pour convertir. Design sur mesure, SEO on-page, formulaires optimisés pour vos campagnes pub.',
    price: 'À partir de 220 € / jour',
    href: '/landing-page',
    gradient: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['CRO', 'SEO', 'A/B Testing', 'Mobile First'],
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce, applications métier. Solutions robustes et évolutives adaptées à chaque besoin.',
    price: 'Sur devis',
    href: '/developpement-web',
    gradient: 'from-violet-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    tags: ['Next.js', 'WordPress', 'Laravel', 'React'],
  },
]

const stats = [
  { target: 6,   suffix: '+', label: "Années d'expérience" },
  { target: 150, suffix: '+', label: 'Projets livrés' },
  { target: 80,  suffix: '+', label: 'Clients actifs' },
  { target: 98,  suffix: '%', label: 'Satisfaction client' },
]

const testimonials = [
  {
    name: 'Sophie Martin', role: 'Dir. Marketing · E-Shop Paris',
    content: "Newsletters livrées en 3 jours, rendu impeccable sur tous les clients mail. Nos taux d'ouverture ont bondi de 28%.",
    avatar: 'S', color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Karim Benali', role: 'Fondateur · Immo Marrakech',
    content: "La landing page a généré 3× plus de leads dès le premier mois. Un ROI exceptionnel et une équipe très réactive.",
    avatar: 'K', color: 'from-accent to-orange-700',
  },
  {
    name: 'Marie Dubois', role: 'CEO · SaaS Lyon',
    content: "Livraison en avance, code propre, communication parfaite. ITA Advanced est devenu notre partenaire digital de confiance.",
    avatar: 'M', color: 'from-violet-500 to-purple-700',
  },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — full screen avec mesh animé
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative hero-gradient noise overflow-hidden min-h-screen flex items-center pt-20">

        {/* Blobs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blob blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/5  w-80 h-80 bg-indigo-500/8 rounded-full blob blur-[60px] pointer-events-none" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/2 right-[5%]  w-56 h-56 bg-violet-500/8 rounded-full blob blur-[50px] pointer-events-none" style={{ animationDelay: '10s' }} />

        {/* Floating geometric shapes */}
        <div className="absolute top-28 right-[18%]  w-14 h-14 border border-accent/20   rounded-2xl float-y opacity-40 rotate-12 pointer-events-none" />
        <div className="absolute top-56 right-[38%]  w-6  h-6  bg-accent/25             rounded-full float-y opacity-70 pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-44 right-[28%] w-10 h-10 border border-white/10 rounded-full float-x opacity-25 pointer-events-none" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-56 left-[8%]  w-20 h-20 border-2 border-accent/12 rounded-3xl float-y opacity-20 -rotate-6 pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="absolute top-40  left-[30%]  w-3  h-3  bg-white/20             rounded-full float-y opacity-60 pointer-events-none" style={{ animationDelay: '3s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

        {/* Content */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2.5 bg-white/6 border border-white/12 text-white/75 text-sm px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                🇲🇦 Agence Digitale — Marrakech · 6 ans d&apos;expérience
              </span>
            </motion.div>

            {/* Main headline — character by character */}
            <h1 className="font-title font-bold leading-[1.02] tracking-tight mb-8">
              {[
                { text: 'Votre présence', size: 'text-5xl md:text-6xl lg:text-7xl text-white' },
                { text: 'digitale,',      size: 'text-5xl md:text-6xl lg:text-7xl text-white/60' },
                { text: 'notre',          size: 'text-5xl md:text-6xl lg:text-7xl text-white' },
                { text: 'expertise.',     size: 'text-5xl md:text-6xl lg:text-7xl gradient-text' },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  className={`block ${line.size}`}
                  initial={{ opacity: 0, x: -40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.13, ease: EASE }}
                >
                  {line.text}
                </motion.div>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              className="text-white/55 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              Emailing professionnel, landing pages qui convertissent et développement web sur mesure.
              Plus de <strong className="text-white/85 font-semibold">6 ans d&apos;expérience</strong> pour accélérer votre croissance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-primary btn-pulse text-base py-4 px-9">
                  Obtenir un devis gratuit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.a
                href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-base py-4 px-9"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.6 }}
            >
              {['Réponse sous 24h', 'Devis gratuit', 'Sans engagement', '+150 projets livrés'].map((t) => (
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

        {/* Scroll mouse */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        >
          <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-medium">Défiler</span>
          <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — compteurs animés
      ══════════════════════════════════════════════ */}
      <section className="relative bg-accent overflow-hidden">
        <div className="shimmer-line absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
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

      {/* ══════════════════════════════════════════════
          SERVICES — cartes large format
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block bg-white/8 border border-white/12 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Nos prestations
              </span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight">
                Ce que nous <br />
                <span className="gradient-text">faisons très bien</span>
              </h2>
            </div>
            <p className="text-white/40 text-base max-w-xs leading-relaxed">
              Chaque prestation est conçue pour générer des résultats concrets et mesurables.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <Link href={s.href}>
                  <motion.div
                    className="group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden cursor-pointer"
                    whileHover={{ borderColor: 'rgba(249,115,22,0.3)', backgroundColor: 'rgba(255,255,255,0.06)' }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Hover image reveal */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image src={s.image} alt={s.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-primary/85" />
                    </div>

                    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-7 md:p-10">
                      {/* Number */}
                      <span className="font-title text-6xl font-bold text-white/8 group-hover:text-accent/20 transition-colors leading-none flex-shrink-0 select-none">
                        {s.num}
                      </span>

                      {/* Icon + title */}
                      <div className="flex items-center gap-4 md:w-72 flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                          {s.icon}
                        </div>
                        <h3 className="font-title text-xl font-bold text-white">{s.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/45 group-hover:text-white/70 transition-colors leading-relaxed flex-1">
                        {s.description}
                      </p>

                      {/* Tags + price */}
                      <div className="flex flex-col items-end gap-3 flex-shrink-0 ml-auto">
                        <div className="flex gap-2 flex-wrap justify-end">
                          {s.tags.map((tag) => (
                            <span key={tag} className="text-xs text-white/35 border border-white/12 px-2.5 py-1 rounded-full group-hover:border-accent/30 group-hover:text-accent/70 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="font-bold text-accent text-base whitespace-nowrap">{s.price}</span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all flex-shrink-0"
                        whileHover={{ x: 3 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VIDEO SHOWREEL
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="badge mb-4">Notre approche</span>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
                Nous créons des expériences digitales qui{' '}
                <span className="gradient-text">génèrent des résultats</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                Chaque projet commence par une analyse approfondie de vos objectifs. Design, technique et stratégie sont alignés pour maximiser votre ROI.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '⚡', text: 'Livraison rapide et délais respectés' },
                  { icon: '📐', text: 'Design sur mesure aligné à votre marque' },
                  { icon: '📈', text: 'Performance mesurable et optimisée' },
                  { icon: '🤝', text: 'Accompagnement post-livraison inclus' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">{item.icon}</span>
                    <span className="text-text-dark font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <VideoModal
                videoId="dQw4w9WgXcQ"
                thumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
                label="Voir notre approche en vidéo"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — cards avec accent colors
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="badge">Témoignages</span>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mt-4">
              Ils ont fait confiance à<br />
              <span className="gradient-text">ITA Advanced</span>
            </h2>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="card glow-hover relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />

                {/* Stars */}
                <div className="flex gap-1 mb-5 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg
                      key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <p className="text-text-dark leading-relaxed mb-6 italic text-[0.95rem]">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{t.name}</p>
                    <p className="text-text-secondary text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA FINAL — dark + form
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] blob pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/6 rounded-full blur-[80px] blob pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/60 text-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Parlons de votre projet
              </span>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Prêt à passer à la <span className="gradient-text">vitesse supérieure</span> ?
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10">
                Devis personnalisé en moins de 24h. Pas de jargon, pas de surprise. Juste des résultats.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  { icon: '🎯', label: 'Devis personnalisé sous 24h' },
                  { icon: '💬', label: 'Appel découverte gratuit disponible' },
                  { icon: '🔒', label: 'Confidentialité de vos données garantie' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 text-white/60">
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-sm">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="mt-10 pt-10 border-t border-white/8 flex items-center gap-4">
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
                <h3 className="font-title text-xl font-bold text-white mb-6">Envoyer un message</h3>
                <ContactForm compact />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
