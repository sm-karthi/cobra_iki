# 🚀 Deployment Guide - Cobra IKI Website

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Building for Production](#building-for-production)
3. [Deployment Options](#deployment-options)
4. [Environment Configuration](#environment-configuration)
5. [Performance Optimization](#performance-optimization)

---

## 🏠 Local Development Setup

### Prerequisites
- Node.js 16+ and npm installed
- Git (optional, for version control)
- Code editor (VS Code recommended)

### Step-by-Step Setup

1. **Navigate to Project Directory**
   ```bash
   cd cobra-iki-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Server starts at `http://localhost:3000`
   - Hot Module Replacement (HMR) enabled
   - Changes reflect immediately

4. **Development Tips**
   - Use browser DevTools for debugging
   - Check console for any errors
   - Test on multiple screen sizes

---

## 📦 Building for Production

### Create Production Build

```bash
npm run build
```

**What happens:**
- Code is minified and optimized
- Assets are bundled
- Source maps generated
- Output in `dist/` folder

### Preview Production Build

```bash
npm run preview
```
- Starts local server with production build
- Test before deploying

### Build Output Structure
```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js    # JavaScript bundle
│   └── index-[hash].css   # CSS bundle
└── vite.svg            # Favicon
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Perfect for React/Vite

**Steps:**
1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

3. Follow prompts:
   - Login to Vercel
   - Link project
   - Confirm settings

**Production Deployment:**
```bash
vercel --prod
```

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "framework": "vite"
}
```

---

### Option 2: Netlify

**Why Netlify:**
- Simple drag-and-drop deployment
- Automatic HTTPS
- Continuous deployment from Git

**Method 1: Drag & Drop**
1. Build project: `npm run build`
2. Go to [Netlify](https://www.netlify.com/)
3. Drag `dist` folder to deploy

**Method 2: Git Integration**
1. Push code to GitHub
2. Connect repository in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/cobra-iki-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/cobra-iki-website/',
     plugins: [react()],
   })
   ```

4. Deploy
   ```bash
   npm run deploy
   ```

---

### Option 4: AWS S3 + CloudFront

**For Enterprise Deployment**

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Enable HTTPS

4. **Setup Custom Domain**
   - Configure Route 53
   - Update CloudFront settings

---

### Option 5: Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}
```

**Build & Run:**
```bash
docker build -t cobra-iki-website .
docker run -p 80:80 cobra-iki-website
```

---

## ⚙️ Environment Configuration

### Environment Variables

Create `.env` file (not committed to Git):
```env
VITE_API_URL=https://api.cobraiki.com
VITE_CONTACT_EMAIL=info@cobraiki.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

### Access in Code
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Production Environment
Create `.env.production`:
```env
VITE_API_URL=https://api.cobraiki.com
VITE_ENV=production
```

---

## ⚡ Performance Optimization

### Pre-Deployment Checklist

#### 1. Image Optimization
- Compress images (TinyPNG, ImageOptim)
- Use WebP format when possible
- Implement lazy loading

#### 2. Code Splitting
```javascript
// Lazy load pages
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
```

#### 3. Bundle Analysis
```bash
npm run build -- --mode analyze
```

#### 4. Enable Gzip/Brotli
Configure in your hosting platform

#### 5. Caching Strategy
Set cache headers:
- HTML: `Cache-Control: no-cache`
- JS/CSS: `Cache-Control: max-age=31536000, immutable`

### Lighthouse Optimization

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Improvements:**
1. Preload critical fonts
2. Minimize render-blocking resources
3. Use appropriate image formats
4. Implement service worker (PWA)

---

## 🔒 Security Best Practices

### Production Checklist

- [ ] Remove console.logs
- [ ] Enable HTTPS only
- [ ] Set security headers
- [ ] Configure CORS properly
- [ ] Sanitize user inputs
- [ ] Update dependencies regularly

### Security Headers (Netlify example)
```
# _headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📊 Monitoring & Analytics

### Google Analytics Setup

1. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking (Sentry)

```bash
npm install @sentry/react
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

---

## 🔄 CI/CD Setup

### GitHub Actions

`.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📝 Post-Deployment

### Verification Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured
- [ ] Analytics tracking works
- [ ] No console errors

### Performance Testing
1. Google PageSpeed Insights
2. GTmetrix
3. WebPageTest
4. Lighthouse (Chrome DevTools)

---

## 🆘 Troubleshooting

### Common Issues

**Issue**: Blank page after deployment
- **Solution**: Check browser console for errors, verify base path in routing

**Issue**: 404 on page refresh
- **Solution**: Configure server for SPA (Single Page Application)

**Issue**: Assets not loading
- **Solution**: Check base path in `vite.config.js`

**Issue**: Slow initial load
- **Solution**: Implement code splitting, optimize images

---

## 📞 Support

For deployment assistance:
- Email: info@cobraiki.com
- Documentation: Check README.md

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀
