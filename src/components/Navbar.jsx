import { useState } from 'react'

const locations = [
  { name: 'Acworth, GA', href: '/locations/acworth' },
  { name: 'Bristol, CT', href: '/locations/bristol' },
  { name: 'Sugar Hill, GA', href: '/locations/sugar-hill' },
]

const groupClasses = [
  { name: 'All Classes', href: '/group-fitness' },
  { name: 'Cycle', href: '/group-fitness/cycle' },
  { name: 'HIIT', href: '/group-fitness/hiit' },
  { name: 'Yoga', href: '/group-fitness/yoga' },
  { name: 'Strength', href: '/group-fitness/strength' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locDropdown, setLocDropdown] = useState(false)
  const [classDropdown, setClassDropdown] = useState(false)

  return (
    <nav className="bg-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/05/new-GF-logo.png"
            alt="GF Fitness"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Locations Dropdown */}
          <div className="relative"
            onMouseEnter={() => setLocDropdown(true)}
            onMouseLeave={() => setLocDropdown(false)}
          >
            <button
              aria-expanded={locDropdown}
              aria-haspopup="true"
              className="text-white font-semibold text-sm tracking-wider flex items-center gap-1 hover:text-gf-blue transition-colors"
            >
              LOCATIONS
              <svg className={`w-3 h-3 transition-transform ${locDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {locDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px]" role="menu">
                {locations.map((loc) => (
                  <a key={loc.name} href={loc.href} role="menuitem" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
                    {loc.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/amenities" className="text-white font-semibold text-sm tracking-wider hover:text-gf-blue transition-colors">
            AMENITIES
          </a>

          {/* Group Classes Dropdown */}
          <div className="relative"
            onMouseEnter={() => setClassDropdown(true)}
            onMouseLeave={() => setClassDropdown(false)}
          >
            <button
              aria-expanded={classDropdown}
              aria-haspopup="true"
              className="text-white font-semibold text-sm tracking-wider flex items-center gap-1 hover:text-gf-blue transition-colors"
            >
              GROUP CLASSES
              <svg className={`w-3 h-3 transition-transform ${classDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {classDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px]" role="menu">
                {groupClasses.map((cls) => (
                  <a key={cls.name} href={cls.href} role="menuitem" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
                    {cls.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/training" className="text-white font-semibold text-sm tracking-wider hover:text-gf-blue transition-colors">
            TRAINING
          </a>
          <a href="/about" className="text-white font-semibold text-sm tracking-wider hover:text-gf-blue transition-colors">
            ABOUT
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/free-trial"
            className="border-2 border-white text-white font-semibold text-sm tracking-wider px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            FREE TRIAL
          </a>
          <a
            href="/join"
            className="bg-gf-blue text-white font-semibold text-sm tracking-wider px-6 py-2 rounded-full hover:bg-gf-dark-blue transition-colors"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">
          <a href="/locations/acworth" className="block text-white font-semibold text-sm tracking-wider">LOCATIONS</a>
          <a href="/amenities" className="block text-white font-semibold text-sm tracking-wider">AMENITIES</a>
          <a href="/group-fitness" className="block text-white font-semibold text-sm tracking-wider">GROUP CLASSES</a>
          <a href="/training" className="block text-white font-semibold text-sm tracking-wider">TRAINING</a>
          <a href="/about" className="block text-white font-semibold text-sm tracking-wider">ABOUT</a>
          <div className="flex flex-col gap-3 pt-4">
            <a href="/free-trial" className="border-2 border-white text-white font-semibold text-sm tracking-wider px-6 py-2 rounded-full text-center hover:bg-white hover:text-black transition-colors">
              FREE TRIAL
            </a>
            <a href="/join" className="bg-gf-blue text-white font-semibold text-sm tracking-wider px-6 py-2 rounded-full text-center hover:bg-gf-dark-blue transition-colors">
              JOIN NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
