import PageHero from '@/components/layout/PageHero'
import ApplicationForm from './sections/ApplicationForm'

export default function Apply() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join The Benedicta College"
        description="From enquiry to enrolment — start your child's application below."
      />
      <ApplicationForm />
    </>
  )
}
