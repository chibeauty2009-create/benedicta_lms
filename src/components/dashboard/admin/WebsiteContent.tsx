import { ExternalLink, Globe, PenSquare } from 'lucide-react'
import { websiteContentData } from '@/data/dashboardData'

export default function WebsiteContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Website Content</h2>
          <p className="mt-1 text-sm text-ink-500">Control over the public site content.</p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600"
        >
          View Live Site <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {websiteContentData.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-4 rounded-2xl border border-ink-100 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <Globe size={16} />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-brass-500">
                  {item.page} Page
                </span>
                <h3 className="mt-1 font-display text-base font-semibold text-ink-900">
                  {item.section}
                </h3>
                <p className="mt-1 text-xs text-ink-400">Updated {item.updated}</p>
              </div>
            </div>
            <button
              aria-label={`Edit ${item.section}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-brass-400 hover:text-brass-600"
            >
              <PenSquare size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
