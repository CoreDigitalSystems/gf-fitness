import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <p className="text-gf-blue font-bold tracking-widest text-sm mb-4">404 — PAGE NOT FOUND</p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mb-4">
          This page took a rest day.
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          We couldn't find what you were looking for. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block bg-gf-blue text-white font-semibold tracking-wide px-10 py-4 rounded-full hover:bg-gf-dark-blue transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
