import { useState } from 'react'
import { BookOpen, FileText } from 'lucide-react'
import { studentMaterials, studentSubjects } from '@/data/dashboardData'

export default function SubjectsMaterials() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null)

  const materials = activeSubject
    ? studentMaterials.filter((m) => m.subject === activeSubject)
    : studentMaterials

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Subjects &amp; Materials</h2>
        <p className="mt-1 text-sm text-ink-500">Access your course content.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studentSubjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setActiveSubject(subject.name === activeSubject ? null : subject.name)}
            className={`rounded-2xl border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-seal ${
              activeSubject === subject.name
                ? 'border-brass-400 bg-brass-50'
                : 'border-ink-100 bg-paper hover:border-brass-300'
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-brass-300">
              <BookOpen size={16} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{subject.name}</h3>
            <p className="mt-1 text-sm text-ink-500">{subject.teacher}</p>
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold text-ink-900">
            {activeSubject ? `${activeSubject} — Materials` : 'All Materials'}
          </h3>
          {activeSubject && (
            <button
              onClick={() => setActiveSubject(null)}
              className="text-xs font-medium text-brass-600 hover:text-brass-500"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <ul className="divide-y divide-ink-100">
            {materials.map((m) => (
              <li key={m.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-ink-600">
                    <FileText size={15} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-900">{m.title}</p>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {m.subject} · {m.date}
                    </p>
                  </div>
                </div>
                <button className="text-xs font-semibold text-brass-600 hover:text-brass-500">View</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
