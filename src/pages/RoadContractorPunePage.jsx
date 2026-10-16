import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';

export default function RoadContractorPunePage() {
  const faqs = [
    { q: 'What road construction services do you provide in Pune?', a: 'We handle turnkey road construction from initial earthwork and subgrade stabilization to WMM base course, Dry Lean Concrete (DLC), and Pavement Quality Concrete (PQC) or asphalt paving.' },
    { q: 'Are you working on government highway projects in Pune?', a: 'Yes. Chandramukhi Sales is actively executing and building express highway stretches for the Government of Maharashtra’s landmark Pune Ring Road project.' },
    { q: 'What machinery do you deploy for road works?', a: 'Our fleet includes automated concrete slipform pavers, heavy vibratory soil compactors, motor graders, and twin 60 m³/hr batching plants with 15+ transit mixers.' },
    { q: 'What quality standards do you follow for road construction?', a: 'All our highway and arterial road projects comply strictly with IRC:15, IRC:58, MoRTH specifications, and MSRDC quality oversight.' },
  ];

  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="Road Construction Contractor in Pune | Pune Ring Road Builder"
        description="Turnkey road contractor in Pune actively building the Pune Ring Road. Earthwork to rigid concrete pavement (PQC) and highway infrastructure."
        path="/road-contractor-pune"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Road Construction Contractor in Pune',
          areaServed: 'Pune, Maharashtra',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Chandramukhi Sales',
            telephone: SITE.phone,
          },
          url: 'https://chandramukhisales.com/road-contractor-pune',
        }}
      />

      {/* Hero Header */}
      <section style={{ position: 'relative', padding: '72px 5%', overflow: 'hidden', background: 'linear-gradient(rgba(7,15,27,0.7), rgba(7,15,27,0.9)), url("/pune-ring-road.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="badge badge-orange" style={{ marginBottom: 12 }}>
              🏛️ Government Infrastructure Contractor · Building Pune Ring Road
            </div>
            <h1 className="text-display" style={{ fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--white)', marginBottom: 16, lineHeight: 1.1 }}>
              ROAD CONTRACTOR IN PUNE
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 18, maxWidth: 720, lineHeight: 1.8, marginBottom: 28 }}>
              Turnkey road and highway construction contractor in Pune. Proudly executing multi-lane express highway stretches for the landmark Pune Ring Road economic corridor.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>View Ring Road Project →</Link>
              <Link to="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>Discuss Road Tender</Link>
              <a href={getWhatsAppLink('Hello Chandramukhi Sales, I want to discuss a road construction project in Pune.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scope Highlights */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader
            eyebrow="Full-Cycle Execution"
            title="END-TO-END ROAD CONSTRUCTION IN PUNE"
            subtitle="Equipped with modern machinery and in-house batching plants for uninterrupted highway construction."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { icon: '🚜', title: 'Earthwork & Subgrade', desc: 'Heavy excavation, filling, and high-tonnage soil compaction to IRC specifications.' },
              { icon: '🏗️', title: 'Sub-Base Course (GSB / WMM)', desc: 'Mechanical grading, wet mix macadam, and density verification testing.' },
              { icon: '🛣️', title: 'Rigid PQC Concrete Paving', desc: 'High-speed automated slipform paving using high-strength PQC M40 concrete.' },
              { icon: '⚡', title: 'Highway Cross-Drainage', desc: 'Reinforced concrete box culverts, median barriers, and drainage channels.' },
            ].map(s => (
              <div key={s.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ color: 'var(--white)', fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w" style={{ maxWidth: 840, margin: '0 auto' }}>
          <SectionHeader eyebrow="FAQ" title="ROAD CONTRACTING QUESTIONS" subtitle="Frequently asked questions about highway and road construction in Pune." />
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
