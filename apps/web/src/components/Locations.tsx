import { Link } from 'react-router-dom'
import { IconArrow, IconPin } from './Icons'
import { Placeholder, SectionHeading, SectionLabel } from './Primitives'

const ACTIVE = [
  { city: 'Acworth', state: 'GA', members: '480+', sqft: '42,000', opened: '2019', href: '/location/acworth' },
  { city: 'Bristol', state: 'CT', members: '310+', sqft: '38,500', opened: '2022', href: '/location/bristol' },
  { city: 'Sugar Hill', state: 'GA', members: '360+', sqft: '45,000', opened: '2024', href: '/location/sugarhill' },
]

const COMING = [
  { city: 'Augusta', state: 'GA', q: 'Q3 2026', href: '/location/augusta' },
  { city: 'Covington', state: 'GA', q: 'Q4 2026', href: '/location/covington' },
  { city: 'Huntsville', state: 'AL', q: 'Q1 2027', href: '/location/huntsville' },
  { city: 'N. Las Vegas', state: 'NV', q: 'Q2 2027', href: '/location/vegas' },
  { city: 'Newington', state: 'CT', q: 'Q2 2027', href: '/location/newington' },
  { city: 'Phoenix', state: 'AZ', q: 'Q4 2027', href: '/location/phoenix' },
]

export default function Locations() {
  return (
    <section id="locations" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>05 · Locations</SectionLabel>
            <SectionHeading>
              Find your<br />home club.
            </SectionHeading>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {ACTIVE.length} Open
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="h-2 w-2 rounded-full bg-gf-blue" />
              {COMING.length} Coming Soon
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {ACTIVE.map((l) => (
            <Link
              key={l.city}
              to={l.href}
              className="group bg-[#0a0a0a] border border-white/10 hover:border-gf-blue/50 transition-all overflow-hidden block"
            >
              <Placeholder label={`${l.city} Club Exterior`} className="h-44" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-mono uppercase tracking-wider mb-2">
                      <IconPin className="h-3.5 w-3.5" />
                      {l.state}
                    </div>
                    <h3 className="font-display text-white text-3xl leading-none">{l.city}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Open
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Members</div>
                    <div className="text-white font-semibold text-sm mt-1">{l.members}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Sq Ft</div>
                    <div className="text-white font-semibold text-sm mt-1">{l.sqft}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Opened</div>
                    <div className="text-white font-semibold text-sm mt-1">{l.opened}</div>
                  </div>
                </div>
                <div className="mt-6 w-full flex items-center justify-between text-white group-hover:text-gf-blue transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-wider">Visit Club</span>
                  <IconArrow className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-gf-blue mb-5">
            → Opening Next
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/10">
            {COMING.map((l) => (
              <Link
                key={l.city + l.state}
                to={l.href}
                className="bg-[#0a0a0a] p-5 hover:bg-[#141414] transition-colors block"
              >
                <div className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-2">{l.state}</div>
                <div className="font-display text-white text-xl leading-tight mb-3">{l.city}</div>
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">{l.q}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
