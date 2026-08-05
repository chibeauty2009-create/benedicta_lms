import { Plus } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { examinationsData } from '@/data/dashboardData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral' | 'info'> = {
  Scheduled: 'info',
  Ongoing: 'warning',
  Marking: 'warning',
  Completed: 'positive',
}

export default function Examinations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Examinations</h2>
          <p className="mt-1 text-sm text-ink-500">Set up and oversee school exams.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300">
          <Plus size={16} /> Schedule Exam
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                <th className="px-6 py-3 font-medium">Examination</th>
                <th className="px-6 py-3 font-medium">Class(es)</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {examinationsData.map((exam) => (
                <tr key={exam.id} className="transition-colors hover:bg-mist">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{exam.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-ink-600">{exam.cls}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-ink-600">{exam.date}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <StatusBadge label={exam.status} tone={statusTone[exam.status] ?? 'neutral'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
