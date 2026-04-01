import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, CTABanner } from '../components/UI';
import { GOVERNMENT_WORKS_CONTRACTOR, MAJOR_CLIENTS, PARTNERS, PROJECTS, SITE, getWhatsAppLink } from '../data/siteData';

const CATS = ['All', 'RMC', 'Roads', 'Civil'];

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'var(--navy-mid)', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          border: `1px solid ${hovered ? 'rgba(249,115,22,0.3)' : 'var(--navy-border)'}`,
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.45)' : 'none',
          height: '100%', display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Thumb placeholder */}
        <div style={{ height: 180, background: hovered ? 'linear-gradient(135deg, #1d3358, rgba(249,115,22,0.18))' : 'linear-gradient(135deg, #182a46, #0b172d)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, position: 'relative', transition: 'background 0.35s', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.28 }} />
          <div style={{ position: 'absolute', left: -24, right: -24, bottom: 36, height: 36, background: 'linear-gradient(90deg, rgba(249,115,22,0.35), rgba(249,115,22,0.08))', transform: 'skewY(-8deg)' }} />
          <div style={{ position: 'absolute', right: 14, bottom: 10, color: 'rgba(255,255,255,0.75)', fontSize: 11, letterSpacing: '0.14em', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase' }}>Project Preview</div>
          {project.emoji}
          <div className="badge badge-orange" style={{ position: 'absolute', top: 14, left: 14 }}>{project.cat}</div>
          {project.featured && <div className="badge" style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(251,191,36,0.15)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.3)' }}>⭐ Featured</div>}
        </div>

        {/* Content */}
        <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ color: 'var(--steel)', fontSize: 12, fontFamily: 'var(--font-condensed)', letterSpacing: '0.1em' }}>{project.loc}</span>
            <span style={{ color: 'var(--steel)', fontSize: 12, fontFamily: 'var(--font-condensed)' }}>{project.year}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 18, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 12, lineHeight: 1.3 }}>{project.title}</h3>
          <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{project.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--navy-border)' }}>
            <div>
              <div style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-condensed)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Project Value</div>
              <div style={{ color: 'var(--orange)', fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.05em' }}>{project.value}</div>
            </div>
            <a href={getWhatsAppLink(`Hi, I'd like a similar project: ${project.title}`)} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ textDecoration: 'none' }}>
              Similar Project?
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const clientsAndPartners = useMemo(() => {
    const combined = [
      'NHAI',
      'MSRDC',
      'PMRDA',
      'PCMC',
      ...GOVERNMENT_WORKS_CONTRACTOR.map((c) => c.name),
      ...MAJOR_CLIENTS.map((c) => c.name),
      ...PARTNERS,
    ];
    const seen = new Set();
    return combined.filter((x) => {
      const key = String(x).trim().toLowerCase();
      if (!key) return false;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  const filtered = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchCat = filter === 'All' || p.cat === filter;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.loc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const totals = useMemo(() => {
    const t = {};
    CATS.forEach(c => { t[c] = c === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.cat === c).length; });
    return t;
  }, []);

  return (
    <div style={{ paddingTop: 72 }}>
      <SEO
        title="Projects"
        description="Browse Chandramukhi Sales project portfolio across roads, RMC, and civil infrastructure projects."
        path="/projects"
      />
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '80px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', top: '-15%', left: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="eyebrow">Portfolio</div>
            <h1 className="text-display" style={{ fontSize: 'clamp(56px,9vw,100px)', color: 'var(--white)', marginBottom: 24, lineHeight: 0.9 }}>
              OUR<br /><span className="gradient-text">PROJECTS</span>
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 19, maxWidth: 620, lineHeight: 1.8 }}>
              500+ projects completed across Maharashtra. Here's a curated showcase of our work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + search */}
      <section style={{ background: 'var(--navy-mid)', padding: '32px 5%', borderBottom: '1px solid var(--navy-border)', position: 'sticky', top: 72, zIndex: 100 }}>
        <div className="max-w" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{
                  padding: '10px 20px', borderRadius: 8, border: `1.5px solid ${filter === c ? 'var(--orange)' : 'var(--navy-border)'}`,
                  background: filter === c ? 'rgba(249,115,22,0.12)' : 'var(--navy)',
                  color: filter === c ? 'var(--orange)' : 'var(--steel-light)',
                  fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                {c}
                <span style={{ background: filter === c ? 'var(--orange)' : 'var(--navy-light)', color: filter === c ? '#fff' : 'var(--muted)', borderRadius: 99, padding: '1px 7px', fontSize: 11 }}>{totals[c]}</span>
              </button>
            ))}
          </div>
          <input
            type="text" placeholder="🔍  Search projects..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ maxWidth: 260, background: 'var(--navy)', border: '1px solid var(--navy-border)', padding: '10px 16px', fontSize: 14 }}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🔍</div>
              <h3 style={{ color: 'var(--steel)', fontFamily: 'var(--font-condensed)', fontSize: 24 }}>No projects match your search.</h3>
              <button onClick={() => { setSearch(''); setFilter('All'); }} className="btn btn-outline" style={{ marginTop: 20 }}>Clear Filters</button>
            </div>
          ) : (
            <>
              <div style={{ color: 'var(--muted)', fontFamily: 'var(--font-condensed)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32 }}>
                Showing {filtered.length} of {PROJECTS.length} projects
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
                {filtered.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 60} />)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Clients strip */}
      <section className="section-pad-sm" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Trusted By" title="CLIENTS & PARTNERS" subtitle="We've worked with leading developers, government bodies, and industrial groups." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {clientsAndPartners.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div style={{ background: 'var(--navy)', border: '1px solid var(--navy-border)', borderRadius: 10, padding: '12px 24px', fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 14, color: 'var(--steel)', letterSpacing: '0.05em', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'; e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--navy-border)'; e.currentTarget.style.color = 'var(--steel)'; }}
                >{c}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="HAVE A PROJECT IN MIND?" subtitle="Let's discuss how we can bring it to life — on time and within budget." btnText="Start a Project" />
    </div>
  );
}
