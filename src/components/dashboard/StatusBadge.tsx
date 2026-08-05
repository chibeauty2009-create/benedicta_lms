type Tone = 'positive' | 'warning' | 'neutral' | 'info'

const toneStyles: Record<Tone, string> = {
  positive: 'bg-verdant/10 text-verdant',
  warning: 'bg-brass-50 text-brass-700',
  neutral: 'bg-mist text-ink-500',
  info: 'bg-ink-900/5 text-ink-700',
}

export default function StatusBadge({ label, tone = 'neutral' }: { label: string; tone?: Tone }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneStyles[tone]}`}>
      {label}
    </span>
  )
}
