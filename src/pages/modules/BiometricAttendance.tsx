import { Fingerprint, LayoutDashboard } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { biometricAttendanceData } from '@/data/futureModulesData'

export default function BiometricAttendance() {
  return (
    <DashboardLayout
      roleLabel="Biometric Attendance"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Biometric Attendance</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — fingerprint scanner devices and scan logs. Mock data for now.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-ink-900">Devices</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {biometricAttendanceData.devices.map((d) => (
                <div key={d.id} className="rounded-2xl border border-ink-100 bg-paper p-5">
                  <div className="flex items-center justify-between">
                    <Fingerprint size={18} className="text-ink-500" />
                    <StatusBadge label={d.status} tone={d.status === 'Online' ? 'positive' : 'neutral'} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink-900">{d.location}</p>
                  <p className="mt-1 text-xs text-ink-400">Last sync: {d.lastSync}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <div className="border-b border-ink-100 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-ink-900">Recent Scans</h3>
            </div>
            <ul className="divide-y divide-ink-100">
              {biometricAttendanceData.scans.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-ink-900">{s.name}</p>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {s.device} · {s.time}
                    </p>
                  </div>
                  <StatusBadge label={s.result} tone={s.result === 'Match' ? 'positive' : 'warning'} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
