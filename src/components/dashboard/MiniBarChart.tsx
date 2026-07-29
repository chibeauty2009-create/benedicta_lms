interface MiniBarChartProps {
  label: string
  data: { label: string; value: number }[]
  max?: number
}

export default function MiniBarChart({ label, data, max = 100 }: MiniBarChartProps) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-paper p-6">
      <h3 className="font-display text-base font-semibold text-ink-900">{label}</h3>
      <div className="mt-6 flex h-40 items-end gap-4">
        {data.map((item) => (
          <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
            <span className="font-mono text-xs text-ink-400">{item.value}</span>
            <div
              className="w-full rounded-t-md bg-brass-400 transition-all"
              style={{ height: `${Math.max((item.value / max) * 100, 4)}%` }}
            />
            <span className="text-xs font-medium text-ink-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
