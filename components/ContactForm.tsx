'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ContactFormProps {
  defaultSubject?: string
  compact?: boolean
}

export default function ContactForm({ defaultSubject = '', compact = false }: ContactFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
  })

  const subjects = [
    'Intégration Emailing',
    'Création Landing Page',
    'Développement Web',
    'Autre',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Integrate with email service (Resend, Nodemailer, etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    router.push('/merci')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5">
            Nom & Prénom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white text-text-dark placeholder-text-secondary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jean@entreprise.com"
            className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white text-text-dark placeholder-text-secondary"
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1.5">
            Téléphone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+212 6XX XXX XXX"
            className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white text-text-dark placeholder-text-secondary"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-1.5">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white text-text-dark"
          >
            <option value="">Choisir un sujet</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet en quelques lignes…"
            className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white text-text-dark placeholder-text-secondary resize-none"
          />
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer ma demande
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
        <p className="text-center text-xs text-text-secondary mt-3">
          Réponse sous 24h — Devis gratuit — Sans engagement
        </p>
      </div>
    </form>
  )
}
