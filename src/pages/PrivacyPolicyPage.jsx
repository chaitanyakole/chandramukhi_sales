import React from 'react';
import SEO from '../components/SEO';
import { SectionHeader } from '../components/UI';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)', minHeight: '100vh' }}>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Chandramukhi Sales website and lead forms."
        path="/privacy-policy"
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader
            eyebrow="Legal"
            title="PRIVACY POLICY"
            subtitle="How we collect, use, and protect your information."
          />
          <div className="card" style={{ padding: 28, lineHeight: 1.8, color: 'var(--steel-light)' }}>
            <p>We collect contact details you submit through our forms, calls, and messaging channels to provide quotations, project discussions, and customer support.</p>
            <p>Information may include your name, phone number, email address, service requirement, budget range, and project details.</p>
            <p>We use this information only for business communication, quotation processing, and service delivery. We do not sell your personal data to third parties.</p>
            <p>We may share limited information with trusted partners only when required to complete your project or provide requested services.</p>
            <p>By submitting your details, you consent to our team contacting you through phone, WhatsApp, and email regarding your inquiry.</p>
            <p>If you want to update or remove your information, contact us at <a href="mailto:chandramukhisales99@gmail.com" style={{ color: 'var(--orange)' }}>chandramukhisales99@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
