import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import StatCard from '@/components/dashboard/StatCard'
import { adminAttendance } from '@/data/dashboardData'

export default function AttendanceOverview() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">
            Attendance &amp; Reports
          </h2>
          <p className="mt-1 text-sm text-ink-500">School-wide, for {adminAttendance.date}.</p>
        </div>
        <select
          defaultValue="today"
          className="rounded-lg border border-ink-200 bg-paper px-4 py-2 text-sm text-ink-700 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="term">This Term</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {adminAttendance.summary.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="border-b border-ink-100 px-6 py-4">
          <h3 className="font-display text-base font-semibold text-ink-900">By Class</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                <th className="px-6 py-3 font-medium">Class</th>
                <th className="px-6 py-3 font-medium">Class Teacher</th>
                <th className="px-6 py-3 font-medium">Enrolled</th>
                <th className="px-6 py-3 font-medium">Present</th>
                <th className="px-6 py-3 font-medium">Rate</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {adminAttendance.classes.map((cls) => (
                <tr key={cls.id} className="transition-colors hover:bg-mist">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{cls.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-ink-600">{cls.teacher}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-600">
                    {cls.enrolled}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-600">
                    {cls.present}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-mist">
                        <div
                          className="h-full rounded-full bg-brass-400"
                          style={{ width: `${cls.rate}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-ink-500">{cls.rate}%</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {cls.submitted === false ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brass-50 px-3 py-1 text-xs font-medium text-brass-700">
                        <AlertTriangle size={12} /> Not submitted
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-verdant/10 px-3 py-1 text-xs font-medium text-verdant">
                        <CheckCircle2 size={12} /> Submitted
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
