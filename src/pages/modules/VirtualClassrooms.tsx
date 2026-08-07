import { LayoutDashboard, Video } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { virtualClassroomsData } from '@/data/futureModulesData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Live: 'positive',
  Scheduled: 'warning',
  Ended: 'neutral',
}

export default function VirtualClassrooms() {
  return (
    <DashboardLayout
      roleLabel="Virtual Classrooms"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Virtual Classrooms</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — live-taught remote lessons. Mock data for now.
            </p>
          </div>

          <div className="space-y-4">
            {virtualClassroomsData.map((cls) => (
              <div
                key={cls.id}
                className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                    <Video size={16} />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-ink-900">{cls.subject}</p>
                    <p className="mt-1 text-sm text-ink-500">
                      {cls.teacher} · {cls.cls}
                    </p>
                    <p className="mt-1 text-xs text-ink-400">{cls.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge label={cls.status} tone={statusTone[cls.status] ?? 'neutral'} />
                  {cls.status === 'Live' && (
                    <button className="rounded-full bg-brass-400 px-5 py-2 text-xs font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300">
                      Join Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
