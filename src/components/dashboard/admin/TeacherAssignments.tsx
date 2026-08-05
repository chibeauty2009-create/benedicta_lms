import { Plus } from 'lucide-react'
import { teacherAssignmentsData } from '@/data/dashboardData'

export default function TeacherAssignments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Teacher Assignments</h2>
          <p className="mt-1 text-sm text-ink-500">Allocate staff to subjects and classes.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300">
          <Plus size={16} /> New Assignment
        </button>
      </div>

      <div className="space-y-4">
        {teacherAssignmentsData.map((row) => (
          <div
            key={row.id}
            className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-base font-semibold text-ink-900">{row.teacher}</p>
              <p className="mt-1 text-sm text-ink-500">{row.subject}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {row.classes.map((c) => (
                <span key={c} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-600">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 sm:justify-end">
              <div className="text-right">
                <p className="font-mono text-lg font-semibold tabular-nums text-ink-900">{row.periods}</p>
                <p className="text-xs text-ink-400">Periods / week</p>
              </div>
              <button className="rounded-full border border-ink-200 px-4 py-2 text-xs font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
