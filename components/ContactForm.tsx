'use client'

import { useId, useState } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'

interface ContactFormProps {
  defaultSubject?: string
  compact?: boolean
}

export default function ContactForm({ defaultSubject = '', compact = false }: ContactFormProps) {
  const router = useRouter()
  const formId = useId()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
    website: '',
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
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({})) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'L’envoi a échoué. Merci de réessayer.')
      }

      router.push('/merci')
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'L’envoi a échoué. Merci de réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputClassName = 'min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-dark placeholder-slate-500 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
  const labelClassName = 'mb-1.5 block text-sm font-semibold text-white'
  const fieldId = (name: string) => `${formId}-${name}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor={fieldId('name')} className={labelClassName}>
            Nom & Prénom *
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor={fieldId('email')} className={labelClassName}>
            Email *
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean@entreprise.com"
            className={inputClassName}
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor={fieldId('phone')} className={labelClassName}>
            Téléphone / WhatsApp
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Votre numéro (facultatif)"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor={fieldId('subject')} className={labelClassName}>
            Sujet *
          </label>
          <select
            id={fieldId('subject')}
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={inputClassName}
          >
            <option value="">Choisir un sujet</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('message')} className={labelClassName}>
          Décrivez votre projet *
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={compact ? 4 : 5}
          required
          maxLength={4000}
          value={form.message}
          onChange={handleChange}
          placeholder="Objectifs, délais et besoins principaux…"
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={fieldId('website')}>Site internet</label>
        <input
          id={fieldId('website')}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      {error && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {error}{' '}
          <a className="underline underline-offset-2" href={`mailto:${siteConfig.contact.email}`}>Nous écrire par e-mail</a>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full btn-primary justify-center py-4 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
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
        <p className="mt-3 text-center text-xs font-medium text-white/75">
          Réponse sous 24h — Devis gratuit — Sans engagement
        </p>
      </div>
    </form>
  )
}
