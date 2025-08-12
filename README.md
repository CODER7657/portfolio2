# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features smooth animations, glassmorphism design elements, and a professional layout to showcase skills and projects.

## 🚀 Features

### Sections & Components
- **Hero Section**: Eye-catching landing area with animated elements
- **About Section**: Personal introduction and background
- **Skills Section**: Technical expertise showcase
- **Experience Section**: Professional journey and achievements
- **Portfolio Section**: Project gallery and demonstrations
- **Contact Section**: Professional contact information and links

### Design Elements
- **Glassmorphism Components**: Modern glass-effect UI elements
- **Parallax Background**: Smooth scrolling visual effects
- **Professional Navigation**: Clean, responsive navigation system
- **GSAP Animations**: Smooth, performant animations throughout
- **Material-UI Integration**: Consistent, accessible component design

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript (94.8%)
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Animation**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS3 with Emotion/styled components
- **Icons**: Material-UI Icons

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/CODER7657/portfolio2.git
   cd portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
```
Generates optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serve the production build locally for testing.

### Deployment
This project is optimized for static hosting services:
- **Vite Static Hosting**: Built-in support for various hosting platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static site hosting

## 📁 Project Structure

```
portfolio2/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── GlassmorphismButton.tsx
│   │   ├── GlassmorphismCard.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ParallaxBackground.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProfessionalNavbar.tsx
│   │   └── SkillsSection.tsx
│   ├── App.portfolio.tsx
│   ├── main.tsx
│   ├── theme.ts
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vite.config.js
└── README.md
```

### Key Files
- **`App.portfolio.tsx`**: Main application component integrating all sections and themes
- **`theme.ts`**: Material-UI theme configuration and customization
- **`components/`**: Reusable React components for different sections
- **`vite.config.ts`**: Vite build tool configuration

## ⚙️ Customization

### Theme Configuration
Modify `src/theme.ts` to customize:
- Color palette
- Typography settings
- Component styling
- Breakpoint definitions

### Component Styling
Each component in `src/components/` can be customized:
- Update glassmorphism effects in `GlassmorphismButton.tsx` and `GlassmorphismCard.tsx`
- Modify animations in individual section components
- Adjust responsive layouts and styling

### Content Updates
- Personal information in `AboutSection.tsx`
- Skills and technologies in `SkillsSection.tsx`
- Professional experience in `ExperienceSection.tsx`
- Project showcase in `PortfolioSection.tsx`
- Contact details in `ContactSection.tsx`

## 🎨 Design Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional appearance with glassmorphism effects
- **Smooth Animations**: GSAP-powered transitions and interactions
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance Optimized**: Efficient rendering and minimal bundle size

## 🚀 Performance

- **TypeScript**: Type safety and improved developer experience
- **Vite**: Fast build tool with hot module replacement
- **Tree Shaking**: Automatic removal of unused code
- **Code Splitting**: Optimized loading for better performance
- **Modern Web Standards**: ES2020+ features with polyfills when needed

## 📄 License

This project is available under the [MIT License](LICENSE). Feel free to use, modify, and distribute as needed.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
