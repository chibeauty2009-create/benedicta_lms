import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { programs } from '@/data/content'

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [reference, setReference] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setReference(`BC-${Math.floor(100000 + Math.random() * 900000)}`)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="rounded-2xl bg-paper p-8 shadow-seal sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="text-verdant" size={44} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                Application received
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                Thank you for applying to The Benedicta College. Your reference number is
              </p>
              <p className="mt-2 font-mono text-lg font-semibold tracking-wide text-brass-600">
                {reference}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                Our admissions team will contact you within 3 working days with next steps.
              </p>
            </div>
          ) : (
            <>
              <span className="eyebrow">Admissions</span>
              <h1 className="mt-3 font-display text-3xl font-semibold text-ink-900">
                Apply for Admission
              </h1>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the form below and our admissions team will reach out to guide you through
                the next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-brass-500">
                    Student Details
                  </h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="student-name" className="text-sm font-medium text-ink-700">
                        Student's Full Name
                      </label>
                      <input
                        id="student-name"
                        required
                        type="text"
                        placeholder="e.g. Tobi Alade"
                        className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="text-sm font-medium text-ink-700">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        required
                        type="date"
                        className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="gender" className="text-sm font-medium text-ink-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="program" className="text-sm font-medium text-ink-700">
                        Applying For
                      </label>
                      <select
                        id="program"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      >
                        <option value="" disabled>
                          Select a level
                        </option>
                        {programs.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="previous-school" className="text-sm font-medium text-ink-700">
                      Previous School <span className="text-ink-400">(optional)</span>
                    </label>
                    <input
                      id="previous-school"
                      type="text"
                      placeholder="e.g. Sunrise Nursery & Primary School"
                      className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                </div>

                <div className="border-t border-ink-100 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-brass-500">
                    Parent / Guardian Details
                  </h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="guardian-name" className="text-sm font-medium text-ink-700">
                        Full Name
                      </label>
                      <input
                        id="guardian-name"
                        required
                        type="text"
                        placeholder="e.g. Mrs. Adaeze Okonkwo"
                        className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="guardian-phone" className="text-sm font-medium text-ink-700">
                        Phone Number
                      </label>
                      <input
                        id="guardian-phone"
                        required
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="guardian-email" className="text-sm font-medium text-ink-700">
                      Email Address
                    </label>
                    <input
                      id="guardian-email"
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="address" className="text-sm font-medium text-ink-700">
                      Home Address
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={2}
                      placeholder="Street, area, city"
                      className="mt-2 w-full resize-none rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Submitting…' : 'Submit Application'}
                  {!submitting && <Send size={16} />}
                </button>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}
