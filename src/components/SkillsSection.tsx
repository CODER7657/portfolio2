import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';

gsap.registerPlugin(ScrollTrigger);

const SkillsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '100px 0',
  background: `radial-gradient(ellipse at center, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  position: 'relative',
}));

const SkillCard = styled(GlassmorphismCard)(({ theme }) => ({
  padding: '2.5rem',
  textAlign: 'center',
  height: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  
  '&:hover': {
    '& .skill-icon': {
      transform: 'scale(1.1)',
      filter: 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.3))',
    }
  }
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginBottom: '1rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const skillsData = [
  {
    title: 'Frontend Development',
    icon: '⚛️',
    description: 'React, TypeScript, Next.js, Vue.js',
    color: '#4cc9f0'
  },
  {
    title: 'Backend Development',
    icon: '🚀',
    description: 'Node.js, Express, Python, PostgreSQL',
    color: '#7209b7'
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Figma, Adobe XD, Prototyping',
    color: '#f72585'
  },
  {
    title: 'Animation & Motion',
    icon: '✨',
    description: 'GSAP, Framer Motion, CSS Animations',
    color: '#4361ee'
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'AWS, Docker, CI/CD, Kubernetes',
    color: '#a663cc'
  },
  {
    title: 'Mobile Development',
    icon: '📱',
    description: 'React Native, Flutter, iOS, Android',
    color: '#4cc9f0'
  }
];

const SkillsSection: React.FC = () => {
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
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
        }
      });

      // Subtle hover animations for skill cards
      skillsData.forEach((_, index) => {
        const card = `.skill-card-${index}`;
        
        gsap.set(card, { transformOrigin: 'center center' });
        
        // Gentle breathing animation
        gsap.to(card, {
          scale: 1.02,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SkillsContainer ref={sectionRef} id="skills-section">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            color: 'text.primary',
            background: 'linear-gradient(45deg, #ffffff, #7209b7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Skills & Expertise
        </Typography>

        <Box ref={cardsRef}>
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4
            }}
          >
            {skillsData.map((skill, index) => (
              <SkillCard 
                key={skill.title}
                className={`skill-card-${index}`}
                opacity={0.15}
                blur={15}
              >
                <SkillIcon 
                  className="skill-icon"
                  sx={{ 
                    background: `linear-gradient(45deg, ${skill.color}, ${skill.color}80)`,
                    color: 'white'
                  }}
                >
                  {skill.icon}
                </SkillIcon>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'text.primary', 
                    mb: 2, 
                    fontWeight: 600 
                  }}
                >
                  {skill.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {skill.description}
                </Typography>
              </SkillCard>
            ))}
          </Box>
        </Box>
      </Box>
    </SkillsContainer>
  );
};

export default SkillsSection;