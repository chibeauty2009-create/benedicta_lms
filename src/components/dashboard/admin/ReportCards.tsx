import { Download, RefreshCw } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { reportCardsData } from '@/data/dashboardData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Ready: 'positive',
  Pending: 'warning',
  'Not Started': 'neutral',
}

export default function ReportCards() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Report Cards</h2>
        <p className="mt-1 text-sm text-ink-500">Produce results across the school.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                <th className="px-6 py-3 font-medium">Class</th>
                <th className="px-6 py-3 font-medium">Term</th>
                <th className="px-6 py-3 font-medium">Progress</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {reportCardsData.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-mist">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{row.cls}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-ink-600">{row.term}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-mist">
                        <div
                          className="h-full rounded-full bg-brass-400"
                          style={{ width: `${(row.generated / row.total) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-ink-500">
                        {row.generated}/{row.total}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <StatusBadge label={row.status} tone={statusTone[row.status] ?? 'neutral'} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {row.status === 'Ready' ? (
                      <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-600 hover:text-brass-500">
                        <Download size={14} /> Download All
                      </button>
                    ) : (
                      <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-ink-900">
                        <RefreshCw size={14} /> Generate
                      </button>
                    )}
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
