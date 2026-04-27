import PageHero from '../components/PageHero'
import FreeTrialForm from '../components/FreeTrialForm'
import Reviews from '../components/Reviews'

const amenities = [
  'Strength & Cardio Equipment',
  'Onsite Childcare',
  'Senior Programs',
  'Pro Shop',
  'Personal Training',
  'Racquetball',
  'Corrective Stretching / Recovery',
  'Olympic Saltwater Pool',
  'Free Weights',
  'Pickleball Court',
]

const whyJoin = [
  { title: 'Cutting-Edge Equipment', desc: 'From cardio decks to serious free-weight platforms — nothing is second-rate.' },
  { title: '24/7 Access', desc: 'Your schedule, your rules. Train whenever it works for you.' },
  { title: 'Flexible Memberships', desc: 'Options for singles, couples, families, and corporate teams.' },
  { title: '50+ Weekly Classes', desc: 'Cycle, yoga, Pilates, Zumba, strength, and more — all included.' },
]

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        title="Try GF Fitness — Free."
        subtitle="Change Your Body. Change Your Life. Stop by today and begin a healthier lifestyle."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <FreeTrialForm />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gf-blue font-bold tracking-widest text-sm uppercase mb-3">
              Everything You Need Under One Roof
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">
              Get Access to These Amenities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {amenities.map((a) => (
              <div key={a} className="bg-gray-50 p-5 rounded-md text-center font-medium text-gray-700">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-12">
            Why Join GF Fitness?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoin.map((w) => (
              <div key={w.title} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-gf-blue">
                  {w.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </>
  )
}
