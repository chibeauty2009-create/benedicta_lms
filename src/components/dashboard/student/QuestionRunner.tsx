import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export interface Question {
  id: number
  text: string
  options: string[]
  answer: number
}

interface QuestionRunnerProps {
  title: string
  questions: Question[]
  onExit: () => void
}

/**
 * A small self-contained "sit the test" flow: one question at a
 * time, a progress dots strip, then a results screen with a
 * per-question breakdown. Used for both practice quizzes and CBT
 * exams — the two just pass different copy/questions in.
 */
export default function QuestionRunner({ title, questions, onExit }: QuestionRunnerProps) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const question = questions[index]
  const isLast = index === questions.length - 1
  const answeredCount = Object.keys(answers).length

  const selectAnswer = (choice: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: choice }))
  }

  const score = questions.filter((q) => answers[q.id] === q.answer).length

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-ink-100 bg-paper p-8 text-center">
          <p className="eyebrow">Result</p>
          <p className="mt-3 font-display text-4xl font-semibold text-ink-900">
            {score}/{questions.length}
          </p>
          <p className="mt-2 text-sm text-ink-500">{title}</p>
        </div>

        <div className="space-y-3">
          {questions.map((q, i) => {
            const correct = answers[q.id] === q.answer
            return (
              <div key={q.id} className="rounded-2xl border border-ink-100 bg-paper p-5">
                <div className="flex items-start gap-3">
                  {correct ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-verdant" />
                  ) : (
                    <XCircle size={18} className="mt-0.5 shrink-0 text-brass-600" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-ink-900">
                      {i + 1}. {q.text}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">
                      Your answer: {q.options[answers[q.id]] ?? 'Skipped'}
                      {!correct && <> · Correct: {q.options[q.answer]}</>}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={onExit}
          className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-700"
        >
          Back to List
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-500">
          Question {index + 1} of {questions.length}
        </p>
        <div className="flex gap-1.5">
          {questions.map((q, i) => (
            <span
              key={q.id}
              className={`h-1.5 w-6 rounded-full ${
                i === index ? 'bg-brass-400' : answers[q.id] !== undefined ? 'bg-ink-300' : 'bg-ink-100'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-ink-100 bg-paper p-8">
        <h3 className="font-display text-lg font-semibold text-ink-900">{question.text}</h3>
        <div className="mt-6 space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={`w-full rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-colors ${
                answers[question.id] === i
                  ? 'border-brass-400 bg-brass-50 text-ink-900'
                  : 'border-ink-200 text-ink-700 hover:border-ink-400'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-700 transition hover:border-ink-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-xs font-mono text-ink-400">{answeredCount} answered</span>
        {isLast ? (
          <button
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-brass-400 px-6 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
            className="rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
