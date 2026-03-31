import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../data/siteData';
import { useScroll } from '../hooks';

export default function Navbar() {
  const { scrolled } = useScroll();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const estText = `Sales · Est. ${SITE.established}`;

  // Close mobile on route change
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(7,18,36,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        boxShadow: scrolled ? '0 8px 34px rgba(0,0,0,0.34)' : 'none',
      }}>
        <div className="max-w" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, padding: '0 5%' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: 46, height: 46, flexShrink: 0 }}>
              {/* Outer ring */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: 14,
                background: 'radial-gradient(circle at 30% 0%, #FBBF24, transparent 60%)',
                opacity: 0.16,
              }} />
              {/* Core badge */}
              <div style={{
                position: 'absolute', inset: 3,
                borderRadius: 12,
                background: 'conic-gradient(from 210deg, #F97316, #FB923C, #F97316)',
                boxShadow: '0 10px 30px rgba(249,115,22,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  borderRadius: 10,
                  padding: '2px 6px',
                  background: 'rgba(0,0,0,0.35)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  letterSpacing: '0.18em',
                  color: '#fff',
                }}>
                  CS
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, letterSpacing: '0.12em', color: 'var(--white)', lineHeight: 1.1 }}>CHANDRAMUKHI</div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--orange)', textTransform: 'uppercase' }}>{estText}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink key={path} to={path} end={path === '/'}
                style={({ isActive }) => ({
                  padding: '8px 16px', borderRadius: 999,
                  fontFamily: 'var(--font-condensed)', fontSize: 14,
                  fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: isActive ? 'var(--orange)' : 'var(--steel-light)',
                  background: isActive ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.02)',
                  border: isActive ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.22s',
                  textDecoration: 'none',
                })}
                onMouseEnter={e => {
                  if (location.pathname !== path) {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={e => {
                  if (location.pathname !== path) {
                    e.currentTarget.style.color = 'var(--steel-light)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }
                }}
              >{label}</NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginLeft: 8, textDecoration: 'none' }}>
              Get Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button className="show-mobile"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: 26, padding: 4, lineHeight: 1 }}
            aria-label="Toggle menu"
          >{open ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 850,
          background: 'rgba(10,22,40,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8,
          animation: 'fadeIn 0.25s ease',
        }}>
          {/* Decorative */}
          <div style={{ position: 'absolute', top: '10%', right: '5%', fontSize: 120, opacity: 0.03 }}>🏗️</div>

          {NAV_LINKS.map(({ label, path }, i) => (
            <NavLink key={path} to={path} end={path === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,64px)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: isActive ? 'var(--orange)' : 'var(--steel-light)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                animationDelay: `${i * 60}ms`,
              })}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
              onMouseLeave={e => e.currentTarget.style.color = location.pathname === path ? 'var(--orange)' : 'var(--steel-light)'}
            >{label}</NavLink>
          ))}

          <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`tel:${SITE.phone}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-green">💬 WhatsApp</a>
          </div>
        </div>
      )}
    </>
  );
}
