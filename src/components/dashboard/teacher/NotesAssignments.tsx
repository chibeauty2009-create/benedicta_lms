import { useState, type FormEvent } from 'react'
import { FileText, ListChecks, Plus, Upload } from 'lucide-react'
import { teacherMaterialClasses, teacherMaterials } from '@/data/dashboardData'

interface Material {
  id: number
  title: string
  type: 'Note' | 'Assignment'
  cls: string
  date: string
  due?: string
}

export default function NotesAssignments() {
  const [materials, setMaterials] = useState<Material[]>(teacherMaterials as Material[])
  const [type, setType] = useState<'Note' | 'Assignment'>('Note')

  const handleUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const title = String(data.get('title') || '').trim()
    const cls = String(data.get('cls') || teacherMaterialClasses[0])
    const due = String(data.get('due') || '')
    if (!title) return

    setMaterials((prev) => [
      {
        id: Date.now(),
        title,
        type,
        cls,
        date: 'Just now',
        ...(type === 'Assignment' && due ? { due } : {}),
      },
      ...prev,
    ])
    form.reset()
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Notes &amp; Assignments</h2>
        <p className="mt-1 text-sm text-ink-500">Share learning materials with your classes.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Upload form */}
        <form
          onSubmit={handleUpload}
          className="space-y-4 rounded-2xl border border-ink-100 bg-paper p-6 lg:col-span-2"
        >
          <h3 className="font-display text-base font-semibold text-ink-900">Upload New</h3>

          <div className="flex gap-2 rounded-full bg-mist p-1">
            {(['Note', 'Assignment'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  type === t ? 'bg-paper text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div>
            <label htmlFor="title" className="text-sm font-medium text-ink-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              required
              type="text"
              placeholder="e.g. Assignment 5: Inequalities"
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
            />
          </div>

          <div>
            <label htmlFor="cls" className="text-sm font-medium text-ink-700">
              Class
            </label>
            <select
              id="cls"
              name="cls"
              className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
            >
              {teacherMaterialClasses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {type === 'Assignment' && (
            <div>
              <label htmlFor="due" className="text-sm font-medium text-ink-700">
                Due Date
              </label>
              <input
                id="due"
                name="due"
                type="text"
                placeholder="e.g. Aug 15, 2026"
                className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
              />
            </div>
          )}

          <div className="rounded-lg border border-dashed border-ink-200 px-4 py-6 text-center text-xs text-ink-400">
            <Upload className="mx-auto text-ink-300" size={20} />
            File attachment (mock — no upload wired up yet)
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300"
          >
            <Plus size={16} /> Post to Class
          </button>
        </form>

        {/* Materials list */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
            <ul className="divide-y divide-ink-100">
              {materials.map((m) => (
                <li key={m.id} className="flex items-start gap-4 px-6 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                    {m.type === 'Note' ? <FileText size={15} /> : <ListChecks size={15} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-ink-900">{m.title}</p>
                      <span className="rounded-full bg-mist px-2.5 py-0.5 text-[11px] font-medium text-ink-500">
                        {m.type}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ink-400">
                      {m.cls} · Posted {m.date}
                      {m.due ? ` · Due ${m.due}` : ''}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
