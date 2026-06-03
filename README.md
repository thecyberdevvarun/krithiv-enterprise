# Krithiv Enterprise

A modern, responsive website for Krithiv Enterprise - a manufacturer and supplier of premium cleaning and hygiene products for homes, businesses, hotels, hospitals, and commercial establishments across India.

## 🌟 Features

- **Modern UI Design**: Beautiful, professional interface with TailwindCSS v3
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations using Framer Motion
- **Product Showcase**: Display of 7 product categories with detailed information
- **Wholesale/Distributor Information**: Dedicated section for business partnerships
- **Contact Integration**: Easy contact options including WhatsApp integration
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper semantic HTML and meta tags

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.6** - UI library
- **React DOM 19.2.6** - DOM rendering
- **React Router DOM 7.16.0** - Client-side routing

### Styling
- **TailwindCSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.15** - CSS transformation
- **Autoprefixer 10.5.0** - CSS vendor prefixing

### Animations
- **Framer Motion 12.40.0** - Production-ready motion library for React

### Icons
- **React Icons 5.6.0** - Comprehensive icon library

### Build Tool
- **Vite 8.0.12** - Next-generation frontend tooling
- **@vitejs/plugin-react 6.0.1** - React plugin for Vite

### Development Tools
- **ESLint 10.3.0** - Code linting
- **@eslint/js 10.0.1** - ESLint JavaScript config
- **eslint-plugin-react-hooks 7.1.1** - React hooks linting rules
- **eslint-plugin-react-refresh 0.5.2** - React Fast Refresh linting

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd krithiv-enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🚀 Available Scripts

### `npm run dev`
Starts the development server with hot module replacement (HMR).

### `npm run build`
Builds the application for production. Creates optimized files in the `dist/` directory.

### `npm run preview`
Previews the production build locally. Useful for testing the production build before deployment.

### `npm run lint`
Runs ESLint to check for code quality issues and potential errors.

## 📁 Project Structure

```
krithiv-enterprise/
├── public/                 # Static assets
│   ├── favicon.svg       # Site favicon
│   └── ...              # Other static files
├── src/
│   ├── assets/          # Additional assets (images, etc.)
│   ├── components/      # Reusable React components
│   │   ├── Footer.jsx   # Footer component
│   │   ├── Navbar.jsx   # Navigation bar component
│   │   └── ProductCard.jsx  # Product card component
│   ├── data/            # Data files (products, stats, etc.)
│   │   └── products.js # Product data and information
│   ├── pages/           # Page components
│   │   ├── About.jsx    # About page
│   │   ├── Contact.jsx  # Contact page
│   │   ├── Home.jsx     # Home page
│   │   ├── ProductDetail.jsx  # Individual product page
│   │   ├── Products.jsx # Products listing page
│   │   └── Wholesale.jsx  # Wholesale/distributor page
│   ├── App.jsx          # Main app component with routing
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite build configuration
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#0A4A2E` (Dark Green)
- **Primary Light**: `#0d6b42` (Lighter Green)
- **Accent**: `#C8E63C` (Lime Green)
- **Accent Dark**: `#a8c420` (Darker Lime)
- **Surface**: `#F7F9F4` (Off-white)
- **Dark**: `#0D1A12` (Very Dark Green)
- **Text**: `#1C2B21` (Dark Gray)
- **Text Muted**: `#5A6B5F` (Medium Gray)
- **Border**: `#D4E2D8` (Light Gray)
- **White**: `#FFFFFF`

### Typography
- **Display Font**: Playfair Display (serif) - Used for headings
- **Body Font**: DM Sans (sans-serif) - Used for body text

### Responsive Breakpoints
- **sm**: 640px (small devices)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)

## 📄 Pages

### Home (`/`)
- Hero section with company introduction
- Statistics showcase
- About snapshot
- Featured products grid
- Why choose us section
- Call-to-action for distributors

### Products (`/products`)
- Grid display of all 7 product categories
- Product cards with category, sizes, and benefits
- Quick navigation to product details

### Product Detail (`/products/:id`)
- Detailed product information
- Full benefits list
- Available sizes
- Enquiry options

### About (`/about`)
- Company history and mission
- Vision statement
- Detailed company information

### Wholesale (`/wholesale`)
- Distributor program information
- Benefits of partnership
- Contact options for bulk orders

### Contact (`/contact`)
- Contact form
- Business contact information
- Location details
- WhatsApp integration

## 🔧 Configuration

### TailwindCSS Configuration
The project uses TailwindCSS v3 with custom configuration in `tailwind.config.js`:
- Custom color palette
- Custom font families
- Content paths for class scanning
- Extended theme options

### PostCSS Configuration
PostCSS is configured in `postcss.config.js` with:
- TailwindCSS plugin
- Autoprefixer for cross-browser compatibility

### Vite Configuration
Vite is configured in `vite.config.js` with:
- React plugin for JSX support
- Development server settings
- Build optimization

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `dist` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software for Krithiv Enterprise. All rights reserved.

## 📞 Contact

- **Company**: Krithiv Enterprise
- **Location**: Gujarat, India
- **Email**: info@krithiventerprise.com
- **Phone**: +91 99999 99999
- **WhatsApp**: https://wa.me/919999999999

## 🙏 Acknowledgments

- React team for the amazing framework
- TailwindCSS team for the utility-first CSS framework
- Framer Motion team for the animation library
- React Icons for the comprehensive icon set

---

Built with ❤️ for Krithiv Enterprise
