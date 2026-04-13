const amenities = [
  {
    title: 'On-Site Kids Club',
    description: 'Parent-friendly workouts made easy. (Add-on to any membership)',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: '1-on-1 Personal Training',
    description: 'One-on-one personal training offers a range of health benefits, including personalized attention, tailored workouts, increased accountability, and improved injury prevention.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Cardio Equipment',
    description: 'Discover a new dimension of fitness with our exceptional cardio equipment. Engineered for every goal and fitness level, we provide engaging, low-impact workouts that strengthen your heart, boost endurance, and enhance your overall well-being.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Functional Training Area',
    description: 'Functional training focuses on exercises that mimic real-life movements, aiming to improve the way the body moves in everyday activities.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Free Weights',
    description: 'Free weights are a fundamental component of strength training, offering a versatile and effective way to build muscle, increase strength, and enhance overall fitness.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25" />
      </svg>
    ),
  },
  {
    title: 'Fuel Station',
    description: 'Protein shakes, energy drinks, and recovery supplements.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

export default function Amenities() {
  // Double the items for infinite scroll effect
  const scrollItems = [...amenities, ...amenities]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <p className="text-gf-blue font-semibold text-sm tracking-wider uppercase mb-2">
          GF Fitness is a premium health and fitness club dedicated to providing the best possible fitness and health facilities near you.
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-[family-name:var(--font-heading)]">
          Amenities at GF Fitness
        </h2>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {scrollItems.map((amenity, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-gray-50 rounded-2xl p-8 mx-3 hover:shadow-lg transition-shadow group"
            >
              <div className="text-gf-blue mb-4 group-hover:scale-110 transition-transform">
                {amenity.icon}
              </div>
              <h4 className="text-lg font-bold text-black mb-3 font-[family-name:var(--font-heading)]">
                {amenity.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/amenities"
          className="inline-block bg-gf-blue text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
        >
          Explore All Amenities
        </a>
      </div>
    </section>
  )
}
