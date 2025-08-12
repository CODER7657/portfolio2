import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -10,
  overflow: 'hidden',
});

const ParticleLayer = styled(Box)<{ layer: number }>(({ theme, layer }) => ({
  position: 'absolute',
  width: '100%',
  height: '120%',
  background: layer === 1 
    ? `radial-gradient(circle at 25% 75%, ${theme.palette.primary.main}08 0%, transparent 50%), radial-gradient(circle at 75% 25%, ${theme.palette.secondary.main}06 0%, transparent 50%)`
    : layer === 2
    ? `radial-gradient(circle at 60% 40%, ${theme.palette.info.main}04 0%, transparent 50%)`
    : `radial-gradient(circle at 40% 60%, ${theme.palette.primary.main}03 0%, transparent 50%)`,
}));

const FloatingParticle = styled(Box)<{ size: number; color: string }>(({ size, color }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${color}20, transparent)`,
  filter: 'blur(2px)',
  opacity: 0.6,
}));

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax layers
      gsap.to(layer1Ref.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(layer2Ref.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(layer3Ref.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Gentle floating particles animation
      const particles = containerRef.current?.querySelectorAll('.floating-particle');
      particles?.forEach((particle, index) => {
        gsap.to(particle, {
          x: `+=${Math.random() * 60 - 30}`,
          y: `+=${Math.random() * 60 - 30}`,
          duration: 15 + index * 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const generateParticles = (count: number, color: string) => {
    return Array.from({ length: count }, (_, i) => (
      <FloatingParticle
        key={i}
        className="floating-particle"
        size={Math.random() * 20 + 5}
        color={color}
        sx={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ));
  };

  return (
    <ParallaxContainer ref={containerRef}>
      <ParticleLayer ref={layer1Ref} layer={1}>
        {generateParticles(8, '#6366f1')}
      </ParticleLayer>
      
      <ParticleLayer ref={layer2Ref} layer={2}>
        {generateParticles(6, '#06b6d4')}
      </ParticleLayer>
      
      <ParticleLayer ref={layer3Ref} layer={3}>
        {generateParticles(4, '#3b82f6')}
      </ParticleLayer>
    </ParallaxContainer>
  );
};

export default ParallaxBackground;