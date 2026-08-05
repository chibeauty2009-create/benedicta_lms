import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { teacherGrading } from '@/data/dashboardData'

interface Entry {
  score: string
  comment: string
  saved: boolean
}

export default function GradingComments() {
  const [entries, setEntries] = useState<Record<number, Entry>>(() =>
    Object.fromEntries(teacherGrading.map((g) => [g.id, { score: '', comment: '', saved: false }])),
  )

  const update = (id: number, patch: Partial<Entry>) => {
    setEntries((prev) => ({ ...prev, [id]: { ...prev[id], ...patch, saved: false } }))
  }

  const save = (id: number) => {
    setEntries((prev) => ({ ...prev, [id]: { ...prev[id], saved: true } }))
  }

  const gradedCount = Object.values(entries).filter((e) => e.saved).length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Grading &amp; Comments</h2>
        <p className="mt-1 text-sm text-ink-500">Score assignments and leave feedback.</p>
        <p className="mt-1 text-xs font-mono text-ink-400">
          {gradedCount} of {teacherGrading.length} graded
        </p>
      </div>

      <div className="space-y-4">
        {teacherGrading.map((item) => {
          const entry = entries[item.id]
          return (
            <div key={item.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold text-ink-900">{item.student}</p>
                  <p className="mt-0.5 text-sm text-ink-500">
                    {item.assignment} · {item.cls}
                  </p>
                </div>
                {entry.saved && (
                  <span className="flex items-center gap-1.5 text-sm font-medium text-verdant">
                    <CheckCircle2 size={16} /> Graded
                  </span>
                )}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[120px_1fr]">
                <div>
                  <label className="text-xs font-medium text-ink-500">Score (/100)</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={entry.score}
                    onChange={(e) => update(item.id, { score: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-ink-500">Comment</label>
                  <input
                    type="text"
                    value={entry.comment}
                    onChange={(e) => update(item.id, { comment: e.target.value })}
                    placeholder="e.g. Good working, watch your signs in step 3."
                    className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  />
                </div>
              </div>

              <button
                onClick={() => save(item.id)}
                disabled={entry.score === ''}
                className="mt-4 rounded-full bg-ink-900 px-5 py-2 text-xs font-semibold text-paper transition hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save Grade
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
