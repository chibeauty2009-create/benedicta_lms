import { useState, type FormEvent } from 'react'
import { CheckCircle2, CreditCard } from 'lucide-react'
import ChildSelector from '@/components/dashboard/parent/ChildSelector'
import { parentChildren, parentFees } from '@/data/dashboardData'

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString()}`
}

export default function PaySchoolFees() {
  const [childId, setChildId] = useState(parentChildren[0].id)
  const [paying, setPaying] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paidJustNow, setPaidJustNow] = useState(false)

  const fees = parentFees[childId]
  const balance = fees.expected - fees.paid
  const percentPaid = Math.round((fees.paid / fees.expected) * 100)

  const handlePay = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setProcessing(true)
    window.setTimeout(() => {
      setProcessing(false)
      setPaying(false)
      setPaidJustNow(true)
    }, 900)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">Pay School Fees</h2>
        <p className="mt-1 text-sm text-ink-500">Check balance and pay online.</p>
      </div>

      <ChildSelector
        activeId={childId}
        onChange={(id) => {
          setChildId(id)
          setPaying(false)
          setPaidJustNow(false)
        }}
      />

      <div className="rounded-2xl border border-ink-100 bg-paper p-6">
        <p className="text-sm text-ink-500">{fees.term}</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Balance Due</p>
            <p className="mt-1 font-mono text-3xl font-semibold tabular-nums text-ink-900">
              {formatNaira(balance)}
            </p>
          </div>
          <p className="text-sm text-ink-500">
            {formatNaira(fees.paid)} of {formatNaira(fees.expected)} paid
          </p>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-verdant" style={{ width: `${percentPaid}%` }} />
        </div>

        {paidJustNow ? (
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-verdant/10 px-4 py-3 text-sm font-medium text-verdant">
            <CheckCircle2 size={16} /> Payment received — thank you!
          </div>
        ) : balance > 0 ? (
          paying ? (
            <form onSubmit={handlePay} className="mt-5 space-y-4 border-t border-ink-100 pt-5">
              <div>
                <label htmlFor="amount" className="text-sm font-medium text-ink-700">
                  Amount to Pay
                </label>
                <input
                  id="amount"
                  type="number"
                  required
                  defaultValue={balance}
                  max={balance}
                  className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                />
              </div>
              <div>
                <label htmlFor="method" className="text-sm font-medium text-ink-700">
                  Payment Method
                </label>
                <select
                  id="method"
                  defaultValue="Card Payment"
                  className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                >
                  <option>Card Payment</option>
                  <option>Bank Transfer</option>
                  <option>USSD</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-6 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {processing ? 'Processing…' : 'Confirm Payment'}
                </button>
                <button
                  type="button"
                  onClick={() => setPaying(false)}
                  className="rounded-full border border-ink-200 px-6 py-2.5 text-sm font-medium text-ink-600 transition hover:border-ink-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setPaying(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brass-400 px-6 py-2.5 text-sm font-semibold text-ink-900 shadow-seal transition hover:bg-brass-300"
            >
              <CreditCard size={16} /> Pay Now
            </button>
          )
        ) : (
          <p className="mt-5 text-sm font-medium text-verdant">Fully paid for this term. 🎉</p>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper">
        <div className="border-b border-ink-100 px-6 py-4">
          <h3 className="font-display text-base font-semibold text-ink-900">Payment History</h3>
        </div>
        <ul className="divide-y divide-ink-100">
          {fees.history.map((h) => (
            <li key={h.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-medium text-ink-800">{formatNaira(h.amount)}</p>
                <p className="mt-0.5 text-xs text-ink-400">{h.method}</p>
              </div>
              <span className="font-mono text-xs text-ink-500">{h.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
