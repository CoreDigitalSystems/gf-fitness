export default function CTABanner() {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 53, 214, 0.9) 0%, rgba(0, 53, 214, 0.88) 99%), url('https://gffitnessgyms.com/wp-content/uploads/2025/02/change-your-body-chnag-eyour-life.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
          Become a Member
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          We're so confident that you'll love our fitness facilities that we invite you to come in and try the gym for free. Experience our equipment, amenities, and classes firsthand — and see why so many members consider us one of the best gyms around!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/join"
            className="bg-white text-gf-dark-blue font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            BECOME A MEMBER
          </a>
          <a
            href="/free-trial"
            className="border-2 border-white text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            GET A FREE TRIAL
          </a>
        </div>
      </div>
    </section>
  )
}
