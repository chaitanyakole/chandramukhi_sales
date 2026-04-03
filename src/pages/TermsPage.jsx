import React from 'react';
import SEO from '../components/SEO';
import { SectionHeader } from '../components/UI';

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)', minHeight: '100vh' }}>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Chandramukhi Sales website usage and quotations."
        path="/terms"
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader
            eyebrow="Legal"
            title="TERMS OF SERVICE"
            subtitle="Terms applicable to website usage and project inquiries."
          />
          <div className="card" style={{ padding: 28, lineHeight: 1.8, color: 'var(--steel-light)' }}>
            <p>All project details, rates, and delivery commitments shared on this website are indicative and subject to formal quotation and contract terms.</p>
            <p>Final pricing depends on project scope, site conditions, material requirements, and execution timelines.</p>
            <p>Any timelines discussed before formal order confirmation are estimates and may change due to force majeure, supply disruptions, or regulatory factors.</p>
            <p>You agree to provide accurate information while submitting inquiry forms and during project discussions.</p>
            <p>All website content is property of Chandramukhi Sales and may not be copied or reused without written permission.</p>
            <p>For legal or contractual clarifications, contact us at <a href="mailto:chandramukhisales99@gmail.com" style={{ color: 'var(--orange)' }}>chandramukhisales99@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
