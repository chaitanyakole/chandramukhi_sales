import React, { useState } from 'react';
import { FiMapPin, FiCheckCircle, FiClock, FiPhone, FiTruck, FiNavigation } from 'react-icons/fi';
import { SITE } from '../data/siteData';

const LOCALITIES = [
  { name: 'Wagholi', plant: 'Plant 1 (Wagholi)', time: '10–15 Mins', zone: 'East Pune Hub', status: 'Priority Zone' },
  { name: 'Kharadi', plant: 'Plant 1 (Wagholi)', time: '15–20 Mins', zone: 'East Pune', status: 'In Zone' },
  { name: 'Hinjawadi (Phase 1, 2, 3)', plant: 'Plant 2 (Mulshi/Nande)', time: '15–20 Mins', zone: 'West Pune Hub', status: 'Priority Zone' },
  { name: 'Baner & Balewadi', plant: 'Plant 2 (Mulshi/Nande)', time: '15–25 Mins', zone: 'West Pune', status: 'In Zone' },
  { name: 'Wakad & Tathawade', plant: 'Plant 2 (Mulshi/Nande)', time: '20–30 Mins', zone: 'West Pune', status: 'In Zone' },
  { name: 'Hadapsar & Magarpatta', plant: 'Plant 1 (Wagholi)', time: '25–35 Mins', zone: 'East Pune', status: 'In Zone' },
  { name: 'Viman Nagar & Yerwada', plant: 'Plant 1 (Wagholi)', time: '20–25 Mins', zone: 'East Pune', status: 'In Zone' },
  { name: 'Pune Ring Road Corridor', plant: 'Dedicated Highway Fleet', time: 'Direct Site Pours', zone: 'Govt Package', status: 'Active Highway Execution' },
  { name: 'Ranjangaon MIDC', plant: 'Plant 1 (Wagholi)', time: '35–45 Mins', zone: 'Industrial Corridor', status: 'In Zone' },
  { name: 'Sanaswadi & Shikrapur', plant: 'Plant 1 (Wagholi)', time: '25–30 Mins', zone: 'Nagar Highway', status: 'In Zone' },
  { name: 'Mulshi & Pirangut', plant: 'Plant 2 (Mulshi/Nande)', time: '15–25 Mins', zone: 'West Corridor', status: 'In Zone' },
  { name: 'Aundh & Pashan', plant: 'Plant 2 (Mulshi/Nande)', time: '20–25 Mins', zone: 'West Pune', status: 'In Zone' },
  { name: 'Bavdhan & Kothrud', plant: 'Plant 2 (Mulshi/Nande)', time: '20–30 Mins', zone: 'West Pune', status: 'In Zone' },
  { name: 'Lonikand & Theur', plant: 'Plant 1 / Aggregate Plant', time: '10–20 Mins', zone: 'East Pune', status: 'In Zone' },
];

export default function PlantNetworkMap() {
  const [selectedLocality, setSelectedLocality] = useState(LOCALITIES[0]);

  return (
    <div
      className="card noise-overlay plant-network-card"
      style={{
        borderRadius: 'var(--radius-xl)',
        padding: '36px 32px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 28, borderBottom: '1px solid var(--navy-border)', paddingBottom: 18 }}>
        <div>
          <span className="badge badge-orange" style={{ marginBottom: 6 }}>
            🗺️ Strategic Infrastructure Network
          </span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--white)', margin: 0, textTransform: 'uppercase' }}>
            Twin Plant Network & 45-Minute Delivery Zone
          </h3>
          <p style={{ color: 'var(--steel-light)', fontSize: 14, margin: '8px 0 0 0', maxWidth: 680, lineHeight: 1.6 }}>
            Strategically positioned automated batching plants in East Pune (Wagholi) and West Pune (Mulshi), backed by our Lonikand stone quarry to ensure uninterrupted fresh concrete supply.
          </p>
        </div>

        <div style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, padding: '6px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
          <span style={{ color: 'var(--green)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Guaranteed Fresh Pour &lt;45 Min Transit
          </span>
        </div>
      </div>

      {/* Facilities Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
        {/* Plant 1 */}
        <div className="plant-facility-card" style={{ borderRadius: 'var(--radius-lg)', padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span className="badge badge-orange" style={{ fontSize: 11 }}>East Pune Hub</span>
            <span style={{ color: 'var(--steel)', fontSize: 12 }}>Sr.No. 511 Wagholi</span>
          </div>
          <h4 style={{ color: 'var(--white)', fontSize: 18, margin: '6px 0', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            RMC Plant 1 · Wagholi
          </h4>
          <div style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
            Fully computerized 60 cum/hr automated batching plant on Pune–Nagar Road, opp. John Deere Training Center.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['60 cum/hr Capacity', 'Automated Lab', '15+ Mixers Fleet', 'Nagar Road Corridor'].map(t => (
              <span key={t} className="plant-feature-pill">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Plant 2 */}
        <div className="plant-facility-card" style={{ borderRadius: 'var(--radius-lg)', padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span className="badge badge-blue" style={{ fontSize: 11 }}>West Pune Hub</span>
            <span style={{ color: 'var(--steel)', fontSize: 12 }}>Nandegaon, Mulshi</span>
          </div>
          <h4 style={{ color: 'var(--white)', fontSize: 18, margin: '6px 0', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            RMC Plant 2 · Mulshi / Nande
          </h4>
          <div style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
            High-output 60 cum/hr plant serving the Hinjawadi IT Corridor, Baner, Balewadi, Wakad, and expressway sectors.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['60 cum/hr Capacity', 'Hinjawadi Expressway', 'Vertical Pumping Pumps', 'Fast-Track Pour'].map(t => (
              <span key={t} className="plant-feature-pill">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Aggregate Plant & Highway Package */}
        <div className="plant-facility-card" style={{ borderRadius: 'var(--radius-lg)', padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span className="badge" style={{ background: 'rgba(168,85,247,0.15)', color: 'var(--purple)', border: '1px solid rgba(168,85,247,0.3)', fontSize: 11 }}>Raw Material Security</span>
            <span style={{ color: 'var(--steel)', fontSize: 12 }}>Since 2006</span>
          </div>
          <h4 style={{ color: 'var(--white)', fontSize: 18, margin: '6px 0', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Aggregate Quarry · Lonikand
          </h4>
          <div style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
            Dedicated stone crushing and aggregate grading facility supplying 10mm & 20mm basalt aggregate to our concrete plants.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['10mm & 20mm Aggregates', 'Zero Material Shortage', 'Tested Flakiness Index', 'IS:383 Compliant'].map(t => (
              <span key={t} className="plant-feature-pill">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Locality Delivery Checker */}
      <div
        className="locality-checker-box"
        style={{
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FiNavigation style={{ color: 'var(--orange)', fontSize: 20 }} />
            <span style={{ color: 'var(--white)', fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-condensed)' }}>
              Check Delivery Transit Time to Your Pune Construction Site
            </span>
          </div>
          <span style={{ color: 'var(--steel)', fontSize: 12 }}>
            Click locality to verify nearest batching plant
          </span>
        </div>

        {/* Locality Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {LOCALITIES.map((loc) => {
            const isSel = selectedLocality.name === loc.name;
            return (
              <button
                key={loc.name}
                type="button"
                aria-pressed={isSel}
                onClick={() => setSelectedLocality(loc)}
                className={`locality-btn ${isSel ? 'is-selected' : ''}`}
              >
                📍 {loc.name}
              </button>
            );
          })}
        </div>

        {/* Selected Zone Result Banner */}
        <div className="locality-result-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="locality-truck-icon">
              <FiTruck />
            </div>
            <div>
              <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 16 }}>
                Site Location: <span style={{ color: 'var(--orange)' }}>{selectedLocality.name}</span> ({selectedLocality.zone})
              </div>
              <div style={{ color: 'var(--steel-light)', fontSize: 13, marginTop: 2 }}>
                Supplied via: <strong className="locality-result-plant">{selectedLocality.plant}</strong> · Estimated Transit: <strong className="locality-result-time">{selectedLocality.time}</strong>
              </div>
            </div>
          </div>

          <a
            href={`tel:${SITE.phoneRaw}`}
            className="btn btn-primary btn-sm"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <FiPhone aria-hidden /> Book Concrete Dispatch
          </a>
        </div>
      </div>
    </div>
  );
}
