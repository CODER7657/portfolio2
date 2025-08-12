import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismButton from './GlassmorphismButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

gsap.registerPlugin(ScrollTrigger);

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: `radial-gradient(ellipse at top, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}10 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${theme.palette.info.main}08 0%, transparent 50%)
    `,
    zIndex: -1,
  }
}));

const FloatingOrb = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(60px)',
  opacity: 0.6,
  animation: 'gentleFloat 8s ease-in-out infinite',
  
  '@keyframes gentleFloat': {
    '0%, 100%': {
      transform: 'translateY(0px) scale(1)',
    },
    '50%': {
      transform: 'translateY(-30px) scale(1.1)',
    }
  }
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateX(-50%) translateY(-5px)',
  }
}));

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Professional entrance animation
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Subtle parallax effect
      gsap.to(heroRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Gentle floating orbs
      gsap.to(floatingRef1.current, {
        x: 50,
        y: -30,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(floatingRef2.current, {
        x: -40,
        y: 20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer ref={heroRef} id="hero-section">
      <FloatingOrb 
        ref={floatingRef1}
        sx={{ 
          top: '15%', 
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
        }}
      />
      <FloatingOrb 
        ref={floatingRef2}
        sx={{ 
          top: '60%', 
          right: '15%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
        }}
      />
      
      <Stack 
        spacing={4} 
        alignItems="center" 
        textAlign="center"
        sx={{ zIndex: 1, maxWidth: '800px', px: 3 }}
      >
        <Typography 
          ref={titleRef}
          variant="h1" 
          sx={{ 
            background: 'linear-gradient(135deg, #f8fafc 0%, #6366f1 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}
        >
          Creative Developer
        </Typography>
        
        <Typography 
          ref={subtitleRef}
          variant="h5" 
          sx={{ 
            color: 'text.secondary',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 400,
            maxWidth: '600px',
            lineHeight: 1.6,
            opacity: 0.9
          }}
        >
          Building exceptional digital experiences with modern technology and thoughtful design
        </Typography>
        
        <Box ref={buttonRef}>
          <GlassmorphismButton 
            size="large"
            glowColor="#4cc9f0"
            onClick={scrollToNext}
          >
            Explore My Work
          </GlassmorphismButton>
        </Box>
      </Stack>

      <ScrollIndicator onClick={scrollToNext}>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
          Scroll Down
        </Typography>
        <ArrowDownwardIcon sx={{ color: 'text.secondary', fontSize: '1.5rem' }} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;