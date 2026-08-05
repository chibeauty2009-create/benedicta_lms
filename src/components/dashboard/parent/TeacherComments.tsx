import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import ChildSelector from '@/components/dashboard/parent/ChildSelector'
import { parentChildren, parentComments } from '@/data/dashboardData'

export default function TeacherComments() {
  const [childId, setChildId] = useState(parentChildren[0].id)
  const comments = parentComments[childId]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Teacher Comments</h2>
        <p className="mt-1 text-sm text-ink-500">Feedback from teachers.</p>
      </div>

      <ChildSelector activeId={childId} onChange={setChildId} />

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <MessageCircle size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display text-base font-semibold text-ink-900">{c.teacher}</p>
                  <span className="font-mono text-xs text-ink-400">{c.date}</span>
                </div>
                <p className="text-xs font-medium text-brass-500">{c.subject}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.comment}</p>
              </div>
            </div>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-sm text-ink-400">No comments yet this term.</p>
        )}
      </div>
    </div>
  )
}
