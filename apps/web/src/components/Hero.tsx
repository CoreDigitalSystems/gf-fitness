import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconArrow, IconPlay } from './Icons';
import { SectionLabel, useInView } from './Primitives';

const BASE = import.meta.env.BASE_URL;

const SLIDES = [
  `${BASE}assets/hero-1.jpeg`,
  `${BASE}assets/hero-2.jpeg`,
  `${BASE}assets/hero-3.jpeg`,
];

const HeroBackground = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Dark vignette so text stays legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />
    </div>
  );
};

const Counter = ({ end, suffix = '', duration = 1400 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const visible = useInView(ref);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

export const Hero = () => (
  <section id="top" className="relative min-h-[calc(100vh-104px)] flex flex-col justify-between bg-black">
    <HeroBackground />

    <div className="relative z-10 flex-1 flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-10 py-20">
        <div className="max-w-3xl">
          <SectionLabel>Premium Athletic Clubs · Est. 2014</SectionLabel>
          <h1 className="font-display text-white text-[54px] sm:text-7xl lg:text-[104px] leading-[0.9] tracking-[-0.03em] mb-6">
            Change your body.<br />
            <span className="text-white/70">Change your life.</span>
          </h1>
          <p className="text-[#cccccc] text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
            Unrivaled space, world-class coaching and a community that shows up. GF Fitness is where inspired fitness, sport and recovery meet.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://join.gffitnessgyms.com/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gf-blue hover:bg-gf-dark-blue text-white font-semibold px-7 py-4 text-base tracking-wide transition-colors"
            >
              Become a Member
              <IconArrow className="h-4 w-4" />
            </a>
            <Link
              to="/free-trial"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-7 py-4 text-base tracking-wide transition-all"
            >
              <IconPlay className="h-3.5 w-3.5" />
              Tour a Club
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Stat bar */}
    <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-3 divide-x divide-white/10">
        {[
          { n: 3,    s: '+', label: 'Locations Open' },
          { n: 1000, s: '+', label: 'Active Members' },
          { n: 50,   s: '+', label: 'Classes / Week' },
        ].map((stat, i) => (
          <div key={i} className="py-6 lg:py-8 px-4 lg:px-8 flex items-baseline gap-3">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tabular-nums">
              <Counter end={stat.n} suffix={stat.s} />
            </div>
            <div className="text-[#cccccc] text-xs lg:text-sm uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
