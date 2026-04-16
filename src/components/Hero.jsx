import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg',
    alt: 'GF Fitness gym floor with modern equipment',
  },
  {
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/05/Georgia-fitness-acworth-georgia1.jpg',
    alt: 'GF Fitness Acworth, Georgia location exterior',
  },
  {
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/04/J3A0953.jpg',
    alt: 'Members working out at GF Fitness',
  },
  {
    image: 'https://gffitnessgyms.com/wp-content/uploads/2025/06/Cycle-Room-copy.webp',
    alt: 'GF Fitness cycle studio with indoor bikes',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => setCurrent(index)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
          <span className="block">Change Your Body.</span>
          <span className="block">Change Your Life.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          With unrivaled space and activities, GF Fitness is a community with a passion for inspired fitness, sports and wellness.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://join.gffitnessgyms.com/"
            className="bg-gf-blue text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:bg-gf-dark-blue transition-colors inline-flex items-center gap-2"
          >
            BECOME A MEMBER
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            to="/free-trial"
            className="border-2 border-white text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            GET A FREE TRIAL
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-gf-blue' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
