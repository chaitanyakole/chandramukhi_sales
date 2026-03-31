import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '../data/siteData';

export default function LoadingScreen({ show }) {
  const [statusText, setStatusText] = useState('Initializing');

  useEffect(() => {
    if (!show) return;
    const steps = ['Initializing', 'Loading assets', 'Almost ready'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % steps.length;
      setStatusText(steps[i]);
    }, 1200);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {/* Grid background */}
          <div style={styles.gridBg} aria-hidden />
          <div style={styles.vignette} aria-hidden />

          {/* Corner accents */}
          <div style={{ ...styles.corner, ...styles.cornerTL }} aria-hidden />
          <div style={{ ...styles.corner, ...styles.cornerBR }} aria-hidden />

          {/* Main card */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Spinning logo ring */}
            <div style={styles.logoRing} aria-hidden>
              <motion.svg
                style={styles.ringSvg}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
              >
                <circle cx="40" cy="40" r="36" stroke="rgba(255,140,0,0.15)" strokeWidth="1" />
                <circle
                  cx="40" cy="40" r="36"
                  stroke="url(#ring-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="60 165"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ring-grad" x1="40" y1="4" x2="76" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff8c00" />
                    <stop offset="1" stopColor="#ff8c00" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <div style={styles.logoInner}>
                <svg width="36" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 30.2c0 4.8 3.6 8.3 8.5 8.3 2 0 3.8-.6 5.2-1.7"
                    stroke="#ff8c00" strokeWidth="3" strokeLinecap="round"
                  />
                  <path
                    d="M34.8 22.9c-1.5-1.3-3.4-2-5.5-2-4.9 0-8.5 3.5-8.5 8.3"
                    stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"
                  />
                  <path
                    d="M30.8 18.8h11.2M30.8 27.8h8.4"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <p style={styles.eyebrow}>Construction &amp; Infrastructure</p>

            <h1 style={styles.brandName}>
              Chandramukhi<br />
              <span style={styles.brandAccent}>Sales</span>
            </h1>

            <p style={styles.tagline}>{SITE.tagline}</p>
            <div style={styles.divider} aria-hidden />

            {/* Progress bar */}
            <div style={styles.progressTrack} aria-hidden>
              <motion.div
                style={styles.progressBar}
                initial={{ left: '-60%', width: '60%' }}
                animate={{ left: '110%', width: '60%' }}
                transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
              />
            </div>

            {/* Status row */}
            <div style={styles.statusRow}>
              <motion.div
                style={styles.pulseDot}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusText}
                  style={styles.statusText}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {statusText}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom stat strip */}
          <motion.div
            style={styles.statStrip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            aria-hidden
          >
            {[
              { num: '20+', label: 'Years' },
              null,
              { num: '500+', label: 'Projects' },
              null,
              { num: 'Pan-IN', label: 'Reach' },
            ].map((item, i) =>
              item === null
                ? <div key={i} style={styles.statDivider} />
                : (
                  <div key={i} style={styles.stat}>
                    <span style={styles.statNum}>{item.num}</span>
                    <span style={styles.statLabel}>{item.label}</span>
                  </div>
                )
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#0d0f12', overflow: 'hidden',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    padding: 24,
  },
  gridBg: {
    position: 'absolute', inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
  },
  vignette: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 30%, #0d0f12 80%)',
  },
  corner: { position: 'absolute', width: 120, height: 120 },
  cornerTL: {
    top: 0, left: 0,
    borderTop: '1px solid rgba(255,140,0,0.25)',
    borderLeft: '1px solid rgba(255,140,0,0.25)',
    borderRadius: '0 0 40px 0',
  },
  cornerBR: {
    bottom: 0, right: 0,
    borderBottom: '1px solid rgba(255,140,0,0.15)',
    borderRight: '1px solid rgba(255,140,0,0.15)',
    borderRadius: '40px 0 0 0',
  },
  card: {
    position: 'relative', zIndex: 10,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center',
    width: 'min(520px, calc(100vw - 48px))',
    boxSizing: 'border-box',
    padding: '42px 28px',
    borderRadius: 22,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'linear-gradient(165deg, rgba(17,34,61,0.50), rgba(10,22,40,0.72))',
    boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
    backdropFilter: 'blur(10px)',
  },
  logoRing: { position: 'relative', width: 80, height: 80, marginBottom: 28 },
  ringSvg: { position: 'absolute', inset: 0, width: '100%', height: '100%' },
  logoInner: {
    position: 'absolute', inset: 10,
    background: 'rgba(255,140,0,0.08)',
    border: '1px solid rgba(255,140,0,0.3)',
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  eyebrow: {
    margin: '0 0 10px', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: 'rgba(255,140,0,0.7)',
  },
  brandName: {
    margin: '0 0 6px', fontSize: 28, fontWeight: 800,
    color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
    fontFamily: "'Syne', sans-serif",
  },
  brandAccent: { color: '#ff8c00' },
  tagline: {
    margin: '0 0 22px', fontSize: 12, fontWeight: 300,
    color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  divider: { width: 36, height: 1, background: 'rgba(255,140,0,0.3)', marginBottom: 22 },
  progressTrack: {
    width: 200, height: 2, background: 'rgba(255,255,255,0.07)',
    borderRadius: 2, overflow: 'hidden', marginBottom: 14, position: 'relative',
  },
  progressBar: {
    position: 'absolute', top: 0, bottom: 0,
    background: 'linear-gradient(90deg, transparent, #ff8c00, #ffb347)',
    borderRadius: 2,
  },
  statusRow: { display: 'flex', alignItems: 'center', gap: 8 },
  pulseDot: { width: 6, height: 6, borderRadius: '50%', background: '#ff8c00' },
  statusText: {
    fontSize: 11, fontWeight: 400, letterSpacing: '0.15em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
  },
  statStrip: {
    position: 'fixed', bottom: 18, left: 0, right: 0,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    gap: 28, zIndex: 10,
    padding: '0 18px',
    boxSizing: 'border-box',
  },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 },
  statNum: {
    fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
  },
  statLabel: {
    fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.25)',
  },
  statDivider: { width: 1, height: 28, background: 'rgba(255,255,255,0.08)' },
};