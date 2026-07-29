interface ActivityItem {
  id: number
  title: string
  time: string
  tag: string
}

interface ActivityListProps {
  items: ActivityItem[]
}

export default function ActivityList({ items }: ActivityListProps) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-paper">
      <div className="border-b border-ink-100 px-6 py-4">
        <h3 className="font-display text-base font-semibold text-ink-900">Recent Activity</h3>
      </div>
      <ul className="divide-y divide-ink-100">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink-800">{item.title}</p>
              <p className="mt-1 text-xs text-ink-400">{item.time}</p>
            </div>
            <span className="shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-500">
              {item.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
