import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import FreeTrialForm from './FreeTrialForm'
import Reviews from './Reviews'
import CTABanner from './CTABanner'

export default function LocationDetail({
  city,
  state,
  address,
  phone,
  gymHours,
  childcareHours,
  amenities,
  heroDescription,
  joinUrl,
  heroImage = 'https://gffitnessgyms.com/wp-content/uploads/2025/10/GF-fitness-location-image.webp',
}) {
  return (
    <>
      <PageHero
        title={`GF Fitness ${city}, ${state}`}
        subtitle={heroDescription}
        backgroundImage={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p className="flex items-start gap-3">
                <svg className="w-6 h-6 text-gf-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{address}</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gf-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-gf-blue">{phone}</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/free-trial"
                className="inline-block bg-[#c4c4c4] text-black font-semibold text-base tracking-wide px-8 py-3 rounded-full hover:bg-gray-300 transition-colors"
              >
                Free Trial
              </Link>
              <a
                href={joinUrl || 'https://join.gffitnessgyms.com/'}
                className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-8 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Gym Hours</h3>
              <ul className="space-y-1 text-gray-700">
                {gymHours.map((h) => (
                  <li key={h.label} className="flex justify-between">
                    <span className="font-semibold">{h.label}</span>
                    <span>{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {childcareHours && (
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Childcare Hours</h3>
                <ul className="space-y-1 text-gray-700">
                  {childcareHours.map((h) => (
                    <li key={h.label} className="flex justify-between">
                      <span className="font-semibold">{h.label}</span>
                      <span>{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-12">
            Amenities at This Location
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <div key={a} className="bg-white p-5 rounded-md flex items-center gap-3">
                <svg className="w-5 h-5 text-gf-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeTrialForm />
      <Reviews />
      <CTABanner />
    </>
  )
}
