import { BrandLogo } from './Icons';

export const Footer = ({ onNav }) => (
  <footer className="bg-black border-t border-white/10 pt-16 pb-8">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
        <div className="lg:col-span-4">
          <BrandLogo className="h-10 mb-6" />
          <p className="text-[#cccccc] text-base leading-relaxed max-w-xs mb-6">
            Stop by today and begin a healthier lifestyle.
          </p>
          <div className="flex gap-2">
            {['IG', 'FB', 'YT', 'TK'].map((s) => (
              <a
                key={s}
                href="#"
                className="h-10 w-10 border border-white/20 hover:border-[#4B5EFF] hover:bg-[#4B5EFF] transition-all flex items-center justify-center text-white text-xs font-bold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm">
            <li><a className="text-white/80 hover:text-white" href="#classes" onClick={(e) => { e.preventDefault(); onNav('classes'); }}>Group Classes</a></li>
            <li><a className="text-white/80 hover:text-white" href="#contact" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>Free Trial</a></li>
            <li><a className="text-white/80 hover:text-white" href="#contact" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>Contact Us</a></li>
            <li><a className="text-white/80 hover:text-white" href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Georgia Clubs</div>
          <ul className="space-y-3 text-sm">
            <li className="text-white/80">Acworth, GA</li>
            <li className="text-white/80">Sugar Hill, GA</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Other Clubs</div>
          <ul className="space-y-3 text-sm">
            <li className="text-white/80">Bristol, CT</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4B5EFF] mb-5">Coming Soon</div>
          <ul className="space-y-3 text-sm">
            <li className="text-white/60">Augusta, GA</li>
            <li className="text-white/60">Covington, GA</li>
            <li className="text-white/60">Huntsville, AL</li>
            <li className="text-white/60">N. Las Vegas, NV</li>
            <li className="text-white/60">Newington, CT</li>
            <li className="text-white/60">Phoenix, AZ</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40 font-mono tracking-wider uppercase">
        <div>© 2026 GF Fitness. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Accessibility</a>
          <a href="#" className="hover:text-white">Site Map</a>
        </div>
      </div>
    </div>
  </footer>
);
