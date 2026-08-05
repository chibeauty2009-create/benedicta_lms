import { useState } from 'react'
import { CheckCircle2, Download, FileText } from 'lucide-react'
import { studentResources } from '@/data/dashboardData'

export default function LearningResources() {
  const [downloaded, setDownloaded] = useState<Set<number>>(new Set())

  const markDownloaded = (id: number) => {
    setDownloaded((prev) => new Set(prev).add(id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Learning Resources</h2>
        <p className="mt-1 text-sm text-ink-500">Download materials for offline use.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studentResources.map((r) => (
          <div
            key={r.id}
            className="flex flex-col justify-between rounded-2xl border border-ink-100 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <FileText size={16} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{r.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{r.subject}</p>
              <p className="mt-1 font-mono text-xs text-ink-400">
                {r.fileType} · {r.size}
              </p>
            </div>
            <button
              onClick={() => markDownloaded(r.id)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-xs font-semibold text-ink-700 transition hover:border-brass-400 hover:text-brass-600"
            >
              {downloaded.has(r.id) ? (
                <>
                  <CheckCircle2 size={14} className="text-verdant" /> Downloaded
                </>
              ) : (
                <>
                  <Download size={14} /> Download
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
