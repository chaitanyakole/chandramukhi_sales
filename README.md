# 🏗️ Chandramukhi Sales — Business Website

> **React.js + CSS Variables | Production-Grade Construction Business Website**

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x

### Installation

```bash
# 1. Enter the project folder
cd chandramukhi-sales

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
chandramukhi-sales/
├── public/
│   └── index.html              # SEO-optimised HTML shell
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive navbar
│   │   ├── Footer.jsx          # Multi-column footer
│   │   └── UI.jsx              # Shared: Reveal, CTABanner, Ticker,
│   │                           #         FloatingButtons, FAQItem, StatCard
│   ├── data/
│   │   └── siteData.js         # ✏️ ALL site content lives here
│   ├── hooks/
│   │   └── index.js            # useReveal, useScroll, useCounter, useForm
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with hero, services, stats
│   │   ├── AboutPage.jsx       # Company story, timeline, team, values
│   │   ├── ServicesPage.jsx    # Deep-dive on RMC, Roads, Civil
│   │   ├── ProjectsPage.jsx    # Filterable portfolio with search
│   │   └── ContactPage.jsx     # Full form, FAQ, map, quick contacts
│   ├── styles/
│   │   └── global.css          # CSS variables, buttons, animations
│   ├── App.jsx                 # Router + layout shell
│   └── index.js                # React entry point
└── package.json
```

---

## ✏️ How to Customise

### 1. Update Business Information
Edit **`src/data/siteData.js`** — all phone numbers, emails, address, services, projects, and FAQs are in one place.

```js
export const SITE = {
  name:    'Chandramukhi Sales',
  phone:   '+91 98765 43210',  // ← Change this
  whatsapp:'919876543210',     // ← Change this (no spaces/+)
  email:   'info@chandramukhi.in',
  address: 'Plot No. 42, Bhosari MIDC, Pune',
  ...
};
```

### 2. Add/Edit Projects
In `siteData.js`, edit the `PROJECTS` array:
```js
{ id: 10, cat: 'RMC', title: 'My New Project', loc: 'Pune', year: 2024,
  desc: 'Description here.', value: '₹2 Cr', emoji: '🏗️' }
```

### 3. Change Colors
In `src/styles/global.css`, edit CSS variables at the top:
```css
:root {
  --orange: #F97316;    /* Primary accent */
  --navy:   #0A1628;    /* Dark background */
  ...
}
```

### 4. Google Maps Embed
In `ContactPage.jsx`, replace the map placeholder div with:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="260" style={{ border: 0 }}
  allowFullScreen loading="lazy"
/>
```

---

## 🎨 Features

| Feature | Details |
|---|---|
| **5 Full Pages** | Home, About, Services, Projects, Contact |
| **Animated Hero** | Typewriter effect, floating elements, glow blobs |
| **Ticker Banner** | Auto-scrolling marquee with business highlights |
| **Animated Stats** | Counter animation on scroll-into-view |
| **Service Detail** | Benefits, specs, use cases per service |
| **Comparison Table** | Side-by-side service comparison |
| **Project Filter** | Category filter + live search |
| **Timeline** | Milestone cards for company journey |
| **FAQ Accordion** | Smooth expand/collapse |
| **Form Validation** | Real-time, field-level validation |
| **Floating Buttons** | WhatsApp + Call with pulse animation |
| **Sticky Navbar** | Transparent → solid on scroll |
| **Mobile Fullscreen Menu** | Overlay with large nav typography |
| **Scroll Animations** | Direction-aware reveal per element |
| **404 Page** | Custom construction-themed not found |
| **SEO Ready** | Meta tags in public/index.html |
| **CSS Variables** | Easy theming from one file |

---

## 📱 Mobile

- Mobile-first responsive layouts
- Hamburger menu with fullscreen overlay
- Floating WhatsApp/Call always accessible
- Touch-friendly tap targets throughout

---

## 🔧 Dependencies

| Package | Use |
|---|---|
| `react-router-dom` | Client-side routing |
| `react-icons` | Icon library (optional, not used by default) |

No heavy UI libraries — pure CSS + vanilla React for maximum performance.

---

## 📈 Production Deployment

```bash
npm run build
```

Deploy the `build/` folder to:
- **Netlify** — drag & drop the `build/` folder
- **Vercel** — `vercel deploy`
- **cPanel / Shared Hosting** — upload `build/` contents to `public_html/`

For React Router on shared hosting, add a `.htaccess` file in `build/`:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

## 📞 Contact

**Chandramukhi Sales** | Pune, Maharashtra
- 📞 +91 98765 43210
- ✉️ info@chandramukhi.in
- 🌐 www.chandramukhi.in

---

*Built with ❤️ in Pune*
