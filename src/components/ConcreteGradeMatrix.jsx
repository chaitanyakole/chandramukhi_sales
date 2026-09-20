import React, { useState } from 'react';
import { FiCheckCircle, FiInfo, FiMessageCircle } from 'react-icons/fi';
import { getWhatsAppLink } from '../data/siteData';

const GRADE_DATA = [
  {
    grade: 'DLC (M10)',
    cat: 'roads',
    strength: '10 N/mm²',
    slump: 'Zero to 25 mm',
    agg: '20 mm / 10 mm',
    code: 'IRC:SP:49 / IRC:15',
    uses: 'Dry Lean Concrete road sub-base, leveling base for highway pavement quality concrete, footpath base.',
    features: ['High compaction resistance', 'Economical lean base', 'Prevents subgrade pumping'],
  },
  {
    grade: 'M15',
    cat: 'residential',
    strength: '15 N/mm²',
    slump: '50 – 75 mm',
    agg: '20 mm',
    code: 'IS:456:2000',
    uses: 'Plain Cement Concrete (PCC) bed, flooring sub-base, non-structural pathway works.',
    features: ['Solid leveling foundation', 'Uniform mix workability', 'Ideal for foundation trench PCC'],
  },
  {
    grade: 'M20',
    cat: 'residential',
    strength: '20 N/mm²',
    slump: '75 – 100 mm',
    agg: '20 mm',
    code: 'IS:456:2000',
    uses: 'Single-storey slabs, compound walls, domestic driveways, light RCC beams.',
    features: ['Standard general construction', 'Good finish and cohesiveness', 'Economical residential mix'],
  },
  {
    grade: 'M25',
    cat: 'residential',
    strength: '25 N/mm²',
    slump: '100 – 130 mm',
    agg: '20 mm / 10 mm',
    code: 'IS:456:2000',
    uses: 'Standard multi-storey residential RCC frames, slabs, columns, beams, and residential footings.',
    features: ['Most popular structural mix', 'High durability against moisture', 'Excellent pumpability'],
  },
  {
    grade: 'M30',
    cat: 'commercial',
    strength: '30 N/mm²',
    slump: '110 – 140 mm',
    agg: '20 mm / 10 mm',
    code: 'IS:456 & IS:10262',
    uses: 'Commercial RCC structures, heavy raft foundations, basement retaining walls, water tanks.',
    features: ['Higher density and impermeability', 'Resists heavy structural load', 'Ideal for long-reach pumping'],
  },
  {
    grade: 'PQC M40',
    cat: 'roads',
    strength: '40 N/mm² (Flexural ≥ 4.5 MPa)',
    slump: '30 – 50 mm (Paver) / 100mm',
    agg: '20 mm / 10 mm Crushed Basalt',
    code: 'IRC:15:2017 / MoRTH 5th Rev',
    uses: 'Government expressways, Pune Ring Road Rigid Concrete Pavement, airport taxiways, heavy industrial container yards.',
    features: ['High flexural tensile strength', 'Withstands extreme axle loads', 'Automated slipform paver ready'],
  },
  {
    grade: 'M45 – M60',
    cat: 'commercial',
    strength: '45 – 60 N/mm²',
    slump: '120 – 160 mm',
    agg: '10 mm / 20 mm',
    code: 'IS:456 / IS:10262 High Strength',
    uses: 'G+25 high-rise tower transfer columns, bridge piers, heavily reinforced load-bearing shear walls.',
    features: ['Ultra-high compressive strength', 'Low water-cement ratio with PCE admixtures', 'Minimal creep and shrinkage'],
  },
  {
    grade: 'Self-Compacting (SCC)',
    cat: 'specialty',
    strength: 'M30 – M50 Grade',
    slump: 'Flow: 600 – 750 mm',
    agg: '10 mm / 12 mm Micro',
    code: 'IS:10262:2019 / EFNARC',
    uses: 'Congested rebar columns, slender architectural facades, deep pile caps, vibration-restricted sites.',
    features: ['Flows under its own weight', 'Zero mechanical vibration required', 'Flawless honey-comb free surface'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Concrete Grades' },
  { id: 'roads', label: '🛣️ Roads & Highways (PQC/DLC)' },
  { id: 'residential', label: '🏡 Residential RCC' },
  { id: 'commercial', label: '🏢 Commercial & High-Rise' },
  { id: 'specialty', label: '⚡ Specialty & Self-Compacting' },
];

export default function ConcreteGradeMatrix() {
  const [activeCat, setActiveCat] = useState('all');

  const filteredGrades = activeCat === 'all'
    ? GRADE_DATA
    : GRADE_DATA.filter(g => g.cat === activeCat);

  return (
    <div
      className="card noise-overlay"
      style={{
        background: 'linear-gradient(145deg, #102137, #0a172c)',
        border: '1.5px solid rgba(249,115,22,0.4)',
        borderRadius: 'var(--radius-xl)',
        padding: '36px 32px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 18 }}>
        <div>
          <span className="badge badge-orange" style={{ marginBottom: 6 }}>
            🔬 Technical Mix Design Specifications
          </span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--white)', margin: 0, textTransform: 'uppercase' }}>
            RMC Grade Selection & Engineering Matrix
          </h3>
          <p style={{ color: 'var(--steel-light)', fontSize: 14, margin: '8px 0 0 0', maxWidth: 680, lineHeight: 1.6 }}>
            Every batch engineered with computerized precision at our Wagholi & Mulshi plants, adhering strictly to Indian Standards (IS:456, IS:10262) and Indian Roads Congress (IRC:15).
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--steel)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <FiCheckCircle style={{ color: 'var(--orange)' }} /> NABL Tested
          </span>
          <span style={{ color: 'var(--steel)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <FiCheckCircle style={{ color: 'var(--orange)' }} /> Automated Batching
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveCat(c.id)}
            style={{
              background: activeCat === c.id ? 'var(--orange)' : 'rgba(255,255,255,0.04)',
              color: activeCat === c.id ? '#fff' : 'var(--steel-light)',
              border: `1px solid ${activeCat === c.id ? 'var(--orange)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 99,
              padding: '8px 16px',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grade Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
        {filteredGrades.map((item) => (
          <div
            key={item.grade}
            style={{
              background: 'var(--navy)',
              border: '1.5px solid var(--navy-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 22,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.25s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span className="badge badge-orange" style={{ fontSize: 13, fontWeight: 800 }}>
                  {item.grade}
                </span>
                <span style={{ color: 'var(--steel)', fontSize: 11, fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.code}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', marginBottom: 12 }}>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: 10, textTransform: 'uppercase' }}>28-Day Strength</div>
                  <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: 13 }}>{item.strength}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: 10, textTransform: 'uppercase' }}>Design Slump</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 13 }}>{item.slump}</div>
                </div>
              </div>

              <p style={{ color: 'var(--steel-light)', fontSize: 13, lineHeight: 1.6, margin: '0 0 12px 0' }}>
                {item.uses}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {item.features.map(f => (
                  <span key={f} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '3px 8px', fontSize: 11, color: 'var(--steel)' }}>
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--navy-border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--steel)', fontSize: 11 }}>Agg: {item.agg}</span>
              <a
                href={getWhatsAppLink(`Hi Chandramukhi Sales, I want to inquire about availability and rate quotation for ${item.grade} concrete for my Pune construction site.`)}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--orange)', fontSize: 12, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
              >
                Inquire Grade Rate <FiMessageCircle />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
