# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Navigate to Project Directory
```bash
cd cobra-iki-website
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
The site will automatically open at `http://localhost:3000`

---

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🎨 Key Features Included

✅ **4 Complete Pages**
- Home (Hero, Services, Features, Industries, CTA)
- Products (Blockchain, NFT, Metaverse, Web 3.0)
- AI Services (AI Solutions, Analytics, Security)
- Training (Corporate & Academic Programs)

✅ **Reusable Components**
- Button (4 variants)
- Card (4 variants)
- Section
- SectionTitle

✅ **Layout Components**
- Responsive Navbar with mobile menu
- Comprehensive Footer
- Smooth page transitions

✅ **Animations**
- GSAP scroll animations
- Floating elements
- Hover effects
- Gradient animations

✅ **Responsive Design**
- Mobile-first approach
- Tablet optimized
- Desktop enhanced

---

## 🎯 Project Highlights

### Architecture
- **Clean folder structure** for scalability
- **Reusable components** for consistency
- **Modular sections** for easy maintenance

### Performance
- **Vite** for lightning-fast builds
- **Optimized animations** with GSAP
- **Lazy loading** ready

### Styling
- **Tailwind CSS** for rapid development
- **Custom design system** with brand colors
- **Glass morphism** effects
- **Gradient backgrounds**

---

## 🔧 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { 500: '#YOUR_COLOR' },
  accent: { 400: '#YOUR_COLOR' }
}
```

### Add New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/layout/Navbar.jsx`

### Modify Content
All content is in the respective page components:
- `src/pages/HomePage.jsx`
- `src/pages/ProductsPage.jsx`
- `src/pages/AIServicesPage.jsx`
- `src/pages/TrainingPage.jsx`

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🎓 Next Steps

1. **Customize Content**: Update text and images in page components
2. **Add Images**: Place images in `src/assets/` and import them
3. **Configure SEO**: Update meta tags in `index.html`
4. **Deploy**: Build and deploy to your hosting platform

---

## 💡 Pro Tips

- Use `className` for styling (React uses className, not class)
- GSAP animations are in `useEffect` hooks
- All components are in functional component format
- Tailwind utilities are preferred over custom CSS

---

## 🆘 Need Help?

Check the `README.md` for detailed documentation.

**Happy Coding! 🚀**
