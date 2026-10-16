import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiMenu, FiMessageCircle, FiPhone, FiX } from 'react-icons/fi';
import { NAV_LINKS, SITE, getWhatsAppLink } from '../data/siteData';
import { useScroll } from '../hooks';
import ThemeToggle from './ThemeToggle';

// Must match the 1024px breakpoint in navbar.css.
const DESKTOP_QUERY = '(min-width: 1024px)';

export default function Navbar() {
  const { scrolled } = useScroll();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  // Close the mobile menu on route change. Scroll to top unless the URL targets an anchor.
  useEffect(() => {
    setOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape, and return focus to the menu button
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      // Focus trap inside the open menu plus the toggle button
      if (e.key === 'Tab') {
        const panelFocusables = panelRef.current
          ? Array.from(panelRef.current.querySelectorAll('a[href], button:not([disabled])'))
          : [];
        const focusable = toggleRef.current ? [toggleRef.current, ...panelFocusables] : panelFocusables;
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (open) panelRef.current?.querySelector('a[href]')?.focus();
  }, [open]);

  // If the viewport grows to desktop size while the menu is open, close it
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => { if (e.matches) setOpen(false); };
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  const phoneHref = `tel:${String(SITE.phone).replace(/[^\d+]/g, '')}`;

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
      <a href="#main" className="skip-link">Skip to content</a>

      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''} ${open ? 'site-nav--open' : ''}`}>
        <nav className="max-w site-nav__inner" aria-label="Main">

          {/* Logo */}
          <Link to="/" className="nav-brand" aria-label={`${SITE.name} home`}>
            <span className="nav-brand-logo">
              {/* Decorative: the link already has an accessible name */}
              <img src="/logo.png" alt="" width="48" height="32" />
            </span>
            <span className="nav-brand-text">
              <span className="nav-brand-title">CHANDRAMUKHI SALES</span>
              <span className="nav-brand-subtitle">Est. {SITE.established}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="site-nav__links">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        className="nav-link__indicator"
                        layoutId="nav-indicator"
                        transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 40 }}
                        aria-hidden
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <ThemeToggle className="site-nav__theme" />
            <Link to="/contact" className="btn btn-primary btn-sm site-nav__cta">
              Get Quote <FiArrowRight aria-hidden />
            </Link>
          </div>

          {/* Mobile control: menu button only (theme toggle lives inside the menu) */}
          <div className="site-nav__mobile-controls">
            <button
              ref={toggleRef}
              type="button"
              className="icon-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobilePanel}
          >
            <div className="mobile-nav__bg" aria-hidden onClick={closeMenu} />

            {/* Children inherit initial/animate from the parent so the stagger stays in sync */}
            <motion.div className="mobile-nav__content" variants={itemWrap}>
              {NAV_LINKS.map(({ label, path }) => (
                <motion.div key={path} variants={item}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={item} className="mobile-nav__theme">
                <ThemeToggle variant="mobile" />
              </motion.div>

              <motion.div className="mobile-nav__actions" variants={item}>
                <Link to="/contact" onClick={closeMenu} className="btn btn-primary">
                  Get Quote <FiArrowRight aria-hidden />
                </Link>
                <a href={phoneHref} onClick={closeMenu} className="btn btn-outline">
                  <FiPhone aria-hidden /> Call Now
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="btn btn-green"
                >
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