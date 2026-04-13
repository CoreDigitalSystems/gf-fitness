export default function GroupFitness() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/02/IMG_3478-copy.webp"
            alt="Group fitness class at GF Fitness"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-white">
          <p className="text-gf-blue font-semibold text-sm tracking-wider uppercase mb-3">
            Something For Everyone
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            Customize Your Workouts with Group Fitness Classes
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Crush your goals with the energy and accountability of group training at GF Fitness. Led by expert coaches and backed by a motivating community, our sessions combine strength, cardio, and functional training to deliver real results — fast.
          </p>
          <a
            href="/group-fitness"
            className="inline-block bg-gf-blue text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
          >
            Explore Group Fitness Classes
          </a>
        </div>
      </div>
    </section>
  )
}
