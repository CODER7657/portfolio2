import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GlassmorphismCardProps extends BoxProps {
  children: React.ReactNode;
  blur?: number;
  opacity?: number;
}

const StyledGlassCard = styled(Box)<GlassmorphismCardProps>(({ theme, blur = 16, opacity = 0.06 }) => ({
  background: `rgba(248, 250, 252, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: '1px solid rgba(248, 250, 252, 0.1)',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.2), transparent)',
  },
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    background: `rgba(248, 250, 252, ${opacity + 0.02})`,
    border: '1px solid rgba(248, 250, 252, 0.15)',
  }
}));

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ 
  children, 
  blur = 10, 
  opacity = 0.1, 
  ...props 
}) => {
  return (
    <StyledGlassCard blur={blur} opacity={opacity} {...props}>
      {children}
    </StyledGlassCard>
  );
};

export default GlassmorphismCard;