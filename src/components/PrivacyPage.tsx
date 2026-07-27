import { navigate } from '@/hooks/useRoute';
import { ArrowLeft, Shield } from 'lucide-react';

function PrivacyPage() {
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
            <Shield size={24} className="text-primary" />
          </div>
          <div>
            <span className="section-label">Legal</span>
            <h1 className="text-4xl md:text-5xl font-medium text-primary leading-tight mt-1">
              Privacy Policy
            </h1>
            <p className="text-slate-text mt-3 text-sm">
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: May 2025
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-primary/[0.03] border border-teal-100 rounded-lg p-6 mb-10 text-[15px] text-slate-text leading-relaxed">
          At <strong className="text-primary">Precious Solutions</strong>, we are committed to protecting your
          personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you engage with our consultancy services or visit our website.
        </div>

        {/* Content */}
        <div className="space-y-10 text-[15px] leading-relaxed text-slate-text">

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">1. Information We Collect</h2>
            <p className="mb-3">We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-primary/80">Identity & Contact Data:</strong> Name, job title, company name,
                email address, phone number, and physical address.
              </li>
              <li>
                <strong className="text-primary/80">Engagement Data:</strong> Information shared during consultations,
                HR assessments, training sessions, or compliance reviews.
              </li>
              <li>
                <strong className="text-primary/80">Technical Data:</strong> IP address, browser type, pages visited,
                and time spent on our website (collected via analytics tools).
              </li>
              <li>
                <strong className="text-primary/80">Communication Data:</strong> Records of emails, contact form
                submissions, and other correspondence with us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use your personal information only for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivering consultancy, training, and HR advisory services.</li>
              <li>Communicating with you regarding your engagement, proposals, or inquiries.</li>
              <li>Sending relevant industry insights, newsletters, or service updates (with your consent).</li>
              <li>Maintaining internal records and managing our business operations.</li>
              <li>Complying with applicable legal and regulatory requirements.</li>
              <li>Improving our website performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">3. Legal Basis for Processing</h2>
            <p>
              We process your personal data on the following legal bases: performance of a contract, compliance
              with legal obligations, your explicit consent (where requested), and our legitimate business interests
              in providing professional consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">4. Information Sharing & Disclosure</h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal data to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-primary/80">Service Providers:</strong> Trusted third-party vendors (e.g.,
                email platforms, cloud storage) who assist our operations under strict confidentiality obligations.
              </li>
              <li>
                <strong className="text-primary/80">Legal Compliance:</strong> When required by law, court order,
                or regulatory authority.
              </li>
              <li>
                <strong className="text-primary/80">Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of business assets, your data may be transferred to the successor entity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">5. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfil the purposes for which it was
              collected, including satisfying legal, accounting, or reporting obligations. Typically, client
              engagement records are retained for seven (7) years after the end of a relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your location and applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data (subject to legal obligations).</li>
              <li>Object to or restrict certain types of processing.</li>
              <li>Withdraw consent at any time (where processing is consent-based).</li>
              <li>Lodge a complaint with a relevant data protection authority.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">8. Cookies & Analytics</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience
              and analyze site traffic. You may configure your browser to refuse cookies, though this may affect
              certain website functionality. We use analytics data solely in aggregate, anonymized form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices
              or content of those third-party sites. We encourage you to review their privacy policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">10. Children's Privacy</h2>
            <p>
              Our services are not directed at individuals under the age of 18. We do not knowingly collect
              personal information from minors. If we become aware that a minor has provided us with personal
              data, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
              law. We will notify active clients of material changes via email. The updated policy will be posted
              on this page with a revised effective date.
            </p>
          </section>

          <section className="bg-teal-50/50 border border-teal-100 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-primary mb-2">Contact Our Privacy Team</h2>
            <p className="text-[15px] text-slate-text">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out:
            </p>
            <div className="mt-4 space-y-1 font-medium text-primary text-[15px]">
              <p>Precious Solutions</p>
              <p>Nairobi, Kenya</p>
              <a href="mailto:privacy@precioussolutions.co.ke" className="underline underline-offset-2 hover:text-primary/70 transition-colors">
                privacy@precioussolutions.co.ke
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
