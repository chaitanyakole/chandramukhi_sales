import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, CTABanner } from '../components/UI';
import { GOVERNMENT_WORKS_CONTRACTOR, MAJOR_CLIENTS, PARTNERS, PROJECTS, getWhatsAppLink } from '../data/siteData';
import { trackEvent } from '../utils/analytics';

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="card project-feature-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          borderColor: hovered ? 'var(--orange)' : undefined,
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          maxWidth: 860,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Thumb / Banner */}
        <div
          className="project-banner-thumb"
          style={{
            height: 320,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              width="860"
              height="320"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.9) contrast(1.05)',
              }}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 80 }}>
              {project.emoji}
            </div>
          )}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7,15,27,0.2) 0%, rgba(7,15,27,0.85) 100%)',
            }}
          />
          <div className="badge badge-orange" style={{ position: 'absolute', top: 18, left: 18, background: 'rgba(249,115,22,0.92)', color: '#fff' }}>
            🏛️ Govt Infrastructure Package
          </div>
          <div
            className="badge"
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'rgba(7,15,27,0.85)',
              backdropFilter: 'blur(8px)',
              color: '#4ADE80',
              border: '1px solid rgba(34,197,94,0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22C55E',
                display: 'inline-block',
                boxShadow: '0 0 8px #22C55E',
              }}
            />
            Currently Ongoing
          </div>
          <div
            style={{
              position: 'absolute',
              left: 20,
              bottom: 16,
              color: 'var(--white)',
              fontSize: 15,
              fontWeight: 700,
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Live Site Operations · PQC Concrete Paving Corridor
          </div>
          <div
            style={{
              position: 'absolute',
              right: 20,
              bottom: 16,
              color: 'var(--orange)',
              fontSize: 12,
              letterSpacing: '0.14em',
              fontFamily: 'var(--font-condensed)',
              textTransform: 'uppercase',
              fontWeight: 800,
            }}
          >
            Turnkey Road Construction
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <span
              style={{
                color: 'var(--steel-light)',
                fontSize: 13,
                fontFamily: 'var(--font-condensed)',
                letterSpacing: '0.1em',
              }}
            >
              📍 {project.loc}
            </span>
            <span
              style={{
                color: 'var(--orange)',
                fontSize: 13,
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
              }}
            >
              🗓️ {project.year}
            </span>
          </div>

          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(249,115,22,0.12)',
                color: 'var(--orange)',
                border: '1px solid rgba(249,115,22,0.3)',
                borderRadius: 6,
                padding: '4px 10px',
                fontSize: 12,
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Scope: {project.role}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 38px)',
              color: 'var(--white)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h2>

          <p style={{ color: 'var(--steel-light)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
            {project.desc}
          </p>

          {Array.isArray(project.proof) && project.proof.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
              {project.proof.map((item) => (
                <span
                  key={item}
                  className="project-proof-pill"
                  style={{
                    borderRadius: 999,
                    padding: '6px 14px',
                    fontSize: 12,
                    fontFamily: 'var(--font-condensed)',
                    letterSpacing: '0.05em',
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          )}

          {project.outcome && (
            <div
              className="project-outcome-box"
              style={{
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              <strong style={{ color: 'var(--orange)' }}>Active Status: </strong>
              {project.outcome}
            </div>
          )}

          {/* Live Construction Milestones */}
          {Array.isArray(project.stages) && project.stages.length > 0 && (
            <div className="project-stage-box" style={{ marginBottom: 24, borderRadius: 'var(--radius-lg)', padding: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                <div style={{ color: 'var(--white)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  📊 Execution Phases & Milestone Status
                </div>
                <span style={{ color: 'var(--steel)', fontSize: 11 }}>Weekly Field Updates</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {project.stages.map((st, i) => (
                  <div key={st.name} className="project-phase-pill" style={{ borderRadius: 'var(--radius-md)', padding: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ color: 'var(--orange)', fontSize: 11, fontWeight: 800, fontFamily: 'var(--font-condensed)' }}>Phase 0{i + 1}</span>
                      <span style={{ color: st.color, fontSize: 10, fontWeight: 700, background: `${st.color}15`, padding: '2px 6px', borderRadius: 99 }}>{st.badge}</span>
                    </div>
                    <div style={{ color: 'var(--white)', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{st.name}</div>
                    <div style={{ color: 'var(--steel)', fontSize: 11, lineHeight: 1.4 }}>{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Heavy Equipment & Fleet */}
          {Array.isArray(project.fleet) && project.fleet.length > 0 && (
            <div className="project-fleet-box" style={{ marginBottom: 24, borderRadius: 'var(--radius-lg)', padding: 22 }}>
              <div style={{ color: 'var(--white)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
                🚜 Dedicated Equipment & Batching Fleet Deployed
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 10 }}>
                {project.fleet.map((eq) => (
                  <div key={eq.name} className="project-equipment-pill" style={{ display: 'flex', alignItems: 'center', gap: 10, borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
                    <span style={{ fontSize: 20 }}>{eq.icon}</span>
                    <div>
                      <div style={{ color: 'var(--white)', fontSize: 12, fontWeight: 700 }}>{eq.name}</div>
                      <div style={{ color: 'var(--steel)', fontSize: 11 }}>{eq.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 20,
              borderTop: '1px solid var(--navy-border)',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  color: 'var(--muted)',
                  fontSize: 11,
                  fontFamily: 'var(--font-condensed)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Project Nature
              </div>
              <div
                style={{
                  color: 'var(--orange)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  letterSpacing: '0.05em',
                }}
              >
                {project.value}
              </div>
            </div>
            <a
              href={getWhatsAppLink(
                `Hi Chandramukhi Sales, I would like to discuss road construction and infrastructure projects.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
              onClick={() => trackEvent('project_inquire_click', { project: project.title })}
            >
              Discuss Road & Highway Projects →
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectsPage() {
  const clientsAndPartners = useMemo(() => {
    const governmentNames = GOVERNMENT_WORKS_CONTRACTOR.map((c) =>
      typeof c === 'string' ? c : c.name
    );
    const majorClientNames = MAJOR_CLIENTS.map((c) =>
      typeof c === 'string' ? c : c.name
    );
    const combined = [
      'NHAI',
      'MSRDC',
      'PMRDA',
      'PCMC',
      ...governmentNames,
      ...majorClientNames,
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

  return (
    <div style={{ paddingTop: 72 }}>
      <SEO
        title="Building Pune Ring Road | Ongoing Government Project | Chandramukhi Sales"
        description="Chandramukhi Sales is actively executing road construction for the prestigious Pune Ring Road Government project in Maharashtra."
        path="/projects"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Chandramukhi Sales - Building Pune Ring Road',
          about: 'Pune Ring Road Government Project road construction in Maharashtra',
          url: 'https://chandramukhisales.com/projects',
        }}
      />
      {/* Hero */}
      <section
        style={{
          background: 'var(--navy)',
          backgroundImage:
            'linear-gradient(rgba(7,15,27,0.5), rgba(7,15,27,0.62)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 5%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-5%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 99,
                padding: '6px 18px',
                color: '#4ADE80',
                fontFamily: 'var(--font-condensed)',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22C55E',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #22C55E',
                }}
              />
              Active Flagship Project
            </div>
            <h1
              className="text-display"
              style={{
                fontSize: 'clamp(50px,8vw,92px)',
                color: 'var(--white)',
                marginBottom: 20,
                lineHeight: 0.95,
              }}
            >
              PUNE RING ROAD <br />
              <span className="gradient-text">PROJECT</span>
            </h1>
            <p
              style={{
                color: 'var(--steel-light)',
                fontSize: 19,
                maxWidth: 700,
                lineHeight: 1.8,
                margin: '0 auto',
              }}
            >
              Currently executing and building express highway stretches for
              the Government of Maharashtra&apos;s landmark express corridor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
                gap: 14,
                marginBottom: 48,
              }}
            >
              {[
                { k: 'Govt of MH', l: 'Client Authority' },
                { k: 'Road Construction', l: 'Active Scope' },
                { k: 'MSRDC / NHAI', l: 'Quality Standards' },
                { k: 'Modern Fleet', l: 'Pavers, Rollers & Plants' },
              ].map((item) => (
                <div key={item.l} className="card" style={{ padding: 18, textAlign: 'center' }}>
                  <div
                    style={{
                      color: 'var(--orange)',
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                    }}
                  >
                    {item.k}
                  </div>
                  <div
                    style={{
                      color: 'var(--steel)',
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: 'var(--font-condensed)',
                      marginTop: 4,
                    }}
                  >
                    {item.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Project Details Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} delay={80 + idx * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="section-pad-sm cv-auto" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
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
