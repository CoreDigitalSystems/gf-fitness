import { useRef } from 'react';
import { IconDumbbell, IconWeight, IconSmoothie, IconKid, IconUser, IconHeart, IconArrow } from './Icons';
import { SectionLabel, SectionHeading, BtnOutline, useInView } from './Primitives';

const AMENITIES = [
  { icon: IconDumbbell, title: 'Functional Training', desc: 'Open turf bays, rigs, sleds and every tool you need for athletic, real-world movement.' },
  { icon: IconWeight,   title: 'Free Weights',        desc: 'Dumbbells to 150 lb, platforms, power racks and competition bars across two floors.' },
  { icon: IconSmoothie, title: 'Fuel Station',        desc: 'Cold-pressed smoothies, protein builds and grab-and-go meals from our in-house kitchen.' },
  { icon: IconKid,      title: 'Kids Club',           desc: 'Supervised play, crafts and movement so parents can focus on their session — stress-free.' },
  { icon: IconUser,     title: '1-on-1 Personal Training', desc: 'Certified coaches program around your goals, biometrics and schedule. No cookie-cutter plans.' },
  { icon: IconHeart,    title: 'Cardio Equipment',    desc: 'Latest Matrix and Woodway lineup, virtual-route treadmills, assault bikes, and stair mills.' },
];

const AmenityCard = ({ a, i }) => {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      className="group relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-300 hover:border-gf-blue/60 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity .6s ${i * 0.06}s, transform .6s ${i * 0.06}s, border-color .3s`,
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="h-14 w-14 rounded-lg bg-gf-blue/10 border border-gf-blue/30 flex items-center justify-center text-gf-blue group-hover:bg-gf-blue group-hover:text-white transition-colors">
          <a.icon className="h-7 w-7" />
        </div>
        <span className="font-mono text-[11px] text-white/30 tracking-wider">0{i + 1}</span>
      </div>
      <h3 className="font-display text-white text-2xl mb-3 leading-tight">{a.title}</h3>
      <p className="text-[#cccccc] text-sm leading-relaxed">{a.desc}</p>
      <div className="mt-6 flex items-center gap-2 text-gf-blue opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold uppercase tracking-wider">
        Learn more <IconArrow className="h-3.5 w-3.5" />
      </div>
    </div>
  );
};

export const Amenities = () => (
  <section id="amenities" className="bg-[#111111] py-24 lg:py-32">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <SectionLabel>02 · Amenities</SectionLabel>
          <SectionHeading>
            Every tool.<br />Every rep.
          </SectionHeading>
        </div>
        <p className="text-[#cccccc] max-w-md text-base leading-relaxed">
          Our clubs are engineered for serious training. From functional turf to fully-stocked recovery rooms, we built what we wished other gyms had.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {AMENITIES.map((a, i) => <AmenityCard key={a.title} a={a} i={i} />)}
      </div>

      <div className="mt-12 flex justify-center">
        <BtnOutline>Explore All Amenities <IconArrow className="h-4 w-4" /></BtnOutline>
      </div>
    </div>
  </section>
);
