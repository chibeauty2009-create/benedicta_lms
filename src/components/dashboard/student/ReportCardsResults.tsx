import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { studentReportCards } from '@/data/dashboardData'

export default function ReportCardsResults() {
  const [openId, setOpenId] = useState(studentReportCards[0].id)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Report Cards &amp; Results</h2>
        <p className="mt-1 text-sm text-ink-500">View grades and performance.</p>
      </div>

      <div className="space-y-4">
        {studentReportCards.map((rc) => {
          const open = openId === rc.id
          return (
            <div key={rc.id} className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
              <button
                onClick={() => setOpenId(open ? -1 : rc.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div>
                  <p className="font-display text-base font-semibold text-ink-900">{rc.term}</p>
                  <p className="mt-1 text-sm text-ink-500">
                    Average: {rc.average}% · Position: {rc.position}
                  </p>
                </div>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-ink-400 transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>

              {open && (
                <div className="border-t border-ink-100 px-6 py-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-xs uppercase tracking-wide text-ink-400">
                        <th className="py-2 font-medium">Subject</th>
                        <th className="py-2 font-medium">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100">
                      {rc.subjects.map((s) => (
                        <tr key={s.subject}>
                          <td className="py-2.5 text-ink-800">{s.subject}</td>
                          <td className="py-2.5 font-mono tabular-nums text-ink-700">{s.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="mt-4 text-xs font-semibold text-brass-600 hover:text-brass-500">
                    Download Full Report Card
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
