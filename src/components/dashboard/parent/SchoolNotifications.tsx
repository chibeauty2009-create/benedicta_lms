import { useState } from 'react'
import { Bell } from 'lucide-react'
import { parentNotifications } from '@/data/dashboardData'

interface Notification {
  id: number
  title: string
  time: string
  read: boolean
}

export default function SchoolNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(parentNotifications)
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const markRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const visible = filter === 'unread' ? notifications.filter((n) => !n.read) : notifications
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">School Notifications</h2>
          <p className="mt-1 text-sm text-ink-500">School-wide updates.</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs font-semibold text-brass-600 hover:text-brass-500"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="flex gap-2 rounded-full bg-mist p-1 w-fit">
        {(['all', 'unread'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
              filter === f ? 'bg-paper text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-800'
            }`}
          >
            {f} {f === 'unread' && unreadCount > 0 && `(${unreadCount})`}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <ul className="divide-y divide-ink-100">
          {visible.map((n) => (
            <li
              key={n.id}
              onClick={() => markRead(n.id)}
              className={`flex cursor-pointer items-center gap-4 px-6 py-4 transition-colors hover:bg-mist ${
                !n.read ? 'bg-brass-50/40' : ''
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <Bell size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-sm ${!n.read ? 'font-semibold text-ink-900' : 'text-ink-700'}`}>
                  {n.title}
                </p>
                <p className="mt-0.5 text-xs text-ink-400">{n.time}</p>
              </div>
              {!n.read && <span className="h-2 w-2 shrink-0 rounded-full bg-brass-400" />}
            </li>
          ))}
          {visible.length === 0 && (
            <li className="px-6 py-10 text-center text-sm text-ink-400">You're all caught up.</li>
          )}
        </ul>
      </div>
    </div>
  )
}
