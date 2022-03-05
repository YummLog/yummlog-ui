import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a76d60',
    },
    secondary: {
      main: '#e0d0c1',
    },
    background: {
      default: '#f7f9f9',
    },
    text: {
      primary: '606060',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
  },
});

export default theme;
