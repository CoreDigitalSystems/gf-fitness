import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FreeTrialForm from '../components/FreeTrialForm'
import Reviews from '../components/Reviews'
import CTABanner from '../components/CTABanner'

const amenities = [
  { name: 'Functional Training Area', desc: 'Exercises that mimic real-life movements to improve how your body moves in everyday activities.' },
  { name: 'Free Weights', desc: 'A fundamental component of strength training — versatile, effective, and proven.' },
  { name: 'On-Site Kids Club', desc: 'Parent-friendly workouts made easy. (Add-on to any membership.)' },
  { name: 'Cardio Equipment', desc: 'Latest-generation treadmills, bikes, ellipticals, rowers, and stair climbers.' },
  { name: '24/7 Access', desc: 'Your schedule, your rules. Come in anytime — even holidays — for uninterrupted workouts.' },
  { name: "Dry Saunas (Men's & Women's)", desc: 'Improved cardiovascular health, reduced disease risk, pain relief, and stress reduction.' },
  { name: 'Therabody Compression Therapy', desc: 'Boost circulation, reduce soreness, and recover faster.' },
  { name: 'Corrective Stretching', desc: 'Prevent injury and improve flexibility. Ask about free intro sessions!' },
  { name: 'Free Body Assessments', desc: 'Our trainers analyze your fitness level and create a custom game plan to maximize results.' },
  { name: 'Olympic Saltwater Pool', desc: 'Gentler on skin and eyes thanks to lower chlorine levels.' },
  { name: 'Racquetball', desc: 'Cardio, strength, flexibility, hand-eye coordination, balance, and mental agility.' },
  { name: 'Tanning', desc: 'Stand-up bed available as an affordable add-on.' },
  { name: 'Fuel Station', desc: 'Protein shakes, energy drinks, and recovery supplements.' },
  { name: '1-on-1 Personal Training', desc: 'Personalized attention, tailored workouts, accountability, and injury prevention.' },
  { name: 'Sport-Specific Coaching', desc: 'Level up your performance with one of our master trainers.' },
]

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities at GF Fitness"
        subtitle="We go beyond weights and cardio. Every detail is crafted to enhance your fitness journey."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/06/turf-area-GF-Fitness.webp"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-3">
              Premium Amenities Designed for Your Success
            </h2>
            <p className="text-gray-500 italic">*Amenities vary per location.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((a) => (
              <div key={a.name} className="bg-gray-50 p-8 rounded-lg border-t-4 border-gf-blue hover:shadow-lg transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{a.name}</h3>
                <p className="text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/free-trial"
              className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
            >
              Sign up for a FREE Trial
            </Link>
          </div>
        </div>
      </section>
      <FreeTrialForm />
      <Reviews />
      <CTABanner />
    </>
  )
}
