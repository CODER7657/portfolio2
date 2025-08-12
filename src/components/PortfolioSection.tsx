import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';
import GlassmorphismButton from './GlassmorphismButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

gsap.registerPlugin(ScrollTrigger);

const PortfolioContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '100px 0',
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative',
}));

const ProjectCard = styled(GlassmorphismCard)(({ theme }) => ({
  height: '400px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  
  '&:hover': {
    '& .project-overlay': {
      opacity: 1,
      backdropFilter: 'blur(10px)',
    },
    '& .project-image': {
      transform: 'scale(1.1)',
    }
  }
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '2rem',
  textAlign: 'center',
}));

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmclMjBkZXNpZ258ZW58MHwwfHx8MTc1NDk3ODkwNHww&ixlib=rb-4.1.0&q=85',
    attribution: 'Igor Miske on Unsplash',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive charts and data visualization',
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwwfDB8fHwxNzU0OTI4NjM3fDA&ixlib=rb-4.1.0&q=85',
    attribution: 'Fernando Hernandez on Unsplash',
    tech: ['React', 'D3.js', 'TypeScript', 'Express']
  },
  {
    title: 'Mobile App Design',
    description: 'Cross-platform mobile application with React Native and modern UI',
    image: 'https://images.unsplash.com/photo-1555017997-792d006eafae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MHwxfHx8MTc1NDk3ODkwNHww&ixlib=rb-4.1.0&q=85',
    attribution: 'Olena Bohovyk on Unsplash',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo']
  }
];

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        }
      });

      gsap.from(cardsRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <PortfolioContainer ref={sectionRef} id="portfolio-section">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            color: 'text.primary',
            background: 'linear-gradient(45deg, #ffffff, #4cc9f0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Featured Projects
        </Typography>

        <Box ref={cardsRef}>
          <Stack spacing={4}>
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                sx={{ 
                  height: { xs: '300px', md: '400px' },
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }
                }}
              >
                <Box sx={{ flex: 1, position: 'relative' }}>
                  <ProjectImage 
                    className="project-image"
                    src={project.image}
                    alt={`${project.description} - ${project.attribution}`}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
                
                <ProjectOverlay className="project-overlay">
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3, lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {project.tech.map((tech) => (
                      <Box 
                        key={tech}
                        sx={{ 
                          px: 2, 
                          py: 0.5, 
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          color: 'white'
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Stack>
                  
                  <Stack direction="row" spacing={2}>
                    <GlassmorphismButton 
                      size="small" 
                      startIcon={<OpenInNewIcon />}
                      glowColor="#4cc9f0"
                    >
                      Live Demo
                    </GlassmorphismButton>
                    <GlassmorphismButton 
                      size="small" 
                      startIcon={<GitHubIcon />}
                      glowColor="#7209b7"
                    >
                      Code
                    </GlassmorphismButton>
                  </Stack>
                </ProjectOverlay>
              </ProjectCard>
            ))}
          </Stack>
        </Box>
      </Box>
    </PortfolioContainer>
  );
};

export default PortfolioSection;