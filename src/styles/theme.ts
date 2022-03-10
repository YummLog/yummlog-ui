import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9ECBE5',
      light: '#CFE5F2',
    },
    secondary: {
      main: '#162C3C',
    },
    background: {
      default: '#32485D',
    },
    text: {
      primary: '606060',
    },
  },
  typography: {
    body1: {
      color: '#3E4651',
    },
  },
});

export default theme;
