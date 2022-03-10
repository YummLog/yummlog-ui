import { Box, Container as MuiContainer, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';

const layout = {
  width: '100%',
  height: '100%',
  mt: '2em',
};

const Container = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  return (
    <MuiContainer maxWidth="xl">
      <CssBaseline />
      <Box sx={{ ...layout }}>{children}</Box>
    </MuiContainer>
  );
};

export default Container;
