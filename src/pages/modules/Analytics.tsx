import { AlertTriangle, Info, LayoutDashboard, Sparkles, TrendingUp } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import { analyticsData } from '@/data/futureModulesData'

const levelStyles: Record<string, { icon: typeof Info; classes: string }> = {
  warning: { icon: AlertTriangle, classes: 'border-brass-200 bg-brass-50 text-brass-700' },
  info: { icon: Info, classes: 'border-ink-200 bg-mist text-ink-700' },
  positive: { icon: TrendingUp, classes: 'border-verdant/30 bg-verdant/10 text-verdant' },
}

export default function Analytics() {
  return (
    <DashboardLayout
      roleLabel="AI Analytics"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-brass-500" />
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-900">
                AI-Powered Student Analytics
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Phase 2 module — predictive insights across the school. Mock data for now.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {analyticsData.insights.map((insight) => {
              const style = levelStyles[insight.level]
              const Icon = style.icon
              return (
                <div
                  key={insight.id}
                  className={`flex items-start gap-3 rounded-2xl border px-5 py-4 text-sm ${style.classes}`}
                >
                  <Icon size={16} className="mt-0.5 shrink-0" />
                  <p>{insight.text}</p>
                </div>
              )
            })}
          </div>

          <MiniBarChart {...analyticsData.chart} />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
              <div className="border-b border-ink-100 px-6 py-4">
                <h3 className="font-display text-base font-semibold text-ink-900">
                  Students Flagged At-Risk
                </h3>
              </div>
              <ul className="divide-y divide-ink-100">
                {analyticsData.atRisk.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-ink-900">{s.name}</p>
                      <p className="mt-0.5 text-xs text-ink-400">
                        {s.cls} · {s.reason}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        s.risk === 'High' ? 'bg-brass-50 text-brass-700' : 'bg-mist text-ink-500'
                      }`}
                    >
                      {s.risk} Risk
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
              <div className="border-b border-ink-100 px-6 py-4">
                <h3 className="font-display text-base font-semibold text-ink-900">Top Improvers</h3>
              </div>
              <ul className="divide-y divide-ink-100">
                {analyticsData.improvers.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-ink-900">{s.name}</p>
                      <p className="mt-0.5 text-xs text-ink-400">{s.cls}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold text-verdant">{s.change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
