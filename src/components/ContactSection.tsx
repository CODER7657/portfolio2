import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassmorphismCard from './GlassmorphismCard';
import GlassmorphismButton from './GlassmorphismButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '100px 0',
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
    }
  },
  
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    }
  },
  
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.primary,
  }
}));

const SocialButton = styled(GlassmorphismButton)(({ theme }) => ({
  minWidth: '60px',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  padding: 0,
  
  '&:hover': {
    transform: 'translateY(-5px) scale(1.1)',
  }
}));

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

      gsap.from(formRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        }
      });

      gsap.from(socialRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 70%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer ref={sectionRef} id="contact-section">
      <Box sx={{ maxWidth: '800px', mx: 'auto', px: 3 }}>
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            color: 'text.primary',
            background: 'linear-gradient(45deg, #ffffff, #4361ee)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Work Together
        </Typography>

        <Stack spacing={6} alignItems="center">
          <GlassmorphismCard 
            sx={{ 
              p: 4, 
              width: '100%',
              maxWidth: '600px'
            }}
            opacity={0.1}
            blur={15}
          >
            <Box component="form" onSubmit={handleSubmit} ref={formRef}>
              <Stack spacing={3}>
                <StyledTextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                />
                
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                />
                
                <StyledTextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                />
                
                <Box sx={{ textAlign: 'center', pt: 2 }}>
                  <GlassmorphismButton 
                    type="submit"
                    size="large"
                    glowColor="#4cc9f0"
                    startIcon={<EmailIcon />}
                  >
                    Send Message
                  </GlassmorphismButton>
                </Box>
              </Stack>
            </Box>
          </GlassmorphismCard>

          <Box ref={socialRef}>
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                mb: 3,
                color: 'text.secondary'
              }}
            >
              Connect with me
            </Typography>
            
            <Stack direction="row" spacing={3} justifyContent="center">
              <SocialButton glowColor="#0077b5">
                <LinkedInIcon />
              </SocialButton>
              
              <SocialButton glowColor="#333">
                <GitHubIcon />
              </SocialButton>
              
              <SocialButton glowColor="#ea4335">
                <EmailIcon />
              </SocialButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </ContactContainer>
  );
};

export default ContactSection;