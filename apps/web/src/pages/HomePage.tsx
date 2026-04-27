import { Hero } from '../components/Hero'
import { Amenities } from '../components/Amenities'
import Classes from '../components/Classes'
import Membership from '../components/Membership'
import Locations from '../components/Locations'
import About from '../components/About'
import Corporate from '../components/Corporate'
import Franchise from '../components/Franchise'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Amenities />
      <Classes />
      <Membership />
      <Locations />
      <About />
      <Corporate />
      <Franchise />
      <Testimonials />
      <Contact />
    </>
  )
}
