import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import { stats } from '@/data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-paper">
      {/* subtle ledger-ruled texture, nodding to the register/report-card at the heart of the platform */}
      <div className="pointer-events-none absolute inset-0 bg-ledger-lines" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-block rounded-full border border-brass-400/40 px-4 py-1.5 text-brass-300"
        >
          The Benedicta College · Learning Management System
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          One school. One dashboard.
          <span className="text-brass-300"> Every record, always in view.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200"
        >
          Benedicta College connects administrators, teachers, students, and parents in a single
          secure platform — for learning, examinations, attendance, and academic records.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button to="/about" variant="primary">
            Apply Now <ArrowRight size={16} />
          </Button>
          <Button to="/login" variant="secondary">
            Login
          </Button>
          <Button to="/contact" variant="ghost" className="border-ink-500 text-paper hover:border-brass-300 hover:text-brass-300">
            Contact Us
          </Button>
        </motion.div>

        {/* Scoreboard-style stat readout */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink-700 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-brass-300 sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-ink-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
