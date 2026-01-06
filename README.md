# QA Portfolio - Ashok Bikkad

A modern, professional React portfolio website for a Senior QA Engineer specializing in Automation and API Testing.

## Features

- **Modern React + Vite Setup**: Fast development and optimized builds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Professional theme switching with system preference detection
- **Professional QA Focus**: Clean, recruiter-friendly design optimized for QA professionals
- **ATS-Friendly**: Structured content that works well with Applicant Tracking Systems
- **Smooth Animations**: Subtle, professional animations and transitions
- **Component-Based Architecture**: Clean, maintainable code structure

## Sections

1. **Hero Section**: Professional introduction with key skills and call-to-action buttons
2. **About Me**: Detailed background and expertise overview
3. **Skills**: Categorized technical skills with professional icons
4. **Experience**: Timeline-based professional experience with detailed responsibilities
5. **Projects**: Featured projects with technical details and contributions
6. **Resume**: Download section with resume highlights
7. **Contact**: Contact form and professional contact information

## Tech Stack

- **Frontend**: React 18, Vite
- **Icons**: Lucide React
- **Styling**: CSS-in-JS with CSS custom properties
- **Theme**: Dark/Light mode with system preference detection
- **Responsive**: Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qa-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Build and deploy:
```bash
npm run build
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify dashboard, or connect your GitHub repository for automatic deployments.

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - Personal background and location
- `src/components/Experience.jsx` - Work experience and responsibilities
- `src/components/Projects.jsx` - Project details and contributions
- `src/components/Contact.jsx` - Contact information and social links

### Styling

The website uses CSS custom properties for theming. Main theme variables are defined in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... other variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Update the navigation in `src/components/Header.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Minimal JavaScript for fast loading
- CSS custom properties for efficient theming

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please reach out:

- Email: bikkadashok97@gmail.com
- Phone: +91-9158464021
- Location: Pune, Maharashtra, India