import { LayoutDashboard } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { hostelData } from '@/data/futureModulesData'

export default function Hostel() {
  return (
    <DashboardLayout
      roleLabel="Hostel"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Hostel Management</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — boarding house capacity and allocations. Mock data for now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {hostelData.hostels.map((h) => {
              const pct = Math.round((h.occupied / h.capacity) * 100)
              return (
                <div key={h.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
                  <p className="font-display text-base font-semibold text-ink-900">{h.name}</p>
                  <p className="mt-1 text-sm text-ink-500">
                    {h.occupied} / {h.capacity} occupied
                  </p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-mist">
                    <div className="h-full rounded-full bg-brass-400" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <div className="border-b border-ink-100 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-ink-900">Recent Allocations</h3>
            </div>
            <ul className="divide-y divide-ink-100">
              {hostelData.allocations.map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-ink-900">{a.student}</p>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {a.hostel} · Room {a.room}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-ink-400">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
