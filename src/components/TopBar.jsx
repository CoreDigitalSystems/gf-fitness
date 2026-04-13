import { useState } from 'react'

const comingSoonLocations = [
  { name: 'Sugar Hill, GA', href: '/coming-soon/sugar-hill' },
  { name: 'Bristol, CT', href: '/coming-soon/bristol' },
]

export default function TopBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="bg-[#f0f0f0] text-black text-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <a href="/corporate-wellness" className="font-semibold tracking-wide text-xs hover:text-gf-blue transition-colors">
            CORPORATE WELLNESS
          </a>
          <a href="/contact" className="font-semibold tracking-wide text-xs hover:text-gf-blue transition-colors">
            CONTACT US
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="font-semibold tracking-wide text-xs hover:text-gf-blue transition-colors flex items-center gap-1"
            >
              COMING SOON
              <svg className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
                {comingSoonLocations.map((loc) => (
                  <a
                    key={loc.name}
                    href={loc.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                  >
                    {loc.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <a
          href="/franchise"
          className="bg-gf-blue text-white font-bold text-xs tracking-wide px-8 py-2 hover:bg-gf-dark-blue transition-colors"
        >
          OWN A FRANCHISE
        </a>
      </div>
    </div>
  )
}
