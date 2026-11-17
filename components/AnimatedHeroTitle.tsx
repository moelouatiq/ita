'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface AnimatedHeroTitlePart {
  text: string
  className: string
}

interface AnimatedHeroTitleProps {
  label: string
  parts: readonly AnimatedHeroTitlePart[]
  className: string
  direction?: 'horizontal' | 'vertical'
}

export default function AnimatedHeroTitle({
  label,
  parts,
  className,
  direction = 'horizontal',
}: AnimatedHeroTitleProps) {
  const words = parts.flatMap((part, partIndex) =>
    part.text.trim().split(/\s+/).map((text, wordIndex) => ({
      text,
      className: part.className,
      key: `${partIndex}-${wordIndex}-${text}`,
    })),
  )

  return (
    <h1
      aria-label={label}
      data-hero-title
      className={`font-title font-bold leading-[1.02] tracking-tight text-balance ${className}`}
    >
      {words.map((word, index) => (
        <Fragment key={word.key}>
          <motion.span
            className={`inline-block ${word.className}`}
            initial={{
              opacity: 0,
              x: direction === 'horizontal' ? -40 : 0,
              y: direction === 'vertical' ? 30 : 0,
              filter: 'blur(12px)',
            }}
            animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: EASE }}
          >
            {word.text}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </h1>
  )
}
