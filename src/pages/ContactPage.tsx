import PageHero from '../components/PageHero'

const locations = [
  {
    name: 'Acworth, GA',
    address: '3362 Acworth Summit Blvd, Unit 100, Acworth GA 30101',
    phone: '(678) 973-0635',
  },
  {
    name: 'Bristol, CT',
    address: '1379 Farmington Ave, Bristol, CT 06010',
    phone: '(860) 506-9768',
  },
  {
    name: 'Sugar Hill, GA',
    address: '245 Peachtree Industrial Blvd #100, Sugar Hill, GA 30518',
    phone: '(678) 765-8999',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question for our team or need to get in touch with management? We're here to help."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Complete the form and a member of our team will get back to you.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="border border-gray-300 rounded px-4 py-3 w-full" placeholder="First Name *" />
                <input className="border border-gray-300 rounded px-4 py-3 w-full" placeholder="Last Name *" />
              </div>
              <input className="border border-gray-300 rounded px-4 py-3 w-full" placeholder="Email *" type="email" />
              <input className="border border-gray-300 rounded px-4 py-3 w-full" placeholder="Phone *" type="tel" />
              <select className="border border-gray-300 rounded px-4 py-3 w-full">
                <option>Location *</option>
                <option>Acworth, GA</option>
                <option>Bristol, CT</option>
                <option>Sugar Hill, GA</option>
              </select>
              <select className="border border-gray-300 rounded px-4 py-3 w-full">
                <option>What can we help with? *</option>
                <option>Membership Information</option>
                <option>Personal or Small Group Training</option>
                <option>Freeze or Cancel Membership</option>
                <option>Vendor Inquiries</option>
                <option>General Questions</option>
              </select>
              <textarea
                className="border border-gray-300 rounded px-4 py-3 w-full"
                rows="5"
                placeholder="Your Message *"
              />
              <button
                type="button"
                className="bg-gf-blue text-white font-semibold tracking-wide px-10 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Our Locations</h2>
            <div className="space-y-6">
              {locations.map((l) => (
                <div key={l.name} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{l.name}</h3>
                  <p className="text-gray-700">{l.address}</p>
                  <p className="text-gray-700">
                    <a href={`tel:${l.phone.replace(/\D/g, '')}`} className="hover:text-gf-blue">
                      {l.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
