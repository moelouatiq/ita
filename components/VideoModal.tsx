'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoModalProps {
  videoId: string
  platform?: 'youtube' | 'vimeo'
  thumbnail?: string
  label?: string
}

export default function VideoModal({
  videoId,
  platform = 'youtube',
  thumbnail = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80',
  label = 'Voir notre showreel',
}: VideoModalProps) {
  const [open, setOpen] = useState(false)

  const src =
    platform === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0`

  return (
    <>
      {/* Trigger — video thumbnail with play button */}
      <div
        className="relative rounded-3xl overflow-hidden cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative w-full" style={{ paddingBottom: '52%' }}>
          <img
            src={thumbnail}
            alt="Showreel ITA Advanced"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/40 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="play-btn w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="glass text-white text-sm font-medium px-5 py-2 rounded-full">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Video container */}
            <motion.div
              className="relative w-full max-w-5xl z-10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={src}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
