import { useEffect, useRef, useState } from 'react';

export const BtnFilled = ({ children, className = '', ...rest }) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#4B5EFF] hover:bg-[#6171ff] active:bg-[#3d4fe3] text-white font-semibold px-6 py-3 text-sm tracking-wide transition-colors ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export const BtnOutline = ({ children, className = '', ...rest }) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/80 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 text-sm tracking-wide transition-all ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export const SectionLabel = ({ children, color = 'text-[#4B5EFF]' }) => (
  <div className={`font-mono text-[11px] tracking-[0.3em] uppercase ${color} mb-4 flex items-center gap-3`}>
    <span className="block h-px w-8 bg-current opacity-60" />
    {children}
  </div>
);

export const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95] ${className}`}>
    {children}
  </h2>
);

export const Placeholder = ({ label, className = '', children }) => (
  <div className={`placeholder ${className}`} data-label={label}>
    {children}
  </div>
);

export const useInView = (ref, once = true) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, once]);
  return visible;
};
