// ─── Site Configuration ──────────────────────────────────────────────────────
export const SITE = {
  name: 'Chandramukhi Sales',
  tagline: 'Building Strong Foundations Since 2002',

  // Primary contact (Sales)
  phone: '+91 99231 57599',
  phoneRaw: '+919923157599',
  salesPhones: ['+91 99231 57599'],
  // officeTel: '020-65422422',
  whatsapp: '919923157599',
  emails: ['chandramukhisales99@gmail.com'],
  email: 'chandramukhisales.pune@gmail.com',
  address:
    'Sr.No.511, Pune–Nagar Road, Opp. John Deere Training Center, Wagholi, Tal.: Haveli, Dist. Pune – 412207',
  city: 'Pune',
  state: 'Maharashtra',
  established: 2002,
  milestones: {
    aggregateStarted: 2002,
    rmcStarted: 2015,
  },
  gstin: '27AGRPJ6635R1ZD',
};

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Chandramukhi Sales, I would like to know more about your services.';

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Opens Gmail compose window (web) with recipient prefilled.
export function getGmailComposeLink(to, { subject = '', body = '' } = {}) {
  const params = [];
  if (to) params.push(`to=${encodeURIComponent(to)}`);
  if (subject) params.push(`su=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  const query = params.length ? `&${params.join('&')}` : '';
  return `https://mail.google.com/mail/?view=cm&fs=1${query}`;
}

// ─── Company Profile (from PDF) ───────────────────────────────────────────────
export const COMPANY_PROFILE = {
  about: [
    'Aggregate manufacturing company started in March 2006 at Lonikand.',
    'Ready Mix Concrete plant started in December 2015 at Wagholi & Nande (Sus), Pune.',
    'Recognized by major Developers and Builders all over Pune.',
    'Produced over 1 Lac cubic meter of various grades of quality concrete (M7.5 to M60).',
    'Fully automatic batching and mixing plants — no human hands in production process.',
    'Awarded landmark Government contract for building express sections of the prestigious Pune Ring Road infrastructure project.',
  ],
  vision:
    'To be consistent in delivering the benchmarked quality of the product promised, through dedicated and professional teamwork.',
  mission:
    'To supply Quality concrete to required levels at scheduled time with consistency to meet customer requirement.',
};

export const PLANT_CAPACITY = {
  perPlantMonthlyCubicMeters: { min: 10000, max: 15000 },
  minimumViableMonthlyCubicMeters: 5000,
};

export const INFRASTRUCTURE = [
  { equipment: 'Batching Plant', capacity: '60 cum/hrs', quantity: '02 Nos.' },
  { equipment: 'Transit Mixer', capacity: '6.00 cum', quantity: '15 Nos.' },
  { equipment: 'Concrete Pump', capacity: '42 cum/hrs', quantity: '02 Nos.' },
];

export const PLANTS = [
  {
    name: 'RMC Plant 1',
    address:
      'Sr.No.511, Pune–Nagar Road, Opp. John Deere Training Center, Wagholi, Tal.: Haveli, Dist.: Pune – 412207',
  },
  {
    name: 'RMC Plant 2',
    address: 'Sr.No.17/1, Nandegaon, Tal.: Mulshi, Dist.: Pune',
  },
  {
    name: 'Aggregate Plant',
    address: 'Lonikand',
  },
];

export const MAJOR_CLIENTS = [
  'Pride Purple Group',
  'Bhandari Associates',
  'Shapoorji Pallonji',
  'Goel Ganga Developments',
  'Kundan Spaces',
  'Atul Enterprises (Since 1981)',
  'Amit Enterprises Housing Ltd.',
  'Naiknavare Developers',
  'Raviraj Realty',
  'Saarrthi Group',
];

export const GOVERNMENT_WORKS_CONTRACTOR = [
  'Pune Municipal Corporation (PMC)',
  'Public Works Department (PWD)',
  'Central Public Works Department (CPWD)',
];

export const PARTNERS = [
  'L&T',
  'Ram India Shelters',
  'Bhandari Associates',
  'Western India Forgings Pvt Ltd',
  'Gini Citicorp Realty LLP',
  'S T Lawrence Education Trust',
  'Kumar Properties (Megapolis)',
  'Atur India Pvt Ltd',
  'Pride Purple',
  'Shri Prayagdham Trust',
  'MIT (Alandi)',
  'SNBP School',
  'Anshul Bhosale Realty LLP',
  'Sanskriti School',
  'Majestique Empire LLP',
  'Podar International School',
  'Global Group',
  'Aaiji Group',
  'Kohinoor Group',
  'Saarrthi Group',
  'Kundan Spaces',
  'G & S Associates',
  'SCON Projects',
  'Dhoot Techno Projects',
];

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 20,  suffix: '+', label: 'Years Experience',       icon: '🏆' },
  { value: 500, suffix: '+', label: 'RMC Projects Supplied',  icon: '🏗️' },
  { value: 200, suffix: '+', label: 'Happy Clients',          icon: '🤝' },
  { value: 98,  suffix: '%', label: 'On-Time Delivery',       icon: '⏱️' },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'rmc',
    icon: '🏗️',
    title: 'Ready Mix Concrete (RMC)',
    shortTitle: 'RMC Mixture',
    tagline: 'Precision Batching, M7.5 to M60 Grades',
    image: '/rmc-batching-plant.jpg',
    color: '#1E40AF',
    gradient: 'linear-gradient(135deg, #1E3A8A20, #1E40AF10)',
    description:
      'Factory-produced Ready Mix Concrete batched to precise technical specifications at our fully automated Wagholi & Nande plants and delivered fresh across Pune.',
    longDesc:
      'Our state-of-the-art batching plants are equipped with computerized mix design systems and automated weigh batchers, producing concrete from M7.5 to M60 grade. Our fleet of 15+ transit mixers ensures the RMC reaches your site in prime condition, maintaining workability and design compressive strength.',
    benefits: [
      'Fully automated computerized batching',
      'M7.5 to M60 grade range availability',
      '15+ transit mixers for rapid site dispatch',
      'Zero human touch in batching measurement',
      'Batch-wise lab cube testing reports',
      'Real-time transit mixer delivery tracking',
    ],
    uses: ['High-rise residential towers', 'Commercial complexes', 'Bridges & flyovers', 'Industrial heavy-duty flooring', 'Raft foundations & basements'],
    specs: [
      { label: 'Grade Range', val: 'M7.5 – M60' },
      { label: 'Min Order', val: '5 Cubic Meters' },
      { label: 'Delivery Time', val: '4–6 Hours' },
      { label: 'Slump Range', val: '50mm – 180mm' },
    ],
    emoji: '🏗️',
  },
  {
    id: 'road-infra',
    icon: '🛣️',
    title: 'Road & Highway Construction',
    shortTitle: 'Roads & Highways',
    tagline: 'Turnkey Construction · Building Pune Ring Road',
    image: '/pune-ring-road.jpg',
    color: '#F97316',
    gradient: 'linear-gradient(135deg, #F9731620, #EA580C10)',
    description:
      'Turnkey road and highway construction contractor — actively executing and building express corridor stretches for the prestigious Government of Maharashtra Pune Ring Road project.',
    longDesc:
      'From earthwork and subgrade stabilization to WMM base course, Dry Lean Concrete (DLC), and final Pavement Quality Concrete (PQC) or bituminous surfacing, we deploy modern automated asphalt pavers, soil compactors, and motor graders with certified engineering teams. Powered by our own automated RMC batching plants, we maintain continuous, uninterrupted construction cycles.',
    benefits: [
      'Actively building the Pune Ring Road project',
      'Full-cycle earthwork to rigid & flexible pavement',
      'Modern automated pavers, compactors & rollers',
      'Strict IRC, MoRTH, MSRDC & NHAI compliance',
      'In-house RMC plants powering continuous pours',
      'Government empanelled infrastructure contractor',
    ],
    uses: ['Pune Ring Road & expressways', 'Highway flyovers & interchanges', 'Municipal arterial road networks', 'Industrial heavy-access corridors', 'Smart city road infrastructure'],
    specs: [
      { label: 'Project Scale', val: 'Turnkey Highway Packages' },
      { label: 'Govt Empanelled', val: 'MSRDC / PWD / NHAI' },
      { label: 'Fleet Power', val: 'Pavers, Rollers, 15+ Mixers' },
      { label: 'Quality Standard', val: 'IRC / MoRTH / IS Compliant' },
    ],
    emoji: '🛣️',
  },
  {
    id: 'custom-mix',
    icon: '⚡',
    title: 'Specialized Mixes & Pumping',
    shortTitle: 'Mix & Pump',
    tagline: 'High-Slump, Self-Compacting & High-Rise Pumps',
    image: '/concrete-pumping.jpg',
    color: '#065F46',
    gradient: 'linear-gradient(135deg, #05332520, #065F4610)',
    description:
      'Custom concrete formulations engineered for complex structural requirements, paired with high-reach 42 cum/hr concrete pump machinery.',
    longDesc:
      'From Self-Compacting Concrete (SCC) for congested reinforcement to high-slump mixes for basement rafts and high-pressure pumping for G+25 residential towers, our concrete lab formulates customized mixes with certified admixtures for optimal performance.',
    benefits: [
      '42 cum/hr high-pressure concrete pumps',
      'High-slump mixes for raft foundations',
      'Self-Compacting Concrete (SCC)',
      'Early strength mixes for fast de-shuttering',
      'Temperature-controlled summer concreting',
      'In-house concrete cube compression testing',
    ],
    uses: ['G+20+ high-rise vertical pumping', 'Deep basement rafts & retaining walls', 'Narrow column cages & dense steel', 'Industrial crane girder beam casts', 'Fast-track slab casting cycles'],
    specs: [
      { label: 'Pump Capacity', val: '42 cum/hrs (2 Units)' },
      { label: 'Transit Mixers', val: '15 Units (6 cum each)' },
      { label: 'Pumping Reach', val: 'Up to 30+ Storeys' },
      { label: 'Mix Types', val: 'Standard, SCC, Retarded' },
    ],
    emoji: '🏢',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    cat: 'Govt Projects',
    title: 'Pune Ring Road Project',
    loc: 'Pune District, Maharashtra',
    year: 'Ongoing (2025–2026)',
    role: 'Turnkey Road Construction Contractor',
    authority: 'Government of Maharashtra / MSRDC',
    pavement: 'Rigid Concrete Pavement (PQC M40 & DLC)',
    standards: 'IRC:15, IRC:58, MoRTH 5th Revision',
    image: '/pune-ring-road.jpg',
    desc: 'Prestigious Government of Maharashtra highway infrastructure corridor. Chandramukhi Sales is actively executing and building express highway stretches of the Pune Ring Road, managing earthwork, sub-base preparation, pavement construction (PQC/DLC), and civil corridor structures.',
    value: 'Government Highway Package',
    emoji: '🛣️',
    featured: true,
    isGovtProject: true,
    status: 'Under Construction',
    proof: [
      'Major Govt Project (Ongoing)',
      'Full-Cycle Road Construction',
      'Earthwork to Highway Paving',
      'Strict MSRDC / NHAI Standards',
    ],
    outcome: 'Currently under active construction — earthwork, grade preparation, and heavy pavement paving in progress with our modern equipment fleet and certified engineering teams.',
    stages: [
      { name: 'Earthwork & Subgrade Preparation', status: '100% Completed', badge: 'Completed', color: '#22c55e', desc: 'Heavy excavation, embankment grading, and vibratory roller soil stabilization.' },
      { name: 'Granular Sub-Base (GSB & WMM)', status: '90% Completed', badge: 'Near Complete', color: '#38bdf8', desc: 'Dense mechanical grading and sub-base compaction meeting IRC load criteria.' },
      { name: 'Rigid PQC Concrete Paving', status: 'Active Pours (In Progress)', badge: 'Active Execution', color: '#f97316', desc: 'High-speed slipform automated paving with high-grade M40 concrete mix.' },
      { name: 'Cross-Drainage & Highway Structures', status: 'In Execution', badge: 'Underway', color: '#a855f7', desc: 'Box culverts, roadside drainage channels, and reinforced median barriers.' },
    ],
    fleet: [
      { icon: '🚜', name: 'Automated Concrete Slipform Paver', role: 'Precision PQC Paving' },
      { icon: '🏗️', name: 'Vibratory Soil Compactors & Graders', role: 'Subgrade Compaction' },
      { icon: '🏭', name: 'Twin 60 m³/hr Batching Plants', role: 'Continuous M40 Mix' },
      { icon: '🚚', name: '15+ GPS Transit Mixers', role: 'Rapid Site Logistics' },
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Rajesh Patil',
    role: 'Property Developer',
    company: 'Patil Infra Pvt. Ltd.',
    rating: 5,
    text: "Chandramukhi delivered exceptional RMC mixture quality for our 18-storey project. Zero compromise on grade, always on schedule. We've been working with them for 5 years now.",
    initial: 'R',
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Municipal Contractor',
    company: 'PCMC Contractor',
    rating: 5,
    text: "Their RMC mixture supply for our civic road pavement arrived right on time with ideal slump retention. Their batching plant team's professionalism is unmatched in Pune.",
    initial: 'S',
  },
  {
    name: 'Arun Sharma',
    role: 'Civil Engineer',
    company: 'Infrastructure Project Team',
    rating: 5,
    text: "Best concrete mix consistency I've experienced in 15 years of civil engineering. We now rely exclusively on Chandramukhi's RMC plant for every major infrastructure assignment.",
    initial: 'A',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Project Manager',
    company: 'Shapoorji Pallonji',
    rating: 5,
    text: "From the first batch to the last, the RMC consistency was remarkable. Their transit mixer dispatch tracking helped us execute continuous slab pours perfectly.",
    initial: 'P',
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'What is the minimum order quantity for RMC?',
    a: 'The minimum order is 5 cubic meters. For smaller quantities, we can arrange supply through our regional partner network. Contact us and we\'ll find a solution.',
  },
  {
    q: 'How quickly can RMC concrete be delivered after ordering?',
    a: 'We maintain a 4–6 hour turnaround from confirmed order to site delivery within Pune city limits. For large volume or early morning pours, we pre-schedule batching slots.',
  },
  {
    q: 'Do you supply RMC for road and highway projects?',
    a: "Yes! We specialize in bulk RMC mixture supply for road projects, including DLC (Dry Lean Concrete) and PQC (Pavement Quality Concrete). We are proud concrete suppliers for major government corridors like the Pune Ring Road Project and municipal road networks across Pune and Maharashtra.",
  },
  {
    q: 'Are you empanelled for government infrastructure works?',
    a: 'Yes, we are empanelled with NHAI, MSRDC, PMRDA, PWD, and civic municipal corporations across Maharashtra. We are currently supplying certified RMC mixture for the landmark Pune Ring Road Government project.',
  },
  {
    q: 'Can you provide M60 grade high-strength concrete?',
    a: 'Absolutely. Our computerized batching plants at Wagholi & Nande produce up to M60 and Self Compacting Concrete (SCC) for specialized applications like bridge piers, flyovers, and high-rise structures.',
  },
  {
    q: 'Do you have your own concrete pumps and transit mixers?',
    a: 'Yes, we own and operate 15 transit mixers (6 cum capacity each) and 2 heavy-duty concrete pumps (42 cum/hr capacity), ensuring complete end-to-end logistics from plant to pour.',
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS = [
  { step: '01', icon: '🔍', title: 'Grade & Slump Assessment', desc: 'Our technical team verifies your structural specifications, required concrete grade (M7.5 to M60), and pour method.' },
  { step: '02', icon: '📐', title: 'Computerized Mix Design',  desc: 'Mix proportioning tailored with certified cement, graded aggregates, and chemical admixtures.' },
  { step: '03', icon: '⚙️', title: 'Automated Batching',       desc: 'Automated weigh batchers at Wagholi & Nande plants ensure exact proportions with zero manual variation.' },
  { step: '04', icon: '🚛', title: 'Transit Mixer Dispatch',   desc: 'Fleet of 15 transit mixers dispatches freshly mixed RMC directly to your construction site.' },
  { step: '05', icon: '🔬', title: 'Site QC & Slump Testing',  desc: 'On-site slump check and cube sampling for independent 7-day and 28-day compressive strength validation.' },
  { step: '06', icon: '🤝', title: 'Pumping & Pour Support',   desc: 'Continuous transit mixer rotation and high-pressure pumping support for seamless monolith pours.' },
];

// ─── Industries Served ────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: '🏛️', label: 'Govt & Infrastructure (Pune Ring Road)' },
  { icon: '🏘️', label: 'Residential High-Rises' },
  { icon: '🏬', label: 'Commercial & IT Parks' },
  { icon: '🛣️', label: 'Highways, Roads & Bridges' },
  { icon: '🏭', label: 'Industrial Sheds & Warehouses' },
  { icon: '🌆', label: 'Townships & Smart Cities' },
  { icon: '✈️', label: 'Airport & Perimeter Works' },
  { icon: '🌊', label: 'Water Retaining Structures' },
];

// ─── Ticker Items ─────────────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  '🏛️ Building the Pune Ring Road Govt Project',
  '🛣️ Turnkey Road & Highway Construction',
  '🏗️ Ready Mix Concrete (RMC) Mixture',
  '⚡ Automated Batching & Heavy Paving Fleet',
  '⏱️ On-Time Project Execution',
  '📞 Call: +91 99231 57599',
  '✅ Govt & MSRDC Empanelled Contractor',
];