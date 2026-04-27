import { useState } from 'react';
import { BrandLogo, IconChevron, IconMenu, IconClose, IconArrow } from './Icons';
import { BtnFilled, BtnOutline } from './Primitives';

const NAV_LINKS = [
  {
    id: 'locations', label: 'Locations', hasDropdown: true,
    items: [
      { name: 'Acworth, GA', status: 'Open' },
      { name: 'Bristol, CT', status: 'Open' },
      { name: 'Sugar Hill, GA', status: 'Open' },
      { name: 'Augusta, GA', status: 'Soon' },
      { name: 'Phoenix, AZ', status: 'Soon' },
    ],
  },
  { id: 'amenities', label: 'Amenities' },
  {
    id: 'classes', label: 'Group Classes', hasDropdown: true,
    items: [
      { name: 'HIIT' }, { name: 'Yoga' }, { name: 'Strength' },
      { name: 'Cycling' }, { name: 'Cardio' }, { name: 'Boxing' },
    ],
  },
  { id: 'about', label: 'About' },
];

export const Nav = ({ scrolled, activeSection, onNav }) => {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-black'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }} className="shrink-0">
            <BrandLogo className="h-9" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpen(link.id)}
                onMouseLeave={() => setOpen(null)}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); onNav(link.id); }}
                  className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] flex items-center gap-1.5 transition-colors ${
                    activeSection === link.id ? 'text-[#4B5EFF]' : 'text-white hover:text-[#4B5EFF]'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <IconChevron className="h-3 w-3" />}
                </a>
                {link.hasDropdown && open === link.id && (
                  <div className="absolute left-0 top-full pt-2 min-w-[220px]">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-md py-2 shadow-2xl shadow-black">
                      {link.items.map((it) => (
                        <a
                          key={it.name}
                          href={`#${link.id}`}
                          onClick={(e) => { e.preventDefault(); onNav(link.id); setOpen(null); }}
                          className="flex items-center justify-between px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <span>{it.name}</span>
                          {it.status && (
                            <span className={`text-[10px] font-mono tracking-wider uppercase ${
                              it.status === 'Open' ? 'text-emerald-400' : 'text-white/40'
                            }`}>
                              {it.status}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNav('contact')}
              className="hidden sm:inline-flex rounded-full border border-white/70 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-4 lg:px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all"
            >
              Free Trial
            </button>
            <button
              onClick={() => onNav('membership')}
              className="rounded-full bg-[#4B5EFF] hover:bg-[#6171ff] text-white font-semibold px-4 lg:px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Join Now
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <BrandLogo className="h-8" />
              <button className="text-white p-2" onClick={() => setMobileOpen(false)} aria-label="Close">
                <IconClose className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); onNav(link.id); setMobileOpen(false); }}
                  className="block px-6 py-4 text-white uppercase tracking-[0.15em] font-semibold border-b border-white/5 hover:bg-white/5 hover:text-[#4B5EFF]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="p-5 space-y-3 border-t border-white/10">
              <BtnOutline className="w-full" onClick={() => { onNav('contact'); setMobileOpen(false); }}>
                Free Trial
              </BtnOutline>
              <BtnFilled className="w-full" onClick={() => { onNav('membership'); setMobileOpen(false); }}>
                Join Now
              </BtnFilled>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
