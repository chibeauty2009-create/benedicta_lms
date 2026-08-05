import { Download, RefreshCw } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { teacherReportClasses } from '@/data/dashboardData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Ready: 'positive',
  Pending: 'warning',
  'Not Started': 'neutral',
}

export default function TeacherReportCards() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Report Cards</h2>
        <p className="mt-1 text-sm text-ink-500">Produce results for your classes.</p>
      </div>

      <div className="space-y-4">
        {teacherReportClasses.map((row) => (
          <div
            key={row.id}
            className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-base font-semibold text-ink-900">{row.cls}</p>
              <p className="mt-1 text-sm text-ink-500">{row.term}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-mist">
                <div
                  className="h-full rounded-full bg-brass-400"
                  style={{ width: `${(row.generated / row.total) * 100}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-ink-500">
                {row.generated}/{row.total}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <StatusBadge label={row.status} tone={statusTone[row.status] ?? 'neutral'} />
              {row.status === 'Ready' ? (
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-600 hover:text-brass-500">
                  <Download size={14} /> Download All
                </button>
              ) : (
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-ink-900">
                  <RefreshCw size={14} /> Generate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
