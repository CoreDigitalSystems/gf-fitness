import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FreeTrialForm from '../components/FreeTrialForm'
import Reviews from '../components/Reviews'
import CTABanner from '../components/CTABanner'

const steps = [
  { num: '1', title: 'Free Intro Session', desc: 'Discuss goals, assess your fitness level, and meet your trainer.' },
  { num: '2', title: 'Custom Plan', desc: 'Your trainer designs a workout + nutrition plan built for YOU.' },
  { num: '3', title: 'Crush Your Goals', desc: 'Stay accountable with weekly check-ins and expert feedback.' },
]

const programs = [
  {
    title: 'Reach Your Goals with One-on-One Personal Training',
    body: 'Skip the guesswork. Our certified trainers design custom 1-on-1 sessions to help you master proper form, break through plateaus with science-backed methods, and track measurable progress as you get stronger.',
    cta: 'Book a free 30-minute fitness consultation!',
    ctaLabel: 'Claim Your Free Session',
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/06/personal-training.webp',
  },
  {
    title: 'Small Group Training — Workout With a Friend',
    body: 'Get expert coaching + group energy in sessions designed for up to 8 members. Perfect if you want trainer guidance at a lower cost, thrive with team motivation, or prefer scheduled accountability.',
    cta: 'Try your first session free.',
    ctaLabel: 'Reserve My Spot',
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/06/small-group-training.webp',
  },
  {
    title: 'Your Weight Loss Journey Starts Here',
    body: 'We combine smart training + nutrition guidance to help you lose weight for good. Personalized plans, 30+ group classes weekly, MyFitnessPal integration, and 24/7 access.',
    cta: 'Book a free metabolic assessment!',
    ctaLabel: 'Start My Assessment',
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/06/weight-loss.webp',
  },
]

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Training for Every Goal"
        subtitle="Certified trainers. Custom plans. Proven results."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-4">
            Reach Your Fitness Goals Faster
          </h2>
          <p className="text-gray-600 text-lg">
            Our certified trainers build personalized plans that meet you where you are and get you where you
            want to be.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {programs.map((p, i) => (
            <div key={p.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="[direction:ltr]">
                <img src={p.image} alt={p.title} className="rounded-lg w-full h-80 object-cover" />
              </div>
              <div className="[direction:ltr]">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-4">
                  {p.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{p.body}</p>
                <p className="text-gf-blue font-semibold mb-4">{p.cta}</p>
                <Link
                  to="/free-trial"
                  className="inline-block bg-gf-blue text-white font-semibold text-base tracking-wide px-8 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
                >
                  {p.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-12">
            Your 3-Step Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gf-blue text-white font-bold text-2xl mx-auto mb-4 flex items-center justify-center">
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
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
