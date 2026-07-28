import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="bg-brass-50 py-20">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-ink-900 px-8 py-14 text-center text-paper md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to see Benedicta up close?
            </h2>
            <p className="mt-3 max-w-md text-ink-200">
              Apply for admission, sign in to your dashboard, or reach our admissions team — whichever
              you need is one click away.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <Button to="/about" variant="primary">
              Apply Now <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="ghost" className="border-ink-500 text-paper hover:border-brass-300 hover:text-brass-300">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
