import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: ReactNode[]
  autoPlayMs?: number
}

export default function Carousel({ children, autoPlayMs = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const count = children.length

  useEffect(() => {
    if (!autoPlayMs) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
    return () => clearInterval(id)
  }, [autoPlayMs, count])

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count)

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {children[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition hover:border-brass-400 hover:text-brass-500"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-brass-400' : 'w-1.5 bg-ink-200'
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition hover:border-brass-400 hover:text-brass-500"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
