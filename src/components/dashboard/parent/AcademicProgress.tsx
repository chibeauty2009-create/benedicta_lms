import { useState } from 'react'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import ChildSelector from '@/components/dashboard/parent/ChildSelector'
import { parentAcademic, parentChildren } from '@/data/dashboardData'

export default function AcademicProgress() {
  const [childId, setChildId] = useState(parentChildren[0].id)
  const data = parentAcademic[childId]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Academic Progress</h2>
        <p className="mt-1 text-sm text-ink-500">Ongoing performance tracking.</p>
      </div>

      <ChildSelector activeId={childId} onChange={setChildId} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-100 bg-paper p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Overall Average</p>
          <p className="mt-2 font-mono text-3xl font-semibold tabular-nums text-ink-900">
            {data.average}%
          </p>
        </div>
        <div className="rounded-2xl border border-ink-100 bg-paper p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Class Position</p>
          <p className="mt-2 font-mono text-3xl font-semibold tabular-nums text-ink-900">
            {data.position}
          </p>
        </div>
      </div>

      <MiniBarChart {...data.chart} />
    </div>
  )
}
