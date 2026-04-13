import Hero from '../components/Hero'
import FreeTrialForm from '../components/FreeTrialForm'
import Amenities from '../components/Amenities'
import GroupFitness from '../components/GroupFitness'
import TwoColumnFeatures from '../components/TwoColumnFeatures'
import Reviews from '../components/Reviews'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FreeTrialForm />
      <Amenities />
      <GroupFitness />
      <TwoColumnFeatures />
      <Reviews />
      <CTABanner />
    </>
  )
}
