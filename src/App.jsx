import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FloatingButtons } from './components/UI';
import LoadingScreen from './components/LoadingScreen';
import './styles/global.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RmcPunePage = lazy(() => import('./pages/RmcPunePage'));
const RoadContractorPunePage = lazy(() => import('./pages/RoadContractorPunePage'));
const CivilContractorMaharashtraPage = lazy(() => import('./pages/CivilContractorMaharashtraPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Page wrapper with enter animation
function PageWrapper({ children }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <>{children}</>;
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const { scrollY } = useScrollProgress();
  const pageHeight = typeof window !== 'undefined'
    ? Math.max((document.documentElement.scrollHeight - window.innerHeight), 1)
    : 1;
  const progress = Math.min((scrollY / pageHeight) * 100, 100);
  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--orange), var(--orange-light))',
          boxShadow: '0 0 16px rgba(249,115,22,0.55)',
          zIndex: 1001,
          transition: 'width 0.08s linear',
        }}
      />
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<RouteLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
              <Route path="/rmc-pune" element={<PageWrapper><RmcPunePage /></PageWrapper>} />
              <Route path="/road-contractor-pune" element={<PageWrapper><RoadContractorPunePage /></PageWrapper>} />
              <Route path="/civil-contractor-maharashtra" element={<PageWrapper><CivilContractorMaharashtraPage /></PageWrapper>} />
              <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><TermsPage /></PageWrapper>} />
              <Route path="/sitemap" element={<PageWrapper><SitemapPage /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

function RouteLoader() {
  return (
    <div style={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
      <div className="badge badge-orange">Loading page...</div>
    </div>
  );
}

function useScrollProgress() {
  const [scrollY, setScrollY] = React.useState(0);
  useEffect(() => {
    const latestY = { current: 0 };
    let rafId = null;

    const onScroll = () => {
      latestY.current = window.scrollY || 0;
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        setScrollY(latestY.current);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return { scrollY };
}

export default function App() {
  const [bootLoading, setBootLoading] = useState(true);
  const finishedRef = useRef(false);

  useEffect(() => {
    // Apply a global reduced-motion class based on user OS/browser preference.
    // This prevents heavy animation/transition work for accessibility and performance.
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.body.classList.toggle('reduce-motion', !!mq.matches);
    };
    apply();
    if (mq.addEventListener) {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
    mq.addListener(apply);
    return () => mq.removeListener(apply);
  }, []);

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      // Let the browser paint once, and give framer-motion a moment to mount.
      requestAnimationFrame(() => {
        setTimeout(() => setBootLoading(false), 150);
      });
    };

    if (document.readyState === 'complete') {
      finish();
      return;
    }

    window.addEventListener('load', finish, { once: true });
    // Safety: never block forever if some resource hangs.
    const safety = window.setTimeout(finish, 8000);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen show={bootLoading} />
      <AppRoutes />
    </BrowserRouter>
  );
}
