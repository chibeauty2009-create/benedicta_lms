import { BookOpen } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { programs } from '@/data/content'

export default function AcademicPrograms() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="eyebrow">Academic Programs</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            A clear path from creche to graduation
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <Reveal
              key={program.id}
              delay={i * 0.08}
              className="group rounded-2xl border border-ink-100 p-7 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
            >
              <span className="font-mono text-xs text-ink-300">0{program.id}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-ink-900">
                <BookOpen size={18} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {program.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{program.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
