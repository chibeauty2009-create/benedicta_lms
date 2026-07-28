import PageHero from '@/components/layout/PageHero'
import VisionMission from '@/components/sections/VisionMission'
import History from './sections/History'
import CoreValues from './sections/CoreValues'
import LeadershipMessage from './sections/LeadershipMessage'
import Accreditation from './sections/Accreditation'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About · Page 02 / 8"
        title="Eighteen years of building confident, capable graduates"
        description="Our history, what we stand for, and the people leading the school day to day."
      />
      <History />
      <VisionMission />
      <CoreValues />
      <LeadershipMessage />
      <Accreditation />
    </>
  )
}
