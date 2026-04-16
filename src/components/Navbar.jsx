import { useState } from 'react'
import { Link } from 'react-router-dom'

const locationGroups = [
  {
    title: 'GF Fitness Locations',
    items: [{ name: 'Bristol, CT', href: '/location/bristol' }],
  },
  {
    title: 'Georgia Fitness Locations',
    items: [
      { name: 'Acworth, GA', href: '/location/acworth' },
      { name: 'Sugar Hill, GA', href: '/location/sugarhill' },
    ],
  },
  {
    title: 'Coming Soon',
    items: [
      { name: 'Augusta, GA', href: '/location/augusta' },
      { name: 'Covington, GA', href: '/location/covington' },
      { name: 'Huntsville, AL', href: '/location/huntsville' },
      { name: 'Newington, CT', href: '/location/newington' },
      { name: 'N. Las Vegas, NV', href: '/location/vegas' },
      { name: 'Phoenix, AZ', href: '/location/phoenix' },
    ],
  },
]

const groupClasses = [
  { name: 'All Classes', href: '/group-fitness' },
  { name: 'Acworth, GA Schedule', href: '/group-fitness#acworth' },
  { name: 'Bristol, CT Schedule', href: '/group-fitness#bristol' },
  { name: 'Sugar Hill, GA Schedule', href: '/group-fitness#sugarhill' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locDropdown, setLocDropdown] = useState(false)
  const [classDropdown, setClassDropdown] = useState(false)

  return (
    <nav className="bg-black sticky top-0 z-40 shadow-[0_12px_18px_-6px_rgba(255,255,255,0.15)]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/05/new-GF-logo.png"
            alt="GF Fitness"
            className="h-16 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <div
            className="relative"
            onMouseEnter={() => setLocDropdown(true)}
            onMouseLeave={() => setLocDropdown(false)}
          >
            <button
              aria-expanded={locDropdown}
              aria-haspopup="true"
              className="text-white font-medium text-[15px] tracking-wide flex items-center gap-1 hover:text-gf-blue transition-colors py-2"
            >
              LOCATIONS
              <svg
                className={`w-3 h-3 transition-transform ${locDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {locDropdown && (
              <div
                className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md py-4 min-w-[260px] z-50"
                role="menu"
              >
                {locationGroups.map((group) => (
                  <div key={group.title} className="mb-3 last:mb-0">
                    <p className="px-4 py-1 text-[11px] font-bold uppercase text-gf-blue tracking-widest">
                      {group.title}
                    </p>
                    {group.items.map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.href}
                        role="menuitem"
                        className="block px-4 py-1.5 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/amenities"
            className="text-white font-medium text-[15px] tracking-wide hover:text-gf-blue transition-colors"
          >
            AMENITIES
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setClassDropdown(true)}
            onMouseLeave={() => setClassDropdown(false)}
          >
            <button
              aria-expanded={classDropdown}
              aria-haspopup="true"
              className="text-white font-medium text-[15px] tracking-wide flex items-center gap-1 hover:text-gf-blue transition-colors py-2"
            >
              GROUP CLASSES
              <svg
                className={`w-3 h-3 transition-transform ${classDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {classDropdown && (
              <div
                className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50"
                role="menu"
              >
                {groupClasses.map((cls) => (
                  <Link
                    key={cls.name}
                    to={cls.href}
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {cls.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/training"
            className="text-white font-medium text-[15px] tracking-wide hover:text-gf-blue transition-colors"
          >
            TRAINING
          </Link>
          <Link
            to="/about-us"
            className="text-white font-medium text-[15px] tracking-wide hover:text-gf-blue transition-colors"
          >
            ABOUT
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/free-trial"
            className="bg-[#c4c4c4] text-black font-semibold text-base tracking-wide px-9 py-3 rounded-full hover:bg-white transition-colors"
          >
            FREE TRIAL
          </Link>
          <a
            href="https://join.gffitnessgyms.com/"
            className="bg-gf-blue text-white font-semibold text-base tracking-wide px-9 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
          >
            JOIN NOW
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <Link to="/locations" onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-sm tracking-wider">
            LOCATIONS
          </Link>
          <Link to="/amenities" onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-sm tracking-wider">
            AMENITIES
          </Link>
          <Link to="/group-fitness" onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-sm tracking-wider">
            GROUP CLASSES
          </Link>
          <Link to="/training" onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-sm tracking-wider">
            TRAINING
          </Link>
          <Link to="/about-us" onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-sm tracking-wider">
            ABOUT
          </Link>
          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/free-trial"
              onClick={() => setMobileOpen(false)}
              className="bg-[#c4c4c4] text-black font-semibold text-sm tracking-wider px-6 py-3 rounded-full text-center hover:bg-white transition-colors"
            >
              FREE TRIAL
            </Link>
            <a
              href="https://join.gffitnessgyms.com/"
              className="bg-gf-blue text-white font-semibold text-sm tracking-wider px-6 py-3 rounded-full text-center hover:bg-gf-dark-blue transition-colors"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
