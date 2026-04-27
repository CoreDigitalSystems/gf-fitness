export default function PageHero({ title, subtitle, backgroundImage, height = 'min-h-[400px]' }) {
  return (
    <section
      className={`relative flex items-center justify-center text-center text-white ${height} py-20`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
