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
    body1: {
      color: '#3c3c3c',
    },
  },
});

export default theme;
