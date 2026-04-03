import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SectionHeader } from '../components/UI';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

export default function SitemapPage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--navy)', minHeight: '100vh' }}>
      <SEO
        title="Sitemap"
        description="Browse all important pages on Chandramukhi Sales website."
        path="/sitemap"
      />
      <section className="section-pad">
        <div className="max-w">
          <SectionHeader
            eyebrow="Navigation"
            title="SITEMAP"
            subtitle="Quick access to all major pages."
          />
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'grid', gap: 12 }}>
              {LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: 'var(--steel-light)',
                    textDecoration: 'none',
                    border: '1px solid var(--navy-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
