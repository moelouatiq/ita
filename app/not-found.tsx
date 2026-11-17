import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F172A] px-4 pt-20">
      <div className="max-w-xl text-center">
        <p className="mb-4 font-title text-8xl font-bold text-accent" aria-hidden="true">404</p>
        <h1 className="font-title text-3xl font-bold text-white">Page introuvable</h1>
        <p className="mt-4 text-lg text-white/75">
          Cette adresse n’existe pas ou la page a été déplacée. Vous pouvez revenir à l’accueil ou nous contacter.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary justify-center">Retour à l’accueil</Link>
          <Link href="/contact" className="btn-outline justify-center">Nous contacter</Link>
        </div>
      </div>
    </div>
  )
}
