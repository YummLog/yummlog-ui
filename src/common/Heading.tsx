import { Typography } from '@mui/material';

interface HeaderProps {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const returnSX = (headerType: string) => {
  switch (headerType) {
    case 'h1':
      return {
        fontSize: '3rem',
        fontWeight: 700,
      };
    case 'h2':
      return {
        fontSize: '2.5rem',
        fontWeight: 600,
      };
    case 'h3':
      return {
        fontSize: '2rem',
        fontWeight: 500,
        my: '0.2em',
        color: '#fff',
      };
    case 'h4':
      return {
        fontSize: '1.75rem',
        lineHeight: '1',
        my: '0.7em',
      };
    case 'h5':
      return {
        fontSize: '1.5rem',
        lineHeight: '1',
        my: '0.5em',
      };
    case 'h6':
      return {
        fontSize: '1.25rem',
      };
  }
};

const Heading = ({ text, type }: HeaderProps) => {
  const headerSx = returnSX(type);
  return (
    <Typography component={type} sx={headerSx}>
      {text}
    </Typography>
  );
};

export default Heading;
