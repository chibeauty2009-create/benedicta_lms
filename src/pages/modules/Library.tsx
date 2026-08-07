import { LayoutDashboard } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { libraryData } from '@/data/futureModulesData'

export default function Library() {
  return (
    <DashboardLayout
      roleLabel="Library"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Library Management</h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — catalog and circulation tracking. Mock data for now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {libraryData.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-ink-900">Catalog</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-ink-100 bg-paper">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                      <th className="px-6 py-3 font-medium">Title</th>
                      <th className="px-6 py-3 font-medium">Author</th>
                      <th className="px-6 py-3 font-medium">Category</th>
                      <th className="px-6 py-3 font-medium">Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {libraryData.books.map((b) => (
                      <tr key={b.id} className="transition-colors hover:bg-mist">
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-ink-900">{b.title}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-ink-600">{b.author}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-ink-600">{b.category}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-ink-700">
                          {b.available}/{b.copies}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <div className="border-b border-ink-100 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-ink-900">Currently Issued</h3>
            </div>
            <ul className="divide-y divide-ink-100">
              {libraryData.issued.map((i) => (
                <li key={i.id} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-ink-900">{i.borrower}</p>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {i.book} · Due {i.due}
                    </p>
                  </div>
                  <StatusBadge label={i.status} tone={i.status === 'Overdue' ? 'warning' : 'neutral'} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
