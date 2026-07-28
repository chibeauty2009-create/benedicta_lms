import Button from '@/components/ui/Button'

interface ComingSoonProps {
  pageLabel: string
  pageNumber: string
  description: string
}

/**
 * Placeholder used for every page we haven't built yet in this pass.
 * Keeps routing/navigation fully working while we go page-by-page —
 * swap each of these out for a real page as we get to it in the
 * build order (see README).
 */
export default function ComingSoon({ pageLabel, pageNumber, description }: ComingSoonProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <span className="eyebrow">Page {pageNumber} · In progress</span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink-900">{pageLabel}</h1>
        <p className="mt-4 text-ink-500">{description}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
