import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { contact, socialLinks } from '@/data/content'

const socialIcons: Record<string, typeof Facebook> = {
  Facebook: Facebook,
  Instagram: Instagram,
  'X (Twitter)': Twitter,
  LinkedIn: Linkedin,
}

const cards = [
  { icon: MapPin, label: 'Visit Us', lines: [contact.address] },
  { icon: Phone, label: 'Call Us', lines: contact.phone },
  { icon: Mail, label: 'Email Us', lines: [contact.email] },
  { icon: Clock, label: 'Office Hours', lines: [contact.hours] },
]

export default function ContactDetails() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Reach us however suits you
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 0.08}
              className="rounded-2xl border border-ink-100 p-7 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-brass-300">
                <card.icon size={18} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{card.label}</h3>
              <div className="mt-2 space-y-1 text-sm leading-relaxed text-ink-500">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center gap-4">
          <span className="eyebrow text-ink-400">Follow Us</span>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform]
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brass-400 hover:text-brass-500"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
