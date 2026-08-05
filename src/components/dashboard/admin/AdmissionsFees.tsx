import StatusBadge from '@/components/dashboard/StatusBadge'
import { admissionsData } from '@/data/dashboardData'

const stageTone: Record<string, 'positive' | 'warning' | 'neutral' | 'info'> = {
  Enrolled: 'positive',
  'Offer Sent': 'info',
  Interview: 'warning',
  Application: 'neutral',
}

export default function AdmissionsFees() {
  const maxPipeline = Math.max(...admissionsData.pipeline.map((p) => p.count))

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Admissions &amp; Fees</h2>
        <p className="mt-1 text-sm text-ink-500">From enquiry to enrolment, plus billing.</p>
      </div>

      {/* Pipeline */}
      <div className="rounded-2xl border border-ink-100 bg-paper p-6">
        <h3 className="font-display text-base font-semibold text-ink-900">Admissions Pipeline</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-5">
          {admissionsData.pipeline.map((stage) => (
            <div key={stage.stage} className="rounded-xl bg-mist p-4 text-center">
              <p className="font-mono text-2xl font-semibold tabular-nums text-ink-900">{stage.count}</p>
              <p className="mt-1 text-xs font-medium text-ink-500">{stage.stage}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
                <div
                  className="h-full rounded-full bg-brass-400"
                  style={{ width: `${(stage.count / maxPipeline) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent applicants */}
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <div className="border-b border-ink-100 px-6 py-4">
            <h3 className="font-display text-base font-semibold text-ink-900">Recent Applicants</h3>
          </div>
          <ul className="divide-y divide-ink-100">
            {admissionsData.recent.map((a) => (
              <li key={a.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-ink-800">{a.name}</p>
                  <p className="mt-0.5 text-xs text-ink-400">
                    {a.cls} · {a.date}
                  </p>
                </div>
                <StatusBadge label={a.stage} tone={stageTone[a.stage] ?? 'neutral'} />
              </li>
            ))}
          </ul>
        </div>

        {/* Fee collection by class */}
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <div className="border-b border-ink-100 px-6 py-4">
            <h3 className="font-display text-base font-semibold text-ink-900">Fee Collection by Class</h3>
          </div>
          <ul className="divide-y divide-ink-100">
            {admissionsData.fees.map((fee) => (
              <li key={fee.id} className="px-6 py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink-800">{fee.cls}</span>
                  <span className="font-mono text-xs text-ink-500">
                    {fee.collected} / {fee.expected}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist">
                  <div
                    className="h-full rounded-full bg-verdant"
                    style={{ width: `${fee.rate}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
