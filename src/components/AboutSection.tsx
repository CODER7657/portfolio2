import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '100px 0',
  position: 'relative',
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
}));

const SkillBar = styled(Box)(({ theme }) => ({
  height: '8px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',
}));

const SkillProgress = styled(Box)<{ percentage: number }>(({ theme, percentage }) => ({
  height: '100%',
  width: `${percentage}%`,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '4px',
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    animation: 'shimmer 2s infinite',
  },
  
  '@keyframes shimmer': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' }
  }
}));

const skills = [
  { name: 'React & TypeScript', percentage: 95 },
  { name: 'Node.js & Express', percentage: 90 },
  { name: 'UI/UX Design', percentage: 85 },
  { name: 'GSAP & Animations', percentage: 88 },
  { name: 'Three.js & WebGL', percentage: 80 }
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Refined section entrance animation
      gsap.from(avatarRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      gsap.from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
        }
      });

      // Professional skill bars animation
      skills.forEach((skill, index) => {
        gsap.from(`.skill-bar-${index}`, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: "power2.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <AboutContainer ref={sectionRef} id="about-section">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
          <Box ref={avatarRef} sx={{ flex: '0 0 auto' }}>
            <GlassmorphismCard sx={{ p: 3, display: 'inline-block' }}>
              <Avatar
                src="https://i.pravatar.cc/200?img=1"
                alt="Profile Avatar"
                sx={{ 
                  width: 200, 
                  height: 200,
                  border: '3px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </GlassmorphismCard>
          </Box>

          <Stack spacing={4} sx={{ flex: 1 }} ref={textRef}>
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              About Me
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital experiences that combine beautiful design with powerful functionality. 
              I specialize in modern web technologies and love bringing creative ideas to life 
              through code.
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or experimenting with the latest design trends. I believe 
              in the power of technology to solve real-world problems and create meaningful connections.
            </Typography>

            <Box ref={skillsRef}>
              <Typography variant="h5" sx={{ color: 'text.primary', mb: 3 }}>
                Skills & Expertise
              </Typography>
              
              <Stack spacing={3}>
                {skills.map((skill, index) => (
                  <Box key={skill.name}>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {skill.percentage}%
                      </Typography>
                    </Stack>
                    <SkillBar>
                      <SkillProgress 
                        className={`skill-bar-${index}`}
                        percentage={skill.percentage} 
                      />
                    </SkillBar>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </AboutContainer>
  );
};

export default AboutSection;