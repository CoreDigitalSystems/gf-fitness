import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reviews from '../components/Reviews'
import CTABanner from '../components/CTABanner'

const classes = [
  { name: 'Silver Sneakers Classic', desc: 'A fitness program tailored for active seniors who want low-impact, guided workouts.' },
  { name: 'Cycling (Freestyle)', desc: 'High-energy indoor cycling classes with upbeat music and motivating instructors.' },
  { name: 'Vinyasa Yoga', desc: 'Dynamic, flowing yoga practice linking breath and movement.' },
  { name: 'Pilates', desc: 'Core-focused strength and flexibility training for a balanced physique.' },
  { name: 'Hatha Yoga', desc: 'Traditional, slower-paced yoga for deep stretching and mindfulness.' },
  { name: 'Zumba', desc: 'Dance-based cardio fitness you won\u2019t realize is a workout.' },
]

const locationSchedules = [
  {
    id: 'acworth',
    name: 'Acworth, GA',
    href: '/location/acworth',
    phone: '(678) 973-0635',
    address: '3362 Acworth Summit Blvd, Unit 100, Acworth GA 30101',
  },
  {
    id: 'bristol',
    name: 'Bristol, CT',
    href: '/location/bristol',
    phone: '(860) 506-9768',
    address: '1379 Farmington Ave, Bristol, CT 06010',
  },
  {
    id: 'sugarhill',
    name: 'Sugar Hill, GA',
    href: '/location/sugarhill',
    phone: '(678) 765-8999',
    address: '245 Peachtree Industrial Blvd #100, Sugar Hill, GA 30518',
  },
]

export default function GroupFitnessPage() {
  return (
    <>
      <PageHero
        title="Workouts for Everyone"
        subtitle="Group Fitness Classes — led by certified trainers who keep you motivated and focused."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-4">
            Reach Your Fitness Goals Faster With the Best Trainers
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Group fitness brings together people with the same healthy goal — every session is designed to
            push you further than you'd push yourself.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((c) => (
              <div key={c.name} className="bg-gray-50 p-8 rounded-lg border-t-4 border-gf-blue">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{c.name}</h3>
                <p className="text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gf-blue font-bold tracking-widest text-sm uppercase mb-3">
              Challenge Yourself to New Heights
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">
              Schedules by Location
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {locationSchedules.map((loc) => (
              <div key={loc.id} id={loc.id} className="bg-white p-8 rounded-lg shadow-sm scroll-mt-24">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">{loc.name}</h3>
                <p className="text-gray-600 mb-1">{loc.address}</p>
                <p className="text-gray-600 mb-4">{loc.phone}</p>
                <Link
                  to={loc.href}
                  className="inline-block bg-gf-blue text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gf-dark-blue transition-colors"
                >
                  View Location
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-10">
            Full class schedules are available at each location's front desk and in the GF Fitness member app.
          </p>
        </div>
      </section>

      <Reviews />
      <CTABanner />
    </>
  )
}
