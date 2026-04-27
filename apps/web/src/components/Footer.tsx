import { Link } from 'react-router-dom';
import { BrandLogo } from './Icons';

const SOCIALS = [
  { label: 'IG', href: 'https://instagram.com/gffitness' },
  { label: 'FB', href: 'https://facebook.com/gffitness' },
  { label: 'YT', href: 'https://youtube.com/@gffitness' },
];

const GA_CLUBS = [
  { name: 'Acworth, GA', href: '/location/acworth' },
  { name: 'Sugar Hill, GA', href: '/location/sugarhill' },
];

const OTHER_CLUBS = [
  { name: 'Bristol, CT', href: '/location/bristol' },
];

const COMING_SOON = [
  { name: 'Augusta, GA', href: '/location/augusta' },
  { name: 'Covington, GA', href: '/location/covington' },
  { name: 'Huntsville, AL', href: '/location/huntsville' },
  { name: 'N. Las Vegas, NV', href: '/location/vegas' },
  { name: 'Newington, CT', href: '/location/newington' },
  { name: 'Phoenix, AZ', href: '/location/phoenix' },
];

export const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-16 pb-8">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
        <div className="lg:col-span-4">
          <BrandLogo className="h-10 mb-6" />
          <p className="text-[#cccccc] text-base leading-relaxed max-w-xs mb-6">
            Stop by today and begin a healthier lifestyle.
          </p>
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 border border-white/20 hover:border-gf-blue hover:bg-gf-blue transition-all flex items-center justify-center text-white text-xs font-bold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm">
            <li><Link className="text-white/80 hover:text-white" to="/group-fitness">Group Classes</Link></li>
            <li><Link className="text-white/80 hover:text-white" to="/training">Training</Link></li>
            <li><Link className="text-white/80 hover:text-white" to="/free-trial">Free Trial</Link></li>
            <li><Link className="text-white/80 hover:text-white" to="/contact-us">Contact Us</Link></li>
            <li><Link className="text-white/80 hover:text-white" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Georgia Clubs</div>
          <ul className="space-y-3 text-sm">
            {GA_CLUBS.map((c) => (
              <li key={c.href}><Link className="text-white/80 hover:text-white" to={c.href}>{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">Other Clubs</div>
          <ul className="space-y-3 text-sm">
            {OTHER_CLUBS.map((c) => (
              <li key={c.href}><Link className="text-white/80 hover:text-white" to={c.href}>{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gf-blue mb-5">Coming Soon</div>
          <ul className="space-y-3 text-sm">
            {COMING_SOON.map((c) => (
              <li key={c.href}><Link className="text-white/60 hover:text-white" to={c.href}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40 font-mono tracking-wider uppercase">
        <div>© 2026 GF Fitness. All rights reserved.</div>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Accessibility</Link>
          <Link to="/locations" className="hover:text-white">Site Map</Link>
        </div>
      </div>
    </div>
  </footer>
);
