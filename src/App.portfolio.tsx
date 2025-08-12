import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import theme from './theme';
import ProfessionalNavbar from './components/ProfessionalNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ParallaxBackground from './components/ParallaxBackground';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Professional smooth scrolling setup
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // Register ScrollTo plugin for smooth navigation
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Subtle cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power1.out"
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <ParallaxBackground />
        <ProfessionalNavbar />
        
        <Box component="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ExperienceSection />
          <ContactSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;