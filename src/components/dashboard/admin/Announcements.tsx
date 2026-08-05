import { useState, type FormEvent } from 'react'
import { CheckCircle2, Megaphone, Send } from 'lucide-react'
import { announcementAudiences, announcementsData } from '@/data/dashboardData'

export default function Announcements() {
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
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Announcements</h2>
        <p className="mt-1 text-sm text-ink-500">Broadcast messages to all users.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Compose */}
        <div className="rounded-2xl border border-ink-100 bg-paper p-6 lg:col-span-2">
          <h3 className="font-display text-base font-semibold text-ink-900">New Announcement</h3>

          {sent ? (
            <div className="mt-8 flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="text-verdant" size={36} />
              <p className="mt-3 text-sm font-medium text-ink-900">Announcement sent.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm font-medium text-brass-600 hover:text-brass-500"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="mt-5 space-y-4">
              <div>
                <label htmlFor="a-title" className="text-sm font-medium text-ink-700">
                  Title
                </label>
                <input
                  id="a-title"
                  required
                  type="text"
                  placeholder="e.g. Founders Day Rehearsal"
                  className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                />
              </div>
              <div>
                <label htmlFor="a-audience" className="text-sm font-medium text-ink-700">
                  Audience
                </label>
                <select
                  id="a-audience"
                  defaultValue={announcementAudiences[0]}
                  className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                >
                  {announcementAudiences.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="a-message" className="text-sm font-medium text-ink-700">
                  Message
                </label>
                <textarea
                  id="a-message"
                  required
                  rows={4}
                  placeholder="Write the announcement…"
                  className="mt-2 w-full resize-none rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Send Announcement'}
                {!sending && <Send size={16} />}
              </button>
            </form>
          )}
        </div>

        {/* Recent announcements */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-base font-semibold text-ink-900">Recently Sent</h3>
          <div className="mt-4 space-y-4">
            {announcementsData.map((a) => (
              <div key={a.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                    <Megaphone size={15} />
                  </div>
                  <span className="font-mono text-xs text-ink-400">{a.date}</span>
                </div>
                <h4 className="mt-3 font-display text-base font-semibold text-ink-900">{a.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{a.excerpt}</p>
                <span className="mt-3 inline-block rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-500">
                  {a.audience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
