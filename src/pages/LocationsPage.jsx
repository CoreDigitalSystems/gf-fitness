import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const gfFitness = [
  {
    city: 'Bristol, CT',
    address: '1379 Farmington Ave, Bristol, CT 06010',
    phone: '(860) 506-9768',
    href: '/location/bristol',
  },
]

const georgiaFitness = [
  {
    city: 'Acworth, GA',
    address: '3362 Acworth Summit Blvd, Unit 100, Acworth GA 30101',
    phone: '(678) 973-0635',
    href: '/location/acworth',
  },
  {
    city: 'Sugar Hill, GA',
    address: '245 Peachtree Industrial Blvd #100, Sugar Hill, GA 30518',
    phone: '(678) 765-8999',
    href: '/location/sugarhill',
  },
]

const comingSoon = [
  { city: 'Augusta, GA', href: '/location/augusta' },
  { city: 'Covington, GA', href: '/location/covington' },
  { city: 'Huntsville, AL', href: '/location/huntsville' },
  { city: 'Newington, CT', href: '/location/newington' },
  { city: 'N. Las Vegas, NV', href: '/location/vegas' },
  { city: 'Phoenix, AZ', href: '/location/phoenix' },
]

function LocationCard({ city, address, phone, href }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">{city}</h3>
      {address && <p className="text-gray-600 mb-1">{address}</p>}
      {phone && <p className="text-gray-600 mb-5">{phone}</p>}
      <div className="flex flex-wrap gap-3">
        <Link
          to={href}
          className="inline-block bg-gf-blue text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gf-dark-blue transition-colors"
        >
          View Location
        </Link>
        <a
          href="https://join.gffitnessgyms.com/"
          className="inline-block border-2 border-black text-black font-semibold text-sm px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          Join Now
        </a>
      </div>
    </div>
  )
}

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Our Locations"
        subtitle="Find a GF Fitness or Georgia Fitness near you."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/10/GF-fitness-location-image.webp"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-8">
              GF Fitness Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gfFitness.map((l) => (
                <LocationCard key={l.city} {...l} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-8">
              Georgia Fitness Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {georgiaFitness.map((l) => (
                <LocationCard key={l.city} {...l} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-8">
              Coming Soon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoon.map((l) => (
                <Link
                  key={l.city}
                  to={l.href}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow block"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{l.city}</h3>
                  <p className="text-gf-blue text-sm font-semibold tracking-wider uppercase">Coming Soon →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
