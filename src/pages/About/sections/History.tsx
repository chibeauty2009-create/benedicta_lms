import Reveal from '@/components/ui/Reveal'
import { history } from '@/data/content'

export default function History() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Founded {history.founded}, still guided by the same idea
            </h2>
          </Reveal>

          <div className="space-y-6 lg:col-span-3">
            {history.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08} className="leading-relaxed text-ink-500">
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
