import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FreeTrialForm from '../components/FreeTrialForm'
import Reviews from '../components/Reviews'

const benefits = [
  { title: 'Enhanced Energy & Focus', desc: 'Active teams are sharper teams — better concentration and better output.' },
  { title: 'Reduced Stress & Absenteeism', desc: 'Exercise is the single most effective tool for managing workplace stress.' },
  { title: 'Improved Health', desc: 'Strengthened immunity, cardiovascular health, and long-term wellbeing.' },
  { title: 'Team Camaraderie', desc: 'Fitness challenges and group classes build the kind of bonds meetings can\u2019t.' },
]

const offerings = [
  'Discounted gym memberships for your entire team',
  'On-site workshops & lunch-and-learn sessions',
  'Team fitness challenges with rewards',
  'Private training blocks for executives & teams',
  'Custom wellness reporting for HR',
]

export default function CorporateWellnessPage() {
  return (
    <>
      <PageHero
        title="Corporate Wellness at GF Fitness"
        subtitle="Build stronger companies. Boost productivity and morale with a tailored corporate wellness program."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
            Investing in Employee Health Pays Off
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            For your team — and your bottom line. Give your staff access to premium facilities, expert-led
            classes, and wellness resources that actually get used.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-gf-blue">
                  {b.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-10">
            Custom Packages for Your Organization
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {offerings.map((o) => (
              <li key={o} className="flex items-start gap-3 bg-gray-50 p-5 rounded">
                <svg className="w-6 h-6 text-gf-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">{o}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link
              to="/contact-us"
              className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
            >
              Talk to Our Corporate Team
            </Link>
          </div>
        </div>
      </section>

      <FreeTrialForm />
      <Reviews />
    </>
  )
}
