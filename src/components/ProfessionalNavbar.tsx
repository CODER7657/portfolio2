import React, { useEffect, useRef, useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Stack, 
  IconButton, 
  Drawer, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

gsap.registerPlugin(ScrollTrigger);

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(15, 15, 35, 0.8)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: 'none',
  boxShadow: '0 1px 0 rgba(255, 255, 255, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&.scrolled': {
    background: 'rgba(15, 15, 35, 0.95)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  }
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  cursor: 'pointer',
  fontSize: '0.95rem',
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: '8px',
  position: 'relative',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-1px)',
    
    '&::before': {
      width: '80%',
    }
  },
  
  '&.active': {
    color: theme.palette.primary.main,
    
    '&::before': {
      width: '100%',
    }
  }
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: 'rgba(15, 15, 35, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: 'none',
    width: '280px',
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

const ProfessionalNavbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('hero-section');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar entrance animation
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });

      // Scroll detection for navbar styling
      ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        onUpdate: (self) => {
          setIsScrolled(self.progress > 0);
        }
      });

      // Active section detection
      navItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: `#${item.target}`,
          start: "top 30%",
          end: "bottom 30%",
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
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut"
      });
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power3.inOut"
    });
  };

  return (
    <>
      <StyledAppBar 
        ref={navRef}
        position="fixed" 
        className={isScrolled ? 'scrolled' : ''}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Logo onClick={scrollToTop}>
            Portfolio
          </Logo>

          {!isMobile ? (
            <Stack direction="row" spacing={1}>
              {navItems.map((item) => (
                <NavLink
                  key={item.target}
                  className={activeSection === item.target ? 'active' : ''}
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                </NavLink>
              ))}
            </Stack>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      <MobileDrawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Logo onClick={scrollToTop}>
              Portfolio
            </Logo>
            <IconButton 
              onClick={() => setMobileOpen(false)}
              sx={{ color: 'text.primary' }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2}>
            {navItems.map((item) => (
              <NavLink
                key={item.target}
                className={activeSection === item.target ? 'active' : ''}
                onClick={() => scrollToSection(item.target)}
                sx={{ 
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  py: 2,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </MobileDrawer>
    </>
  );
};

export default ProfessionalNavbar;