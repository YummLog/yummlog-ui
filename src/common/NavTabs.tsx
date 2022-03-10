import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BoxSx = {
  width: '100%',
  my: '2em',
  header: {
    borderRadius: '1em',
    justifyContent: 'center',
    height: '5em',
    px: '1em',
  },
  a: {
    textDecoration: 'none',
  },
};

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={BoxSx}>
      <AppBar color="primary" position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="NavTabs" indicatorColor="secondary">
          <Tab
            label={
              <Link to="/">
                <Typography component="span">Logs</Typography>
              </Link>
            }
          />
          <Tab
            label={
              <Link to="/create-food-posts">
                <Typography component="span">Create</Typography>
              </Link>
            }
          />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default NavTabs;
