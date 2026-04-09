import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { FaAward, FaFlask, FaHandshake, FaIndustry, FaMapMarkedAlt, FaRegClipboard, FaRoad, FaTruck, FaWarehouse } from 'react-icons/fa';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, StatCard, CTABanner, Ticker } from '../components/UI';
import { useReveal, useIsMobile } from '../hooks';
import { STATS, SERVICES, TESTIMONIALS, PROCESS, INDUSTRIES, SITE, getWhatsAppLink } from '../data/siteData';
import 'swiper/css';
import 'swiper/css/pagination';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const words = ['Roads', 'Bridges', 'Townships', 'Highways', 'Futures'];
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
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
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, reducedMotion]);

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
              <span className="hero__badge-text">Trusted Construction Partner · Pune, MH</span>
            </div>
          </Reveal>

          {/* Main headline */}
          <Reveal delay={100}>
            <h1 className="text-display hero__h1">
              WE BUILD
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-display gradient-text hero__h1">
              STRONG
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="text-display hero__h1 hero__h1--wrap">
              <span className="hero__h1-muted">BETTER</span>
              <span className="hero__typed">
                {typed}
                <span className="hero__caret" aria-hidden>|</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={420}>
            <p className="hero__lead">
              Pune&apos;s leading provider of <strong>Ready Mix Concrete</strong>, <strong>Road Construction</strong>, and{' '}
              <strong>Civil Contracting</strong> since 2002. Quality-driven, deadline-committed.
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
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Quote <FiArrowRight aria-hidden />
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
          <div className="hero__visual card noise-overlay">
            <div className="hero__visual-top">
              <div className="hero__visual-title">
                <span className="badge badge-orange">Since {SITE.established}</span>
                <div className="text-display" style={{ fontSize: 34, lineHeight: 1, marginTop: 12 }}>Built for Scale</div>
                <div style={{ color: 'var(--steel)', marginTop: 10, lineHeight: 1.7 }}>
                  RMC • Roads • Civil contracting across Maharashtra
                </div>
              </div>
              <div className="hero__visual-mark" aria-hidden>
                <img src="/logo.png" alt="" />
              </div>
            </div>

            <div className="hero__visual-grid">
              {[
                { k: 'RMC', v: 'M15–M60 Grade' },
                { k: 'Roads', v: 'IRC compliant' },
                { k: 'Quality', v: 'IS standards' },
                { k: 'Support', v: 'Post-handover' },
              ].map((x) => (
                <div key={x.k} className="hero__pill">
                  <div className="hero__pill-k">{x.k}</div>
                  <div className="hero__pill-v">{x.v}</div>
                </div>
              ))}
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
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-8px)' : 'none',
          boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.45)' : 'none',
          height: '100%', display: 'flex', flexDirection: 'column',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), var(--orange-light))', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />

        {/* BG emoji */}
        <div style={{ position: 'absolute', bottom: -10, right: -10, fontSize: 100, opacity: 0.04, transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'none', transition: 'transform 0.4s' }}>{service.emoji}</div>

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
function TestimonialCard({ t, delay }) {
  return (
    <Reveal delay={delay}>
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
    </Reveal>
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
  const reducedMotion = useReducedMotion();
  const modules = reducedMotion ? [Pagination] : [Pagination, Autoplay];
  const autoplay = reducedMotion ? undefined : { delay: isMobile ? 6000 : 6500, disableOnInteraction: false };

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
          url: 'https://chandramukhi-sales.com/',
          areaServed: 'Maharashtra',
          serviceType: ['Ready Mix Concrete', 'Road Construction', 'Civil Contracting'],
        }}
      />
      <Hero />
      <Ticker />

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
                    transition: 'transform 0.3s',
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
                    transition: 'all 0.25s', cursor: 'default',
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
          <div className="card" style={{ padding: '28px 20px 8px', borderRadius: 'var(--radius-xl)' }}>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* ── Recent Projects Preview ─────────────────────────────── */}
      <section className="section-pad cv-auto" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="Portfolio" title="RECENT PROJECTS" subtitle="A glimpse of what we've built — from city roads to towering structures." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginBottom: 48 }}>
            {[
              { icon: <FaRoad aria-hidden />, title: 'Pune–Nashik Expressway Stretch', cat: 'Roads', year: 2023, val: '₹8.2 Cr' },
              { icon: <FaIndustry aria-hidden />, title: 'Amanora Township Phase 3', cat: 'RMC', year: 2023, val: '₹3.4 Cr' },
              { icon: <FaMapMarkedAlt aria-hidden />, title: 'MIDC Industrial Shed Complex', cat: 'Civil', year: 2022, val: '₹5.1 Cr' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div style={{
                  background: 'var(--navy)', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                  border: '1px solid var(--navy-border)', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--navy-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ background: 'linear-gradient(135deg, var(--navy-light), var(--navy-mid))', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, position: 'relative' }}>
                    <span style={{ color: 'rgba(255,255,255,0.88)', filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.45))' }}>{p.icon}</span>
                    <span className="badge badge-orange" style={{ position: 'absolute', top: 14, right: 14 }}>{p.cat}</span>
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ color: 'var(--steel)', fontSize: 12, fontFamily: 'var(--font-condensed)', letterSpacing: '0.1em', marginBottom: 8 }}>PROJECT VALUE: {p.val} · {p.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 18, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-outline" style={{ textDecoration: 'none', fontSize: 15 }}>View All Projects →</Link>
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
