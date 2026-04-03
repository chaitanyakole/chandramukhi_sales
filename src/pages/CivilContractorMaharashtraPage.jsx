import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';

export default function CivilContractorMaharashtraPage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="Civil Contractor in Maharashtra"
        description="Civil contractor in Maharashtra for industrial, residential, and infrastructure projects with end-to-end execution support."
        path="/civil-contractor-maharashtra"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Civil Contracting in Maharashtra',
          areaServed: 'Maharashtra',
          provider: { '@type': 'Organization', name: 'Chandramukhi Sales' },
          url: 'https://chandramukhi-sales.com/civil-contractor-maharashtra',
        }}
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader eyebrow="Regional Service" title="CIVIL CONTRACTOR IN MAHARASHTRA" subtitle="Comprehensive civil execution support from foundation to handover." />
          <Reveal>
            <div className="card" style={{ padding: 24, marginBottom: 18 }}>
              <p style={{ color: 'var(--steel-light)', lineHeight: 1.8 }}>
                We deliver civil contracting projects across Maharashtra with engineer-led planning, quality assurance, and transparent progress tracking for each milestone.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginBottom: 24 }}>
            {['Residential and commercial works', 'Industrial civil packages', 'IS/BIS aligned process', '100+ professionals support'].map((item) => (
              <div key={item} className="card" style={{ padding: 14, color: 'var(--steel-light)' }}>{item}</div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Get Civil Project Quote</Link>
            <a href={getWhatsAppLink('Hello, I need civil contracting support in Maharashtra.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
            <a href={`tel:${SITE.phone}`} className="btn btn-outline">{SITE.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
