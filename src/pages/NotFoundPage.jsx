import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', padding: '120px 5%', background: 'var(--navy)' }}>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found. Return to Chandramukhi Sales homepage."
        path="/404"
      />
      <div className="card" style={{ maxWidth: 700, width: '100%', padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 72, marginBottom: 12 }}>🏗️</div>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</p>
        <h1 className="text-display" style={{ fontSize: 'clamp(42px,7vw,76px)', marginBottom: 14 }}>PAGE NOT FOUND</h1>
        <p style={{ color: 'var(--steel)', fontSize: 17, marginBottom: 28 }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
