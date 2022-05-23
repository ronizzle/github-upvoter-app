import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff03fd',
    },
    secondary: {
      main: '#7dfc00',
    },
  },
  typography: {
    fontFamily: ['Arial'].join(','),
    h1: {
      fontSize: 32,
      lineHeight: '36px',
      letterSpacing: '2%',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '2%',
    },
    h3: {
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '2%',
    },
    h4: {
      fontSize: 18,
      lineHeight: '20px',
      letterSpacing: '2%',
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '2%',
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '2%',
    },
    caption: {
      fontSize: 12,
      lineHeight: '14px',
      letterSpacing: '2%',
    },
  },
});

export default theme;
