import PageHero from '@/components/layout/PageHero'
import ContactDetails from './sections/ContactDetails'
import ContactFormMap from './sections/ContactFormMap'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Page 03 / 8"
        title="We'd love to hear from you"
        description="Whether it's an admissions enquiry or a question for the school office, reach us below or send a message directly."
      />
      <ContactDetails />
      <ContactFormMap />
    </>
  )
}
