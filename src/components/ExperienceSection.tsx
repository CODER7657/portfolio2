import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';

gsap.registerPlugin(ScrollTrigger);

const ExperienceContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '100px 0',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f3460 50%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: 'translateX(-50%)',
    
    [theme.breakpoints.down('md')]: {
      left: '20px',
    }
  }
}));

const TimelineItem = styled(Box)<{ isLeft?: boolean }>(({ theme, isLeft = false }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4rem',
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    paddingLeft: '60px',
  },
  
  ...(isLeft ? {
    justifyContent: 'flex-end',
    paddingRight: '2rem',
    
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      paddingRight: 0,
    }
  } : {
    justifyContent: 'flex-start',
    paddingLeft: '2rem',
    
    [theme.breakpoints.down('md')]: {
      paddingLeft: '60px',
    }
  })
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
  
  [theme.breakpoints.down('md')]: {
    left: '20px',
  }
}));

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
    achievements: ['Led team of 5 developers', 'Improved app performance by 40%', 'Implemented CI/CD pipeline']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and interactive user interfaces for various clients. Specialized in React, TypeScript, and modern CSS frameworks.',
    achievements: ['Built 15+ client projects', 'Reduced load times by 60%', 'Implemented design systems']
  },
  {
    title: 'UI/UX Designer & Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Designed and developed user interfaces for mobile and web applications. Collaborated closely with product team to create intuitive user experiences.',
    achievements: ['Designed 3 mobile apps', 'Increased user engagement by 35%', 'Created component library']
  },
  {
    title: 'Junior Web Developer',
    company: 'WebDev Studio',
    period: '2018 - 2019',
    description: 'Started my journey in web development, working on various projects using HTML, CSS, JavaScript, and learning modern frameworks.',
    achievements: ['Completed 20+ projects', 'Learned React & Node.js', 'Built first full-stack app']
  }
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      experiences.forEach((_, index) => {
        gsap.from(`.timeline-item-${index}`, {
          x: index % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.timeline-item-${index}`,
            start: "top 70%",
          }
        });

        gsap.from(`.timeline-dot-${index}`, {
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: `.timeline-item-${index}`,
            start: "top 70%",
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <ExperienceContainer ref={sectionRef} id="experience-section">
      <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 3 }}>
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            color: 'text.primary',
            background: 'linear-gradient(45deg, #ffffff, #f72585)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Experience Journey
        </Typography>

        <TimelineContainer ref={timelineRef}>
          {experiences.map((exp, index) => (
            <Box key={exp.title} sx={{ position: 'relative' }}>
              <TimelineDot className={`timeline-dot-${index}`} />
              
              <TimelineItem 
                className={`timeline-item-${index}`}
                isLeft={index % 2 === 0}
              >
                <GlassmorphismCard 
                  sx={{ 
                    maxWidth: '450px',
                    p: 3,
                    width: '100%'
                  }}
                  opacity={0.12}
                  blur={12}
                >
                  <Stack spacing={2}>
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: 'text.primary',
                          fontWeight: 600,
                          mb: 0.5
                        }}
                      >
                        {exp.title}
                      </Typography>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 500,
                          mb: 1
                        }}
                      >
                        {exp.company}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontStyle: 'italic'
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                      {exp.description}
                    </Typography>
                    
                    <Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.primary',
                          fontWeight: 500,
                          mb: 1
                        }}
                      >
                        Key Achievements:
                      </Typography>
                      
                      <Stack spacing={0.5}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <Typography 
                            key={achIndex}
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary',
                              fontSize: '0.85rem',
                              '&::before': {
                                content: '"▸ "',
                                color: 'secondary.main',
                                fontWeight: 'bold'
                              }
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </GlassmorphismCard>
              </TimelineItem>
            </Box>
          ))}
        </TimelineContainer>
      </Box>
    </ExperienceContainer>
  );
};

export default ExperienceSection;