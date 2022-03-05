import { Box, Container as MuiContainer, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from '../common/header';

const layout = {
  width: '100%',
  height: '100%',
  mt: '6em',
};

const Container = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  return (
    <MuiContainer maxWidth="xl">
      <CssBaseline />
      <Header />
      <Box sx={{ ...layout }}>{children}</Box>
    </MuiContainer>
  );
};

export default Container;
