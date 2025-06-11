# DHS - AI Lead Generation Website

🚀 **AI-Powered B2B Lead Generation & Sales Automation**

A modern, multilingual website for Den Hartogh Solutions (DHS) - specializing in AI-driven lead generation and sales automation for B2B companies.

## 🌟 Features

- **Multilingual Support**: 4 languages (English, Dutch, German, Spanish)
- **Responsive Design**: Mobile-first, optimized for all devices
- **AI-Focused Content**: Showcasing AI-powered lead generation services
- **Contact Forms**: Netlify Forms integration with email notifications
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap
- **Modern UI/UX**: Clean design with smooth animations
- **Social Media Integration**: LinkedIn, Instagram, YouTube links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: Netlify Forms
- **Deployment**: Netlify with GitHub integration
- **SEO**: Schema.org structured data, sitemap.xml, robots.txt

## 📁 Project Structure

```
DHS/
├── public/
│   ├── index.html          # Enhanced with SEO meta tags
│   ├── sitemap.xml         # Search engine sitemap
│   ├── robots.txt          # Crawler instructions
│   ├── _redirects          # SPA routing for Netlify
│   └── images/             # Static images
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── contexts/           # Language context & translations
│   ├── assets/             # Images and static assets
│   └── main.tsx           # Application entry point
├── netlify.toml           # Netlify configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/dhs-website.git
   cd dhs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌍 Multilingual System

The website supports 4 languages with complete translations:

- **English** (EN) - Primary language
- **Dutch** (NL) - Main market
- **German** (DE) - Secondary market  
- **Spanish** (ES) - International expansion

All content including navigation, pages, forms, and SEO meta tags are fully translated.

## 📧 Contact Form

The contact form uses **Netlify Forms** for:
- ✅ Spam protection
- ✅ Email notifications to `paul@denhartogh.solutions`
- ✅ Form validation
- ✅ Success/error handling

## 🔍 SEO Features

- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Facebook/social media optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Schema.org organization markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawler guidance
- **Canonical URLs**: Prevent duplicate content issues

## 🚀 Deployment

### Netlify (Recommended)
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Form notifications automatically configured

### Manual Deployment
1. Run `npm run build`
2. Upload `dist` folder to hosting provider
3. Configure redirects for SPA routing

## 🎨 Design System

- **Primary Color**: `#104ee3` (Blue)
- **Secondary Color**: `#1B365D` (Dark Blue)
- **Typography**: System fonts with optimized loading
- **Spacing**: Consistent 8px grid system
- **Responsive**: Mobile-first design approach

## 📊 Performance

- ⚡ **Fast Loading**: Optimized assets and code splitting
- 📱 **Mobile Optimized**: PWA-ready with mobile viewport fixes
- 🖼️ **Image Optimization**: WebP format with fallbacks
- 🔄 **Caching**: Optimized cache headers

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components

- **LanguageContext**: Manages translations and language switching
- **AnimatedSection**: Scroll-triggered animations
- **Footer**: Social links and company information
- **Navigation**: Multilingual navigation with mobile menu

## 📞 Contact

**Den Hartogh Solutions (DHS)**
- 📧 Email: [paul@denhartogh.solutions](mailto:paul@denhartogh.solutions)
- 🌐 Website: [https://denhartogh.solutions](https://denhartogh.solutions)
- 💼 LinkedIn: [DHS Company Page](https://www.linkedin.com/company/dhs-nl/)
- 📸 Instagram: [@dhs.rd](https://www.instagram.com/dhs.rd/)
- 🎥 YouTube: [@dsh_rd](https://www.youtube.com/@dsh_rd)

---

**© 2025 Den Hartogh Solutions. All rights reserved.** 