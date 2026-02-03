# 📂 Cobra IKI Website - Complete Project Structure

## Directory Overview

```
cobra-iki-website/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .gitignore               # Git ignore rules
│   ├── index.html               # HTML entry point
│   ├── README.md                # Full documentation
│   ├── QUICKSTART.md            # Quick start guide
│   └── PROJECT_STRUCTURE.md     # This file
│
├── 📁 src/
│   │
│   ├── 📁 components/           # All React components
│   │   │
│   │   ├── 📁 common/          # Reusable components
│   │   │   ├── Button.jsx      # Button with 4 variants
│   │   │   ├── Card.jsx        # Card with 4 variants
│   │   │   ├── Section.jsx     # Section wrapper
│   │   │   └── SectionTitle.jsx # Animated section titles
│   │   │
│   │   ├── 📁 layout/          # Layout components
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   └── Footer.jsx      # Site footer
│   │   │
│   │   └── 📁 sections/        # Homepage sections
│   │       ├── Hero.jsx        # Hero section
│   │       ├── Services.jsx    # Services showcase
│   │       ├── Features.jsx    # Feature highlights
│   │       ├── Industries.jsx  # Industry focus
│   │       └── CTA.jsx         # Call to action
│   │
│   ├── 📁 pages/               # Page components
│   │   ├── HomePage.jsx        # Main landing page
│   │   ├── ProductsPage.jsx    # Products & platforms
│   │   ├── AIServicesPage.jsx  # AI & data services
│   │   └── TrainingPage.jsx    # Training programs
│   │
│   ├── 📁 styles/              # Global styles
│   │   └── index.css          # Tailwind + custom CSS
│   │
│   ├── 📁 hooks/               # Custom React hooks (empty, ready for use)
│   ├── 📁 utils/               # Utility functions (empty, ready for use)
│   ├── 📁 assets/              # Images, icons, etc. (empty, ready for use)
│   │
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
│
└── 📁 node_modules/            # Dependencies (auto-generated)
```

---

## 🎯 Component Breakdown

### Common Components (`src/components/common/`)

#### Button.jsx
- **Purpose**: Reusable button with multiple styles
- **Variants**: primary, secondary, outline, ghost
- **Sizes**: sm, md, lg
- **Features**: Hover effects, disabled state, customizable

#### Card.jsx
- **Purpose**: Content container with glass morphism
- **Variants**: default, glass, gradient, dark
- **Features**: Hover animations, customizable background

#### Section.jsx
- **Purpose**: Consistent section spacing and backgrounds
- **Backgrounds**: default, grid, gradient, accent
- **Features**: Container width control, responsive padding

#### SectionTitle.jsx
- **Purpose**: Animated section titles with gradient
- **Props**: title, subtitle, align
- **Features**: Gradient text, uppercase subtitle

---

### Layout Components (`src/components/layout/`)

#### Navbar.jsx
- **Features**:
  - Sticky navigation
  - Mobile responsive menu
  - Active route highlighting
  - Smooth scroll behavior
  - Logo with gradient

#### Footer.jsx
- **Sections**:
  - Company info and brand
  - Navigation links (4 columns)
  - Social media links
  - Copyright and legal links

---

### Section Components (`src/components/sections/`)

#### Hero.jsx
- **Features**:
  - Full-screen hero with animations
  - GSAP-powered entrance animations
  - Floating background elements
  - Gradient orbs
  - Statistics grid
  - Scroll indicator

#### Services.jsx
- **Content**: 4 service cards
- **Animation**: Scroll-triggered card reveals
- **Features**: Hover effects, feature tags

#### Features.jsx
- **Content**: 4 alternating feature blocks
- **Animation**: Horizontal slide-in on scroll
- **Layout**: Image + text alternating sides

#### Industries.jsx
- **Content**: Legal, Banking, Pharmaceutical sectors
- **Animation**: Scale and fade entrance
- **Features**: Impact metrics, solution lists

#### CTA.jsx
- **Purpose**: Call-to-action section
- **Features**: Gradient background, stats, buttons
- **Animation**: Scale entrance on scroll

---

## 📄 Page Components (`src/pages/`)

### HomePage.jsx
**Sections**:
1. Hero
2. Services
3. Features
4. Industries
5. CTA

### ProductsPage.jsx
**Sections**:
1. Hero
2. Blockchain Solutions
3. NFT & Digital Assets
4. Metaverse & Ikiverse
5. Web 3.0 Services
6. CTA

### AIServicesPage.jsx
**Sections**:
1. Hero
2. AI Solutions
3. Data Analytics
4. Privacy & Security
5. Stats Section
6. Case Studies
7. CTA

### TrainingPage.jsx
**Sections**:
1. Hero
2. Corporate Training
3. Academic Training
4. Benefits Grid
5. Philosophy
6. CTA

---

## 🎨 Styling System

### Tailwind Configuration (`tailwind.config.js`)

**Custom Colors**:
```javascript
primary: {
  500: '#0056e0',  // Main brand blue
  600: '#0044b3',
}
accent: {
  400: '#1affd5',  // Cyan/teal
  500: '#00e6c3',
}
dark: {
  800: '#1a202e',  // Dark background
  900: '#0a0e17',  // Darkest
}
```

**Custom Animations**:
- gradient: 8s background gradient loop
- float: 6s floating motion
- pulse-slow: 4s slow pulse

### Global Styles (`src/styles/index.css`)

**Custom Classes**:
- `.gradient-text` - Gradient text effect
- `.glass-morphism` - Glass background
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-container` - Section wrapper
- `.card-hover` - Card hover animation
- `.bg-grid-pattern` - Grid background

---

## 🔧 Configuration Files

### package.json
- All dependencies
- Scripts for dev, build, preview
- React, GSAP, Tailwind, Vite

### vite.config.js
- Vite build configuration
- React plugin
- Server settings (port 3000)

### tailwind.config.js
- Custom color palette
- Font families
- Custom animations
- Extended theme

### postcss.config.js
- Tailwind CSS processing
- Autoprefixer for browser compatibility

---

## 🚀 Key Features

### Animations
- **GSAP ScrollTrigger**: Scroll-based animations
- **Entrance Animations**: Fade, slide, scale
- **Hover Effects**: Cards, buttons, links
- **Continuous Animations**: Floating elements, gradients

### Responsive Design
- **Mobile**: < 640px - Stacked layouts
- **Tablet**: 640px - 1024px - Optimized grids
- **Desktop**: > 1024px - Full features

### Performance
- **Code Splitting**: Lazy loading ready
- **Optimized Assets**: Efficient bundle size
- **Fast Builds**: Vite's lightning-fast HMR

---

## 📝 Naming Conventions

### Files
- Components: PascalCase (e.g., `Button.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Styles: kebab-case (e.g., `index.css`)

### Components
- Functional components with hooks
- Props destructuring
- forwardRef for common components

### CSS Classes
- Tailwind utilities preferred
- Custom classes for reusable patterns
- BEM-like naming for custom CSS

---

## 🎓 Best Practices Implemented

1. **Component Reusability**: Common components used across pages
2. **Consistent Spacing**: Section component ensures uniformity
3. **Accessibility**: Semantic HTML, aria-labels
4. **SEO Ready**: Meta tags, semantic structure
5. **Performance**: Optimized animations, lazy loading
6. **Maintainability**: Clear folder structure, documented code
7. **Scalability**: Easy to add new pages/components

---

## 🔄 Development Workflow

1. **Start Development**: `npm run dev`
2. **Edit Components**: Changes reflect immediately
3. **Add New Page**: Create in `pages/`, add route in `App.jsx`
4. **Build**: `npm run build`
5. **Preview**: `npm run preview`

---

## 📦 Dependencies

### Production
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.21.1
- gsap: ^3.12.5

### Development
- vite: ^5.0.8
- @vitejs/plugin-react: ^4.2.1
- tailwindcss: ^3.4.0
- autoprefixer: ^10.4.16
- postcss: ^8.4.32

---

## 🎯 Future Enhancements

Ready-to-use directories for:
- `/hooks` - Custom React hooks
- `/utils` - Helper functions
- `/assets` - Images, icons, fonts
- `/context` - React Context providers
- `/services` - API services

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Author**: Cobra IKI Development Team
