import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { FaAward, FaFlask, FaHandshake, FaIndustry, FaRegClipboard, FaRoad, FaTruck, FaWarehouse } from 'react-icons/fa';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, StatCard, CTABanner, Ticker } from '../components/UI';
import { useReveal, useIsMobile } from '../hooks';
import { STATS, SERVICES, PROJECTS, TESTIMONIALS, PROCESS, INDUSTRIES, SITE, getWhatsAppLink } from '../data/siteData';
import PlantNetworkMap from '../components/PlantNetworkMap';
import 'swiper/css';
import 'swiper/css/pagination';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const words = ['Towers', 'Flyovers', 'Highways', 'Ring Road', 'Foundations'];
  const [typed, setTyped] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let holdTimeout;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          holdTimeout = setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }
      }
    }, deleting ? 60 : 110);
    return () => {
      clearTimeout(timeout);
      if (holdTimeout) clearTimeout(holdTimeout);
    };
  }, [charIdx, deleting, wordIdx]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'linear-gradient(rgba(7,15,27,0.30), rgba(7,15,27,0.58)), url("/hero-bg.png")',
      }}
    >
      <div className="hero__overlay" aria-hidden />
      <div className="hero__grid" aria-hidden />
      <div className="hero__blob hero__blob--a" aria-hidden />
      <div className="hero__blob hero__blob--b" aria-hidden />
      <div className="hero__slab" aria-hidden />

      <div className="max-w hero__inner">
        <div className="hero__copy">
          {/* Badge */}
          <Reveal>
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden />
              <span className="hero__badge-text">Govt Contractor · Building the Pune Ring Road</span>
            </div>
          </Reveal>

          {/* Main headline */}
          <Reveal delay={100}>
            <h1 className="text-display hero__h1" style={{ margin: 0, lineHeight: 0.95 }}>
              <span className="hero__h1--animate hero__h1--line1" style={{ display: 'block' }}>
                WE BUILD
              </span>
              <span className="gradient-text hero__h1--animate hero__h1--line2" style={{ display: 'block' }}>
                STRONG
              </span>
              <span className="hero__h1--wrap hero__h1--animate hero__h1--line3" style={{ display: 'block' }}>
                <span className="hero__h1-muted">BETTER </span>
                <span className="hero__typed">
                  {typed}
                  <span className="hero__caret" aria-hidden>|</span>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={420}>
            <p className="hero__lead">
              Trusted infrastructure & road contractor since 2002. Proudly executing road construction for the Government of Maharashtra&apos;s landmark <strong>Pune Ring Road Project</strong>.
            </p>
          </Reveal>

          <Reveal delay={480}>
            <ul className="hero__highlights">
              {[
                'IS-Grade materials & testing',
                'Modern fleet & batching technology',
                'On-time delivery and transparent reporting',
              ].map((t) => (
                <li key={t} className="hero__highlight">
                  <FiCheckCircle aria-hidden className="hero__highlight-icon" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={520}>
            <div className="hero__ctas">
              <Link to="/projects" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', boxShadow: '0 8px 24px rgba(249,115,22,0.35)' }}>
                Pune Ring Road Project <FiArrowRight aria-hidden />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get Free Quote
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-ghost btn-lg">
                <FiPhone aria-hidden /> {SITE.phone}
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-green btn-lg">
                <FiMessageCircle aria-hidden /> WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Mini stats */}
          <Reveal delay={600}>
            <div className="hero__mini-stats">
              {[{ n: '20+', l: 'Years' }, { n: '500+', l: 'Projects' }, { n: '200+', l: 'Clients' }, { n: '98%', l: 'On-Time' }].map(({ n, l }, i) => (
                <div key={l} className="hero__mini-stat" style={{ borderRight: i < 3 ? '1px solid var(--navy-border)' : 'none' }}>
                  <div className="text-display text-orange hero__mini-number">{n}</div>
                  <div className="hero__mini-label">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} direction="scale">
          <div className="hero__visual card noise-overlay" style={{ overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 135, margin: '-22px -22px 14px -22px', overflow: 'hidden' }}>
              <img
                src="/pune-ring-road.jpg"
                alt="Pune Ring Road Active Road Construction"
                width="520"
                height="135"
                fetchPriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.88) contrast(1.06)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,23,44,0.15) 0%, rgba(10,23,44,0.92) 100%)' }} />
              <div style={{ position: 'absolute', top: 10, left: 12 }}>
                <span className="badge badge-orange" style={{ fontSize: 11, background: 'rgba(249,115,22,0.92)', color: '#fff' }}>
                  🏛️ Landmark Govt Project
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: 8, left: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'rgba(34,197,94,0.22)',
                  color: '#4ADE80',
                  border: '1px solid rgba(34,197,94,0.45)',
                  borderRadius: 99,
                  padding: '2px 9px',
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 6px #22C55E' }} />
                  Under Active Construction
                </span>
              </div>
            </div>

            <div className="hero__visual-top" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="hero__visual-title">
                <div className="text-display" style={{ fontSize: 28, lineHeight: 1.15, color: 'var(--white)' }}>
                  BUILDING PUNE RING ROAD
                </div>
                <div style={{ color: 'var(--steel-light)', marginTop: 6, fontSize: 13, lineHeight: 1.6 }}>
                  Turnkey road contractor executing multi-lane express highway sections for Govt of Maharashtra.
                </div>
              </div>
            </div>

            <div className="hero__visual-grid" style={{ marginTop: 12 }}>
              {[
                { k: 'PROJECT', v: 'Pune Ring Road' },
                { k: 'ROLE', v: 'Road Contractor' },
                { k: 'SCOPE', v: 'Earthwork & PQC Paving' },
                { k: 'STANDARDS', v: 'MSRDC / IRC Compliant' },
              ].map((x) => (
                <div key={x.k} className="hero__pill">
                  <div className="hero__pill-k" style={{ color: 'var(--orange)' }}>{x.k}</div>
                  <div className="hero__pill-v" style={{ color: 'var(--white)', fontWeight: 600 }}>{x.v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--steel-light)' }}>📍 Pune District Corridor</span>
              <Link to="/projects" style={{ color: 'var(--orange)', fontSize: 13, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                View Project Details <FiArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

// ─── Ticker strip ─────────────────────────────────────────────────────────────

// ─── Services cards ───────────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [ref, v] = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(40px)',
      transition: `opacity 0.6s ease ${index * 130}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 130}ms`,
    }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? 'linear-gradient(160deg, var(--navy-light), var(--navy-mid))' : 'var(--navy-mid)',
          borderRadius: 'var(--radius-xl)', padding: 40,
          border: `1px solid ${hovered ? 'rgba(249,115,22,0.3)' : 'var(--navy-border)'}`,
          transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
          transform: hovered ? 'translateY(-8px)' : 'none',
          boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.45)' : 'none',
          height: '100%', display: 'flex', flexDirection: 'column',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), var(--orange-light))', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }} />

        {/* BG emoji */}
        <div style={{ position: 'absolute', bottom: -10, right: -10, fontSize: 100, opacity: 0.04, transform: hovered ? 'scale(1.08) rotate(-4deg)' : 'none', transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}>{service.emoji}</div>

        <div style={{ fontSize: 52, marginBottom: 24 }}>{service.icon}</div>
        <div className="badge badge-orange" style={{ marginBottom: 16, alignSelf: 'flex-start' }}>{service.shortTitle}</div>
        <h3 className="text-display" style={{ fontSize: 32, color: 'var(--white)', marginBottom: 8, lineHeight: 1 }}>{service.title}</h3>
        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 14, color: 'var(--orange)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20 }}>{service.tagline}</p>
        <p style={{ color: 'var(--steel)', fontSize: 15, lineHeight: 1.8, marginBottom: 28, flex: 1 }}>{service.description}</p>

        <ul style={{ marginBottom: 28, padding: 0, listStyle: 'none' }}>
          {service.benefits.slice(0, 4).map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--steel-light)', fontSize: 14, padding: '4px 0' }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'var(--orange)', flexShrink: 0 }}>✓</span>
              {b}
            </li>
          ))}
        </ul>
        <Link to={`/services#${service.id}`} className="btn btn-outline" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
          Learn More →
        </Link>
      </div>
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCard({ t }) {
  return (
    <div style={{
      background: 'var(--navy-mid)', borderRadius: 'var(--radius-xl)', padding: 36,
      border: '1px solid var(--navy-border)', height: '100%',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
        {Array(t.rating).fill(0).map((_, i) => (
          <span key={i} style={{ color: '#FBBF24', fontSize: 16 }}>★</span>
        ))}
      </div>
      {/* Big quote */}
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 64, color: 'var(--orange)', lineHeight: 0.7, marginBottom: 20, opacity: 0.5 }}>"</div>
      <p style={{ color: 'var(--steel-light)', fontSize: 16, lineHeight: 1.9, fontStyle: 'italic', flex: 1, marginBottom: 28 }}>{t.text}</p>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', borderTop: '1px solid var(--navy-border)', paddingTop: 20 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, var(--orange), var(--orange-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 20, flexShrink: 0 }}>{t.initial}</div>
        <div>
          <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 15 }}>{t.name}</div>
          <div style={{ color: 'var(--steel)', fontSize: 13 }}>{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Process Step ─────────────────────────────────────────────────────────────
function ProcessStep({ step, index, total }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} style={{ display: 'flex', gap: 20, opacity: v ? 1 : 0, transform: v ? 'none' : 'translateX(-30px)', transition: `all 0.6s ease ${index * 100}ms`, alignItems: 'flex-start' }}>
      {/* Connector line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, var(--orange), var(--orange-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 22, color: '#fff', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}>{step.step}</div>
        {index < total - 1 && <div style={{ width: 2, height: 48, background: 'linear-gradient(to bottom, var(--orange), transparent)', marginTop: 6 }} />}
      </div>
      <div style={{ paddingBottom: index < total - 1 ? 36 : 0 }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>{step.icon}</div>
        <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 20, fontWeight: 700, color: 'var(--white)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{step.title}</h3>
        <p style={{ color: 'var(--steel)', fontSize: 15, lineHeight: 1.7 }}>{step.desc}</p>
      </div>
    </div>
  );
}

// ─── Testimonials Carousel (Swiper) ─────────────────────────────────────────────
function TestimonialsCarousel() {
  const isMobile = useIsMobile();
  const modules = [Pagination, Autoplay];
  const autoplay = { delay: isMobile ? 6000 : 6500, disableOnInteraction: false };

  if (isMobile) {
    return (
      <Swiper
        modules={modules}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={autoplay}
        pagination={{ clickable: true }}
        style={{ paddingBottom: 32 }}
      >
        {TESTIMONIALS.map((t) => (
          <SwiperSlide key={t.name}>
            <TestimonialCard t={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <Swiper
      modules={modules}
      spaceBetween={24}
      slidesPerView={2}
      loop
      autoplay={autoplay}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: 32 }}
    >
      {TESTIMONIALS.map((t) => (
        <SwiperSlide key={t.name}>
          <TestimonialCard t={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// ─── Main HomePage ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div>
      <SEO
        title="Home"
        description="Chandramukhi Sales delivers ready mix concrete, road construction, and civil contracting services across Maharashtra."
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Chandramukhi Sales',
          url: 'https://chandramukhisales.com/',
          areaServed: 'Maharashtra',
          serviceType: ['Ready Mix Concrete', 'Road Construction', 'Civil Contracting'],
        }}
      />
      <Hero />
      <Ticker />

      {/* ── Featured Flagship Project: Pune Ring Road (First Page Spotlight) ── */}
      <section id="ring-road" className="section-pad cv-auto ring-road-section" style={{ borderBottom: '1px solid var(--navy-border)' }}>
        <div className="max-w">
          <SectionHeader
            eyebrow="🏛️ Landmark Government Infrastructure Project"
            title="BUILDING THE PUNE RING ROAD"
            subtitle="Chandramukhi Sales is actively executing and building express highway stretches for Maharashtra's premier economic corridor."
          />
          <Reveal>
            <div
              className="card noise-overlay ring-road-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                marginBottom: 32,
              }}
            >
              {/* Top Grid: Image + Executive Summary */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  alignItems: 'stretch',
                }}
              >
                {/* Visual Image Column */}
                <div style={{ position: 'relative', minHeight: 380, overflow: 'hidden' }}>
                  <img
                    src="/pune-ring-road.jpg"
                    alt="Pune Ring Road Active Road Construction"
                    width="600"
                    height="380"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.05) brightness(0.92)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(7,15,27,0.2) 0%, rgba(7,15,27,0.85) 100%)',
                    }}
                  />
                  {/* Badges on Image */}
                  <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <span className="badge badge-orange" style={{ backdropFilter: 'blur(8px)', background: 'rgba(249,115,22,0.92)', color: '#fff' }}>
                      🏛️ Govt Highway Construction
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: 'rgba(7,15,27,0.8)',
                        backdropFilter: 'blur(8px)',
                        color: '#4ADE80',
                        border: '1px solid rgba(34,197,94,0.45)',
                        borderRadius: 99,
                        padding: '5px 14px',
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 8px #22C55E' }} />
                      Currently Ongoing
                    </span>
                  </div>

                  {/* Caption on Image */}
                  <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                    <div style={{ color: 'var(--orange)', fontSize: 11, fontFamily: 'var(--font-condensed)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 800 }}>
                      Live Site Paving Operations
                    </div>
                    <div style={{ color: 'var(--white)', fontSize: 16, fontWeight: 700, marginTop: 4, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                      Multi-Lane Rigid PQC Concrete Expressway Corridor
                    </div>
                  </div>
                </div>

                {/* Right Info Column */}
                <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: 'var(--steel-light)', fontSize: 13, fontFamily: 'var(--font-condensed)', letterSpacing: '0.1em' }}>
                        📍 Pune District Corridor · MSRDC
                      </span>
                      <span style={{ color: 'var(--orange)', fontSize: 13, fontFamily: 'var(--font-condensed)', fontWeight: 700 }}>
                        Active Execution (2025–2026)
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1.15, margin: '0 0 12px 0' }}>
                      PUNE RING ROAD PROJECT
                    </h3>

                    <div style={{ marginBottom: 16 }}>
                      <span style={{ display: 'inline-block', background: 'rgba(249,115,22,0.12)', color: 'var(--orange)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 6, padding: '4px 12px', fontSize: 12, fontFamily: 'var(--font-condensed)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Role: Turnkey Road Construction Contractor
                      </span>
                    </div>

                    <p style={{ color: 'var(--steel-light)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                      Prestigious Government of Maharashtra express corridor. Chandramukhi Sales is actively executing and building express highway stretches of the Pune Ring Road — managing earthwork, subgrade preparation, heavy machinery grading, and automated slipform concrete paving.
                    </p>
                  </div>

                  {/* Specs Mini-Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {[
                      { l: 'Pavement Type', v: 'Rigid PQC M40 & DLC' },
                      { l: 'Design Standards', v: 'IRC:15, IRC:58, MoRTH' },
                      { l: 'Batching Supply', v: 'Twin 60 m³/hr Plants' },
                      { l: 'Transit Fleet', v: '15+ GPS Transit Mixers' },
                    ].map((sp) => (
                      <div key={sp.l} className="ring-road-spec-pill" style={{ borderRadius: 'var(--radius-md)', padding: '10px 14px' }}>
                        <div style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{sp.l}</div>
                        <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 13, marginTop: 2 }}>{sp.v}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1px solid var(--navy-border)', flexWrap: 'wrap', gap: 14 }}>
                    <div>
                      <div style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-condensed)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contractor Scope</div>
                      <div style={{ color: 'var(--orange)', fontFamily: 'var(--font-display)', fontSize: 20 }}>Turnkey Road Construction</div>
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <Link to="/projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                        View Project Scope & Gallery →
                      </Link>
                      <Link to="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                        Contact Infrastructure Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Milestones Strip */}
              <div className="ring-road-strip ring-road-strip--milestones" style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>📊</span>
                    <span style={{ color: 'var(--white)', fontFamily: 'var(--font-condensed)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Live Construction Milestones & Execution Phases
                    </span>
                  </div>
                  <span style={{ color: 'var(--steel)', fontSize: 12 }}>
                    Updated Weekly · Field Engineering Oversight
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                  {(PROJECTS[0]?.stages || [
                    { name: 'Earthwork & Subgrade Preparation', status: '100% Completed', badge: 'Completed', color: '#22c55e', desc: 'Heavy excavation, subgrade grading & vibratory soil stabilization.' },
                    { name: 'Granular Sub-Base (GSB & WMM)', status: '90% Completed', badge: 'Near Complete', color: '#38bdf8', desc: 'Dense mechanical grading and sub-base compaction to IRC load standards.' },
                    { name: 'Rigid PQC Concrete Paving', status: 'Active Pours (In Progress)', badge: 'Active Execution', color: '#f97316', desc: 'Precision slipform automated paving with high-grade M40 concrete mix.' },
                    { name: 'Cross-Drainage & Highway Structures', status: 'In Execution', badge: 'Underway', color: '#a855f7', desc: 'Box culverts, roadside drainage channels, and reinforced median barriers.' },
                  ]).map((st, i) => (
                    <div
                      key={st.name}
                      className="ring-road-phase-card"
                      style={{
                        borderRadius: 'var(--radius-md)',
                        padding: 16,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ color: 'var(--orange)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 800 }}>
                          Phase 0{i + 1}
                        </span>
                        <span style={{ background: `${st.color}18`, color: st.color, border: `1px solid ${st.color}40`, borderRadius: 99, padding: '2px 8px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>
                          {st.badge}
                        </span>
                      </div>
                      <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 14, marginBottom: 6, lineHeight: 1.3 }}>
                        {st.name}
                      </div>
                      <div style={{ color: 'var(--steel)', fontSize: 12, lineHeight: 1.5 }}>
                        {st.desc}
                      </div>
                      <div style={{ marginTop: 10, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: st.color, width: st.status.includes('100%') ? '100%' : st.status.includes('90%') ? '90%' : st.status.includes('Active') ? '65%' : '35%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heavy Machinery & Equipment Deployed */}
              <div className="ring-road-strip ring-road-strip--fleet" style={{ padding: '24px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 18 }}>🚜</span>
                  <span style={{ color: 'var(--white)', fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Heavy Highway Fleet & Batching Infrastructure Deployed
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                  {(PROJECTS[0]?.fleet || [
                    { icon: '🚜', name: 'Automated Concrete Slipform Paver', role: 'Precision PQC Paving to IRC:15 Tolerances' },
                    { icon: '🏗️', name: 'Vibratory Soil Compactors & Graders', role: 'Subgrade Compaction & Density Compliance' },
                    { icon: '🏭', name: 'Twin 60 m³/hr Batching Plants', role: 'High-Volume Continuous M40 Mix Output' },
                    { icon: '🚚', name: '15+ GPS Transit Mixers', role: 'Real-Time Rapid Site Delivery Fleet' },
                  ]).map((eq) => (
                    <div key={eq.name} className="ring-road-fleet-card" style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>{eq.icon}</span>
                      <div>
                        <div style={{ color: 'var(--white)', fontSize: 13, fontWeight: 700 }}>{eq.name}</div>
                        <div style={{ color: 'var(--steel)', fontSize: 11, marginTop: 2 }}>{eq.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Standards Strip */}
              <div className="ring-road-strip ring-road-strip--quality" style={{ padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--steel-light)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <FiCheckCircle style={{ color: 'var(--orange)' }} /> IRC:15 & IRC:58 Rigid Concrete Compliance
                  </span>
                  <span style={{ color: 'var(--steel-light)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <FiCheckCircle style={{ color: 'var(--orange)' }} /> 100% In-House Compressive Cube Press Testing
                  </span>
                  <span style={{ color: 'var(--steel-light)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <FiCheckCircle style={{ color: 'var(--orange)' }} /> MSRDC Express Corridor Package Specification
                  </span>
                </div>
                <Link to="/projects" style={{ color: 'var(--orange)', fontSize: 13, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Learn More About Our Highway Standards →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="What We Do" title="CORE SERVICES" subtitle="Three pillars of construction excellence backed by 20+ years of expertise and cutting-edge machinery." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline" style={{ textDecoration: 'none', fontSize: 15 }}>View All Services →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--navy))', padding: '60px 5%', borderTop: '1px solid var(--navy-border)', borderBottom: '1px solid var(--navy-border)' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 0 }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ borderRight: i < STATS.length - 1 ? '1px solid var(--navy-border)' : 'none' }}>
              <StatCard {...s} delay={i * 120} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 72, alignItems: 'center' }}>
          <div>
            <SectionHeader eyebrow="Why Choose Us" title="OVER TWO DECADES OF BUILDING TRUST" subtitle="Since 2002, we've been the backbone of infrastructure across Pune and Maharashtra." center={false} />
            {[
              { icon: <FiCheckCircle aria-hidden />, title: 'IS-Grade Quality Materials', desc: 'All concrete mixes and road materials meet Indian Standards. We conduct third-party lab testing on every major project.' },
              { icon: <FaTruck aria-hidden />, title: 'Modern Fleet & Technology', desc: 'Computerized batching plants, GPS-tracked transit mixers, automated asphalt pavers — built for precision.' },
              { icon: <FaRegClipboard aria-hidden />, title: 'Transparent Project Management', desc: 'Daily progress reports, live photo updates, and direct engineer access. You\'re never in the dark.' },
              { icon: <FaHandshake aria-hidden />, title: 'Post-Handover Support', desc: 'Annual maintenance contracts and defect liability support. We stand behind our work, long after handover.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div style={{ display: 'flex', gap: 18, marginBottom: 28, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <Link to="/about" className="btn btn-primary" style={{ textDecoration: 'none', marginTop: 8 }}>Our Story →</Link>
            </Reveal>
          </div>

          {/* Right: visual cards */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: <FaIndustry aria-hidden />, label: 'Ready Mix Concrete', sub: 'M15–M60 Grade' },
                { icon: <FaRoad aria-hidden />, label: 'Road Construction', sub: 'IRC Compliant' },
                { icon: <FaFlask aria-hidden />, label: 'Quality Testing', sub: 'IS Standards' },
                { icon: <FaWarehouse aria-hidden />, label: 'Fleet of 20+', sub: 'Transit Mixers' },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 100} direction="scale">
                  <div style={{
                    background: i % 2 === 0 ? 'var(--navy-mid)' : 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.04))',
                    border: `1px solid ${i % 2 === 0 ? 'var(--navy-border)' : 'rgba(249,115,22,0.2)'}`,
                    borderRadius: 'var(--radius-lg)', padding: 28, textAlign: 'center',
                    transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ fontSize: 40, marginBottom: 10, display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, color: 'var(--white)', fontSize: 15, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ color: 'var(--orange)', fontSize: 12, fontFamily: 'var(--font-condensed)', letterSpacing: '0.1em' }}>{item.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Certification badge */}
            <Reveal delay={400}>
              <div style={{ marginTop: 20, background: 'var(--navy-mid)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-md)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: 34, color: 'var(--orange)' }}><FaAward aria-hidden /></div>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 15 }}>NHAI Empanelled Contractor</div>
                  <div style={{ color: 'var(--steel)', fontSize: 13 }}>Eligible for national highway projects across India</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Strategic Plant Network & Delivery Radius ── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="max-w">
          <PlantNetworkMap />
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 72, alignItems: 'flex-start' }}>
          <div>
            <SectionHeader eyebrow="How We Work" title="OUR PROVEN PROCESS" subtitle="A transparent, step-by-step workflow that keeps you informed and in control at every stage." center={false} />
            {PROCESS.map((step, i) => (
              <ProcessStep key={step.step} step={step} index={i} total={PROCESS.length} />
            ))}
          </div>

          {/* Industries */}
          <div>
            <SectionHeader eyebrow="Sectors" title="INDUSTRIES WE SERVE" center={false} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.label} delay={i * 60}>
                  <div style={{
                    background: 'var(--navy)', border: '1px solid var(--navy-border)',
                    borderRadius: 'var(--radius-md)', padding: '16px 20px',
                    display: 'flex', alignItems: 'center', gap: 12,
                    transition: 'all 0.42s cubic-bezier(0.22,1,0.36,1)', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; e.currentTarget.style.background = 'rgba(249,115,22,0.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--navy-border)'; e.currentTarget.style.background = 'var(--navy)'; }}
                  >
                    <span style={{ fontSize: 22 }}>{ind.icon}</span>
                    <span style={{ color: 'var(--steel-light)', fontFamily: 'var(--font-condensed)', fontSize: 14, fontWeight: 600 }}>{ind.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Testimonials" title="WHAT OUR CLIENTS SAY" subtitle="Words from the developers, engineers, and contractors who trust us with their most critical projects." />
          <Reveal>
            <div className="card" style={{ padding: '28px 20px 8px', borderRadius: 'var(--radius-xl)' }}>
              <TestimonialsCarousel />
            </div>
          </Reveal>
        </div>
      </section>



      <section className="section-pad-sm cv-auto" style={{ background: 'var(--navy)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Location Pages" title="SERVING PUNE & MAHARASHTRA" subtitle="Explore service pages tailored for your region." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {[
              { title: 'RMC in Pune', path: '/rmc-pune' },
              { title: 'Road Contractor in Pune', path: '/road-contractor-pune' },
              { title: 'Civil Contractor in Maharashtra', path: '/civil-contractor-maharashtra' },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="card" style={{ padding: 18, textDecoration: 'none', color: 'var(--steel-light)' }}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
