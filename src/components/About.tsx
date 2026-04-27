import { IconUsers, IconTarget, IconTrophy } from './Icons';
import { SectionLabel } from './Primitives';

const PILLARS = [
  { icon: IconUsers,  title: 'Community',  desc: 'We remember your name. You find your people. Progress compounds when you\'re not alone.' },
  { icon: IconTarget, title: 'Excellence', desc: 'Pro-level equipment, credentialed coaches, spotless floors. No corners cut, ever.' },
  { icon: IconTrophy, title: 'Results',    desc: 'Programs built around measurable progress — strength, composition, mobility, endurance.' },
];

export const About = () => (
  <section id="about" className="bg-black py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <SectionLabel>06 · About Us</SectionLabel>
        <h2 className="font-display text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] mb-8">
          We don't sell memberships.<br />
          <span className="text-white/50">We build athletes.</span>
        </h2>
        <p className="text-[#cccccc] text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
          GF Fitness started with a simple question — why do most gyms feel cheap, crowded and anonymous? A decade later, we've built the clubs we always wanted: serious training floors, pros who coach (not count), and a culture where showing up is celebrated.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {PILLARS.map((p, i) => (
          <div key={p.title} className="bg-black p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-[#4B5EFF]/10 border border-[#4B5EFF]/30 flex items-center justify-center text-[#4B5EFF] mb-6">
              <p.icon className="h-8 w-8" />
            </div>
            <div className="font-mono text-[11px] text-white/30 tracking-wider mb-2">0{i + 1}</div>
            <h3 className="font-display text-white text-2xl mb-4">{p.title}</h3>
            <p className="text-[#cccccc] text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
