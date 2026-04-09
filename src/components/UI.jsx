import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMessageCircle, FiPhone, FiTool } from 'react-icons/fi';
import { useReveal, useCounter } from '../hooks';
import { SITE, TICKER_ITEMS, getWhatsAppLink } from '../data/siteData';

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const [ref, v] = useReveal();
  const transforms = {
    up:    v ? 'translateY(0)'  : 'translateY(40px)',
    down:  v ? 'translateY(0)'  : 'translateY(-30px)',
    left:  v ? 'translateX(0)'  : 'translateX(-40px)',
    right: v ? 'translateX(0)'  : 'translateX(40px)',
    scale: v ? 'scale(1)'       : 'scale(0.92)',
    none:  'none',
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0,
      transform: transforms[direction],
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, title, subtitle, center = true, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{ marginBottom: 56, textAlign: center ? 'center' : 'left' }}>
      <div className={`eyebrow ${center ? '' : ''}`} style={{ justifyContent: center ? 'center' : 'flex-start' }}>
        {eyebrow}
      </div>
      <h2 className="text-display" style={{ fontSize: 'clamp(36px,5vw,68px)', color: 'var(--white)', marginBottom: 20 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--steel)', fontSize: 18, lineHeight: 1.8, maxWidth: 620, margin: center ? '0 auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

// ─── Animated stat card ───────────────────────────────────────────────────────
export function StatCard({ value, suffix, label, icon, delay = 0 }) {
  const [ref, v] = useReveal();
  const count = useCounter(value, 2000, v);
  return (
    <div ref={ref} style={{
      textAlign: 'center', padding: '36px 24px',
      opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(30px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--steel)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
export function CTABanner({ title = "LET'S BUILD YOUR PROJECT", subtitle = 'Talk to our experts for a free consultation and estimate within 24 hours.', btnText = 'Get Free Quote' }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--orange-dark) 0%, var(--orange) 50%, var(--orange-light) 100%)' }}>
      {/* Grid overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }} />

      <div className="section-pad" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Reveal>
          <p style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 16 }}>READY TO BUILD?</p>
          <h2 className="text-display" style={{ fontSize: 'clamp(40px,6vw,76px)', color: '#fff', marginBottom: 20 }}>{title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 19, marginBottom: 44, maxWidth: 600, margin: '0 auto 44px', lineHeight: 1.7 }}>{subtitle}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--orange)', fontWeight: 800, padding: '16px 36px', fontSize: 15 }}>
              <FiTool aria-hidden /> {btnText}
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.5)', padding: '16px 32px' }}>
              <FiPhone aria-hidden /> {SITE.phone}
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn" style={{ background: 'rgba(37,211,102,0.2)', color: '#fff', border: '2px solid rgba(37,211,102,0.5)', padding: '16px 32px' }}>
              <FiMessageCircle aria-hidden /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── News / Alert ticker ──────────────────────────────────────────────────────
export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ background: 'var(--orange)', padding: '10px 0', overflow: 'hidden', borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
            padding: '0 40px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            {item}
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Floating buttons ─────────────────────────────────────────────────────────
export function FloatingButtons() {
  const [tooltip, setTooltip] = useState(null);
  const buttons = [
    { id: 'wa',   icon: <FiMessageCircle aria-hidden />, label: 'WhatsApp Us', href: getWhatsAppLink(), bg: '#25D366', shadow: 'rgba(37,211,102,0.5)', external: true },
    { id: 'call', icon: <FiPhone aria-hidden />, label: 'Call Us',     href: `tel:${SITE.phone}`, bg: 'var(--orange)', shadow: 'rgba(249,115,22,0.5)' },
  ];
  return (
    <div style={{ position: 'fixed', bottom: 28, right: 22, zIndex: 800, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {buttons.map(({ id, icon, label, href, bg, shadow, external }) => (
        <div key={id} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {tooltip === id && (
            <span style={{
              position: 'absolute', right: 68, whiteSpace: 'nowrap',
              background: 'rgba(10,22,40,0.9)', color: 'var(--white)',
              padding: '6px 12px', borderRadius: 8, fontSize: 12,
              fontFamily: 'var(--font-condensed)', fontWeight: 700, letterSpacing: '0.05em',
              backdropFilter: 'blur(8px)', border: '1px solid var(--navy-border)',
              animation: 'fadeIn 0.2s ease',
            }}>{label}</span>
          )}
          {/* Pulse ring */}
          <div style={{
            position: 'absolute', width: 58, height: 58, borderRadius: '50%',
            background: bg, opacity: 0.3,
            animation: 'pulse-ring 2s cubic-bezier(0,0,0.2,1) infinite',
          }} />
          <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
            style={{
              width: 58, height: 58, borderRadius: '50%',
              background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, textDecoration: 'none', position: 'relative',
              boxShadow: `0 4px 20px ${shadow}`,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; setTooltip(id); }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; setTooltip(null); }}
          >{icon}</a>
        </div>
      ))}
    </div>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
export function FAQItem({ q, a, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div style={{
        background: 'var(--navy-mid)', borderRadius: 'var(--radius-md)',
        border: `1px solid ${open ? 'rgba(249,115,22,0.35)' : 'var(--navy-border)'}`,
        overflow: 'hidden', transition: 'border-color 0.25s', marginBottom: 12,
      }}>
        <button onClick={() => setOpen(!open)}
          style={{
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '22px 28px', gap: 16, textAlign: 'left',
          }}>
          <span style={{ color: 'var(--white)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, lineHeight: 1.5 }}>{q}</span>
          <span style={{
            width: 28, height: 28, borderRadius: 6,
            background: open ? 'var(--orange)' : 'var(--navy-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: open ? '#fff' : 'var(--steel)', fontSize: 16, flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none', transition: 'all 0.25s',
          }}>
            <FiChevronDown aria-hidden />
          </span>
        </button>
        {open && (
          <div style={{ padding: '0 28px 22px', color: 'var(--steel)', fontSize: 15, lineHeight: 1.8, animation: 'slideUp 0.25s ease' }}>
            {a}
          </div>
        )}
      </div>
    </Reveal>
  );
}
