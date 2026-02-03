# Cobra IKI - Futuristic Enterprise Website

A modern, responsive, and futuristic website built with React, Vite, Tailwind CSS, and GSAP animations for Cobra IKI - a technology company specializing in AI, Blockchain, Web 3.0, and Data Solutions.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, GSAP
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Animations**: GSAP-powered scroll animations and interactions
- **Clean Architecture**: Well-organized component structure with reusable components
- **Multi-page Application**: React Router for seamless navigation
- **Futuristic Design**: Glass morphism, gradients, and modern UI patterns
- **Performance Optimized**: Fast loading and smooth animations

## 📁 Project Structure

```
cobra-iki-website/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Section.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/        # Page sections
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       ├── Features.jsx
│   │       ├── Industries.jsx
│   │       └── CTA.jsx
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── AIServicesPage.jsx
│   │   └── TrainingPage.jsx
│   ├── styles/             # Global styles
│   │   └── index.css
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0056e0 to #0044b3)
- **Accent**: Cyan/Teal (#00e6c3)
- **Dark**: Dark backgrounds (#0a0e17 to #1a202e)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Components

#### Reusable Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Glass morphism effect with hover animations
- **Section**: Consistent section spacing and backgrounds
- **SectionTitle**: Animated gradient titles

## 📱 Pages

1. **Home Page**: Hero, Services, Features, Industries, CTA
2. **Products**: Blockchain, NFT, Metaverse, Web 3.0 solutions
3. **AI Services**: AI Solutions, Data Analytics, Privacy & Security
4. **Training**: Corporate and Academic training programs

## ⚡ Key Technologies

- **React 18**: Latest React features and hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional-grade animation library
- **React Router**: Client-side routing

## 🎭 Animation Features

- Scroll-triggered animations
- Floating elements
- Gradient animations
- Card hover effects
- Smooth page transitions
- Loading animations

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Optimized bundle size
- Lazy loading
- Code splitting
- Efficient animations
- Modern CSS practices

## 🔧 Customization

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

### Customize Animations
Modify GSAP animations in individual components or create new ones using:
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
```

## 📄 License

Copyright © 2026 Cobra IKI. All rights reserved.

## 🤝 Support

For support and queries, contact: info@cobraiki.com
