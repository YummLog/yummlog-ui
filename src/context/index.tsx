import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import theme from '../styles/theme';

const Providers = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
