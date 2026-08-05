import { useState } from 'react'
import { ListChecks } from 'lucide-react'
import StatusBadge from '@/components/dashboard/StatusBadge'
import QuestionRunner, { type Question } from '@/components/dashboard/student/QuestionRunner'
import { studentQuizzes } from '@/data/dashboardData'

interface Quiz {
  id: number
  subject: string
  title: string
  status: 'Available' | 'Completed'
  score?: string
  questions?: Question[]
}

export default function OnlineQuizzes() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null)
  const quizzes = studentQuizzes as Quiz[]

  if (activeQuiz && activeQuiz.questions) {
    return (
      <QuestionRunner
        title={activeQuiz.title}
        questions={activeQuiz.questions}
        onExit={() => setActiveQuiz(null)}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Online Quizzes</h2>
        <p className="mt-1 text-sm text-ink-500">Practice assessments for each subject.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {quizzes.map((q) => (
          <div key={q.id} className="rounded-2xl border border-ink-100 bg-paper p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <ListChecks size={16} />
              </div>
              <StatusBadge label={q.status} tone={q.status === 'Available' ? 'info' : 'positive'} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{q.title}</h3>
            <p className="mt-1 text-sm text-ink-500">{q.subject}</p>

            {q.status === 'Available' ? (
              <button
                onClick={() => setActiveQuiz(q)}
                className="mt-4 rounded-full bg-brass-400 px-5 py-2 text-xs font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300"
              >
                Start Quiz
              </button>
            ) : (
              <p className="mt-4 font-mono text-sm font-semibold text-ink-700">Score: {q.score}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
