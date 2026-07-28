import { ShieldCheck, Sparkles, Users, Lightbulb } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { coreValues } from '@/data/content'

const icons = [ShieldCheck, Sparkles, Users, Lightbulb]

export default function CoreValues() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="eyebrow">Core Values</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            What we stand for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={value.id}
                delay={i * 0.08}
                className="group rounded-2xl bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-seal"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-ink-900">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
