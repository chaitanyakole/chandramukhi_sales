import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, CTABanner } from '../components/UI';
import { SITE, COMPANY_PROFILE, GOVERNMENT_WORKS_CONTRACTOR, MAJOR_CLIENTS, PARTNERS } from '../data/siteData';
import PlantNetworkMap from '../components/PlantNetworkMap';

const VALUES = [
  { icon: '🏆', title: 'Quality First',  desc: 'Every batch, every road, every structure — meets the highest industry benchmarks without compromise.' },
  { icon: '⏱️', title: 'Reliability',    desc: 'Deadlines are promises. We plan meticulously to ensure on-time delivery, every single time.' },
  { icon: '🤝', title: 'Commitment',     desc: 'Long-term relationships over one-time transactions. We invest in your success as our own.' },
  { icon: '🔬', title: 'Innovation',     desc: 'Modern machinery, computerised mix design, and data-driven QC for every project.' },
  { icon: '♻️', title: 'Sustainability', desc: 'We embrace eco-friendly admixtures, dust suppression, and material recycling on all sites.' },
  { icon: '📊', title: 'Transparency',   desc: 'Daily progress reports, live site photos, and open-book cost accounting on every project.' },
];

const TIMELINE = [
  { year: '2006', event: 'Aggregate Plant Started', desc: 'Aggregate manufacturing started in March 2006 at Lonikand.' },
  { year: '2015', event: 'RMC Division Started', desc: 'Ready Mix Concrete plant started in December 2015 at Wagholi & Nande (Sus), Pune.' },
  { year: '2017', event: 'Fleet & Plant Expansion', desc: 'Expanded fleet of transit mixers and automated computerized batching to serve major developers across Pune.' },
  { year: '2019', event: '1 Lac+ m³ Production Milestone', desc: 'Produced over 1 Lac cubic meters of quality concrete (M7.5 to M60), supplying landmark residential towers and flyovers.' },
  { year: '2021', event: 'Government Empanelment', desc: 'Empanelled with PWD, MSRDC, and municipal corporations for state infrastructure works.' },
  { year: '2023', event: '500+ Projects Milestone', desc: 'Celebrated 500+ landmark projects supplied with precision-mixed RMC across Pune and Western Maharashtra.' },
  { year: '2025–2026', event: 'Building Pune Ring Road', desc: 'Awarded prestigious Maharashtra Government highway contract for building express road sections of the landmark Pune Ring Road.' },
];

const TEAM = [
  { emoji: '👷', name: 'Founder & Director', title: 'Chandramukhi Sales', desc: 'Industry veteran with 20+ years of expertise in concrete manufacturing, aggregate production, and infrastructure material logistics.' },
  { emoji: '🏗️', name: 'Head of Plant Operations', title: 'Batching Plant Operations', desc: 'Oversees fully automated batching plants at Wagholi & Nande, computerised mix designs, and fleet logistics.' },
  { emoji: '🔬', name: 'Quality Control Lead', title: 'Concrete Technology & Testing', desc: 'Directs concrete mix designs from M7.5 to M60, slump retention, and strict adherence to IS 456 & IRC specifications.' },
  { emoji: '🏛️', name: 'Govt Projects Division', title: 'Highway Construction & Execution', desc: 'Leads project execution, heavy paving fleet operations, and quality engineering for the landmark Pune Ring Road project.' },
];

function LogoTile({ item, dark = false }) {
  const [logoBroken, setLogoBroken] = React.useState(false);
  const name = item?.name || '';
  const logo = item?.logo;

  return (
    <div
      style={{
        background: dark ? 'var(--navy)' : 'var(--navy-mid)',
        border: '1px solid var(--navy-border)',
        borderRadius: 12,
        padding: '16px 18px',
        minHeight: 96,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ display: 'grid', placeItems: 'center', gap: 10, width: '100%' }}>
        {logo && !logoBroken && (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setLogoBroken(true)}
            style={{ maxWidth: '100%', maxHeight: 52, objectFit: 'contain', filter: 'grayscale(100%) brightness(1.15)' }}
          />
        )}
        <span
          style={{
            color: 'var(--steel-light)',
            fontFamily: 'var(--font-condensed)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.35,
            fontSize: 13,
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const normalizedMajorClients = MAJOR_CLIENTS.map((c) =>
    typeof c === 'string' ? { name: c, logo: '' } : c
  );
  const normalizedGovernmentWorks = GOVERNMENT_WORKS_CONTRACTOR.map((c) =>
    typeof c === 'string' ? { name: c, logo: '' } : c
  );

  return (
    <div style={{ paddingTop: 72 }}>
      <SEO
        title="About Us"
        description="Learn about Chandramukhi Sales, our journey, values, team, and infrastructure experience since 2002."
        path="/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Chandramukhi Sales',
          url: 'https://chandramukhisales.com/about',
          about: {
            '@type': 'Organization',
            name: 'Chandramukhi Sales',
            foundingDate: '2002',
          },
        }}
      />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--navy)',
        backgroundImage: 'linear-gradient(rgba(7,15,27,0.5), rgba(7,15,27,0.62)), url("/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 5% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)' }} />
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="eyebrow">Our Story</div>
            <h1 className="text-display" style={{ fontSize: 'clamp(60px,9vw,100px)', color: 'var(--white)', marginBottom: 24, lineHeight: 0.9 }}>
              ABOUT<br /><span className="gradient-text">CHANDRAMUKHI</span>
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 20, maxWidth: 660, lineHeight: 1.8 }}>
              Building Maharashtra&apos;s future since {SITE.established} — one strong foundation at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 72, alignItems: 'center' }}>
          <div>
            <SectionHeader eyebrow={`Est. ${SITE.established}`} title="OUR STORY" center={false} />
            <p style={{ color: 'var(--steel)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Chandramukhi Sales was born from a simple belief: the construction industry in Maharashtra deserved a partner that combined world-class quality with the reliability of a local contractor who understood the terrain, the weather, and the demands of the region.
            </p>
            <p style={{ color: 'var(--steel)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Starting with aggregate manufacturing in Lonikand and later launching our automated RMC plants in Wagholi and Nande, we grew steadily — adding batching capacity, transit mixers, and dedicated on-site concrete pumping. Every step of the way, our guiding principle has been simple: deliver benchmarked concrete quality without compromise.
            </p>
            <p style={{ color: 'var(--steel)', fontSize: 16, lineHeight: 1.9, marginBottom: 36 }}>
              Today, Chandramukhi Sales is trusted by leading developers and government authorities across Maharashtra. We are proud to be actively building express highway sections of the landmark <strong>Pune Ring Road Government Project</strong>.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Start Your Project</Link>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { n: '20+', l: 'Years in Business', icon: '📅' },
              { n: '500+', l: 'Projects Completed', icon: '🏗️' },
              { n: '200+', l: 'Satisfied Clients', icon: '🤝' },
              { n: '100+', l: 'Team Members', icon: '👥' },
              { n: '36', l: 'Districts Served', icon: '🗺️' },
              { n: '₹500Cr+', l: 'Project Value', icon: '💰' },
            ].map((item, i) => (
              <Reveal key={item.l} delay={i * 80} direction="scale">
                <div style={{
                  background: i % 3 === 0 ? 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(249,115,22,0.04))' : 'var(--navy)',
                  border: `1px solid ${i % 3 === 0 ? 'rgba(249,115,22,0.25)' : 'var(--navy-border)'}`,
                  borderRadius: 'var(--radius-md)', padding: '24px 20px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{item.icon}</div>
                  <div className="text-display text-orange" style={{ fontSize: 34, lineHeight: 1 }}>{item.n}</div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 12, color: 'var(--steel)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>{item.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Facilities & Sites Gallery ────────────── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Operations" title="FACILITIES & ACTIVE SITES" subtitle="Modern computerized batching plants, heavy paving fleet, and landmark infrastructure builds." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { img: '/rmc-batching-plant.jpg', title: 'Twin Automated Batching Plants', sub: 'Wagholi & Mulshi (60 m³/hr each)', badge: 'RMC Production' },
              { img: '/pune-ring-road.jpg', title: 'Pune Ring Road Project', sub: 'Turnkey Road Construction Contractor', badge: 'Active Govt Highway' },
              { img: '/concrete-pumping.jpg', title: 'Vertical Concrete Pumping Fleet', sub: '42 cum/hr Pumps & 15+ Transit Mixers', badge: 'High-Rise Logistics' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--navy-border)' }}>
                <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                  <img src={f.img} alt={f.title} width="400" height="220" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,15,27,0.1) 0%, rgba(7,15,27,0.8) 100%)' }} />
                  <span className="badge badge-orange" style={{ position: 'absolute', top: 14, left: 14 }}>{f.badge}</span>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h4 style={{ color: 'var(--white)', fontSize: 17, margin: '0 0 6px 0' }}>{f.title}</h4>
                  <p style={{ color: 'var(--steel-light)', fontSize: 13, margin: 0 }}>{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Plant Network ── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="max-w">
          <PlantNetworkMap />
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Journey" title="OUR MILESTONES" subtitle="From a single batching plant to pan-Maharashtra operations — our growth story." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div style={{
                  background: 'var(--navy-mid)', borderRadius: 'var(--radius-lg)', padding: 32,
                  border: '1px solid var(--navy-border)', position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <div className="text-display text-orange" style={{ fontSize: 72, lineHeight: 1, opacity: 0.15, position: 'absolute', top: -4, right: 16 }}>{t.year}</div>
                  <div className="badge badge-orange" style={{ marginBottom: 16 }}>{t.year}</div>
                  <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 20, fontWeight: 700, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>{t.event}</h3>
                  <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Purpose" title="MISSION & VISION" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
            {[
              {
                label: 'OUR MISSION', color: 'var(--orange)', bg: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.2)',
                text: COMPANY_PROFILE.mission,
                icon: '🎯',
              },
              {
                label: 'OUR VISION', color: '#818CF8', bg: 'rgba(99,102,241,0.06)', border: 'rgba(99,102,241,0.2)',
                text: COMPANY_PROFILE.vision,
                icon: '🔭',
              },
            ].map(item => (
              <Reveal key={item.label}>
                <div style={{ background: item.bg, borderRadius: 'var(--radius-xl)', padding: 44, border: `1px solid ${item.border}`, height: '100%' }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
                  <div className="badge" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40`, marginBottom: 20 }}>{item.label}</div>
                  <p style={{ color: 'var(--steel-light)', fontSize: 18, lineHeight: 1.9 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Major Clients ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Trusted By" title="MAJOR CLIENTS" subtitle="Recognized by leading developers and builders across Pune." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {normalizedMajorClients.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)';
                    e.currentTarget.style.background = 'rgba(249,115,22,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--navy-border)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                  style={{ borderRadius: 12, border: '1px solid transparent' }}
                >
                  <LogoTile item={c} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Government Works Contractor ────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Credentials" title="GOVERNMENT WORKS CONTRACTOR" subtitle="Experienced in executing works for government departments and civic bodies." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {normalizedGovernmentWorks.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <LogoTile item={c} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Partners ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Ecosystem" title="OUR PARTNERS" subtitle="Organizations we work with across projects and supply chains." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {PARTNERS.map((c, i) => (
              <Reveal key={c} delay={i * 25}>
                <div
                  style={{
                    background: 'var(--navy-mid)',
                    border: '1px solid var(--navy-border)',
                    borderRadius: 12,
                    padding: '16px 18px',
                    color: 'var(--steel-light)',
                    fontFamily: 'var(--font-condensed)',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)';
                    e.currentTarget.style.background = 'rgba(249,115,22,0.06)';
                    e.currentTarget.style.color = 'var(--white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--navy-border)';
                    e.currentTarget.style.background = 'var(--navy-mid)';
                    e.currentTarget.style.color = 'var(--steel-light)';
                  }}
                >
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Principles" title="CORE VALUES" subtitle="The principles that guide every decision, every pour, and every road we build." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} direction="scale">
                <div className="card" style={{ padding: 32, textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 20px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 20, fontWeight: 700, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Our People" title="MEET THE TEAM" subtitle="Experienced engineers and professionals who bring your project to life." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="card" style={{ padding: 32, textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, var(--orange), var(--orange-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 36 }}>{m.emoji}</div>
                  <h3 style={{ color: 'var(--white)', fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{m.name}</h3>
                  <div style={{ color: 'var(--orange)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 16, textTransform: 'uppercase' }}>{m.title}</div>
                  <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="JOIN OUR SUCCESS STORY" subtitle="500+ projects. 200+ clients. One trusted partner for all your construction needs." />
    </div>
  );
}
