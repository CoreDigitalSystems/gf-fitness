export default function TwoColumnFeatures() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Corporate Wellness */}
        <div className="relative rounded-2xl overflow-hidden group min-h-[400px]">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/02/IMG_3643-copy.webp"
            alt="Corporate Wellness at GF Fitness"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Build Stronger Companies with Corporate Wellness
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Investing in your company's wellness could result in healthier employees. When your employees are healthier, they're often happier and more productive, which translates to reduced operating costs to your business overall. Your company could also benefit from reduced healthcare costs.
            </p>
            <a
              href="/corporate-wellness"
              className="inline-block bg-gf-blue text-white font-bold text-sm tracking-wider px-6 py-3 rounded-full hover:bg-gf-dark-blue transition-colors self-start"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Change Your Body */}
        <div className="relative rounded-2xl overflow-hidden group min-h-[400px]">
          <img
            src="https://gffitnessgyms.com/wp-content/uploads/2025/02/change-your-body-chnag-eyour-life.webp"
            alt="Change Your Body at GF Fitness"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Change Your Body, Change Your Life at GF Fitness
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              GF Fitness is a premium health and fitness club dedicated to providing the best possible fitness and health facilities. Our aim is to ensure that all of our members have access to state-of-the-art fitness facilities and equipment to achieve their individual fitness goals.
            </p>
            <a
              href="/amenities"
              className="inline-block bg-gf-blue text-white font-bold text-sm tracking-wider px-6 py-3 rounded-full hover:bg-gf-dark-blue transition-colors self-start"
            >
              VIEW ALL AMENITIES
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
