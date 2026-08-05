import { useState } from 'react'
import StatCard from '@/components/dashboard/StatCard'
import StatusBadge from '@/components/dashboard/StatusBadge'
import ChildSelector from '@/components/dashboard/parent/ChildSelector'
import { parentAttendance, parentChildren } from '@/data/dashboardData'

const statusTone: Record<string, 'positive' | 'warning' | 'neutral'> = {
  Present: 'positive',
  Late: 'warning',
  Absent: 'neutral',
}

export default function ParentAttendanceRecords() {
  const [childId, setChildId] = useState(parentChildren[0].id)
  const attendance = parentAttendance[childId]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Attendance Records</h2>
        <p className="mt-1 text-sm text-ink-500">Your child's attendance history.</p>
      </div>

      <ChildSelector activeId={childId} onChange={setChildId} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {attendance.summary.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="border-b border-ink-100 px-6 py-4">
          <h3 className="font-display text-base font-semibold text-ink-900">Recent Days</h3>
        </div>
        <ul className="divide-y divide-ink-100">
          {attendance.records.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm font-medium text-ink-800">{r.date}</span>
              <StatusBadge label={r.status} tone={statusTone[r.status] ?? 'neutral'} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
