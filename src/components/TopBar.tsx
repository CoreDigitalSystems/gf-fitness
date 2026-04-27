import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const comingSoonLocations = [
  { name: 'Augusta, GA', href: '/location/augusta' },
  { name: 'Covington, GA', href: '/location/covington' },
  { name: 'Huntsville, AL', href: '/location/huntsville' },
  { name: 'Newington, CT', href: '/location/newington' },
  { name: 'N. Las Vegas, NV', href: '/location/vegas' },
  { name: 'Phoenix, AZ', href: '/location/phoenix' },
]

export default function TopBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="bg-gf-muted text-black text-sm relative z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pl-6 pr-0">
        <div className="flex items-center gap-8 py-3">
          <Link
            to="/corporate-wellness"
            className="font-semibold tracking-wide text-[13px] hover:text-gf-blue transition-colors"
          >
            CORPORATE WELLNESS
          </Link>
          <Link
            to="/contact-us"
            className="font-semibold tracking-wide text-[13px] hover:text-gf-blue transition-colors"
          >
            CONTACT US
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="font-semibold tracking-wide text-[13px] hover:text-gf-blue transition-colors flex items-center gap-1"
            >
              COMING SOON
              <svg
                className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50"
                role="menu"
              >
                {comingSoonLocations.map((loc) => (
                  <Link
                    key={loc.name}
                    to={loc.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <Link
          to="/franchise"
          className="bg-gf-blue text-white font-bold text-[13px] tracking-wide px-10 py-4 hover:bg-gf-dark-blue transition-colors self-stretch flex items-center"
        >
          OWN A FRANCHISE
        </Link>
      </div>
    </div>
  )
}
