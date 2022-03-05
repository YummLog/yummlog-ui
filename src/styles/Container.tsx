import { Box, Container as MuiContainer, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';

const layout = {
  width: '100%',
  height: '100%',
};

const Container = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  return (
    <MuiContainer maxWidth="xl">
      <Box sx={{ ...layout }}>
        <CssBaseline />
        {children}
      </Box>
    </MuiContainer>
  );
};

export default Container;
