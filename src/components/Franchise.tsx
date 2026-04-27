import { IconArrow } from './Icons';

export const Franchise = () => (
  <section id="franchise" className="bg-[#4B5EFF] py-24 lg:py-32 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />
    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
    <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-white/40 px-3 py-1.5 text-[11px] font-mono tracking-[0.3em] uppercase text-white mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Franchise Opportunity
        </div>
        <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] mb-8">
          Own a<br />GF Fitness.
        </h2>
        <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Bring a premium athletic club to your market. We provide the playbook, build-out support, and brand — you bring the passion and the community.
        </p>

        <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-display text-white text-4xl lg:text-5xl">$1.2M</div>
            <div className="text-white/70 text-xs uppercase tracking-wider mt-2">Avg. unit revenue</div>
          </div>
          <div className="text-center border-x border-white/20">
            <div className="font-display text-white text-4xl lg:text-5xl">18mo</div>
            <div className="text-white/70 text-xs uppercase tracking-wider mt-2">To break-even</div>
          </div>
          <div className="text-center">
            <div className="font-display text-white text-4xl lg:text-5xl">38</div>
            <div className="text-white/70 text-xs uppercase tracking-wider mt-2">Markets available</div>
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white hover:bg-white hover:text-[#4B5EFF] text-white font-semibold px-10 py-5 text-base uppercase tracking-[0.15em] transition-all">
          Inquire Now <IconArrow className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);
