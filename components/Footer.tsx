import Link from 'next/link'
import Image from 'next/image'
import WhatsAppLink from '@/components/WhatsAppLink'
import { siteConfig } from '@/config/site'

const services = [
  { href: '/emailing', label: 'Intégration Emailing' },
  { href: '/landing-page', label: 'Création Landing Pages' },
  { href: '/developpement-web', label: 'Développement Web' },
]

const company = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080d1a] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/logo.jpg"
                alt="ITA Advanced Agence Digitale"
                width={52}
                height={52}
                className="h-11 w-11 object-contain mix-blend-screen"
              />
            </Link>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/75">
              Agence digitale basée à Marrakech. Nous aidons les entreprises à développer leur présence en ligne avec expertise, rigueur et réactivité.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              {[
                { icon: '📍', text: 'Marrakech, Maroc' },
                { icon: '✉️', text: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                ...(siteConfig.contact.phone
                  ? [{ icon: '📱', text: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` }]
                  : []),
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-white/75">
                  <span className="text-base">{item.icon}</span>
                  {'href' in item ? (
                    <a href={item.href} className="inline-flex min-h-11 items-center transition-colors hover:text-accent">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-white/70 font-title font-semibold text-sm uppercase tracking-wider mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="group flex min-h-11 items-center gap-2 text-sm text-white/75 transition-colors hover:text-accent">
                    <span className="w-1 h-1 bg-accent/40 rounded-full group-hover:bg-accent transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-white/70 font-title font-semibold text-sm uppercase tracking-wider mb-5">Agence</p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="group flex min-h-11 items-center gap-2 text-sm text-white/75 transition-colors hover:text-accent">
                    <span className="w-1 h-1 bg-accent/40 rounded-full group-hover:bg-accent transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-2">
            <p className="text-white/70 font-title font-semibold text-sm uppercase tracking-wider mb-5">Démarrer</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Devis gratuit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} ITA Advanced. Tous droits réservés.</p>
          <p>Agence Digitale — Marrakech, Maroc</p>
        </div>
      </div>

      <WhatsAppLink variant="floating" />
    </footer>
  )
}
