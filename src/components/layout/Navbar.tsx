import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav, school } from '@/data/content'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-brass-300">
            BC
          </span>
          <span className="font-display text-lg font-semibold leading-none text-ink-900">
            {school.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brass-500 ${
                  isActive ? 'text-brass-500' : 'text-ink-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/login" variant="secondary" className="px-5 py-2.5">
            Login
          </Button>
        </div>

        <button
          className="text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-700"
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/login" variant="secondary" onClick={() => setOpen(false)}>
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
