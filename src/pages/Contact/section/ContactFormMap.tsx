import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { contact, enquiryReasons } from '@/data/content'

/**
 * The form is fully built and validated on the client, but doesn't
 * call an API yet — there's no backend in this project. Wire
 * `handleSubmit` up to your endpoint (or a service like Formspree)
 * when one exists; the success state below is ready to go either way.
 */
export default function ContactFormMap() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Enquiry form */}
          <Reveal className="rounded-2xl bg-paper p-8 shadow-seal">
            <span className="eyebrow">Send an Enquiry</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">
              We usually reply within one working day
            </h2>

            {submitted ? (
              <div className="mt-10 flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="text-verdant" size={40} />
                <p className="mt-4 font-display text-lg font-semibold text-ink-900">
                  Thank you — your enquiry has been sent.
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  A member of our admissions team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-ink-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="text-sm font-medium text-ink-700">
                    Reason for Enquiry
                  </label>
                  <select
                    id="reason"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    {enquiryReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us a little about your enquiry..."
                    className="mt-2 w-full resize-none rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                  {!submitting && <Send size={16} />}
                </button>
              </form>
            )}
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1} className="flex flex-col">
            <span className="eyebrow">Find Us</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">{contact.address}</h2>
            <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-ink-100 shadow-seal">
              <iframe
                title="The Benedicta College location map"
                src={contact.mapEmbedSrc}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
              />
            </div>
            <a
              href={contact.mapLinkHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 text-sm font-medium text-brass-600 hover:text-brass-500"
            >
              Open in full map →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
