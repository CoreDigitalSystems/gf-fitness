import { IconArrow } from './Icons';

export const UtilityBar = () => (
  <div className="bg-[#1a1a1a] text-white text-xs hidden md:block">
    <div className="flex items-stretch">
      <div className="flex items-center gap-7 px-6 py-2 flex-1">
        <a href="#corporate" className="hover:text-[#4B5EFF] transition-colors tracking-wide">Corporate Wellness</a>
        <a href="#contact" className="hover:text-[#4B5EFF] transition-colors tracking-wide">Contact Us</a>
        <a href="#locations" className="hover:text-[#4B5EFF] transition-colors tracking-wide flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4B5EFF] animate-pulse" />
          Coming Soon: 6 New Locations
        </a>
      </div>
      <a
        href="#franchise"
        className="bg-[#4B5EFF] hover:bg-[#6171ff] transition-colors px-6 py-2 font-semibold tracking-wider uppercase text-xs flex items-center gap-2"
      >
        Own a Franchise
        <IconArrow className="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
);
