import { parentChildren } from '@/data/dashboardData'

interface ChildSelectorProps {
  activeId: number
  onChange: (id: number) => void
}

export default function ChildSelector({ activeId, onChange }: ChildSelectorProps) {
  return (
    <div className="flex gap-2 rounded-full bg-mist p-1 w-fit">
      {parentChildren.map((child) => (
        <button
          key={child.id}
          onClick={() => onChange(child.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeId === child.id ? 'bg-paper text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-800'
          }`}
        >
          {child.name} <span className="text-xs text-ink-400">({child.cls})</span>
        </button>
      ))}
    </div>
  )
}
