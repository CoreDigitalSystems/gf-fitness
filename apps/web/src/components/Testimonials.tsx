import { IconStar } from './Icons'
import { SectionHeading, SectionLabel } from './Primitives'

const REVIEWS = [
  {
    name: 'Lauren S.',
    loc: 'Acworth, GA · Member since 2021',
    text: "I have been going here for years. The coaches and staff always try to remember your name — it's the kind of place that actually feels like a community, not a chain.",
  },
  {
    name: 'Jamil E.',
    loc: 'Bristol, CT · Member since 2023',
    text: 'Great gym, great atmosphere. Clean and well maintained, equipment is always in working order, and the floor always has space even at peak hours.',
  },
  {
    name: 'Carmen B.',
    loc: 'Sugar Hill, GA · Member since 2024',
    text: 'Quiet and comfortable gym. The front desk team is so nice — welcoming every single visit. I actually look forward to walking in.',
  },
]

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <IconStar key={i} className="h-4 w-4 star" />
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>08 · Testimonials</SectionLabel>
            <SectionHeading>
              Members<br />in their words.
            </SectionHeading>
          </div>
          <div className="flex items-center gap-4">
            <Stars />
            <div className="text-white/70 text-sm">
              <span className="font-semibold text-white">4.9</span> / 5.0 · 1,240 reviews
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-[#111111] border border-white/10 p-8 flex flex-col">
              <Stars />
              <blockquote className="text-[#cccccc] text-base leading-relaxed mt-6 mb-8 flex-1">
                "{r.text}"
              </blockquote>
              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gf-blue/20 border border-gf-blue/40 flex items-center justify-center font-display text-gf-blue">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
