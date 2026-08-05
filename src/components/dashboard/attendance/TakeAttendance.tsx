import { useMemo, useState } from 'react'
import { CheckCircle2, Save } from 'lucide-react'
import { teacherClasses, teacherRoster } from '@/data/dashboardData'

type Status = 'present' | 'absent' | 'late'

const statusStyles: Record<Status, string> = {
  present: 'bg-verdant text-paper border-verdant',
  absent: 'bg-ink-900 text-paper border-ink-900',
  late: 'bg-brass-400 text-ink-900 border-brass-400',
}

const statusLabels: Record<Status, string> = {
  present: 'Present',
  absent: 'Absent',
  late: 'Late',
}

export default function TakeAttendance() {
  const [selectedClass, setSelectedClass] = useState(teacherClasses[0])
  const [statuses, setStatuses] = useState<Record<number, Status>>(() =>
    Object.fromEntries(teacherRoster.map((s) => [s.id, 'present' as Status])),
  )
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const counts = useMemo(() => {
    const values = Object.values(statuses)
    return {
      present: values.filter((v) => v === 'present').length,
      absent: values.filter((v) => v === 'absent').length,
      late: values.filter((v) => v === 'late').length,
    }
  }, [statuses])

  const setStatus = (id: number, status: Status) => {
    setSaved(false)
    setStatuses((prev) => ({ ...prev, [id]: status }))
  }

  const markAll = (status: Status) => {
    setSaved(false)
    setStatuses(Object.fromEntries(teacherRoster.map((s) => [s.id, status])))
  }

  const handleSave = () => {
    setSaving(true)
    window.setTimeout(() => {
      setSaving(false)
      setSaved(true)
    }, 600)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink-900">Digital Attendance</h2>
          <p className="mt-1 text-sm text-ink-500">Mark today's attendance for your class.</p>
        </div>
        <select
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value)
            setSaved(false)
          }}
          className="rounded-lg border border-ink-200 bg-paper px-4 py-2 text-sm text-ink-700 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
        >
          {teacherClasses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="text-ink-500">Quick actions:</span>
        <button
          onClick={() => markAll('present')}
          className="rounded-full border border-ink-200 px-4 py-1.5 font-medium text-ink-700 transition hover:border-verdant hover:text-verdant"
        >
          Mark all present
        </button>
        <button
          onClick={() => markAll('absent')}
          className="rounded-full border border-ink-200 px-4 py-1.5 font-medium text-ink-700 transition hover:border-ink-900"
        >
          Mark all absent
        </button>
        <span className="ml-auto font-mono text-xs text-ink-400">
          {counts.present} present · {counts.absent} absent · {counts.late} late
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <ul className="divide-y divide-ink-100">
          {teacherRoster.map((student) => (
            <li key={student.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm font-medium text-ink-800">{student.name}</span>
              <div className="flex gap-2">
                {(['present', 'late', 'absent'] as Status[]).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatus(student.id, status)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      statuses[student.id] === status
                        ? statusStyles[status]
                        : 'border-ink-200 text-ink-500 hover:border-ink-400'
                    }`}
                  >
                    {statusLabels[status]}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save Attendance'}
          {!saving && <Save size={16} />}
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-verdant">
            <CheckCircle2 size={16} /> Saved for {selectedClass}
          </span>
        )}
      </div>
    </div>
  )
}
