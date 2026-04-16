import PageHero from '../components/PageHero'

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        backgroundImage="https://gffitnessgyms.com/wp-content/uploads/2025/07/gf_homepage_banner.jpg"
        height="min-h-[260px]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().getFullYear()}</p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing or using the GF Fitness Gyms website and services, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">2. Membership</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Membership at GF Fitness is subject to additional agreements signed at the time of enrollment.
            Membership fees, freeze policies, and cancellation procedures are outlined in your membership
            agreement.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">3. Facility Use</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Members and guests agree to use facilities and equipment at their own risk. Please follow posted
            guidelines and staff instructions to keep the space safe for everyone.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">4. Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Information submitted through forms on this site is used solely to respond to your inquiry and is
            not sold to third parties. See our Privacy Policy for details.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">5. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update these terms from time to time. Continued use of the site after changes constitutes
            acceptance of the revised terms.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-3">6. Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For questions about these terms, please{' '}
            <a href="/contact-us" className="text-gf-blue hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
