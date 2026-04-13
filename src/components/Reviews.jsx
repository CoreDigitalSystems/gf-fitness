export default function Reviews() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-[family-name:var(--font-heading)]">
          Real People, Real Reviews
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Read what people think of GF Fitness and how it could benefit you too!
        </p>

        {/* Google Reviews Widget Placeholder */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-black">5.0</span>
            <span className="text-gray-500">based on Google Reviews</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah T.',
                text: 'Amazing gym with top-notch equipment. The staff is incredibly friendly and the group classes are fantastic!',
              },
              {
                name: 'Mike R.',
                text: 'Best gym in the area by far. Clean, spacious, and has everything you need for a great workout.',
              },
              {
                name: 'Jessica L.',
                text: 'I love the community at GF Fitness. The trainers really push you to be your best. Highly recommend!',
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-left">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{review.text}</p>
                <p className="font-bold text-black text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
