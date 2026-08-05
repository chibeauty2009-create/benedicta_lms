import { useState } from 'react'
import ChildSelector from '@/components/dashboard/parent/ChildSelector'
import { parentChildren, parentExamResults } from '@/data/dashboardData'

export default function ExaminationResults() {
  const [childId, setChildId] = useState(parentChildren[0].id)
  const results = parentExamResults[childId]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Examination Results</h2>
        <p className="mt-1 text-sm text-ink-500">Exam-specific scores.</p>
      </div>

      <ChildSelector activeId={childId} onChange={setChildId} />

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                <th className="px-6 py-3 font-medium">Examination</th>
                <th className="px-6 py-3 font-medium">Subject</th>
                <th className="px-6 py-3 font-medium">Score</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {results.map((r) => (
                <tr key={r.id} className="transition-colors hover:bg-mist">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{r.exam}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-ink-600">{r.subject}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-700">
                    {r.score}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-ink-500">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
