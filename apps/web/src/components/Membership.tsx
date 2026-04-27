import { IconArrow, IconCheck, IconTarget } from './Icons'
import { SectionHeading, SectionLabel } from './Primitives'

type Tier = {
  name: string
  price: string
  cadence: string
  desc: string
  features: string[]
  featured: boolean
}

const TIERS: Tier[] = [
  {
    name: 'Base',
    price: '29',
    cadence: '/mo',
    desc: 'Home-club access and the essentials to start.',
    features: [
      'Access to home club',
      'All cardio & free weights',
      'Locker rooms & saunas',
      'Mobile app & tracking',
    ],
    featured: false,
  },
  {
    name: 'Performance',
    price: '59',
    cadence: '/mo',
    desc: 'Our most-chosen plan. Full class library included.',
    features: [
      'Everything in Base',
      'Unlimited group classes',
      'Access to all locations',
      'Guest passes (2 /mo)',
      'Recovery room access',
      'Kids Club included',
    ],
    featured: true,
  },
  {
    name: 'Signature',
    price: '129',
    cadence: '/mo',
    desc: '1:1 coaching and concierge programming.',
    features: [
      'Everything in Performance',
      '4× personal training /mo',
      'InBody scans quarterly',
      'Nutrition consultation',
      'Priority booking',
      'Guest passes (unlimited)',
    ],
    featured: false,
  },
]

const JOIN_URL = 'https://join.gffitnessgyms.com/'

const TierCard = ({ t }: { t: Tier }) => (
  <div
    className={`relative bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 flex flex-col ${
      t.featured ? 'glow lg:-my-4 lg:py-14' : ''
    }`}
  >
    {t.featured && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gf-blue text-white text-[10px] font-mono uppercase tracking-[0.3em] px-4 py-1.5">
        Most Popular
      </div>
    )}
    <div className="flex items-baseline justify-between mb-1">
      <h3 className="font-display text-white text-2xl">{t.name}</h3>
      {t.featured && <IconTarget className="h-5 w-5 text-gf-blue" />}
    </div>
    <p className="text-[#cccccc] text-sm mb-8 leading-relaxed">{t.desc}</p>

    <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10">
      <span className="text-white/50 text-xl">$</span>
      <span className="font-display text-white text-6xl lg:text-7xl leading-none">{t.price}</span>
      <span className="text-white/50 text-base ml-1">{t.cadence}</span>
    </div>

    <ul className="space-y-3.5 mb-10 flex-1">
      {t.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-[#cccccc] text-sm">
          <span className="mt-0.5 h-5 w-5 rounded-full bg-gf-blue/15 border border-gf-blue/40 flex items-center justify-center shrink-0">
            <IconCheck className="h-3 w-3 text-gf-blue" />
          </span>
          {f}
        </li>
      ))}
    </ul>

    <a
      href={JOIN_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-3 text-sm tracking-wide transition-colors w-full ${
        t.featured
          ? 'bg-gf-blue hover:bg-gf-dark-blue text-white'
          : 'border border-white/80 hover:border-white hover:bg-white hover:text-black text-white'
      }`}
    >
      Join Now <IconArrow className="h-4 w-4" />
    </a>
  </div>
)

export default function Membership() {
  return (
    <section id="membership" className="bg-black py-24 lg:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>04 · Membership</SectionLabel>
          <SectionHeading>
            Pick your plan.<br />Cancel anytime.
          </SectionHeading>
          <p className="text-[#cccccc] mt-5 text-base lg:text-lg">
            No contracts, no initiation fees, no surprise charges. Just training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 max-w-6xl mx-auto">
          {TIERS.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>

        <div className="text-center mt-10 text-white/40 text-xs font-mono tracking-wider uppercase">
          All plans include a 7-day free trial · Prices shown in USD
        </div>
      </div>
    </section>
  )
}
