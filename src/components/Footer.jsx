import React from 'react';
import { Link } from 'react-router-dom';
import { SITE, NAV_LINKS, SERVICES } from '../data/siteData';
import { useReveal } from '../hooks';

function RevealDiv({ children, delay = 0, style = {} }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

export default function Footer() {
  const estText = `Sales · Est. ${SITE.established}`;
  const emailPrimary = SITE.emails?.[0] || SITE.email;
  const emailSecondary = SITE.emails?.[1];
  const salesPhones = SITE.salesPhones?.length ? SITE.salesPhones : [SITE.phone];

  const socials = [
    { label: 'Facebook', short: 'FB', href: '#' },
    { label: 'LinkedIn', short: 'IN', href: '#' },
    { label: 'YouTube', short: 'YT', href: '#' },
    { label: 'Instagram', short: 'IG', href: '#' },
  ];

  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--navy-border)' }}>
      {/* Pre-footer accent */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, var(--orange), #FBBF24, var(--orange-light), var(--orange))' }} />

      <div className="section-pad-sm max-w" style={{ padding: '64px 5% 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 48, marginBottom: 56 }}>

          {/* Brand column */}
          <RevealDiv>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ position: 'relative', width: 50, height: 50, flexShrink: 0 }}>
                {/* Outer ring */}
                <div style={{
                  position: 'absolute', inset: 0,
                  borderRadius: 16,
                  background: 'radial-gradient(circle at 30% 0%, #FBBF24, transparent 60%)',
                  opacity: 0.16,
                }} />
                {/* Core badge */}
                <div style={{
                  position: 'absolute', inset: 3,
                  borderRadius: 14,
                  background: 'conic-gradient(from 210deg, var(--orange), var(--orange-light), var(--orange))',
                  boxShadow: '0 10px 30px rgba(249,115,22,0.55)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    borderRadius: 11,
                    padding: '3px 7px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    letterSpacing: '0.18em',
                    color: '#fff',
                  }}>
                    CS
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '0.1em', color: 'var(--white)' }}>CHANDRAMUKHI</div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--orange)', textTransform: 'uppercase' }}>{estText}</div>
              </div>
            </div>
            <p style={{ color: 'var(--steel)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Building Maharashtra&apos;s infrastructure since {SITE.established}. Trusted by leading developers and builders for RMC, road construction, and civil contracting.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(({ short, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--navy-light)', border: '1px solid var(--navy-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--steel)', fontSize: 12, fontWeight: 700,
                  transition: 'all 0.2s', textDecoration: 'none',
                  fontFamily: 'var(--font-condensed)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.15)'; e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy-light)'; e.currentTarget.style.color = 'var(--steel)'; e.currentTarget.style.borderColor = 'var(--navy-border)'; }}
                >{short}</a>
              ))}
            </div>
          </RevealDiv>

          {/* Quick links */}
          <RevealDiv delay={80}>
            <h4 style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>QUICK LINKS</h4>
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={path} to={path}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--steel)', fontSize: 14, padding: '6px 0', textDecoration: 'none', transition: 'color 0.2s', borderBottom: '1px solid var(--navy-light)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--steel)'}
              >
                <span style={{ color: 'var(--orange)', fontSize: 10 }}>▶</span> {label}
              </Link>
            ))}
          </RevealDiv>

          {/* Services */}
          <RevealDiv delay={160}>
            <h4 style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>SERVICES</h4>
            {[...SERVICES.map(s => s.title), 'Project Consultation', 'AMC Services'].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--steel)', fontSize: 14, padding: '6px 0', borderBottom: '1px solid var(--navy-light)' }}>
                <span style={{ color: 'var(--orange)', fontSize: 10 }}>▶</span> {s}
              </div>
            ))}
          </RevealDiv>

          {/* Contact */}
          <RevealDiv delay={240}>
            <h4 style={{ fontFamily: 'var(--font-condensed)', fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>CONTACT</h4>
            {[
              { icon: '📍', text: SITE.address },
              { icon: '☎️', text: `Office: ${SITE.officeTel}`, href: `tel:${SITE.officeTel}` },
              { icon: '📞', text: `Sales: ${salesPhones[0]}`, href: `tel:${salesPhones[0]}` },
              ...(salesPhones.length > 1 ? [{ icon: '📞', text: `Sales (Alt): ${salesPhones[1]}`, href: `tel:${salesPhones[1]}` }] : []),
              { icon: '✉️', text: emailPrimary, href: `mailto:${emailPrimary}` },
              ...(emailSecondary ? [{ icon: '✉️', text: emailSecondary, href: `mailto:${emailSecondary}` }] : []),
              { icon: '⏰', text: 'Mon – Sat: 9:00 AM – 6:00 PM' },
              { icon: '🏢', text: `GSTIN: ${SITE.gstin}` },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: 15, flexShrink: 0 }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ color: 'var(--steel)', fontSize: 13, lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--steel)'}
                  >{text}</a>
                ) : (
                  <span style={{ color: 'var(--steel)', fontSize: 13, lineHeight: 1.6 }}>{text}</span>
                )}
              </div>
            ))}
          </RevealDiv>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--navy-border)', padding: '20px 5%' }}>
        <div className="max-w" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'var(--muted)', fontSize: 13 }}>
            © {new Date().getFullYear()} Chandramukhi Sales. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ color: 'var(--muted)', fontSize: 12, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
