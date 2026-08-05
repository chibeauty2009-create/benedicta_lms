import { useState } from 'react'
import { Clock, Monitor } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import QuestionRunner, { type Question } from '@/components/dashboard/student/QuestionRunner'
import { studentExams } from '@/data/dashboardData'

interface Exam {
  id: number
  subject: string
  title: string
  date: string
  duration: number
  status: 'Upcoming' | 'Available' | 'Completed'
  score?: string
  questions?: Question[]
}

const statusTone: Record<Exam['status'], 'positive' | 'warning' | 'info'> = {
  Available: 'warning',
  Upcoming: 'info',
  Completed: 'positive',
}

export default function CBTExaminations() {
  const [activeExam, setActiveExam] = useState<Exam | null>(null)
  const exams = studentExams as Exam[]

  if (activeExam && activeExam.questions) {
    return (
      <QuestionRunner
        title={activeExam.title}
        questions={activeExam.questions}
        onExit={() => setActiveExam(null)}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">CBT Examinations</h2>
        <p className="mt-1 text-sm text-ink-500">Sit computer-based tests.</p>
      </div>

      <div className="space-y-4">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <Monitor size={16} />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink-900">{exam.title}</p>
                <p className="mt-1 text-sm text-ink-500">{exam.subject}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400">
                  <Clock size={12} /> {exam.date} · {exam.duration} minutes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <StatusBadge label={exam.status} tone={statusTone[exam.status]} />
              {exam.status === 'Available' && exam.questions && (
                <button
                  onClick={() => setActiveExam(exam)}
                  className="rounded-full bg-brass-400 px-5 py-2 text-xs font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300"
                >
                  Start Exam
                </button>
              )}
              {exam.status === 'Completed' && (
                <span className="font-mono text-sm font-semibold text-ink-700">{exam.score}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
