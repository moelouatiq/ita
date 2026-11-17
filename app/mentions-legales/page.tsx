import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Mentions légales — brouillon à valider',
  description: 'Informations légales de ITA Advanced, en attente de validation avant publication.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: { url: '/mentions-legales' },
  robots: { index: false, follow: false },
}

const missingInformation = [
  'forme juridique et capital social',
  'adresse complète du siège social',
  'numéros RC, ICE et identifiant fiscal',
  'nom du directeur ou de la directrice de publication',
  'coordonnées et raison sociale de l’hébergeur',
]

export default function LegalNoticePage() {
  return (
    <section className="min-h-screen bg-bg-light px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
          Brouillon non publié — informations à valider
        </p>
        <h1 className="font-title text-4xl font-bold text-primary sm:text-5xl">Mentions légales</h1>
        <p className="mt-6 leading-relaxed text-text-secondary">
          Cette page contient uniquement les informations confirmées dans les ressources locales du projet.
          Elle reste exclue de l’indexation et du sitemap tant que les éléments obligatoires ci-dessous ne sont pas validés.
        </p>

        <div className="mt-10 space-y-8">
          <section className="card">
            <h2 className="font-title text-xl font-bold text-primary">Éditeur du site</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-primary">Nom indiqué</dt>
              <dd className="text-text-secondary">{siteConfig.legalName}</dd>
              <dt className="font-semibold text-primary">Localisation</dt>
              <dd className="text-text-secondary">{siteConfig.location}</dd>
              <dt className="font-semibold text-primary">E-mail</dt>
              <dd>
                <a className="inline-flex min-h-11 items-center font-medium text-accent underline-offset-4 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </dd>
            </dl>
          </section>

          <section className="card border-amber-200 bg-amber-50">
            <h2 className="font-title text-xl font-bold text-primary">Informations indispensables manquantes</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
              {missingInformation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="card">
            <h2 className="font-title text-xl font-bold text-primary">Données personnelles</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Le formulaire transmet les informations renseignées afin de répondre à la demande de contact.
              La durée de conservation, la base légale, les destinataires et les modalités d’exercice des droits
              doivent être confirmés avant publication.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
