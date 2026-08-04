import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  UserCog,
  Users,
} from 'lucide-react'
import { dashboards, school } from '@/data/content'

const roleIcons: Record<string, typeof ShieldCheck> = {
  'Super Admin': ShieldCheck,
  Teacher: UserCog,
  Student: GraduationCap,
  Parent: Users,
}

type Mode = 'login' | 'forgot'

/**
 * There's no backend in this project yet, so authentication is
 * mocked: picking a role + submitting just simulates a short delay
 * and then routes to that role's dashboard. Swap `handleSubmit`'s
 * setTimeout for a real API call (and store the returned session,
 * e.g. in context or a cookie) once auth exists — the role should
 * then come back from the server response rather than a dropdown.
 */
export default function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('login')
  const [role, setRole] = useState(dashboards[0].path)
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      navigate(role)
    }, 700)
  }

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setResetSent(true)
    }, 700)
  }

  return (
    <section className="grid min-h-screen lg:grid-cols-2">
      {/* Branding panel — desktop only */}
      <div className="relative hidden overflow-hidden bg-ink-900 px-12 py-16 text-paper lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-ledger-lines" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brass-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brass-400/5 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-400 font-display text-sm font-semibold text-ink-900">
            BC
          </span>
          <h1 className="mt-10 max-w-sm font-display text-3xl font-semibold leading-tight">
            One login. Every dashboard your role needs.
          </h1>
          <p className="mt-4 max-w-sm text-ink-300">
            Sign in to {school.name}'s platform to manage classes, track progress, or stay close to
            your child's academic year — whichever role you sign in as.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {dashboards.map((d) => {
            const Icon = roleIcons[d.role]
            return (
              <div
                key={d.path}
                className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/60 px-4 py-3"
              >
                <Icon size={18} className="shrink-0 text-brass-300" />
                <span className="text-sm text-ink-100">{d.role}</span>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-paper px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          {/* Compact brand mark for mobile, where the branding panel is hidden */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-display text-xs font-semibold text-brass-300">
              BC
            </span>
            <span className="font-display text-base font-semibold text-ink-900">{school.name}</span>
          </div>

          {mode === 'login' ? (
            <>
              <span className="eyebrow">Login · Page 04 / 8</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Sign in below. Don't have an account? Contact the school office to be set up.
              </p>

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="role" className="text-sm font-medium text-ink-700">
                    I am signing in as
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                  >
                    {dashboards.map((d) => (
                      <option key={d.path} value={d.path}>
                        {d.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink-700">
                    Email Address
                  </label>
                  <div className="relative mt-2">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
                    />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@benedictacollege.edu.ng"
                      className="w-full rounded-lg border border-ink-200 py-2.5 pl-11 pr-4 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium text-ink-700">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <Lock
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
                    />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-ink-200 py-2.5 pl-11 pr-11 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-300 hover:text-ink-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-ink-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-ink-300 text-brass-500 focus:ring-brass-300"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="font-medium text-brass-600 hover:text-brass-500"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-seal transition-all hover:-translate-y-0.5 hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Signing in…' : 'Sign In'}
                </button>
              </form>

              <p className="mt-8 flex items-center justify-center gap-2 text-xs text-ink-400">
                <ShieldCheck size={14} className="text-brass-500" />
                Your login is kept private and secure.
              </p>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  setMode('login')
                  setResetSent(false)
                }}
                className="flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-900"
              >
                <ArrowLeft size={16} /> Back to login
              </button>

              <h2 className="mt-5 font-display text-3xl font-semibold text-ink-900">
                Reset your password
              </h2>

              {resetSent ? (
                <p className="mt-4 rounded-lg bg-mist p-4 text-sm leading-relaxed text-ink-600">
                  If an account exists for that email, a reset link is on its way. Check your inbox
                  (and spam folder) in a few minutes.
                </p>
              ) : (
                <>
                  <p className="mt-2 text-sm text-ink-500">
                    Enter your email and we'll send you a link to reset your password.
                  </p>
                  <form onSubmit={handleReset} className="mt-8 space-y-5">
                    <div>
                      <label htmlFor="reset-email" className="text-sm font-medium text-ink-700">
                        Email Address
                      </label>
                      <div className="relative mt-2">
                        <Mail
                          size={16}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
                        />
                        <input
                          id="reset-email"
                          type="email"
                          required
                          placeholder="you@benedictacollege.edu.ng"
                          className="w-full rounded-lg border border-ink-200 py-2.5 pl-11 pr-4 text-sm text-ink-900 outline-none transition focus:border-brass-400 focus:ring-2 focus:ring-brass-100"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? 'Sending…' : 'Send Reset Link'}
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
