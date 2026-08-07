import { LayoutDashboard } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { paymentGatewayData } from '@/data/futureModulesData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Successful: 'positive',
  Pending: 'warning',
  Failed: 'neutral',
}

export default function PaymentGateway() {
  return (
    <DashboardLayout
      roleLabel="Payment Gateway"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              Online Fee Payment Gateway
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — real payment provider integration. Mock data for now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paymentGatewayData.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-ink-900">Connected Providers</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {paymentGatewayData.providers.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between rounded-2xl border border-ink-100 bg-paper p-5"
                >
                  <span className="text-sm font-medium text-ink-900">{p.name}</span>
                  <StatusBadge label={p.status} tone="positive" />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <div className="border-b border-ink-100 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-ink-900">Recent Transactions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                    <th className="px-6 py-3 font-medium">Student</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Method</th>
                    <th className="px-6 py-3 font-medium">Reference</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {paymentGatewayData.transactions.map((t) => (
                    <tr key={t.id} className="transition-colors hover:bg-mist">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{t.student}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-700">
                        {t.amount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-ink-600">{t.method}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-ink-500">{t.ref}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-ink-500">{t.date}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <StatusBadge label={t.status} tone={statusTone[t.status] ?? 'neutral'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
