import { navigate } from '@/hooks/useRoute';
import { ArrowLeft, FileText } from 'lucide-react';

function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-primary/60 hover:text-primary transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>

        {/* Page Header */}
        <div className="flex items-start gap-5 mb-12 pb-10 border-b border-teal-50">
          <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-1">
            <FileText size={24} className="text-primary" />
          </div>
          <div>
            <span className="section-label">Legal</span>
            <h1 className="text-4xl md:text-5xl font-medium text-primary leading-tight mt-1">
              Terms of Service
            </h1>
            <p className="text-slate-text mt-3 text-sm">
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: May 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-10 text-[15px] leading-relaxed text-slate-text">

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of Precious Solutions ("Company," "we," "us," or "our"),
              you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              These terms apply to all clients, visitors, and users who access or use our procurement, technical installation, training, or consultancy services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">2. Services Provided</h2>
            <p>
              Precious Solutions provides professional procurement and supply, capacity building training, technical installation and commissioning, business consulting, and managed maintenance services to enterprises, government institutions, educational organizations, NGOs, and healthcare facilities. The scope of services for each engagement is defined in a separate Service Agreement or Statement of Work (SOW) signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">3. Client Responsibilities</h2>
            <p>Clients engaging with our services agree to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide accurate and complete information necessary to deliver the services.</li>
              <li>Cooperate reasonably with our consultants and technical team in a timely manner.</li>
              <li>Comply with all applicable statutory regulations and labor laws within their jurisdiction.</li>
              <li>Not use our services for any unlawful, fraudulent, or harmful purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">4. Payment Terms</h2>
            <p>
              All fees are outlined in the applicable Service Agreement. Payments are due as specified therein.
              Late payments may incur interest at the rate of 1.5% per month. We reserve the right to suspend
              services for overdue accounts after 30 days of non-payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">5. Confidentiality</h2>
            <p>
              Both parties agree to hold all confidential information shared during the engagement in strict
              confidence. Precious Solutions will not disclose your proprietary business information
              to third parties without your written consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">6. Intellectual Property</h2>
            <p>
              All methodologies, frameworks, templates, and materials developed by Precious Solutions
              remain our exclusive intellectual property unless otherwise agreed in writing. Custom deliverables
              created specifically for a client are licensed to that client for internal use only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">7. Limitation of Liability</h2>
            <p>
              Precious Solutions shall not be liable for any indirect, incidental, special, or consequential
              damages arising from the use of our services. Our total liability for any claim shall not exceed
              the total fees paid for the specific engagement giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">8. Termination</h2>
            <p>
              Either party may terminate a service engagement with 30 days written notice. Upon termination,
              all outstanding fees become immediately due and payable. Provisions concerning confidentiality,
              intellectual property, and limitation of liability survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes
              arising shall be resolved through good-faith negotiation, and if unresolved, through arbitration
              in Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Significant changes will be
              communicated to active clients via email. Continued use of our services following notification
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="bg-teal-50/50 border border-teal-100 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-primary mb-2">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2 font-medium text-primary">
              Precious Solutions &nbsp;·&nbsp; Nairobi, Kenya<br />
              <a href="mailto:info@precioussolutions.co.ke" className="underline underline-offset-2 hover:text-primary/70 transition-colors">
                info@precioussolutions.co.ke
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default TermsPage;
