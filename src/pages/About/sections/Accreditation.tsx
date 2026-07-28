import { BadgeCheck, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { accreditations } from '@/data/content'

export default function Accreditation() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="eyebrow">Accreditation &amp; Affiliations</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Recognised where it counts
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {accreditations.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className="flex items-center gap-4 rounded-xl border border-ink-100 p-6 transition-colors hover:border-brass-300"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-50 text-brass-500">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink-900">{item.name}</p>
                <p className="text-sm text-ink-400">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex flex-col items-center gap-6 rounded-2xl bg-mist p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-ink-900">
            Ready to take the next step?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary">
              Apply Now <ArrowRight size={16} />
            </Button>
            <Button to="/login" variant="ghost">
              Login
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
