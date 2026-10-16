import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SITE } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

/**
 * Chandramukhi Sales loader (light + dark theme aware)
 * Concept: a skyline is built floor by floor while a tower crane works beside it.
 * Build height is tied to a real percentage counter.
 */

const GROUND_Y = 160;
const BUILD_H = 150;

const BUILDINGS = [
  { x: 56, w: 50, h: 72 },
  { x: 122, w: 64, h: 124 }, // hero tower
  { x: 202, w: 46, h: 94 },
];

function stageLabel(p) {
  if (p < 28) return 'Laying the foundation';
  if (p < 62) return 'Raising the structure';
  if (p < 90) return 'Fitting out the floors';
  return 'Handing over the keys';
}

export default function LoadingScreen({ show }) {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [progress, setProgress] = useState(0);

  // Eased progress: slows near the end and holds at 99 until `show` becomes false.
  useEffect(() => {
    if (!show) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => Math.min(99, p + Math.max(0.25, (96 - p) * 0.045)));
    }, 70);
    return () => clearInterval(id);
  }, [show]);

  const pct = Math.round(progress);
  const riseH = (BUILD_H * progress) / 100;

  // ---- Theme tokens ----
  const orange = isDark ? '#F97316' : '#EA580C';
  const orangeLight = isDark ? '#FFA24A' : '#F97316';
  const overlayBg = isDark ? '#071224' : '#F8FAFC';
  const gridLine = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.04)';
  const vignetteBg = isDark
    ? 'radial-gradient(ellipse at center, transparent 30%, #071224 85%)'
    : 'radial-gradient(ellipse at center, transparent 35%, #F1F5F9 90%)';
  const brandColor = isDark ? '#FFFFFF' : '#0F172A';
  const taglineColor = isDark ? 'rgba(255,255,255,0.5)' : '#64748B';
  const trackBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)';
  const statusColor = isDark ? 'rgba(255,255,255,0.55)' : '#64748B';
  const statNumColor = isDark ? 'rgba(255,255,255,0.85)' : '#1E293B';
  const statLabelColor = isDark ? 'rgba(255,255,255,0.35)' : '#64748B';
  const statDivBg = isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0';
  const logoInnerBg = isDark ? 'rgba(249,115,22,0.08)' : 'rgba(234,88,12,0.06)';
  const cornerBorder = isDark ? 'rgba(249,115,22,0.3)' : 'rgba(234,88,12,0.25)';

  // Scene colours
  const ghostStroke = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(15,23,42,0.18)';
  const groundStroke = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.35)';
  const groundDash = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.12)';
  const fillTop = isDark ? 'rgba(249,115,22,0.16)' : 'rgba(234,88,12,0.14)';
  const fillBottom = isDark ? 'rgba(249,115,22,0.03)' : 'rgba(234,88,12,0.03)';
  const windowColor = isDark ? 'rgba(255,180,110,0.55)' : 'rgba(234,88,12,0.35)';
  const ropeColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.55)';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{ ...styles.overlay, background: overlayBg }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          role="status"
          aria-live="polite"
          aria-label={`Loading Chandramukhi Sales, ${pct} percent`}
        >
          {/* Blueprint grid */}
          <div
            style={{
              ...styles.gridBg,
              backgroundImage: `
                linear-gradient(${gridLine} 1px, transparent 1px),
                linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
            }}
            aria-hidden
          />
          <div style={{ ...styles.vignette, background: vignetteBg }} aria-hidden />

          {/* Corner accents */}
          <div
            style={{ ...styles.corner, ...styles.cornerTL, borderTopColor: cornerBorder, borderLeftColor: cornerBorder }}
            aria-hidden
          />
          <div
            style={{ ...styles.corner, ...styles.cornerBR, borderBottomColor: cornerBorder, borderRightColor: cornerBorder }}
            aria-hidden
          />

          <div style={styles.center}>
            {/* Logo */}
            <motion.div
              style={{ ...styles.logoWrap, background: logoInnerBg, borderColor: 'rgba(249,115,22,0.3)' }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-hidden
            >
              <img
                src="/logo.png"
                alt=""
                width="44"
                height="30"
                style={{
                  objectFit: 'contain',
                  filter: `drop-shadow(0 2px 8px rgba(0,0,0,${isDark ? 0.4 : 0.15}))`,
                }}
              />
            </motion.div>

            {/* The build */}
            <svg
              viewBox="0 0 360 180"
              style={styles.scene}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <clipPath id="cs-rise">
                  <motion.rect
                    x="0"
                    width="360"
                    initial={false}
                    animate={{ y: GROUND_Y - riseH, height: riseH }}
                    transition={{ duration: 0.2, ease: 'linear' }}
                  />
                </clipPath>
                <pattern id="cs-windows" width="10" height="12" patternUnits="userSpaceOnUse">
                  <rect x="2" y="3" width="5" height="6" rx="0.5" fill={windowColor} />
                </pattern>
                <linearGradient id="cs-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={fillTop} />
                  <stop offset="1" stopColor={fillBottom} />
                </linearGradient>
              </defs>

              {/* Ghost blueprint of the finished skyline */}
              <g stroke={ghostStroke} strokeWidth="1" strokeDasharray="3 4">
                {BUILDINGS.map((b, i) => (
                  <rect key={i} x={b.x} y={GROUND_Y - b.h} width={b.w} height={b.h} />
                ))}
              </g>

              {/* Built portion, revealed bottom-up */}
              <g clipPath="url(#cs-rise)">
                {BUILDINGS.map((b, i) => (
                  <g key={i}>
                    <rect
                      x={b.x} y={GROUND_Y - b.h} width={b.w} height={b.h}
                      fill="url(#cs-fill)" stroke={orange} strokeWidth="1.5"
                    />
                    <rect
                      x={b.x + 4} y={GROUND_Y - b.h + 6} width={b.w - 8} height={b.h - 10}
                      fill="url(#cs-windows)"
                    />
                  </g>
                ))}
              </g>

              {/* Beam marking the current build height */}
              <motion.line
                x1="40" x2="270"
                initial={false}
                animate={{ y1: GROUND_Y - riseH, y2: GROUND_Y - riseH }}
                transition={{ duration: 0.2, ease: 'linear' }}
                stroke={orangeLight} strokeWidth="1.5" strokeDasharray="6 5"
                style={{
                  filter: `drop-shadow(0 0 4px ${isDark ? 'rgba(249,115,22,0.9)' : 'rgba(234,88,12,0.6)'})`,
                  opacity: progress > 1 ? 0.9 : 0,
                }}
              />

              {/* Ground */}
              <line x1="20" y1={GROUND_Y} x2="340" y2={GROUND_Y} stroke={groundStroke} strokeWidth="1.5" />
              <line x1="20" y1={GROUND_Y + 6} x2="340" y2={GROUND_Y + 6} stroke={groundDash} strokeWidth="1" strokeDasharray="10 6" />

              {/* Tower crane */}
              <g stroke={orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={`M292 ${GROUND_Y} V28 M304 ${GROUND_Y} V28`} />
                <path
                  d={Array.from({ length: 10 }, (_, i) => {
                    const y1 = GROUND_Y - i * 13.2;
                    const y2 = y1 - 13.2;
                    return i % 2 === 0 ? `M292 ${y1} L304 ${y2}` : `M304 ${y1} L292 ${y2}`;
                  }).join(' ')}
                  strokeWidth="1" opacity="0.7"
                />
                <rect x="286" y="22" width="24" height="8" rx="1" fill={overlayBg} />
                <motion.g
                  style={{ originX: '298px', originY: '26px' }}
                  animate={reduceMotion ? undefined : { rotate: [-1.2, 1.2, -1.2] }}
                  transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
                >
                  <path d="M298 14 V26 M298 14 L214 26 M298 14 L330 26" strokeWidth="1" />
                  <path d="M206 26 H336" strokeWidth="2" />
                  <rect x="324" y="26" width="10" height="7" fill={orange} stroke="none" />
                  <motion.g
                    animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                    transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity }}
                  >
                    <line x1="236" y1="26" x2="236" y2="62" stroke={ropeColor} strokeWidth="1" />
                    <path d="M230 62 H242 L240 70 H232 Z" fill={orange} stroke="none" />
                  </motion.g>
                </motion.g>
              </g>
            </svg>

            {/* Brand */}
            <div role="heading" aria-level={2} style={{ ...styles.brandName, color: brandColor }}>
              Chandramukhi <span style={{ color: orange }}>Sales</span>
            </div>
            <p style={{ ...styles.tagline, color: taglineColor }}>
              {SITE.tagline || 'Building Strong Foundations Since 2002'}
            </p>

            {/* Progress */}
            <div style={styles.progressRow}>
              <span style={{ ...styles.percent, color: brandColor }} aria-hidden>
                {String(pct).padStart(2, '0')}
                <span style={{ ...styles.percentSign, color: orange }}>%</span>
              </span>
              <div style={{ ...styles.progressTrack, background: trackBg }} aria-hidden>
                <motion.div
                  style={{
                    ...styles.progressFill,
                    background: `linear-gradient(90deg, ${orange}, ${orangeLight})`,
                    boxShadow: `0 0 10px ${isDark ? 'rgba(249,115,22,0.6)' : 'rgba(234,88,12,0.5)'}`,
                  }}
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Status */}
            <div style={styles.statusRow}>
              <motion.div
                style={{ ...styles.pulseDot, background: orange, boxShadow: `0 0 8px ${orange}99` }}
                animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.7, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={stageLabel(progress)}
                  style={{ ...styles.statusText, color: statusColor }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {stageLabel(progress)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom stat strip */}
          <motion.div
            style={styles.statStrip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            aria-hidden
          >
            {[
              { num: '20+', label: 'Years' },
              null,
              { num: '500+', label: 'Projects' },
              null,
              { num: 'Pan-MH', label: 'Reach' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} style={{ ...styles.statDivider, background: statDivBg }} />
              ) : (
                <div key={i} style={styles.stat}>
                  <span style={{ ...styles.statNum, color: statNumColor }}>{item.num}</span>
                  <span style={{ ...styles.statLabel, color: statLabelColor }}>{item.label}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const DISPLAY = "var(--font-display, 'Bebas Neue', sans-serif)";
const CONDENSED = "var(--font-condensed, 'Barlow Condensed', sans-serif)";

const styles = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: "var(--font-body, 'Barlow', system-ui, sans-serif)",
    padding: 24,
  },
  gridBg: { position: 'absolute', inset: 0, backgroundSize: '40px 40px' },
  vignette: { position: 'absolute', inset: 0 },
  corner: { position: 'absolute', width: 120, height: 120 },
  cornerTL: {
    top: 0, left: 0,
    borderTopWidth: 1, borderTopStyle: 'solid',
    borderLeftWidth: 1, borderLeftStyle: 'solid',
    borderRadius: '0 0 40px 0',
  },
  cornerBR: {
    bottom: 0, right: 0,
    borderBottomWidth: 1, borderBottomStyle: 'solid',
    borderRightWidth: 1, borderRightStyle: 'solid',
    borderRadius: '40px 0 0 0',
  },
  center: {
    position: 'relative', zIndex: 10,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center',
    width: 'min(460px, 100%)',
  },
  logoWrap: {
    width: 64, height: 64, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderStyle: 'solid',
    marginBottom: 8,
  },
  scene: { width: '100%', height: 'auto', maxWidth: 420, overflow: 'visible' },
  brandName: {
    margin: '10px 0 4px', fontSize: 'clamp(30px, 7vw, 42px)', fontWeight: 400,
    lineHeight: 1.1, letterSpacing: '0.05em',
    fontFamily: DISPLAY, textTransform: 'uppercase',
  },
  tagline: {
    margin: '0 0 22px', fontSize: 12, fontWeight: 400,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    fontFamily: CONDENSED,
  },
  progressRow: {
    display: 'flex', alignItems: 'center', gap: 14,
    width: 'min(300px, 100%)', marginBottom: 12,
  },
  percent: {
    minWidth: 56, textAlign: 'right',
    fontFamily: DISPLAY, fontSize: 28, lineHeight: 1,
    letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums',
  },
  percentSign: { fontSize: 15, marginLeft: 2 },
  progressTrack: {
    flex: 1, height: 3, borderRadius: 999, overflow: 'hidden', position: 'relative',
  },
  progressFill: { position: 'absolute', top: 0, bottom: 0, left: 0, borderRadius: 999 },
  statusRow: { display: 'flex', alignItems: 'center', gap: 8, minHeight: 16 },
  pulseDot: { width: 6, height: 6, borderRadius: '50%' },
  statusText: {
    fontSize: 11, fontWeight: 500, letterSpacing: '0.14em',
    textTransform: 'uppercase', fontFamily: CONDENSED,
  },
  statStrip: {
    position: 'fixed', bottom: 18, left: 0, right: 0,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    gap: 28, zIndex: 10, padding: '0 18px', boxSizing: 'border-box',
  },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 },
  statNum: { fontFamily: DISPLAY, fontSize: 20, fontWeight: 400, letterSpacing: '0.04em' },
  statLabel: {
    fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
    fontFamily: CONDENSED,
  },
  statDivider: { width: 1, height: 26 },
};