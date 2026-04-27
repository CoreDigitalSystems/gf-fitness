import { useState } from 'react'

export default function FreeTrialForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    zipCode: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // GoHighLevel form integration placeholder
    console.log('Form submitted:', formData)
    alert('Thank you! Your free trial request has been submitted. (GoHighLevel integration pending)')
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        {/* Form Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-[family-name:var(--font-heading)]">
            Sign up for a FREE trial
          </h2>

          {/* GoHighLevel Form Embed Placeholder */}
          <div id="ghl-free-trial-form" className="ghl-form-placeholder">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <select
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue bg-white"
                >
                  <option value="">Select a location</option>
                  <option value="acworth">Acworth, GA</option>
                  <option value="bristol">Bristol, CT</option>
                  <option value="sugar-hill">Sugar Hill, GA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gf-blue/20 focus:border-gf-blue"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label className="text-xs text-gray-500">
                  By submitting this form, you consent to our privacy policy. You will receive communication that includes calls, text messages, and email. You have the ability to opt out at any time. Message frequency varies. Message & data rates may apply.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gf-blue text-white font-bold py-3 rounded-md hover:bg-gf-dark-blue transition-colors text-sm tracking-wider"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Testimonial Side */}
        <div className="flex flex-col justify-center">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              <a
                href="https://instagram.com/gffitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gf-blue font-semibold text-sm hover:underline"
              >
                Instagram
              </a>
            </div>
            <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
              GF Fitness feels like a breath of fresh air when you walk in. The environment the staff creates is very welcoming, setting you up for success. I love all the amazing equipment! This is a place for anyone to come move their body!
            </blockquote>
            <div className="flex items-center gap-3">
              <div>
                <p className="font-bold text-black">Riley M.</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
