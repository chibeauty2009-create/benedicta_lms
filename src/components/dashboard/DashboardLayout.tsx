import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Bell, LogOut, Menu, Search, X, type LucideIcon } from 'lucide-react'
import { school } from '@/data/content'

export interface DashboardNavItem {
  label: string
  icon: LucideIcon
}

interface DashboardLayoutProps {
  roleLabel: string
  userName: string
  navItems: DashboardNavItem[]
  children: (goToSection: (index: number) => void) => ReactNode
}

/**
 * Shared shell for every role dashboard: sidebar nav + topbar +
 * content area. Only the first nav item ("Overview") renders real
 * content (passed in as `children`); the rest show a lightweight
 * "section coming soon" panel — swap those in one at a time as each
 * capability gets built out.
 */
export default function DashboardLayout({ roleLabel, userName, navItems, children }: DashboardLayoutProps) {
  const [active, setActive] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const activeItem = navItems[active]

  return (
    <div className="flex min-h-screen bg-mist">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-ink-900 text-paper transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-400 font-display text-xs font-semibold text-ink-900">
            BC
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight">{school.name}</p>
            <p className="text-xs text-ink-400">{roleLabel} Dashboard</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => {
                setActive(i)
                setSidebarOpen(false)
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                i === active
                  ? 'bg-brass-400 text-ink-900'
                  : 'text-ink-200 hover:bg-ink-800 hover:text-paper'
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-1 border-t border-ink-700 px-3 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-200 hover:bg-ink-800 hover:text-paper"
          >
            Back to Website
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-200 hover:bg-ink-800 hover:text-paper"
          >
            <LogOut size={16} />
            Log Out
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink-950/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main column */}
      <div className="flex min-h-screen flex-1 flex-col lg:pl-0">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-ink-100 bg-paper px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className="text-ink-700 lg:hidden"
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="font-display text-lg font-semibold text-ink-900">{activeItem.label}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="text"
                placeholder="Search…"
                className="w-48 rounded-full border border-ink-200 bg-mist py-2 pl-9 pr-3 text-sm text-ink-700 outline-none transition focus:border-brass-400 focus:bg-paper"
              />
            </div>
            <button aria-label="Notifications" className="relative text-ink-600 hover:text-ink-900">
              <Bell size={19} />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brass-400" />
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-brass-300">
                {userName.charAt(0)}
              </span>
              <div className="hidden leading-tight sm:block">
                <p className="text-sm font-medium text-ink-900">{userName}</p>
                <p className="text-xs text-ink-400">{roleLabel}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-6 py-8">
          {active === 0 ? (
            children((index) => setActive(index))
          ) : (
            <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-paper text-center">
              <p className="eyebrow">Coming soon</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">
                {activeItem.label}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-ink-500">
                This section isn't built out yet — the Overview tab is the one with working content
                so far.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
