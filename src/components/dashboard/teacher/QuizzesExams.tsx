import { useState, type FormEvent } from 'react'
import { FileQuestion, Plus } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { teacherMaterialClasses, teacherQuizzes } from '@/data/dashboardData'

interface Quiz {
  id: number
  title: string
  cls: string
  questions: number
  status: 'Draft' | 'Published' | 'Closed'
}

const statusTone: Record<Quiz['status'], 'positive' | 'warning' | 'neutral'> = {
  Published: 'positive',
  Draft: 'warning',
  Closed: 'neutral',
}

export default function QuizzesExams() {
  const [quizzes, setQuizzes] = useState<Quiz[]>(teacherQuizzes as Quiz[])

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const title = String(data.get('title') || '').trim()
    const cls = String(data.get('cls') || teacherMaterialClasses[0])
    const questions = Number(data.get('questions')) || 10
    if (!title) return

    setQuizzes((prev) => [{ id: Date.now(), title, cls, questions, status: 'Draft' }, ...prev])
    form.reset()
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Quizzes &amp; Exams</h2>
        <p className="mt-1 text-sm text-ink-500">Build assessments for your subjects.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <form
          onSubmit={handleCreate}
          className="space-y-4 rounded-2xl border border-ink-100 bg-paper p-6 lg:col-span-2"
        >
          <h3 className="font-display text-base font-semibold text-ink-900">Create New</h3>

          <div>
            <label htmlFor="q-title" className="text-sm font-medium text-ink-700">
              Title
            </label>
            <input
              id="q-title"
              name="title"
              required
              type="text"
              placeholder="e.g. Third CA Quiz — Statistics"
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-cls" className="text-sm font-medium text-ink-700">
                Class
              </label>
              <select
                id="q-cls"
                name="cls"
                className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
              >
                {teacherMaterialClasses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="q-count" className="text-sm font-medium text-ink-700">
                Questions
              </label>
              <input
                id="q-count"
                name="questions"
                type="number"
                min={1}
                defaultValue={10}
                className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300"
          >
            <Plus size={16} /> Save as Draft
          </button>
        </form>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <ul className="divide-y divide-ink-100">
              {quizzes.map((q) => (
                <li key={q.id} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                      <FileQuestion size={15} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">{q.title}</p>
                      <p className="mt-1 text-xs text-ink-400">
                        {q.cls} · {q.questions} questions
                      </p>
                    </div>
                  </div>
                  <StatusBadge label={q.status} tone={statusTone[q.status]} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
