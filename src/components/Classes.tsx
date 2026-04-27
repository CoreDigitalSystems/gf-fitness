import { useState } from 'react';
import { IconFlame, IconUser, IconWeight, IconHeart, IconTarget, IconTrophy, IconArrow } from './Icons';
import { SectionHeading, BtnFilled, Placeholder } from './Primitives';

const CLASS_TYPES = [
  { name: 'HIIT',     icon: IconFlame },
  { name: 'Yoga',     icon: IconUser },
  { name: 'Strength', icon: IconWeight },
  { name: 'Cycling',  icon: IconHeart },
  { name: 'Cardio',   icon: IconTarget },
  { name: 'Boxing',   icon: IconTrophy },
];

const SCHEDULES = {
  'Acworth, GA': [
    { time: '6:00a',  name: 'Sunrise HIIT',     coach: 'Mara V.',   spots: 3 },
    { time: '9:30a',  name: 'Power Yoga',        coach: 'Ken T.',    spots: 12 },
    { time: '12:00p', name: 'Lunch Cycle',       coach: 'Dani R.',   spots: 5 },
    { time: '5:45p',  name: 'Strength Circuit',  coach: 'Jordan L.', spots: 0 },
    { time: '7:15p',  name: 'Boxing Club',       coach: 'Rey K.',    spots: 8 },
  ],
  'Bristol, CT': [
    { time: '5:30a',  name: 'Iron Hour',         coach: 'Sam P.',    spots: 6 },
    { time: '8:00a',  name: 'Flow & Mobility',   coach: 'Laila O.',  spots: 10 },
    { time: '11:30a', name: 'HIIT 45',           coach: 'Tomas C.',  spots: 4 },
    { time: '6:00p',  name: 'Ride Club',         coach: 'Avery N.',  spots: 2 },
    { time: '7:30p',  name: 'Total Body',        coach: 'Nik E.',    spots: 9 },
  ],
  'Sugar Hill, GA': [
    { time: '6:15a',  name: 'Cardio Kick',       coach: 'Ines F.',   spots: 7 },
    { time: '9:00a',  name: 'Barbell Club',      coach: 'Derek M.',  spots: 3 },
    { time: '12:15p', name: 'Vinyasa Flow',      coach: 'Priya S.',  spots: 11 },
    { time: '5:15p',  name: 'HIIT Inferno',      coach: 'Coby W.',   spots: 1 },
    { time: '6:45p',  name: 'Ride + Core',       coach: 'Ana G.',    spots: 6 },
  ],
};

export const Classes = () => {
  const locs = Object.keys(SCHEDULES);
  const [loc, setLoc] = useState(locs[0]);

  return (
    <section id="classes" className="bg-black py-24 lg:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[500px]">
              <Placeholder label="Group Class · Studio A" className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 bg-[#4B5EFF] text-white px-3 py-1.5 text-[11px] font-mono tracking-[0.2em] uppercase self-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Live Schedule
                </div>
                <div>
                  <div className="font-mono text-[11px] text-white/60 tracking-[0.3em] uppercase mb-2">03 · Group Fitness</div>
                  <div className="font-display text-white text-5xl lg:text-6xl leading-[0.9]">
                    Something<br />for<br />everyone.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <SectionHeading className="mb-5">
              50+ classes a week.<br />One community.
            </SectionHeading>
            <p className="text-[#cccccc] text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              From sunrise HIIT to sunset flow, our coaches build sessions that push you further and meet you where you are. Every class is included with membership.
            </p>

            {/* Class chips */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10">
              {CLASS_TYPES.map((c) => (
                <button
                  key={c.name}
                  className="group flex flex-col items-center gap-2 bg-[#0a0a0a] border border-white/10 hover:border-[#4B5EFF] hover:bg-[#4B5EFF]/10 py-4 px-2 transition-all"
                >
                  <c.icon className="h-6 w-6 text-[#4B5EFF]" />
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">{c.name}</span>
                </button>
              ))}
            </div>

            {/* Location tabs */}
            <div className="flex gap-1 border-b border-white/10 mb-2 overflow-x-auto no-scrollbar">
              {locs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLoc(l)}
                  className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px ${
                    loc === l
                      ? 'text-white border-[#4B5EFF]'
                      : 'text-white/50 border-transparent hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
              <div className="ml-auto hidden sm:flex items-center gap-2 text-[11px] font-mono text-white/40 tracking-wider">
                TODAY · MON APR 22
              </div>
            </div>

            {/* Schedule table */}
            <div className="divide-y divide-white/5">
              {SCHEDULES[loc].map((cls, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 group">
                  <div className="font-mono text-white/70 text-sm w-16 tabular-nums">{cls.time}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm lg:text-base">{cls.name}</div>
                    <div className="text-white/50 text-xs">with {cls.coach}</div>
                  </div>
                  <div className={`text-xs font-mono uppercase tracking-wider ${
                    cls.spots === 0 ? 'text-red-400' : cls.spots <= 3 ? 'text-[#F5B301]' : 'text-emerald-400'
                  }`}>
                    {cls.spots === 0 ? 'Waitlist' : `${cls.spots} spots`}
                  </div>
                  <button className="text-white/40 group-hover:text-[#4B5EFF] transition-colors">
                    <IconArrow className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <BtnFilled>Explore Group Fitness Classes <IconArrow className="h-4 w-4" /></BtnFilled>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
