import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FloatingButtons } from './components/UI';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
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

// Scroll to top or to hash anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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

function ScrollProgressBar() {
  const { scrollY } = useScrollProgress();
  const pageHeight = typeof window !== 'undefined'
    ? Math.max((document.documentElement.scrollHeight - window.innerHeight), 1)
    : 1;
  const progress = Math.min((scrollY / pageHeight) * 100, 100);

  return (
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
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <main id="main">
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
    <div
      aria-hidden
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '3px solid rgba(249,115,22,0.2)',
          borderTop: '3px solid var(--orange)',
          animation: 'spin-slow 0.8s linear infinite',
        }}
      />
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

  useEffect(() => {
    // Apply a global reduced-motion class based on user OS/browser preference.
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
    // Keep branded loader visible on initial page load for a smooth entrance,
    // avoiding rapid 50ms flickers while ensuring it never hangs indefinitely.
    const minDisplayTime = 1000;
    const startTime = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);
      setTimeout(() => {
        setBootLoading(false);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    const timer = setTimeout(finish, 2800);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <LoadingScreen show={bootLoading} />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
