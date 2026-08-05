import { Layers, Plus } from 'lucide-react'
import { classesSubjectsData } from '@/data/dashboardData'

export default function ClassesSubjects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Classes &amp; Subjects</h2>
          <p className="mt-1 text-sm text-ink-500">Set up the academic structure for the session.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300">
          <Plus size={16} /> New Class
        </button>
      </div>

      <div>
        <h3 className="font-display text-base font-semibold text-ink-900">Classes</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classesSubjectsData.classes.map((cls) => (
            <div
              key={cls.id}
              className="rounded-2xl border border-ink-100 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <Layers size={16} />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold text-ink-900">{cls.name}</h4>
              <p className="mt-1 text-sm text-ink-500">Class teacher: {cls.teacher}</p>
              <div className="mt-4 flex gap-6 border-t border-ink-100 pt-4 text-sm">
                <div>
                  <p className="font-mono text-lg font-semibold tabular-nums text-ink-900">{cls.students}</p>
                  <p className="text-xs text-ink-400">Students</p>
                </div>
                <div>
                  <p className="font-mono text-lg font-semibold tabular-nums text-ink-900">{cls.subjects}</p>
                  <p className="text-xs text-ink-400">Subjects</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-base font-semibold text-ink-900">Subjects</h3>
        <div className="mt-4 overflow-hidden rounded-2xl border border-ink-100 bg-paper">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                  <th className="px-6 py-3 font-medium">Subject</th>
                  <th className="px-6 py-3 font-medium">Department</th>
                  <th className="px-6 py-3 font-medium">Classes Offered</th>
                  <th className="px-6 py-3 font-medium">Teachers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {classesSubjectsData.subjects.map((subject) => (
                  <tr key={subject.id} className="transition-colors hover:bg-mist">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{subject.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-ink-600">{subject.department}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-600">
                      {subject.classes}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-600">
                      {subject.teachers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
