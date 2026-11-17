export interface SiteContactConfig {
  email: string
  phone: string | null
  whatsappNumber: string | null
  whatsappUrl: string | null
}

const whatsappNumber: string | null = null

export const siteConfig = {
  name: 'ITA Advanced',
  legalName: 'INTERNET TECHNOLOGIES - ADVANCED',
  url: 'https://www.it-a.fr',
  location: 'Marrakech, Maroc',
  contact: {
    email: 'amine@it-a.fr',
    phone: null,
    whatsappNumber,
    whatsappUrl: whatsappNumber ? `https://wa.me/${whatsappNumber}` : null,
  } satisfies SiteContactConfig,
} as const

export const hasWhatsApp = Boolean(siteConfig.contact.whatsappUrl)
