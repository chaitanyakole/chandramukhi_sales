// ─── Site Configuration ──────────────────────────────────────────────────────
export const SITE = {
  name: 'Chandramukhi Sales',
  tagline: 'Building Strong Foundations Since 2006',

  // Primary contact (Sales)
  phone: '+91 99231 57599',
  phoneRaw: '+919923157599',
  salesPhones: ['+91 99231 57599'],
  officeTel: '020-65422422',
  whatsapp: '919923157599',
  emails: ['chandramukhisales99@gmail.com', 'chandramukhisales99@gmail.com'],
  email: 'chandramukhisales99@gmail.com',
  address:
    'Sr.No.511, Pune–Nagar Road, Opp. John Deere Training Center, Wagholi, Tal.: Haveli, Dist. Pune – 412207',
  city: 'Pune',
  state: 'Maharashtra',
  established: 2006,
  milestones: {
    aggregateStarted: 2006,
    rmcStarted: 2015,
  },
  gstin: '27AGRPJ6635R1ZD',
};

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Chandramukhi Sales, I would like to know more about your services.';

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ─── Company Profile (from PDF) ───────────────────────────────────────────────
export const COMPANY_PROFILE = {
  about: [
    'Aggregate manufacturing company started in March 2006 at Lonikand.',
    'Ready Mix Concrete plant started in December 2015 at Wagholi & Nande (Sus), Pune.',
    'Recognized by major Developers and Builders all over Pune.',
    'Produced over 1 Lac cubic meter of various grades of quality concrete (M7.5 to M60).',
    'Fully automatic batching and mixing plants — no human hands in production process.',
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
  { value: 20,  suffix: '+', label: 'Years Experience',   icon: '🏆' },
  { value: 500, suffix: '+', label: 'Projects Completed', icon: '🏗️' },
  { value: 200, suffix: '+', label: 'Happy Clients',      icon: '🤝' },
  { value: 98,  suffix: '%', label: 'On-Time Delivery',   icon: '⏱️' },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'rmc',
    icon: '🏗️',
    title: 'Ready Mix Concrete',
    shortTitle: 'RMC',
    tagline: 'Precision-Mixed, On-Time Delivery',
    color: '#1E40AF',
    gradient: 'linear-gradient(135deg, #1E3A8A20, #1E40AF10)',
    description:
      'Factory-produced concrete batched to precise specifications and delivered fresh to your site — eliminating on-site mixing errors and ensuring consistent strength every pour.',
    longDesc:
      'Our state-of-the-art batching plants are equipped with computerized mix design systems and automated weigh batchers, producing concrete from M15 to M60 grade. Our fleet of transit mixers ensures the concrete reaches your site within the critical window, maintaining workability and strength.',
    benefits: [
      'Consistent quality every batch',
      'Faster construction timelines',
      'Reduced wastage & labour cost',
      'M15 to M60 grade availability',
      'Computerised mix design',
      'Real-time delivery tracking',
    ],
    uses: ['High-rise buildings', 'Bridges & flyovers', 'Industrial flooring', 'Pre-cast elements', 'Mass concreting'],
    specs: [
      { label: 'Grade Range', val: 'M15 – M60' },
      { label: 'Min Order', val: '5 Cubic Meters' },
      { label: 'Delivery Time', val: '4–6 Hours' },
      { label: 'Slump Range', val: '50mm – 180mm' },
    ],
    emoji: '🏗️',
  },
  {
    id: 'road',
    icon: '🛣️',
    title: 'Road Construction',
    shortTitle: 'Roads',
    tagline: 'From Earthwork to Asphalt',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #4C1D9520, #7C3AED10)',
    description:
      'Full-cycle road construction from initial earthwork through base course and final bituminous surfacing — with our own modern paving fleet and seasoned site teams.',
    longDesc:
      'We undertake road projects for government bodies and private developers alike, complying with IRC and NHAI standards. Our fleet includes automated asphalt pavers, pneumatic rollers, and soil compactors ensuring a road that lasts decades.',
    benefits: [
      'Turnkey project management',
      'Modern asphalt pavers & rollers',
      'IRC & NHAI standard compliance',
      'Post-construction maintenance',
      'Quality control at every lift',
      'NHAI empanelled contractor',
    ],
    uses: ['National & state highways', 'Urban roads & colonies', 'Industrial access roads', 'Airport perimeter roads', 'Township roads'],
    specs: [
      { label: 'Project Scale', val: 'Up to 50 KM' },
      { label: 'Paver Width', val: '3.5m – 8.5m' },
      { label: 'Standards', val: 'IRC / NHAI / BIS' },
      { label: 'Thickness', val: 'As per design' },
    ],
    emoji: '🛣️',
  },
  {
    id: 'civil',
    icon: '🏢',
    title: 'Civil Contracting',
    shortTitle: 'Civil',
    tagline: 'End-to-End Infrastructure',
    color: '#065F46',
    gradient: 'linear-gradient(135deg, #05332520, #065F4610)',
    description:
      'Comprehensive civil contracting for residential, commercial, and industrial structures with complete project management from foundation to finishing.',
    longDesc:
      'Our civil contracting division handles everything from reinforced concrete structures to large-scale earthworks. With a team of qualified engineers and experienced foremen, we own every stage of your project — delivering quality structures on budget and on schedule.',
    benefits: [
      'Single-point accountability',
      'Structural integrity guarantee',
      'Certified engineering team',
      'Real-time project tracking',
      'ISO-grade quality materials',
      'Transparent cost reporting',
    ],
    uses: ['Residential complexes', 'Commercial buildings', 'Water & drainage infra', 'Industrial sheds & warehouses', 'Government buildings'],
    specs: [
      { label: 'Project Value', val: 'Up to ₹50 Cr' },
      { label: 'Team Size', val: '100+ Professionals' },
      { label: 'Certifications', val: 'IS / BIS Compliant' },
      { label: 'Experience', val: '10+ Years' },
    ],
    emoji: '🏢',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  { id: 1, cat: 'Roads', title: 'Pune–Nashik Expressway Stretch', loc: 'Pune, MH', year: 2023, desc: '2.4 km 4-lane stretch using advanced bituminous technology. Completed 3 weeks ahead of schedule.', value: '₹8.2 Cr', emoji: '🛣️', featured: true },
  { id: 2, cat: 'RMC',   title: 'Amanora Township Phase 3',      loc: 'Hadapsar, Pune', year: 2023, desc: '4,500+ cubic meters of M40 grade RMC for twin 18-storey residential towers.', value: '₹3.4 Cr', emoji: '🏗️', featured: true },
  { id: 3, cat: 'Civil', title: 'MIDC Industrial Shed Complex',   loc: 'Chakan, Pune', year: 2022, desc: '15,000 sq.ft. industrial shed with RCC frame structure and overhead crane runway beams.', value: '₹5.1 Cr', emoji: '🏭', featured: true },
  { id: 4, cat: 'Roads', title: 'Pimpri–Chinchwad Internal Roads', loc: 'PCMC, Pune', year: 2022, desc: '18 km internal road network for residential township including storm water drains.', value: '₹12 Cr', emoji: '🛣️' },
  { id: 5, cat: 'RMC',   title: 'Seasons Mall Expansion',         loc: 'Hadapsar, Pune', year: 2021, desc: 'High-slump M30 RMC for basement slab and multi-level parking structure.', value: '₹2.8 Cr', emoji: '🏗️' },
  { id: 6, cat: 'Civil', title: 'Wagholi Flyover Ramp',           loc: 'Wagholi, Pune', year: 2021, desc: 'Substructure concrete and abutment work for 3-span highway flyover.', value: '₹9.5 Cr', emoji: '🌉' },
  { id: 7, cat: 'Roads', title: 'Solapur Highway Resurfacing',     loc: 'Solapur, MH', year: 2020, desc: '30 km highway overlay with milling & paving under MSRDC scheme.', value: '₹18 Cr', emoji: '🛣️' },
  { id: 8, cat: 'RMC',   title: 'Koregaon Park Luxury Residences', loc: 'Pune', year: 2020, desc: 'Pump-concrete delivery for G+22 luxury residential complex.', value: '₹4.2 Cr', emoji: '🏗️' },
  { id: 9, cat: 'Civil', title: 'Zilla Parishad School Buildings', loc: 'Pune District', year: 2019, desc: '10 school buildings under Maharashtra government infrastructure scheme.', value: '₹6.8 Cr', emoji: '🏫' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Rajesh Patil',
    role: 'Property Developer',
    company: 'Patil Infra Pvt. Ltd.',
    rating: 5,
    text: "Chandramukhi delivered exceptional RMC quality for our 18-storey project. Zero compromise on grade, always on schedule. We've been working with them for 5 years now.",
    initial: 'R',
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Municipal Contractor',
    company: 'PCMC Contractor',
    rating: 5,
    text: "Our road project was completed 2 weeks ahead of schedule with outstanding finish quality. Their team's professionalism is unmatched in the Pune region.",
    initial: 'S',
  },
  {
    name: 'Arun Sharma',
    role: 'Civil Engineer',
    company: 'PCMC Infrastructure',
    rating: 5,
    text: "Best concrete mix consistency I've experienced in 15 years of civil engineering. We now rely exclusively on Chandramukhi for every major infrastructure assignment.",
    initial: 'A',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Project Manager',
    company: 'Shapoorji Pallonji',
    rating: 5,
    text: "From the first batch to the last, the consistency was remarkable. Their transit mixer tracking feature helped us plan our pour schedule perfectly.",
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
    q: 'How quickly can concrete be delivered after ordering?',
    a: 'We maintain a 4–6 hour turnaround from confirmed order to site delivery within Pune city limits. For sites beyond 30 km, we plan delivery schedules accordingly.',
  },
  {
    q: 'Do you handle road projects outside Pune?',
    a: "Yes, we operate across all districts of Maharashtra. We've completed projects in Solapur, Nashik, Satara, Sangli, and Kolhapur. Contact us for inter-city project discussions.",
  },
  {
    q: 'Are you empanelled with government bodies?',
    a: 'Yes, we are empanelled with NHAI, MSRDC, PMRDA, and several municipal corporations across Maharashtra, enabling us to bid for and execute government-funded projects.',
  },
  {
    q: 'Can you provide M60 grade high-strength concrete?',
    a: 'Absolutely. Our computerised batching plant with certified admixtures can produce up to M80 SCC (Self Compacting Concrete) for specialized applications like bridges and high-rise structures.',
  },
  {
    q: 'Do you offer post-construction maintenance for roads?',
    a: 'Yes, we offer annual maintenance contracts (AMC) for road surfaces, which includes pothole repair, crack sealing, and periodic condition surveys.',
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS = [
  { step: '01', icon: '🔍', title: 'Site Assessment',  desc: 'Our engineers visit the site, study soil reports, and analyse structural requirements in detail.' },
  { step: '02', icon: '📐', title: 'Custom Planning',   desc: 'Tailored project blueprint with BOQ, timeline, and cost estimate aligned to your budget.' },
  { step: '03', icon: '⚙️', title: 'Mobilisation',     desc: 'Equipment, manpower, and materials are deployed as per the approved project plan.' },
  { step: '04', icon: '🏗️', title: 'Execution',        desc: 'Skilled workforce with modern equipment delivers the project with daily progress reporting.' },
  { step: '05', icon: '🔬', title: 'Quality Checks',   desc: 'Rigorous QC at every stage — cube tests, core samples, and surface checks before handover.' },
  { step: '06', icon: '🤝', title: 'Handover & AMC',   desc: 'Smooth project handover with as-built drawings and optional annual maintenance contract.' },
];

// ─── Industries Served ────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: '🏘️', label: 'Residential Buildings' },
  { icon: '🏬', label: 'Commercial Complexes' },
  { icon: '🏛️', label: 'Government Projects' },
  { icon: '🛣️', label: 'Roads & Highways' },
  { icon: '🏭', label: 'Industrial Infrastructure' },
  { icon: '🌆', label: 'Smart City Projects' },
  { icon: '✈️', label: 'Airport Infrastructure' },
  { icon: '🌊', label: 'Water & Irrigation' },
];

// ─── Ticker Items ─────────────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  '🏗️ Ready Mix Concrete',
  '🛣️ Road Construction',
  '🏢 Civil Contracting',
  '📞 Call: +91 70309 51070',
  '⭐ ISO-Grade Quality',
  '🚛 On-Time Delivery',
  '📍 Serving All Maharashtra',
  '✅ NHAI Empanelled',
];