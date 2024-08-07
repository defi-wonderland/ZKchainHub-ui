import { Card, CardContent, Typography, styled, Box } from '@mui/material';

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
        <LabelContainer>
          <Icon darkIcon={darkIcon} lightIcon={lightIcon} size={size} alt={alt} />
          <Label variant='subtitle1' color='textSecondary' gutterBottom>
            {title}
          </Label>
        </LabelContainer>

        <Description>{description}</Description>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundTertiary,
    color: currentTheme.textPrimary,
    overflow: 'hidden',
    boxShadow: 'none',
    borderRadius: 'inherit',
  };
});

const LabelContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
  };
});

const Label = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    margin: 0,
    color: currentTheme.textSecondary,
  };
});

const Description = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 400,
    color: currentTheme.textPrimary,
    marginTop: '0.5rem',
  };
});
