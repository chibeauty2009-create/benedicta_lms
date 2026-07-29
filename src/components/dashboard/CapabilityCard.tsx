import { ArrowUpRight, LayoutGrid } from 'lucide-react'

interface CapabilityCardProps {
  index: number
  title: string
  description: string
  onOpen: () => void
}

export default function CapabilityCard({ index, title, description, onOpen }: CapabilityCardProps) {
  return (
    <button
      onClick={onOpen}
      className="group flex flex-col items-start rounded-2xl border border-ink-100 bg-paper p-6 text-left transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-ink-900">
          <LayoutGrid size={16} />
        </div>
        <ArrowUpRight
          size={16}
          className="text-ink-300 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <span className="mt-4 font-mono text-xs text-ink-300">0{index}</span>
      <h3 className="mt-1 font-display text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
    </button>
  )
}
