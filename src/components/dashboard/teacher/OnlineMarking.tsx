import { useState } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { teacherMarkingExams } from '@/data/dashboardData'

export default function OnlineMarking() {
  const [examId, setExamId] = useState(teacherMarkingExams[0].id)
  const [scores, setScores] = useState<Record<number, string>>(() => {
    const initial: Record<number, string> = {}
    teacherMarkingExams.forEach((exam) =>
      exam.submissions.forEach((s) => {
        initial[s.id] = s.score != null ? String(s.score) : ''
      }),
    )
    return initial
  })
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set())

  const exam = teacherMarkingExams.find((e) => e.id === examId)!

  const setScore = (id: number, value: string) => {
    setScores((prev) => ({ ...prev, [id]: value }))
    setSavedIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const saveScore = (id: number) => {
    setSavedIds((prev) => new Set(prev).add(id))
  }

  const markedCount = exam.submissions.filter((s) => scores[s.id] !== '').length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Online Marking</h2>
          <p className="mt-1 text-sm text-ink-500">Grade submitted exams digitally.</p>
        </div>
        <select
          value={examId}
          onChange={(e) => setExamId(Number(e.target.value))}
          className="rounded-lg border border-ink-200 bg-paper px-4 py-2 text-sm text-ink-700 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
        >
          {teacherMarkingExams.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title} — {e.cls}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-ink-500">
        {markedCount} of {exam.submissions.length} submissions marked.
      </p>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <ul className="divide-y divide-ink-100">
          {exam.submissions.map((s) => (
            <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-3">
                {s.submitted ? (
                  <CheckCircle2 size={16} className="shrink-0 text-verdant" />
                ) : (
                  <Circle size={16} className="shrink-0 text-ink-300" />
                )}
                <div>
                  <p className="text-sm font-medium text-ink-900">{s.name}</p>
                  <p className="text-xs text-ink-400">{s.submitted ? 'Submitted' : 'Not submitted yet'}</p>
                </div>
              </div>

              {s.submitted && (
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={scores[s.id]}
                    onChange={(e) => setScore(s.id, e.target.value)}
                    placeholder="Score"
                    className="w-20 rounded-lg border border-ink-200 px-3 py-1.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  />
                  <button
                    onClick={() => saveScore(s.id)}
                    disabled={scores[s.id] === ''}
                    className="rounded-full border border-ink-200 px-4 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {savedIds.has(s.id) ? 'Saved ✓' : 'Save'}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
