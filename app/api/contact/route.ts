import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface ContactPayload {
  name?: unknown
  email?: unknown
  phone?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

const asTrimmedString = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null

  if (!body) {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  if (asTrimmedString(body.website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const payload = {
    name: asTrimmedString(body.name, 120),
    email: asTrimmedString(body.email, 254),
    phone: asTrimmedString(body.phone, 40),
    subject: asTrimmedString(body.subject, 120),
    message: asTrimmedString(body.message, 4000),
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  if (!payload.name || !emailIsValid || !payload.subject || !payload.message) {
    return NextResponse.json(
      { error: 'Merci de renseigner le nom, un e-mail valide, le sujet et la description du projet.' },
      { status: 400 },
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json({ ok: true, mode: 'local-mock' })
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT
  if (!endpoint) {
    return NextResponse.json(
      { error: 'Le service d’envoi est temporairement indisponible. Merci de nous écrire par e-mail.' },
      { status: 503 },
    )
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(process.env.CONTACT_FORM_TOKEN
          ? { authorization: `Bearer ${process.env.CONTACT_FORM_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'L’envoi a échoué. Merci de réessayer ou de nous écrire par e-mail.' },
      { status: 502 },
    )
  }
}
