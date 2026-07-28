import { Bell, Calendar } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { events, news } from '@/data/content'

export default function NewsEvents() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* News & Announcements */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-2 text-brass-500">
                <Bell size={18} />
                <span className="eyebrow">News &amp; Announcements</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900">
                What's happening at Benedicta
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6">
              {news.map((item, i) => (
                <Reveal
                  key={item.id}
                  delay={i * 0.08}
                  className="group rounded-xl border border-ink-100 bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-seal"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-wide text-brass-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-900 group-hover:text-brass-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.excerpt}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2 text-brass-500">
                <Calendar size={18} />
                <span className="eyebrow">Upcoming Events</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">
                Mark your calendar
              </h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {events.map((event, i) => (
                <Reveal
                  key={event.id}
                  delay={i * 0.08}
                  className="flex items-center gap-4 rounded-xl bg-ink-900 p-4 text-paper transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-brass-400 text-ink-900">
                    <span className="text-lg font-bold leading-none">{event.day}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide">
                      {event.month}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{event.title}</p>
                    <p className="mt-1 text-xs text-ink-300">{event.time}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
