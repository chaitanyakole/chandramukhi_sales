import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader } from '../components/UI';
import { SITE, getWhatsAppLink } from '../data/siteData';
import PlantNetworkMap from '../components/PlantNetworkMap';

export default function CivilContractorMaharashtraPage() {
  const faqs = [
    { q: 'What regions across Maharashtra do you execute civil contracting?', a: 'While our core automated batching plants are in Pune, we execute turnkey highway, road, and industrial concrete contracting packages throughout Western Maharashtra and adjoining economic corridors.' },
    { q: 'Are you empanelled for Government civil projects?', a: 'Yes. Chandramukhi Sales is an empanelled infrastructure contractor eligible for state and national highway infrastructure works, currently executing Pune Ring Road packages.' },
    { q: 'Can you deploy on-site dedicated batching plants for mega projects?', a: 'Yes. For projects requiring over 50,000 m³ of concrete across Maharashtra, we can mobilize and set up dedicated computerized captive batching plants with transit mixers and mobile testing labs.' },
  ];

  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)' }}>
      <SEO
        title="Civil & Infrastructure Contractor in Maharashtra"
        description="Empanelled civil and road infrastructure contractor in Maharashtra. Specialized in turnkey road construction, bulk RMC supply, and heavy civil works."
        path="/civil-contractor-maharashtra"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Civil Contracting in Maharashtra',
          areaServed: 'Maharashtra',
          provider: {
            '@type': 'Organization',
            name: 'Chandramukhi Sales',
            telephone: SITE.phone,
          },
          url: 'https://chandramukhisales.com/civil-contractor-maharashtra',
        }}
      />

      {/* Hero Header */}
      <section style={{ position: 'relative', padding: '72px 5%', overflow: 'hidden', background: 'linear-gradient(rgba(7,15,27,0.7), rgba(7,15,27,0.9)), url("/pune-ring-road.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="badge badge-orange" style={{ marginBottom: 12 }}>
              🏛️ State Infrastructure Contractor · Since 2002
            </div>
            <h1 className="text-display" style={{ fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--white)', marginBottom: 16, lineHeight: 1.1 }}>
              CIVIL CONTRACTOR IN MAHARASHTRA
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 18, maxWidth: 720, lineHeight: 1.8, marginBottom: 28 }}>
              Turnkey civil engineering, heavy highway construction, and industrial concrete contracting across Maharashtra. Partnered with tier-1 developers and government infrastructure bodies.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Discuss Maharashtra Project</Link>
              <Link to="/projects" className="btn btn-outline" style={{ textDecoration: 'none' }}>View Pune Ring Road</Link>
              <a href={getWhatsAppLink('Hello Chandramukhi Sales, I need a civil contractor for a project in Maharashtra.')} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader
            eyebrow="Capabilities"
            title="INFRASTRUCTURE CAPABILITY"
            subtitle="Built on over two decades of engineering trust, heavy machinery fleet, and material security."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { icon: '🏛️', title: 'Govt Highway Execution', desc: 'Turnkey road contracting including Pune Ring Road express corridor packages.' },
              { icon: '🏭', title: 'Captive Batching Plants', desc: 'Mobilization of computerized on-site batching plants for mega infrastructure sites.' },
              { icon: '🔬', title: 'IS & IRC Lab Testing', desc: 'In-house and third-party NABL certified compressive cube press testing for every pour.' },
              { icon: '🤝', title: 'Tier-1 Client Trust', desc: 'Trusted by Pride Purple, Shapoorji Pallonji, Goel Ganga, and leading developers.' },
            ].map(c => (
              <div key={c.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ color: 'var(--white)', fontSize: 17, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Network Map */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <PlantNetworkMap />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w" style={{ maxWidth: 840, margin: '0 auto' }}>
          <SectionHeader eyebrow="FAQ" title="MAHARASHTRA CONTRACTING QUESTIONS" subtitle="Answers to common procurement and civil execution queries." />
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
