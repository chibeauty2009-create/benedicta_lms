import { LayoutDashboard, Users2 } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { videoConferencingData } from '@/data/futureModulesData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Scheduled: 'warning',
  Completed: 'positive',
}

export default function VideoConferencing() {
  return (
    <DashboardLayout
      roleLabel="Video Conferencing"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Video Conferencing</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — parent-teacher and staff video calls. Mock data for now.
            </p>
          </div>

          <div className="space-y-4">
            {videoConferencingData.map((call) => (
              <div
                key={call.id}
                className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                    <Users2 size={16} />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-ink-900">{call.title}</p>
                    <p className="mt-1 text-sm text-ink-500">{call.type}</p>
                    <p className="mt-1 text-xs text-ink-400">{call.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge label={call.status} tone={statusTone[call.status] ?? 'neutral'} />
                  {call.status === 'Scheduled' && (
                    <button className="rounded-full border border-ink-200 px-5 py-2 text-xs font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600">
                      Copy Link
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
