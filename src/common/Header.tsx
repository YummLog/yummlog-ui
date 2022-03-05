import { AppBar as MuiAppBar, Typography } from '@mui/material';

const AppBarSx = {
  height: '4.375em',
  justifyContent: 'center',
  p: '1em',
};

const titleSx = {
  color: '#fff',
};

const Header = () => {
  return (
    <MuiAppBar color="primary" sx={AppBarSx}>
      <Typography component="p" sx={titleSx}>
        Yumm Log
      </Typography>
    </MuiAppBar>
  );
};

export default Header;
