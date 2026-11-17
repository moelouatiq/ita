interface CardAccentBorderProps {
  gradient: string
  strong?: boolean
}

export default function CardAccentBorder({
  gradient,
  strong = false,
}: CardAccentBorderProps) {
  return (
    <span
      aria-hidden="true"
      className={`card-accent-border${strong ? ' card-accent-border--strong' : ''} bg-gradient-to-r ${gradient}`}
    />
  )
}
