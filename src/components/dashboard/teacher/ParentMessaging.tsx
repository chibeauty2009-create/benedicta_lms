import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { teacherConversations } from '@/data/dashboardData'

interface Message {
  id: number
  from: 'parent' | 'teacher'
  text: string
  time: string
}

interface Conversation {
  id: number
  parent: string
  student: string
  unread: boolean
  messages: Message[]
}

export default function ParentMessaging() {
  const [conversations, setConversations] = useState<Conversation[]>(
    teacherConversations as Conversation[],
  )
  const [activeId, setActiveId] = useState(conversations[0].id)
  const [draft, setDraft] = useState('')

  const active = conversations.find((c) => c.id === activeId)!

  const openConversation = (id: number) => {
    setActiveId(id)
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: false } : c)))
  }

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!draft.trim()) return
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [...c.messages, { id: Date.now(), from: 'teacher', text: draft.trim(), time: 'Just now' }],
            }
          : c,
      ),
    )
    setDraft('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Parent Messaging</h2>
        <p className="mt-1 text-sm text-ink-500">Message parents directly.</p>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-ink-100 bg-paper lg:grid-cols-[280px_1fr]">
        {/* Conversation list */}
        <div className="divide-y divide-ink-100 border-b border-ink-100 lg:border-b-0 lg:border-r">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => openConversation(c.id)}
              className={`flex w-full items-start justify-between gap-2 px-5 py-4 text-left transition-colors ${
                c.id === activeId ? 'bg-mist' : 'hover:bg-mist/60'
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink-900">{c.parent}</p>
                <p className="mt-0.5 truncate text-xs text-ink-400">Re: {c.student}</p>
                <p className="mt-1 truncate text-xs text-ink-400">
                  {c.messages[c.messages.length - 1]?.text}
                </p>
              </div>
              {c.unread && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass-400" />}
            </button>
          ))}
        </div>

        {/* Thread */}
        <div className="flex flex-col">
          <div className="border-b border-ink-100 px-6 py-4">
            <p className="font-display text-base font-semibold text-ink-900">{active.parent}</p>
            <p className="text-xs text-ink-400">Regarding {active.student}</p>
          </div>

          <div className="flex-1 space-y-3 px-6 py-5">
            {active.messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'teacher' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === 'teacher'
                      ? 'rounded-br-sm bg-ink-900 text-paper'
                      : 'rounded-bl-sm bg-mist text-ink-800'
                  }`}
                >
                  <p>{m.text}</p>
                  <p
                    className={`mt-1 text-[10px] ${
                      m.from === 'teacher' ? 'text-ink-300' : 'text-ink-400'
                    }`}
                  >
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-3 border-t border-ink-100 px-6 py-4">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-400 text-ink-900 transition hover:bg-brass-300"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
