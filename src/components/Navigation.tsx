import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';

gsap.registerPlugin(ScrollTrigger);

const NavigationContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const NavItem = styled(Typography)(({ theme }) => ({
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  borderRadius: '25px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  fontSize: '0.9rem',
  fontWeight: 500,
  
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  
  '&.active': {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
    color: theme.palette.text.primary,
    boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
  }
}));

const navItems = [
  { label: 'Home', target: 'hero-section' },
  { label: 'About', target: 'about-section' },
  { label: 'Skills', target: 'skills-section' },
  { label: 'Portfolio', target: 'portfolio-section' },
  { label: 'Experience', target: 'experience-section' },
  { label: 'Contact', target: 'contact-section' }
];

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('hero-section');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.5
      });

      // Hide/show navigation based on scroll
      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self) => {
          if (navRef.current) {
            if (self.direction === -1) {
              gsap.to(navRef.current, { y: 0, duration: 0.3 });
            } else {
              gsap.to(navRef.current, { y: -100, duration: 0.3 });
            }
          }
        }
      });

      // Active section detection
      navItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: `#${item.target}`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveSection(item.target),
          onEnterBack: () => setActiveSection(item.target),
        });
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationContainer ref={navRef}>
      <GlassmorphismCard 
        sx={{ px: 2, py: 1 }}
        opacity={0.1}
        blur={20}
      >
        <Stack direction="row" spacing={1}>
          {navItems.map((item) => (
            <NavItem
              key={item.target}
              className={activeSection === item.target ? 'active' : ''}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </NavItem>
          ))}
        </Stack>
      </GlassmorphismCard>
    </NavigationContainer>
  );
};

export default Navigation;