import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';
import PlantNetworkMap from '../components/PlantNetworkMap';
import ConcreteGradeMatrix from '../components/ConcreteGradeMatrix';

export default function RmcPunePage() {
  const faqs = [
    { q: 'What is the minimum order quantity for RMC in Pune?', a: 'Our minimum order quantity is 5 cubic meters (1 transit mixer load). For large commercial and infrastructure pours, we supply up to 1,500+ m³ per day.' },
    { q: 'How fast can RMC be delivered to our site in Pune?', a: 'With twin automated batching plants in Wagholi (East Pune) and Mulshi/Nande (West Pune), we guarantee fresh concrete pours delivered within 45 minutes of batching.' },
    { q: 'What concrete grades do you batch?', a: 'We manufacture computerized mixes from M7.5/M10 (DLC) up to M60 and PQC M40 (Pune Ring Road standard), plus specialty Self-Compacting Concrete (SCC).' },
    { q: 'Do you provide concrete pumps and boom placers?', a: 'Yes, we operate high-reach 42 cum/hr concrete pumps capable of vertical pumping up to G+30 storeys and horizontal reach for deep basement rafts.' },
  ];

  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="Ready Mix Concrete (RMC) Supplier in Pune"
        description="Leading RMC supplier in Pune with twin computerized batching plants in Wagholi and Mulshi. M15 to M60 grades, guaranteed 45-min fresh pour delivery."
        path="/rmc-pune"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Ready Mix Concrete Supply in Pune',
          areaServed: 'Pune, Maharashtra',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Chandramukhi Sales',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sr.No.511, Pune–Nagar Road, Wagholi',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              postalCode: '412207',
            },
            telephone: SITE.phone,
          },
          url: 'https://chandramukhi-sales.com/rmc-pune',
        }}
      />

      {/* Hero Header */}
      <section style={{ position: 'relative', padding: '72px 5%', overflow: 'hidden', background: 'linear-gradient(rgba(7,15,27,0.7), rgba(7,15,27,0.9)), url("/rmc-batching-plant.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="badge badge-orange" style={{ marginBottom: 12 }}>
              🏗️ Certified RMC Plants in Wagholi & Mulshi
            </div>
            <h1 className="text-display" style={{ fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--white)', marginBottom: 16, lineHeight: 1.1 }}>
              READY MIX CONCRETE (RMC) IN PUNE
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 18, maxWidth: 720, lineHeight: 1.8, marginBottom: 28 }}>
              Engineered with computerized precision at our twin automated 60 m³/hr batching plants. Supplying residential high-rises, commercial developments, and government highway projects across Pune.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Get RMC Quote</Link>
              <a href={getWhatsAppLink('Hello Chandramukhi Sales, I need RMC concrete supply for my site in Pune.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp Dispatch</a>
              <a href={`tel:${SITE.phone}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic Delivery Map */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <PlantNetworkMap />
        </div>
      </section>

      {/* Grade Matrix */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <ConcreteGradeMatrix />
        </div>
      </section>

      {/* Local FAQs */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w" style={{ maxWidth: 840, margin: '0 auto' }}>
          <SectionHeader eyebrow="FAQ" title="PUNE RMC SUPPLY QUESTIONS" subtitle="Clear answers to common questions about ready-mix concrete supply in Pune." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((f, i) => (
              <div key={i} className="card" style={{ padding: 22 }}>
                <h4 style={{ color: 'var(--white)', fontSize: 16, margin: '0 0 8px 0' }}>{f.q}</h4>
                <p style={{ color: 'var(--steel-light)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
