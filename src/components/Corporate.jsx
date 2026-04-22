import { IconHandshake, IconCheck, IconArrow } from './Icons';
import { SectionLabel, SectionHeading, BtnOutline } from './Primitives';

const CORP_BENEFITS = [
  'Discounted corporate memberships',
  'On-site wellness assessments',
  'Custom lunch-hour class scheduling',
  'Team-building fitness challenges',
  'Ergonomic & mobility consultations',
  'Dedicated account manager',
];

const CorpStat = ({ n, label }) => (
  <div>
    <div className="font-display text-white text-4xl lg:text-5xl">{n}</div>
    <div className="text-white/50 text-xs uppercase tracking-[0.2em] mt-2 max-w-[140px]">{label}</div>
  </div>
);

export const Corporate = () => (
  <section id="corporate" className="bg-[#111111] py-24 lg:py-32">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionLabel>07 · Corporate Wellness</SectionLabel>
          <SectionHeading className="mb-6">
            Healthier teams.<br />Measurable ROI.
          </SectionHeading>
          <p className="text-[#cccccc] text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
            Companies that invest in employee fitness see lower absenteeism, higher retention and measurably stronger morale. We make it simple to roll out to your whole team.
          </p>
          <div className="grid grid-cols-3 gap-6 pb-10 border-b border-white/10 mb-10">
            <CorpStat n="3.2×" label="Return on wellness spend" />
            <CorpStat n="27%"  label="Drop in sick days" />
            <CorpStat n="89%"  label="Employee retention lift" />
          </div>
          <BtnOutline>Learn More <IconArrow className="h-4 w-4" /></BtnOutline>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <IconHandshake className="h-6 w-6 text-[#4B5EFF]" />
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/60">What's Included</div>
          </div>
          <ul className="space-y-4">
            {CORP_BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                <span className="h-6 w-6 rounded-full bg-[#4B5EFF] flex items-center justify-center shrink-0">
                  <IconCheck className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-white text-sm lg:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
