import { useState } from 'react'
import { Plus, Search } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { peopleData } from '@/data/dashboardData'

type Tab = 'students' | 'teachers' | 'parents'

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: 'students', label: 'Students', count: peopleData.students.length },
  { id: 'teachers', label: 'Teachers', count: peopleData.teachers.length },
  { id: 'parents', label: 'Parents', count: peopleData.parents.length },
]

export default function PeopleManagement() {
  const [tab, setTab] = useState<Tab>('students')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">
            Students, Teachers &amp; Parents
          </h2>
          <p className="mt-1 text-sm text-ink-500">Central records for every person in the school.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300">
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 rounded-full bg-mist p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.id ? 'bg-paper text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              {t.label} <span className="font-mono text-xs text-ink-400">({t.count})</span>
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" />
          <input
            type="text"
            placeholder={`Search ${tab}…`}
            className="w-56 rounded-full border border-ink-200 bg-paper py-2 pl-9 pr-3 text-sm text-ink-700 outline-none transition focus:border-brass-400"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="overflow-x-auto">
          {tab === 'students' && (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Class</th>
                  <th className="px-6 py-3 font-medium">Guardian</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {peopleData.students.map((s) => (
                  <tr key={s.id} className="transition-colors hover:bg-mist">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{s.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-ink-600">{s.cls}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-ink-600">{s.guardian}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <StatusBadge label={s.status} tone={s.status === 'Active' ? 'positive' : 'warning'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'teachers' && (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Primary Subject</th>
                  <th className="px-6 py-3 font-medium">Classes</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {peopleData.teachers.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-mist">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{t.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-ink-600">{t.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-600">
                      {t.classes}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <StatusBadge label={t.status} tone={t.status === 'Active' ? 'positive' : 'warning'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'parents' && (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Child(ren)</th>
                  <th className="px-6 py-3 font-medium">Contact</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {peopleData.parents.map((p) => (
                  <tr key={p.id} className="transition-colors hover:bg-mist">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{p.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-ink-600">{p.children}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-ink-600">
                      {p.contact}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <StatusBadge label={p.status} tone="positive" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
