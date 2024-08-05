import { Card, CardContent, Typography, styled } from '@mui/material';

interface InfoBoxProps {
  title: string;
  description: string | number;
}

export const InfoBox = ({ title, description }: InfoBoxProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  height: '100%',
  backgroundColor: '#11141A',
  color: '#ffffff',
  borderRadius: '0.5rem',
  padding: '1rem',
});
