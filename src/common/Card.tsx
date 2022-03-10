import { CardContent, Typography, Card as MuiCard } from '@mui/material';
import Heading from './Heading';

interface CardProps {
  title: string;
  content: string;
}

const CardSx = {
  backgroundColor: 'primary.light',
};

const Card = ({ title, content }: CardProps) => {
  return (
    <MuiCard sx={CardSx}>
      <CardContent>
        <Heading type="h5" text={title} />
        <Typography>{content}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
