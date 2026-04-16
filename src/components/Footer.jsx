import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Group Fitness Classes', href: '/group-fitness' },
  { name: 'Training', href: '/training' },
  { name: 'Free Trial', href: '/free-trial' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]

const comingSoon = [
  { name: 'Augusta, GA', href: '/location/augusta' },
  { name: 'N. Las Vegas, NV', href: '/location/vegas' },
  { name: 'Huntsville, AL', href: '/location/huntsville' },
  { name: 'Phoenix, AZ', href: '/location/phoenix' },
  { name: 'Newington, CT', href: '/location/newington' },
  { name: 'Covington, GA', href: '/location/covington' },
]

const gfLocations = [{ name: 'Bristol, CT', href: '/location/bristol' }]

const gaLocations = [
  { name: 'Sugar Hill, GA', href: '/location/sugarhill' },
  { name: 'Acworth, GA', href: '/location/acworth' },
]

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95) 0%, rgb(0, 0, 0) 100%), url('https://gffitnessgyms.com/wp-content/uploads/2025/05/J3A1030.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg mb-2">
            Stop by today and begin a healthier lifestyle! We want to see you succeed!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://gffitnessgyms.com/wp-content/uploads/2025/05/new-GF-logo.png"
              alt="GF Fitness"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm mb-4">Try us, risk free!</p>
            <Link
              to="/free-trial"
              className="inline-block bg-gf-blue text-white font-bold text-sm tracking-wider px-6 py-3 rounded-full hover:bg-gf-dark-blue transition-colors"
            >
              Sign up for a FREE Trial
            </Link>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/gffitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gffitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@gffitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              Franchise Opportunities
            </h4>
            <Link
              to="/franchise"
              className="inline-block border-2 border-white text-white font-bold text-sm tracking-wider px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Own a GF Fitness
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">
              GF Fitness
            </h4>
            <ul className="space-y-2">
              {gfLocations.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              Georgia Fitness
            </h4>
            <ul className="space-y-2">
              {gaLocations.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">
              Coming Soon
            </h4>
            <ul className="grid grid-cols-2 gap-y-2">
              {comingSoon.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GF Fitness Gyms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
