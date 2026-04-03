import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Reveal, SectionHeader, FAQItem } from '../components/UI';
import { useForm } from '../hooks';
import { SITE, FAQS, getWhatsAppLink, getGmailComposeLink } from '../data/siteData';
import { submitLead } from '../utils/leadApi';
import { trackEvent } from '../utils/analytics';

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Full name is required.';
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  else if (!/^[+\d][\d\s\-]{7,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!values.email.trim()) errors.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.service) errors.service = 'Please select a service.';
  if (!values.message.trim()) errors.message = 'Please describe your requirement.';
  else if (values.message.trim().length < 20) errors.message = 'Please provide a bit more detail (min 20 chars).';
  return errors;
}

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

function ContactForm() {
  const initialValues = { name: '', phone: '', email: '', service: '', budget: '', message: '' };
  const { values, errors, touched, submitting, submitted, handleChange, handleBlur, handleSubmit, reset } = useForm(initialValues, validate);

  const onSubmit = useCallback(async (vals) => {
    const message = [
      'New Quote Request',
      `Name: ${vals.name}`,
      `Phone: ${vals.phone}`,
      `Email: ${vals.email}`,
      `Service: ${vals.service}`,
      `Budget: ${vals.budget || 'Not specified'}`,
      `Requirement: ${vals.message}`,
    ].join('\n');
    const waUrl = getWhatsAppLink(message);
    // Open immediately in the user click context to avoid popup blockers.
    const waWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');

    const payload = {
      source: 'website-contact-form',
      page: '/contact',
      submittedAt: new Date().toISOString(),
      name: vals.name,
      phone: vals.phone,
      email: vals.email,
      service: vals.service,
      budget: vals.budget || 'Not specified',
      message: vals.message,
    };

    try {
      const result = await submitLead(payload);
      trackEvent('lead_submit', {
        method: result.skipped ? 'whatsapp_only' : 'webhook_and_whatsapp',
        service: vals.service,
      });
    } catch (_) {
      trackEvent('lead_submit_error', { service: vals.service });
      if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
        window.location.href = waUrl;
      }
    }
    await new Promise((r) => setTimeout(r, 250));
  }, []);

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '56px 24px', animation: 'slideUp 0.5s ease' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>✅</div>
        <h3 className="text-display" style={{ fontSize: 36, color: 'var(--white)', marginBottom: 12 }}>MESSAGE SENT!</h3>
        <p style={{ color: 'var(--steel)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>Thank you for reaching out. Our team will contact you within <strong style={{ color: 'var(--orange)' }}>2 business hours</strong>.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn btn-outline">Send Another</button>
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-green">💬 Chat on WhatsApp</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
        <FormField label="Full Name *" error={touched.name && errors.name}>
          <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Rajesh Patil"
            className={`form-input ${touched.name && errors.name ? 'error' : ''}`} />
        </FormField>
        <FormField label="Phone Number *" error={touched.phone && errors.phone}>
          <input name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+91 98765 43210"
            className={`form-input ${touched.phone && errors.phone ? 'error' : ''}`} />
        </FormField>
      </div>

      <FormField label="Email Address *" error={touched.email && errors.email}>
        <input name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com"
          className={`form-input ${touched.email && errors.email ? 'error' : ''}`} />
      </FormField>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
        <FormField label="Service Required *" error={touched.service && errors.service}>
          <select name="service" value={values.service} onChange={handleChange} onBlur={handleBlur}
            className={`form-input ${touched.service && errors.service ? 'error' : ''}`} style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394A3B8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
            <option value="">Select a service...</option>
            <option>Ready Mix Concrete (RMC)</option>
            <option>Road Construction</option>
            <option>Civil Contracting</option>
            <option>Multiple Services</option>
            <option>Site Consultation</option>
          </select>
        </FormField>

        <FormField label="Project Budget (Optional)">
          <select name="budget" value={values.budget} onChange={handleChange}
            className="form-input" style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394A3B8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
            <option value="">Select range...</option>
            <option>Under ₹10 Lakhs</option>
            <option>₹10L – ₹50L</option>
            <option>₹50L – ₹2 Crore</option>
            <option>₹2Cr – ₹10 Crore</option>
            <option>Above ₹10 Crore</option>
          </select>
        </FormField>
      </div>

      <FormField label="Project Description *" error={touched.message && errors.message}>
        <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} rows={5}
          placeholder="Describe your project — location, scale, timeline, and any specific requirements..."
          className={`form-input ${touched.message && errors.message ? 'error' : ''}`} style={{ resize: 'vertical', minHeight: 120 }} />
      </FormField>

      <button onClick={() => handleSubmit(onSubmit)} disabled={submitting}
        className="btn btn-primary"
        style={{ padding: '17px 32px', fontSize: 16, width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1, transition: 'all 0.25s' }}
      >
        {submitting ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin-slow 0.7s linear infinite', display: 'inline-block' }} />
            Sending...
          </span>
        ) : '💬 Send on WhatsApp'}
      </button>

      <p style={{ color: 'var(--muted)', fontSize: 12, textAlign: 'center' }}>
        🔒 Your information is secure and will never be shared.
      </p>
    </div>
  );
}

export default function ContactPage() {
  const emailPrimary = SITE.emails?.[0] || SITE.email;
  const emailSecondary = SITE.emails?.[1];
  const salesPhones = SITE.salesPhones?.length ? SITE.salesPhones : [SITE.phone];

  const QUICK_CONTACTS = [
    // { icon: '☎️', label: 'Office Tel', value: SITE.officeTel, sub: 'Mon–Sat, 9AM–6PM', href: `tel:${SITE.officeTel}`, color: 'var(--orange)', shadow: 'rgba(249,115,22,0.3)' },
    { icon: '📞', label: 'Sales', value: salesPhones[0], sub: 'For quotations & orders', href: `tel:${salesPhones[0]}`, color: 'var(--orange)', shadow: 'rgba(249,115,22,0.3)' },
    { icon: '💬', label: 'WhatsApp', value: 'Chat Now', sub: 'Instant response', href: getWhatsAppLink(), color: '#25D366', shadow: 'rgba(37,211,102,0.3)', external: true },
    { icon: '✉️', label: 'Email', value: emailPrimary, sub: 'Sales inquiries', href: getGmailComposeLink(emailPrimary), color: '#818CF8', shadow: 'rgba(129,140,248,0.3)', external: true },
    ...(emailSecondary ? [{ icon: '✉️', label: 'Alt Email', value: emailSecondary, sub: 'RMC Division', href: getGmailComposeLink(emailSecondary), color: '#818CF8', shadow: 'rgba(129,140,248,0.3)', external: true }] : []),
    { icon: '📍', label: 'Office', value: 'Wagholi', sub: 'Pune – 412207', href: 'https://maps.app.goo.gl/eHSnNXzGvpGAL1RQA', color: '#EC4899', shadow: 'rgba(236,72,153,0.3)', external: true },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <SEO
        title="Contact"
        description="Contact Chandramukhi Sales for a free quote on RMC, road construction, and civil contracting projects."
        path="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Chandramukhi Sales',
          url: 'https://chandramukhi-sales.com/contact',
          about: {
            '@type': 'Organization',
            name: 'Chandramukhi Sales',
          },
        }}
      />
      {/* Hero */}
      <section style={{
        background: 'var(--navy)',
        backgroundImage: 'linear-gradient(rgba(7,15,27,0.5), rgba(7,15,27,0.62)), url("/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
        <div className="max-w" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="eyebrow">Get In Touch</div>
            <h1 className="text-display" style={{ fontSize: 'clamp(56px,9vw,100px)', color: 'var(--white)', marginBottom: 24, lineHeight: 0.9 }}>
              CONTACT<br /><span className="gradient-text">US</span>
            </h1>
            <p style={{ color: 'var(--steel-light)', fontSize: 19, maxWidth: 600, lineHeight: 1.8 }}>
              Ready to start your project? We typically respond within <strong style={{ color: 'var(--orange)' }}>2 hours</strong> during business hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick contact cards */}
      <section style={{ background: 'var(--navy-mid)', padding: '48px 5%' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
          {QUICK_CONTACTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--navy)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)',
                  padding: 28, textAlign: 'center', transition: 'all 0.3s', display: 'block',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = c.color; e.currentTarget.style.boxShadow = `0 16px 40px ${c.shadow}`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--navy-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${c.color}18`, border: `1.5px solid ${c.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24 }}>{c.icon}</div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.color, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.value}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 12 }}>{c.sub}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 48 }}>
          {/* Form */}
          <Reveal>
            <div style={{ background: 'var(--navy-mid)', borderRadius: 'var(--radius-xl)', padding: 44, border: '1px solid var(--navy-border)' }}>
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow">Start Here</div>
                <h2 className="text-display" style={{ fontSize: 42, color: 'var(--white)' }}>SEND AN INQUIRY</h2>
                <p style={{ color: 'var(--steel)', fontSize: 14, marginTop: 8 }}>Fill in the form and we'll call back within 2 hours during business hours.</p>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          {/* Map + details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Map placeholder */}
            <Reveal>
              <div style={{ background: 'var(--navy-mid)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--navy-border)' }}>
                <div style={{
                  height: 260, background: 'linear-gradient(135deg, var(--navy-light), var(--navy))',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}>
                  <div style={{ fontSize: 52 }}>🗺️</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--white)', letterSpacing: '0.1em' }}>PUNE, MAHARASHTRA</div>
                  <a href="https://maps.app.goo.gl/eHSnNXzGvpGAL1RQA" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ textDecoration: 'none' }}>Open in Google Maps</a>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: 16, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>BUSINESS DETAILS</h3>
                  {[
                    { l: 'Company Name', v: SITE.name },
                    { l: 'GSTIN', v: SITE.gstin },
                    { l: 'Registered Since', v: String(SITE.established) },
                    { l: 'Service Area', v: 'All of Maharashtra' },
                    { l: 'Office Hours', v: 'Mon–Sat: 9:00 AM – 6:00 PM' },
                    { l: 'Emergency Contact', v: '24x7 for active projects' },
                  ].map(({ l, v }) => (
                    <div key={l} style={{ display: 'flex', gap: 16, paddingBottom: 10, marginBottom: 10, borderBottom: '1px solid var(--navy-border)' }}>
                      <span style={{ color: 'var(--muted)', fontSize: 13, minWidth: 140, fontFamily: 'var(--font-condensed)', letterSpacing: '0.05em' }}>{l}</span>
                      <span style={{ color: 'var(--steel-light)', fontSize: 13, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Immediate CTAs */}
            <Reveal delay={120}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 12 }}>
                <a href={`tel:${SITE.phone}`} className="btn btn-primary" style={{ justifyContent: 'center', textDecoration: 'none', padding: '16px' }}>📞 Call Now</a>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-green" style={{ justifyContent: 'center', textDecoration: 'none', padding: '16px' }}>💬 WhatsApp</a>
              </div>
            </Reveal>

            {/* Trust signals */}
            <Reveal delay={200}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
                <h4 style={{ fontFamily: 'var(--font-condensed)', fontSize: 14, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 16 }}>WHY CONTACT US</h4>
                {[
                  { icon: '⚡', text: 'Response within 2 hours (business hours)' },
                  { icon: '🔒', text: 'Your data is never shared with third parties' },
                  { icon: '🆓', text: 'Free site visit and project consultation' },
                  { icon: '📊', text: 'Detailed quote within 24 hours' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, color: 'var(--steel)', fontSize: 14 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span> {text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w">
          <SectionHeader eyebrow="FAQ" title="COMMON QUESTIONS" subtitle="Got questions? We've answered the most common ones below." />
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            {FAQS.map((f, i) => <FAQItem key={i} {...f} delay={i * 60} />)}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--steel)', fontSize: 16, marginBottom: 20 }}>Still have a question?</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-green" style={{ textDecoration: 'none' }}>💬 Ask on WhatsApp</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
