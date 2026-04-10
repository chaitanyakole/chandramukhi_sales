import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiMenu, FiMessageCircle, FiPhone, FiX } from 'react-icons/fi';
import { NAV_LINKS, SITE, getWhatsAppLink } from '../data/siteData';
import { useScroll } from '../hooks';

export default function Navbar() {
  const { scrolled } = useScroll();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const estText = `Est. ${SITE.established}`;

  // Close mobile on route change
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const mobilePanel = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: reducedMotion ? 0 : -8, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } },
  };

  const itemWrap = {
    hidden: {},
    show: { transition: { staggerChildren: reducedMotion ? 0 : 0.045, delayChildren: 0.04 } },
  };

  const item = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <>
      <nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="max-w site-nav__inner">

          {/* Logo */}
          <Link to="/" className="nav-brand" aria-label={`${SITE.name} home`}>
            <span className="nav-brand-logo">
              <img src="/logo.png" alt="Chandramukhi Sales logo" />
            </span>
            <span className="nav-brand-text">
              <span className="nav-brand-title">CHANDRAMUKHI SALES</span>
              <span className="nav-brand-subtitle">{estText}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hide-mobile site-nav__links">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary btn-sm site-nav__cta">
              Get Quote <FiArrowRight aria-hidden />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="show-mobile icon-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobilePanel}
          >
            <div className="mobile-nav__bg" aria-hidden />

            <motion.div className="mobile-nav__content" variants={itemWrap} initial="hidden" animate="show">
              {NAV_LINKS.map(({ label, path }) => (
                <motion.div key={path} variants={item}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div className="mobile-nav__actions" variants={item}>
                <a href={`tel:${SITE.phone}`} className="btn btn-primary">
                  <FiPhone aria-hidden /> Call Now
                </a>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-green">
                  <FiMessageCircle aria-hidden /> WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
