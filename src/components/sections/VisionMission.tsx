import { Compass, Target } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function VisionMission() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="eyebrow">Vision &amp; Mission</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            What guides every decision we make
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05} className="rounded-2xl bg-mist p-8 transition-shadow hover:shadow-seal">
            <Compass className="text-brass-500" size={28} />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-ink-500">
              To raise confident, principled graduates equipped to lead in a fast-changing, digital
              world — grounded in strong character and academic excellence.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl bg-mist p-8 transition-shadow hover:shadow-seal">
            <Target className="text-brass-500" size={28} />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-ink-500">
              To deliver a modern, secure, and accessible learning environment that keeps every
              student, teacher, and parent connected — in the classroom and beyond it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
