import { TrendingDown, TrendingUp } from 'lucide-react'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import { teacherPerformance } from '@/data/dashboardData'

export default function PerformanceAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Performance Analytics</h2>
        <p className="mt-1 text-sm text-ink-500">Track how each class is doing.</p>
      </div>

      <MiniBarChart {...teacherPerformance.bySubjectClass} />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <div className="flex items-center gap-2 border-b border-ink-100 px-6 py-4">
            <TrendingUp size={16} className="text-verdant" />
            <h3 className="font-display text-base font-semibold text-ink-900">Top Performers</h3>
          </div>
          <ul className="divide-y divide-ink-100">
            {teacherPerformance.top.map((s, i) => (
              <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-ink-900">{s.name}</p>
                    <p className="text-xs text-ink-400">{s.cls}</p>
                  </div>
                </div>
                <span className="font-mono text-sm font-semibold tabular-nums text-verdant">
                  {s.average}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <div className="flex items-center gap-2 border-b border-ink-100 px-6 py-4">
            <TrendingDown size={16} className="text-brass-500" />
            <h3 className="font-display text-base font-semibold text-ink-900">Needs Attention</h3>
          </div>
          <ul className="divide-y divide-ink-100">
            {teacherPerformance.bottom.map((s, i) => (
              <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-ink-900">{s.name}</p>
                    <p className="text-xs text-ink-400">{s.cls}</p>
                  </div>
                </div>
                <span className="font-mono text-sm font-semibold tabular-nums text-brass-600">
                  {s.average}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
