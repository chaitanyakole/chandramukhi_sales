import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, CTABanner } from '../components/UI';
import { SERVICES, SITE } from '../data/siteData';

function ServiceDetail({ service, flipped }) {
  return (
    <section id={service.id} style={{ padding: '96px 5%', background: flipped ? 'var(--navy-mid)' : 'var(--navy)', scrollMarginTop: 80 }}>
      <div className="max-w">
        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48, flexWrap: 'wrap' }}>
            <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg, var(--orange), var(--orange-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, boxShadow: '0 6px 24px rgba(249,115,22,0.35)' }}>{service.icon}</div>
            <div>
              <div className="badge badge-orange" style={{ marginBottom: 8 }}>Service {String(SERVICES.indexOf(service) + 1).padStart(2, '0')}</div>
              <h2 className="text-display" style={{ fontSize: 'clamp(32px,4.5vw,60px)', color: 'var(--white)', margin: 0 }}>{service.title}</h2>
            </div>
          </div>
          <p style={{ color: 'var(--steel)', fontSize: 18, lineHeight: 1.9, maxWidth: 780, marginBottom: 56 }}>{service.longDesc}</p>
        </Reveal>

        {/* Grid: benefits + uses + specs + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
          {/* Benefits */}
          <Reveal delay={100}>
            <div style={{ background: flipped ? 'var(--navy)' : 'var(--navy-mid)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', padding: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 16, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 24 }}>KEY BENEFITS</h3>
              {service.benefits.map(b => (
                <div key={b} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'var(--orange)', flexShrink: 0, marginTop: 1 }}>✓</div>
                  <span style={{ color: 'var(--steel-light)', fontSize: 15, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Use Cases */}
          <Reveal delay={180}>
            <div style={{ background: flipped ? 'var(--navy)' : 'var(--navy-mid)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', padding: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 16, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 24 }}>APPLICATIONS</h3>
              {service.uses.map(u => (
                <div key={u} style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'center', borderBottom: '1px solid var(--navy-border)', paddingBottom: 10 }}>
                  <span style={{ color: 'var(--orange)', fontSize: 12 }}>▶</span>
                  <span style={{ color: 'var(--steel-light)', fontSize: 15 }}>{u}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Specs */}
          <Reveal delay={260}>
            <div style={{ background: flipped ? 'var(--navy)' : 'var(--navy-mid)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', padding: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 16, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 24 }}>SPECIFICATIONS</h3>
              {service.specs.map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--navy-border)' }}>
                  <span style={{ color: 'var(--steel)', fontSize: 14, fontFamily: 'var(--font-condensed)', letterSpacing: '0.05em' }}>{s.label}</span>
                  <span style={{ color: 'var(--white)', fontSize: 14, fontWeight: 700 }}>{s.val}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA card */}
          <Reveal delay={340}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04))',
              border: '1px solid rgba(249,115,22,0.25)', borderRadius: 'var(--radius-lg)',
              padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16,
            }}>
              <div style={{ fontSize: 52 }}>📞</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--white)', letterSpacing: '0.05em' }}>GET A QUOTE</h3>
              <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>Detailed estimate for your {service.shortTitle} requirement within 24 hours.</p>
              <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}>Request Estimate</Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-green btn-sm" style={{ width: '100%', justifyContent: 'center' }}>💬 WhatsApp Us</a>
              <a href={`tel:${SITE.phone}`} style={{ color: 'var(--orange)', fontSize: 13, fontFamily: 'var(--font-condensed)', fontWeight: 700, letterSpacing: '0.05em' }}>{SITE.phone}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <SEO
        title="Services"
        description="Explore Chandramukhi Sales services: Ready Mix Concrete, Road Construction, and Civil Contracting."
        path="/services"
      />
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '80px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)' }} />
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="eyebrow">What We Offer</div>
            <h1 className="text-display" style={{ fontSize: 'clamp(56px,9vw,100px)', color: 'var(--white)', marginBottom: 24, lineHeight: 0.9 }}>
              OUR<br /><span className="gradient-text">SERVICES</span>
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 19, maxWidth: 640, lineHeight: 1.8, marginBottom: 40 }}>
              Three specialised construction services, one trusted partner. Delivered with precision, backed by technology.
            </p>
          </Reveal>

          {/* Service quick nav */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {SERVICES.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="btn btn-ghost" style={{ gap: 8 }}>
                    <span>{s.icon}</span> {s.title}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((s, i) => <ServiceDetail key={s.id} service={s} flipped={i % 2 === 1} />)}

      {/* Comparison table */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Overview" title="SERVICE COMPARISON" subtitle="Not sure which service you need? Here's a quick overview." />
          <Reveal>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                <thead>
                  <tr>
                    {['Feature', ...SERVICES.map(s => s.title)].map((h, i) => (
                      <th key={h} style={{ padding: '16px 20px', background: i === 0 ? 'var(--navy-light)' : 'rgba(249,115,22,0.1)', color: i === 0 ? 'var(--steel)' : 'var(--orange)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'left', border: '1px solid var(--navy-border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Min Order / Scale', '5 m³', 'Up to 50 KM', '₹10L – ₹50Cr'],
                    ['Delivery Time', '4–6 Hours', 'Per project plan', 'Per project plan'],
                    ['Grade / Standard', 'M15 – M60', 'IRC / NHAI', 'IS / BIS'],
                    ['Free Site Visit', '✓', '✓', '✓'],
                    ['Govt. Projects', '✓', '✓ (NHAI)', '✓'],
                    ['AMC Available', '—', '✓', '✓'],
                  ].map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--navy)' : 'var(--navy-mid)' }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: '14px 20px', color: ci === 0 ? 'var(--steel-light)' : cell === '✓' ? '#4ADE80' : cell === '—' ? 'var(--muted)' : 'var(--steel-light)', fontFamily: ci === 0 ? 'var(--font-condensed)' : 'var(--font-body)', fontWeight: ci === 0 ? 700 : 400, fontSize: 14, border: '1px solid var(--navy-border)', textAlign: ci === 0 ? 'left' : 'left' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner title="NEED A CUSTOM SOLUTION?" subtitle="Every project is unique. Let's discuss yours and build a custom plan around your needs." btnText="Discuss Your Project" />
    </div>
  );
}
