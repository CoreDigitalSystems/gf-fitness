import PageHero from '../components/PageHero'
import Reviews from '../components/Reviews'

const pillars = [
  {
    title: 'Turnkey Success',
    desc: 'Site selection, gym design, staff training, operations playbooks, and marketing systems — we hand you the playbook.',
  },
  {
    title: 'Profit-Driven Amenities',
    desc: '24/7 access with low overhead and high retention, plus premium add-ons that drive ancillary revenue.',
  },
  {
    title: 'Unmatched Support',
    desc: 'Pre-opening and grand-opening marketing, ongoing tech tools, vendor discounts, and regional meetups.',
  },
]

const metrics = [
  { stat: '$100B', label: 'Fitness industry size' },
  { stat: '100+', label: 'Years of combined industry expertise' },
  { stat: '24/7', label: 'Revenue-generating access model' },
]

export default function FranchisePage() {
  return (
    <>
      <PageHero
        title="Own a GF Fitness Gym"
        subtitle="Own a proven fitness brand — backed by 100+ years of industry expertise."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
            A High-Demand Business Model Designed for Profitability
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Operate within the $100B fitness industry with a brand that's already delivering. Our franchise
            owners enjoy recurring membership revenue, premium ancillary services, and a playbook built on
            real-world operational wins.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-8 rounded-lg text-center shadow-sm">
                <p className="font-[family-name:var(--font-heading)] text-5xl font-bold text-gf-blue mb-2">
                  {m.stat}
                </p>
                <p className="text-gray-700 font-medium">{m.label}</p>
              </div>
            ))}
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-12">
            Our Advantage: The GF Fitness Model
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gf-blue">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
            Affordable Investment, Unlimited Potential
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Ask about our <span className="font-semibold text-gf-blue">Founder's Special</span> for
            Multi-Unit Operators and Master Franchise Developers.
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">
            Take the First Step
          </h3>
          <form className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <input className="border border-gray-300 rounded px-4 py-3" placeholder="Name" />
            <input className="border border-gray-300 rounded px-4 py-3" placeholder="Email" type="email" />
            <input className="border border-gray-300 rounded px-4 py-3 sm:col-span-2" placeholder="Phone" type="tel" />
            <select className="border border-gray-300 rounded px-4 py-3 sm:col-span-2">
              <option>How did you hear about us?</option>
              <option>Existing Location</option>
              <option>Radio</option>
              <option>Instagram</option>
              <option>Word of Mouth</option>
              <option>Google Search</option>
            </select>
            <button
              type="button"
              className="sm:col-span-2 bg-gf-blue text-white font-semibold tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
            >
              Inquire Now
            </button>
          </form>
        </div>
      </section>

      <Reviews />
    </>
  )
}
