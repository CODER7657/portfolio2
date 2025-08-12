import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GlassmorphismButtonProps extends ButtonProps {
  glowColor?: string;
}

const StyledGlassButton = styled(Button)<GlassmorphismButtonProps>(({ theme, glowColor = theme.palette.primary.main }) => ({
  background: 'rgba(248, 250, 252, 0.08)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(248, 250, 252, 0.12)',
  borderRadius: '12px',
  color: theme.palette.text.primary,
  fontWeight: 500,
  padding: '14px 28px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  fontSize: '0.95rem',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.3), transparent)',
  },
  
  '&:hover': {
    background: 'rgba(248, 250, 252, 0.12)',
    border: `1px solid ${glowColor}30`,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px ${glowColor}20`,
    transform: 'translateY(-1px)',
  },
  
  '&:active': {
    transform: 'translateY(0px)',
    transition: 'transform 0.1s ease',
  }
}));

const GlassmorphismButton: React.FC<GlassmorphismButtonProps> = ({ 
  children, 
  glowColor,
  ...props 
}) => {
  return (
    <StyledGlassButton glowColor={glowColor} {...props}>
      {children}
    </StyledGlassButton>
  );
};

export default GlassmorphismButton;