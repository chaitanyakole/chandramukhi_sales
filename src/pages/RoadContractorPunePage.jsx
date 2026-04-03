import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';

export default function RoadContractorPunePage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="Road Contractor in Pune"
        description="Road contractor in Pune for township roads, internal roads, and resurfacing projects with IRC-aligned execution."
        path="/road-contractor-pune"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Road Construction in Pune',
          areaServed: 'Pune',
          provider: { '@type': 'Organization', name: 'Chandramukhi Sales' },
          url: 'https://chandramukhi-sales.com/road-contractor-pune',
        }}
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader eyebrow="Local Service" title="ROAD CONTRACTOR IN PUNE" subtitle="Execution support from earthwork to paving for public and private roads." />
          <Reveal>
            <div className="card" style={{ padding: 24, marginBottom: 18 }}>
              <p style={{ color: 'var(--steel-light)', lineHeight: 1.8 }}>
                We execute road works in Pune with planning, material management, compaction control, and finishing quality checks. Suitable for internal roads, access roads, and larger corridor packages.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginBottom: 24 }}>
            {['Up to 50 KM project scale', 'IRC/NHAI standard process', 'Paving + resurfacing support', 'Milestone-based execution'].map((item) => (
              <div key={item} className="card" style={{ padding: 14, color: 'var(--steel-light)' }}>{item}</div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Get Road Project Quote</Link>
            <a href={getWhatsAppLink('Hello, I need a road construction quote in Pune.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
            <a href={`tel:${SITE.phone}`} className="btn btn-outline">{SITE.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
