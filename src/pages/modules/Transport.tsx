import { Bus, LayoutDashboard } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { transportData } from '@/data/futureModulesData'

export default function Transport() {
  return (
    <DashboardLayout
      roleLabel="Transport"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Transport Management</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — bus routes and student assignments. Mock data for now.
            </p>
          </div>

          <div className="space-y-4">
            {transportData.map((route) => {
              const pct = Math.round((route.assigned / route.capacity) * 100)
              return (
                <div
                  key={route.id}
                  className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                      <Bus size={16} />
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-ink-900">{route.route}</p>
                      <p className="mt-1 text-sm text-ink-500">{route.driver}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-32">
                      <div className="h-1.5 overflow-hidden rounded-full bg-mist">
                        <div className="h-full rounded-full bg-brass-400" style={{ width: `${pct}%` }} />
                      </div>
                      <p className="mt-1 font-mono text-xs text-ink-400">
                        {route.assigned}/{route.capacity} students
                      </p>
                    </div>
                    <StatusBadge label={route.status} tone={route.status === 'On Route' ? 'info' : 'positive'} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
