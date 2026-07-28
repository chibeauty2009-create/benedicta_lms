import Hero from './sections/Hero'
import VisionMission from '@/components/sections/VisionMission'
import NewsEvents from './sections/NewsEvents'
import AcademicPrograms from './sections/AcademicPrograms'
import GalleryTestimonials from './sections/GalleryTestimonials'
import CTASection from './sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <NewsEvents />
      <AcademicPrograms />
      <GalleryTestimonials />
      <CTASection />
    </>
  )
}
