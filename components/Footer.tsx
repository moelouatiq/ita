import Link from 'next/link'
import Image from 'next/image'

const services = [
  { href: '/emailing', label: 'Intégration Emailing' },
  { href: '/landing-page', label: 'Création Landing Pages' },
  { href: '/developpement-web', label: 'Développement Web' },
]

const company = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/merci', label: 'Mentions légales' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080d1a] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/logo.jpg"
                alt="ITA Advanced Agence Digitale"
                width={130}
                height={44}
                className="h-11 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Agence digitale basée à Marrakech. Nous aidons les entreprises à développer leur présence en ligne avec expertise, rigueur et réactivité.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              {[
                { icon: '📍', text: 'Marrakech, Maroc' },
                { icon: '✉️', text: 'contact@ita-advanced.ma', href: 'mailto:contact@ita-advanced.ma' },
                { icon: '📱', text: '+212 6XX XXX XXX', href: 'https://wa.me/212600000000' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-white/40">
                  <span className="text-base">{item.icon}</span>
                  {'href' in item ? (
                    <a href={item.href} className="hover:text-accent transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-white/70 font-title font-semibold text-sm uppercase tracking-wider mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/35 hover:text-accent text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-accent/40 rounded-full group-hover:bg-accent transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-white/70 font-title font-semibold text-sm uppercase tracking-wider mb-5">Agence</p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-white/35 hover:text-accent text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-accent/40 rounded-full group-hover:bg-accent transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
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
        <div className="border-t border-white/6 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} ITA Advanced. Tous droits réservés.</p>
          <p>Agence Digitale — Marrakech, Maroc</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-green-500/40"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  )
}
