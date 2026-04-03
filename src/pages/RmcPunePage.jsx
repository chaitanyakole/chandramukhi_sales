import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';

export default function RmcPunePage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="RMC Supplier in Pune"
        description="Ready Mix Concrete supplier in Pune with reliable delivery, M15-M60 grades, and project-ready dispatch support."
        path="/rmc-pune"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Ready Mix Concrete in Pune',
          areaServed: 'Pune',
          provider: { '@type': 'Organization', name: 'Chandramukhi Sales' },
          url: 'https://chandramukhi-sales.com/rmc-pune',
        }}
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader eyebrow="Local Service" title="READY MIX CONCRETE IN PUNE" subtitle="Consistent RMC supply for residential, commercial, and infrastructure projects." />
          <Reveal>
            <div className="card" style={{ padding: 24, marginBottom: 18 }}>
              <p style={{ color: 'var(--steel-light)', lineHeight: 1.8 }}>
                We supply quality ready mix concrete across Pune with planned dispatch, grade-wise batching, and on-time site delivery support. Our team handles routine and peak pour schedules with strict consistency checks.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginBottom: 24 }}>
            {['M15-M60 grade range', '4-6 hour dispatch window', 'Transit mixer logistics', 'Technical mix support'].map((item) => (
              <div key={item} className="card" style={{ padding: 14, color: 'var(--steel-light)' }}>{item}</div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Get RMC Quote</Link>
            <a href={getWhatsAppLink('Hello, I need RMC supply in Pune.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
            <a href={`tel:${SITE.phone}`} className="btn btn-outline">{SITE.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
