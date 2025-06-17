import {
  createTheme,
  responsiveFontSizes,
  alpha,
  Theme,
} from '@mui/material/styles';

// Utility function for primary color with alpha
export const alphaPrimary =
  (a: number) =>
  ({ palette }: Theme) =>
    alpha(palette.primary.main, a);

// Create the base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#0039CB', // Updated to match spec
    },
    secondary: {
      main: '#FFCA28', // Updated to match spec
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1536px)': {
            maxWidth: '1440px',
          },
        },
      },
    },
  },
});

// Create responsive theme
export const theme = responsiveFontSizes(baseTheme);
