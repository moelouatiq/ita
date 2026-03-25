'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresse', value: 'Marrakech, Maroc 🇲🇦', href: null, color: 'from-accent to-orange-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email', value: 'contact@ita-advanced.ma', href: 'mailto:contact@ita-advanced.ma', color: 'from-blue-500 to-indigo-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'WhatsApp / Téléphone', value: '+212 6XX XXX XXX', href: 'https://wa.me/212600000000', color: 'from-emerald-500 to-green-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Disponibilités', value: 'Lun–Ven, 9h – 18h', href: null, color: 'from-violet-500 to-purple-700',
  },
]

export default function ContactContent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative hero-gradient noise overflow-hidden min-h-[55vh] flex items-center pt-20">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blob blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/5 w-64 h-64 bg-indigo-500/8 rounded-full blob blur-[60px] pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="absolute top-36 right-[22%] w-10 h-10 border border-white/10 rounded-2xl float-y opacity-30 rotate-12 pointer-events-none" />
        <div className="absolute bottom-20 right-[40%] w-5 h-5 bg-accent/25 rounded-full float-y opacity-50 pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="inline-flex items-center gap-2.5 bg-white/6 border border-white/12 text-white/75 text-sm px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Contactez-nous — Réponse sous 24h
            </span>
          </motion.div>

          <h1 className="font-title font-bold leading-[1.02] tracking-tight mb-8 flex flex-col items-center">
            {[
              { text: 'Parlons de', size: 'text-4xl md:text-5xl lg:text-6xl text-white' },
              { text: 'votre projet.', size: 'text-4xl md:text-5xl lg:text-6xl gradient-text' },
            ].map((line, i) => (
              <motion.span key={i} className={`block ${line.size}`}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: EASE }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Devis gratuit, sans engagement. Remplissez le formulaire ou écrivez-nous directement sur WhatsApp.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="section-padding bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] blob pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[80px] blob pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <ScrollReveal>
                <h2 className="font-title text-2xl font-bold text-white mb-2">Nos coordonnées</h2>
                <p className="text-white/45 mb-6">WhatsApp est idéal pour une réponse rapide.</p>
              </ScrollReveal>

              <motion.div className="space-y-4"
                variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {contactInfo.map((item) => (
                  <motion.div key={item.label} variants={fadeUp}
                    whileHover={{ y: -3, borderColor: 'rgba(249,115,22,0.3)' }}
                    className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/8 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/35 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          className="font-semibold text-white hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <ScrollReveal delay={0.4}>
                <motion.a
                  href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 w-full justify-center"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Écrire sur WhatsApp
                </motion.a>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="glass rounded-2xl p-6 border border-white/8">
                  <p className="font-title font-semibold text-white mb-4">Nos engagements</p>
                  <ul className="space-y-3">
                    {['Réponse sous 24h garantie', 'Devis détaillé et gratuit', 'Sans engagement de votre part', 'Confidentialité de vos données'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/55 text-sm">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/8">
                <h2 className="font-title text-2xl font-bold text-white mb-2">Envoyez-nous un message</h2>
                <p className="text-white/45 mb-8 text-sm">Décrivez votre projet, nous revenons vers vous avec une proposition personnalisée.</p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
