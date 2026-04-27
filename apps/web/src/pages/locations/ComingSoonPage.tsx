import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import FreeTrialForm from '../../components/FreeTrialForm'
import CTABanner from '../../components/CTABanner'

export default function ComingSoonPage({ city, state }) {
  return (
    <>
      <PageHero
        title={`${city}, ${state}`}
        subtitle="Coming Soon — be the first to know when we open."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/10/GF-fitness-location-image.webp"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-gf-blue text-white font-bold tracking-widest text-sm px-6 py-2 rounded-full uppercase mb-6">
            Coming Soon
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
            A new GF Fitness is coming to {city}, {state}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We're bringing top-tier equipment, expert trainers, 50+ weekly classes, and a supportive
            community to {city}. Sign up below to be the first to hear about our grand opening, founder's
            pricing, and exclusive pre-launch perks.
          </p>
          <Link
            to="/free-trial"
            className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
          >
            Get Notified
          </Link>
        </div>
      </section>

      <FreeTrialForm />
      <CTABanner />
    </>
  )
}
