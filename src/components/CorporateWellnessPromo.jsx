import { Link } from 'react-router-dom'

export default function CorporateWellnessPromo() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://gffitnessgyms.com/wp-content/uploads/2025/06/turf-area-GF-Fitness.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-gf-blue font-bold tracking-widest text-sm uppercase mb-3">
          Corporate Wellness
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
          Build Stronger Companies
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Boost productivity and morale with a tailored corporate wellness program. Premium facilities,
          expert-led classes, and wellness resources that actually get used by your team.
        </p>
        <Link
          to="/corporate-wellness"
          className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
