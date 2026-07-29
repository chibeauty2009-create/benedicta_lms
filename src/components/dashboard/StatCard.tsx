interface StatCardProps {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-paper p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
      <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-ink-900">{value}</p>
    </div>
  )
}
