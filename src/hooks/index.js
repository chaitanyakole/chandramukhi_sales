import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Scroll reveal ────────────────────────────────────────────────────────────
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? '0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, visible];
}

// ─── Sticky scroll ────────────────────────────────────────────────────────────
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('up');
  const prevY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setDirection(y > prevY.current ? 'down' : 'up');
      prevY.current = y;
      setScrollY(y);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return { scrollY, direction, scrolled: scrollY > 60 };
}

// ─── Counter animation ────────────────────────────────────────────────────────
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);

  return count;
}

// ─── Form validation ──────────────────────────────────────────────────────────
export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: errs[name] }));
    }
  }, [values, touched, validate]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(values);
    setErrors(prev => ({ ...prev, [name]: errs[name] }));
  }, [values, validate]);

  const handleSubmit = useCallback(async (onSubmit) => {
    const errs = validate(values);
    setErrors(errs);
    setTouched(Object.keys(values).reduce((a, k) => ({ ...a, [k]: true }), {}));
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
    setSubmitted(true);
  }, [values, validate]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }, [initialValues]);

  return { values, errors, touched, submitting, submitted, handleChange, handleBlur, handleSubmit, reset };
}

// ─── Mobile detect ─────────────────────────────────────────────────────────────
export function useIsMobile() {
  const getIsMobile = () => (typeof window !== 'undefined' ? window.innerWidth < 769 : false);
  const [mobile, setMobile] = useState(getIsMobile);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const h = () => setMobile(getIsMobile());
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return mobile;
}
