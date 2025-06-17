import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create the base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#1e50da',
    },
    secondary: {
      main: '#facc15',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
  },
});

// Create responsive theme
export const theme = responsiveFontSizes(baseTheme);
