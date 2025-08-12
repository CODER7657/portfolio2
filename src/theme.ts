import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#8b5cf6',
      dark: '#4338ca',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#06b6d4',
      light: '#67e8f9',
      dark: '#0891b2',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
      contrastText: '#ffffff'
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff'
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e'
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
      disabled: '#64748b'
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      textTransform: 'none' as const
    }
  },
  shape: {
    borderRadius: 16
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
    '0 24px 48px rgba(0, 0, 0, 0.35), 0 20px 15px rgba(0, 0, 0, 0.22)',
    '0 32px 64px rgba(0, 0, 0, 0.40), 0 25px 20px rgba(0, 0, 0, 0.22)',
    '0 40px 80px rgba(0, 0, 0, 0.45), 0 30px 25px rgba(0, 0, 0, 0.22)',
    '0 48px 96px rgba(0, 0, 0, 0.50), 0 35px 30px rgba(0, 0, 0, 0.22)',
    '0 56px 112px rgba(0, 0, 0, 0.55), 0 40px 35px rgba(0, 0, 0, 0.22)',
    '0 64px 128px rgba(0, 0, 0, 0.60), 0 45px 40px rgba(0, 0, 0, 0.22)',
    '0 72px 144px rgba(0, 0, 0, 0.65), 0 50px 45px rgba(0, 0, 0, 0.22)',
    '0 80px 160px rgba(0, 0, 0, 0.70), 0 55px 50px rgba(0, 0, 0, 0.22)',
    '0 88px 176px rgba(0, 0, 0, 0.75), 0 60px 55px rgba(0, 0, 0, 0.22)',
    '0 96px 192px rgba(0, 0, 0, 0.80), 0 65px 60px rgba(0, 0, 0, 0.22)',
    '0 104px 208px rgba(0, 0, 0, 0.85), 0 70px 65px rgba(0, 0, 0, 0.22)',
    '0 112px 224px rgba(0, 0, 0, 0.90), 0 75px 70px rgba(0, 0, 0, 0.22)',
    '0 120px 240px rgba(0, 0, 0, 0.95), 0 80px 75px rgba(0, 0, 0, 0.22)',
    '0 128px 256px rgba(0, 0, 0, 1.00), 0 85px 80px rgba(0, 0, 0, 0.22)',
    '0 136px 272px rgba(0, 0, 0, 1.00), 0 90px 85px rgba(0, 0, 0, 0.22)',
    '0 144px 288px rgba(0, 0, 0, 1.00), 0 95px 90px rgba(0, 0, 0, 0.22)',
    '0 152px 304px rgba(0, 0, 0, 1.00), 0 100px 95px rgba(0, 0, 0, 0.22)',
    '0 160px 320px rgba(0, 0, 0, 1.00), 0 105px 100px rgba(0, 0, 0, 0.22)',
    '0 168px 336px rgba(0, 0, 0, 1.00), 0 110px 105px rgba(0, 0, 0, 0.22)'
  ]
});

export default theme;