import { Link } from 'react-router-dom'
import { IconArrow } from './Icons'

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white text-xs hidden md:block">
      <div className="flex items-stretch">
        <div className="flex items-center gap-7 px-6 py-2 flex-1">
          <Link
            to="/corporate-wellness"
            className="hover:text-gf-blue transition-colors tracking-wide"
          >
            Corporate Wellness
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-gf-blue transition-colors tracking-wide"
          >
            Contact Us
          </Link>
          <Link
            to="/locations"
            className="hover:text-gf-blue transition-colors tracking-wide flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gf-blue animate-pulse" />
            Coming Soon: 6 New Locations
          </Link>
        </div>
        <Link
          to="/franchise"
          className="bg-gf-blue hover:bg-gf-dark-blue transition-colors px-6 py-2 font-semibold tracking-wider uppercase text-xs flex items-center gap-2"
        >
          Own a Franchise
          <IconArrow className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
