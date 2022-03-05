import { AppBar as MuiAppBar, Typography } from '@mui/material';

const AppBarSx = {
  height: '4.375em',
  justifyContent: 'center',
  p: '1em',
};

const Header = () => {
  return (
    <MuiAppBar color="primary" sx={AppBarSx}>
      <Typography component="p">Yumm Log</Typography>
    </MuiAppBar>
  );
};

export default Header;
