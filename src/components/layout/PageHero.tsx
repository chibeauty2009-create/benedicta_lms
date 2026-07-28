import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

/**
 * Compact hero banner for interior pages (About, Contact, ...),
 * matching the Home hero's ink/brass/ledger language at smaller scale.
 */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-paper">
      <div className="pointer-events-none absolute inset-0 bg-ledger-lines" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brass-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-content px-6 py-20 md:py-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow inline-block rounded-full border border-brass-400/40 px-4 py-1.5 text-brass-300"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
