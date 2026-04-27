import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reviews from '../components/Reviews'
import CTABanner from '../components/CTABanner'

const pillars = [
  { title: 'No Judgments', desc: 'A welcoming space for all levels — beginners, pros, and everyone in between.' },
  { title: 'Smart Training', desc: 'Science-backed equipment and classes built around real, sustainable results.' },
  { title: 'Real Results', desc: 'Programs designed for everyone from first-timers to advanced athletes.' },
]

const features = [
  '24/7 Access to facilities',
  'Free On-Site Childcare for members',
  'Senior-Friendly (SilverSneakers® accepted)',
  '50+ Weekly Classes',
  'Recovery Services (stretching, saunas, medical clinic support)',
  'Supportive Community environment',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GF Fitness"
        subtitle="Where fitness meets community."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/10/GF-fitness-location-image.webp"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gf-blue font-bold tracking-widest text-sm uppercase mb-3">
            Where Fitness Meets Community
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
            GF Fitness was founded by fitness enthusiasts tired of intimidating gyms.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With locations in Sugar Hill and Acworth, Georgia — plus Bristol, Connecticut — we offer top-tier
            equipment, expert coaching, and a supportive environment designed to help members reach their
            fitness goals no matter where they're starting.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-gf-blue">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/06/turf-area-GF-Fitness.webp"
            alt="GF Fitness turf area"
            className="rounded-lg w-full h-96 object-cover"
          />
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
              Everything You Need Under One Roof
            </h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gf-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/free-trial"
              className="inline-block mt-8 bg-gf-blue text-white font-semibold text-base tracking-wide px-8 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
      <CTABanner />
    </>
  )
}
