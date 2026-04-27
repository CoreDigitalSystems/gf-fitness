import { useState, useEffect } from 'react';
import { UtilityBar } from './components/UtilityBar';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Amenities } from './components/Amenities';
import { Classes } from './components/Classes';
import { Membership } from './components/Membership';
import { Locations } from './components/Locations';
import { About } from './components/About';
import { Corporate } from './components/Corporate';
import { Franchise } from './components/Franchise';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SECTION_IDS = ['top', 'amenities', 'classes', 'membership', 'locations', 'about', 'corporate', 'franchise', 'contact'];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const threshold = window.innerHeight * 0.35;
      let current = 'top';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= threshold) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      <UtilityBar />
      <Nav scrolled={scrolled} activeSection={activeSection} onNav={onNav} />
      <Hero onNav={onNav} />
      <Amenities />
      <Classes />
      <Membership />
      <Locations />
      <About />
      <Corporate />
      <Franchise />
      <Testimonials />
      <Contact />
      <Footer onNav={onNav} />
    </div>
  );
}

export default App;
