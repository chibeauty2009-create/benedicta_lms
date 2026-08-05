import { useState } from 'react'
import { CheckCircle2, Upload } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { studentAssignments } from '@/data/dashboardData'

interface Assignment {
  id: number
  subject: string
  title: string
  due: string
  status: 'Not Submitted' | 'Submitted' | 'Graded'
  score?: string
}

const statusTone: Record<Assignment['status'], 'positive' | 'warning' | 'neutral'> = {
  Graded: 'positive',
  Submitted: 'neutral',
  'Not Submitted': 'warning',
}

export default function AssignmentSubmission() {
  const [assignments, setAssignments] = useState<Assignment[]>(studentAssignments as Assignment[])
  const [openId, setOpenId] = useState<number | null>(null)

  const submit = (id: number) => {
    setAssignments((prev) => prev.map((a) => (a.id === id ? { ...a, status: 'Submitted' } : a)))
    setOpenId(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Assignment Submission</h2>
        <p className="mt-1 text-sm text-ink-500">Upload completed work online.</p>
      </div>

      <div className="space-y-4">
        {assignments.map((a) => (
          <div key={a.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-display text-base font-semibold text-ink-900">{a.title}</p>
                <p className="mt-1 text-sm text-ink-500">
                  {a.subject} · Due {a.due}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {a.score && <span className="font-mono text-sm text-ink-500">{a.score}</span>}
                <StatusBadge label={a.status} tone={statusTone[a.status]} />
              </div>
            </div>

            {a.status === 'Not Submitted' && (
              <div className="mt-4 border-t border-ink-100 pt-4">
                {openId === a.id ? (
                  <div className="space-y-3">
                    <div className="rounded-lg border border-dashed border-ink-200 px-4 py-6 text-center text-xs text-ink-400">
                      <Upload className="mx-auto text-ink-300" size={20} />
                      File attachment (mock — no upload wired up yet)
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => submit(a.id)}
                        className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2 text-xs font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300"
                      >
                        <CheckCircle2 size={14} /> Confirm Submission
                      </button>
                      <button
                        onClick={() => setOpenId(null)}
                        className="rounded-full border border-ink-200 px-5 py-2 text-xs font-medium text-ink-600 transition hover:border-ink-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setOpenId(a.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2 text-xs font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600"
                  >
                    <Upload size={14} /> Submit Assignment
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
