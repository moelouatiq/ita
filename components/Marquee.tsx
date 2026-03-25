interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
  className?: string
  itemClassName?: string
  separator?: string
}

export default function Marquee({
  items,
  direction = 'left',
  className = '',
  itemClassName = '',
  separator = '✦',
}: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={`marquee-wrap overflow-hidden select-none ${className}`}>
      <div className={`flex gap-0 whitespace-nowrap ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>
        {doubled.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-6 px-6 ${itemClassName}`}>
            <span>{item}</span>
            <span className="text-accent text-sm">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
