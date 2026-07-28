import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { nav, school } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-400 font-display text-sm font-semibold text-ink-900">
                BC
              </span>
              <span className="font-display text-lg font-semibold text-paper">{school.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-200">
              {school.tagline} A single platform connecting administrators, teachers, students, and
              parents — for learning, records, and communication that never miss a beat.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-brass-300">Site</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-ink-200 hover:text-brass-300">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="text-ink-200 hover:text-brass-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-brass-300">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-200">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brass-300" />
                12 Fountain Road, Lekki, Lagos
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brass-300" />
                +234 801 234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brass-300" />
                info@benedictacollege.edu.ng
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-ink-300 md:flex-row">
          <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
          <p className="font-mono tracking-wide">SMART LEARNING · SMART MANAGEMENT · SMART FUTURE</p>
        </div>
      </div>
    </footer>
  )
}
