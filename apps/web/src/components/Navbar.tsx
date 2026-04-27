import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo, IconChevron, IconMenu, IconClose } from './Icons'

type DropdownItem = { name: string; href: string; status?: 'Open' | 'Soon' }

type NavLink = {
  id: string
  label: string
  href?: string
  hasDropdown?: boolean
  items?: DropdownItem[]
}

const NAV_LINKS: NavLink[] = [
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations',
    hasDropdown: true,
    items: [
      { name: 'Acworth, GA', href: '/location/acworth', status: 'Open' },
      { name: 'Bristol, CT', href: '/location/bristol', status: 'Open' },
      { name: 'Sugar Hill, GA', href: '/location/sugarhill', status: 'Open' },
      { name: 'Augusta, GA', href: '/location/augusta', status: 'Soon' },
      { name: 'Covington, GA', href: '/location/covington', status: 'Soon' },
      { name: 'Huntsville, AL', href: '/location/huntsville', status: 'Soon' },
      { name: 'Newington, CT', href: '/location/newington', status: 'Soon' },
      { name: 'N. Las Vegas, NV', href: '/location/vegas', status: 'Soon' },
      { name: 'Phoenix, AZ', href: '/location/phoenix', status: 'Soon' },
    ],
  },
  { id: 'amenities', label: 'Amenities', href: '/amenities' },
  {
    id: 'classes',
    label: 'Group Classes',
    href: '/group-fitness',
    hasDropdown: true,
    items: [
      { name: 'All Classes', href: '/group-fitness' },
      { name: 'Acworth, GA Schedule', href: '/group-fitness#acworth' },
      { name: 'Bristol, CT Schedule', href: '/group-fitness#bristol' },
      { name: 'Sugar Hill, GA Schedule', href: '/group-fitness#sugarhill' },
    ],
  },
  { id: 'training', label: 'Training', href: '/training' },
  { id: 'about', label: 'About', href: '/about-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : 'bg-black'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <BrandLogo className="h-9" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpen(link.id)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  to={link.href!}
                  aria-haspopup={link.hasDropdown ? 'true' : undefined}
                  aria-expanded={link.hasDropdown ? open === link.id : undefined}
                  className="px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] flex items-center gap-1.5 transition-colors text-white hover:text-gf-blue"
                >
                  {link.label}
                  {link.hasDropdown && <IconChevron className="h-3 w-3" />}
                </Link>
                {link.hasDropdown && open === link.id && link.items && (
                  <div className="absolute left-0 top-full pt-2 min-w-[260px]">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-md py-2 shadow-2xl shadow-black">
                      {link.items.map((it) => (
                        <Link
                          key={it.name}
                          to={it.href}
                          onClick={() => setOpen(null)}
                          className="flex items-center justify-between px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <span>{it.name}</span>
                          {it.status && (
                            <span
                              className={`text-[10px] font-mono tracking-wider uppercase ${
                                it.status === 'Open' ? 'text-emerald-400' : 'text-white/40'
                              }`}
                            >
                              {it.status}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/free-trial"
              className="hidden sm:inline-flex rounded-full border border-white/70 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-4 lg:px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all"
            >
              Free Trial
            </Link>
            <a
              href="https://join.gffitnessgyms.com/"
              className="rounded-full bg-gf-blue hover:bg-gf-dark-blue text-white font-semibold px-4 lg:px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Join Now
            </a>
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
                <Link
                  key={link.id}
                  to={link.href ?? (link.items?.[0]?.href ?? '/')}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-4 text-white uppercase tracking-[0.15em] font-semibold border-b border-white/5 hover:bg-white/5 hover:text-gf-blue"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="p-5 space-y-3 border-t border-white/10">
              <Link
                to="/free-trial"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-full border border-white/70 text-white font-semibold py-3 text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all"
              >
                Free Trial
              </Link>
              <a
                href="https://join.gffitnessgyms.com/"
                className="block w-full text-center rounded-full bg-gf-blue text-white font-semibold py-3 text-sm uppercase tracking-[0.15em] hover:bg-gf-dark-blue transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
