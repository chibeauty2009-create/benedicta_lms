import { Quote } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Carousel from '@/components/ui/Carousel'
import { gallery, testimonials } from '@/data/content'

export default function GalleryTestimonials() {
  return (
    <section className="bg-ink-900 py-24 text-paper">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <Reveal>
              <span className="eyebrow">Gallery</span>
              <h2 className="mt-3 font-display text-3xl font-semibold">Life at Benedicta</h2>
            </Reveal>

            <div className="mt-8">
              <Carousel>
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="flex h-72 w-full items-end rounded-2xl bg-gradient-to-br from-ink-700 via-ink-600 to-brass-700 p-6"
                  >
                    <span className="rounded-full bg-ink-900/60 px-4 py-1.5 text-sm font-medium backdrop-blur">
                      {item.label}
                    </span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <Reveal delay={0.1}>
              <span className="eyebrow">Testimonials</span>
              <h2 className="mt-3 font-display text-3xl font-semibold">In their own words</h2>
            </Reveal>

            <div className="mt-8">
              <Carousel autoPlayMs={6000}>
                {testimonials.map((t) => (
                  <div key={t.id} className="flex h-72 flex-col justify-center rounded-2xl bg-ink-800 p-8">
                    <Quote className="text-brass-400" size={28} />
                    <p className="mt-4 font-display text-lg leading-relaxed text-ink-100">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-paper">{t.name}</p>
                      <p className="text-xs text-ink-300">{t.role}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
