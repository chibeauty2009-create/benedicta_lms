import { useState, type FormEvent } from 'react'
import { LayoutDashboard, Send } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { notificationsCenterData } from '@/data/futureModulesData'

export default function NotificationsCenter() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 700)
  }

  return (
    <DashboardLayout
      roleLabel="Notifications"
      userName="Mrs. Chiamaka Nwosu"
      navItems={[{ label: 'Overview', icon: LayoutDashboard }]}
    >
      {() => (
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              SMS &amp; Email Notifications
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Phase 2 module — bulk messaging to parents and staff. Mock data for now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notificationsCenterData.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <form
              onSubmit={handleSend}
              className="space-y-4 rounded-2xl border border-ink-100 bg-paper p-6 lg:col-span-2"
            >
              <h3 className="font-display text-base font-semibold text-ink-900">Send Notification</h3>

              {sent ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <p className="text-sm font-medium text-ink-900">Notification queued for delivery.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-medium text-brass-600 hover:text-brass-500"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="n-audience" className="text-sm font-medium text-ink-700">
                      Audience
                    </label>
                    <select
                      id="n-audience"
                      className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    >
                      <option>All Parents</option>
                      <option>All Staff</option>
                      <option>A Specific Class</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="n-channel" className="text-sm font-medium text-ink-700">
                      Channel
                    </label>
                    <select
                      id="n-channel"
                      className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    >
                      <option>SMS + Email</option>
                      <option>SMS Only</option>
                      <option>Email Only</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="n-message" className="text-sm font-medium text-ink-700">
                      Message
                    </label>
                    <textarea
                      id="n-message"
                      required
                      rows={4}
                      placeholder="Write the message…"
                      className="mt-2 w-full resize-none rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Send Now'}
                    {!sending && <Send size={16} />}
                  </button>
                </>
              )}
            </form>

            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper lg:col-span-3">
              <div className="border-b border-ink-100 px-6 py-4">
                <h3 className="font-display text-base font-semibold text-ink-900">Delivery Log</h3>
              </div>
              <ul className="divide-y divide-ink-100">
                {notificationsCenterData.log.map((entry) => (
                  <li key={entry.id} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-ink-900">{entry.audience}</p>
                      <p className="mt-0.5 text-xs text-ink-400">
                        {entry.channel} · {entry.recipients} recipients · {entry.time}
                      </p>
                    </div>
                    <StatusBadge
                      label={entry.status}
                      tone={entry.status === 'Delivered' ? 'positive' : 'warning'}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
