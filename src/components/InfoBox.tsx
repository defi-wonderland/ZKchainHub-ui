import { Card, CardContent, Typography, styled } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import { Icon } from './Icon';

interface InfoBoxProps {
  title: string;
  description: string | number;
  darkIcon: string;
  lightIcon: string;
  size: number;
  alt: string;
}

export const InfoBox = ({ title, description, darkIcon, lightIcon, size, alt }: InfoBoxProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Icon darkIcon={darkIcon} lightIcon={lightIcon} size={size} alt={alt} />
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    height: '100%',
    background: currentTheme.backgroundTertiary,
    color: currentTheme.textPrimary,
    border: 'none',
    boxShadow: 'none',
  };
});
