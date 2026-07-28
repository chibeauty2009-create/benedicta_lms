import { Quote } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { leadership } from '@/data/content'

export default function LeadershipMessage() {
  return (
    <section className="bg-ink-900 py-24 text-paper">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto text-brass-400" size={32} />
          <p className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            &ldquo;{leadership.message}&rdquo;
          </p>
          <div className="mt-8">
            <p className="font-semibold text-brass-300">{leadership.name}</p>
            <p className="mt-1 text-sm text-ink-300">{leadership.role}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
