import { Card, CardContent, Typography, styled, Box } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import { Icon } from './Icon';

interface ChainInfoCardProps {
  title: string;
  description: string | number;
  darkIcon: string;
  lightIcon: string;
  size: number;
  alt: string;
  isDataAvailable: boolean;
}

export const ChainInfoCard = ({
  title,
  description,
  darkIcon,
  lightIcon,
  size,
  alt,
  isDataAvailable,
}: ChainInfoCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <LabelContainer>
          <Icon darkIcon={darkIcon} lightIcon={lightIcon} size={size} alt={alt} />
          <Label variant='subtitle1' color='textSecondary' gutterBottom>
            {title}
          </Label>
        </LabelContainer>

        <Description isDataAvailable={isDataAvailable}>{description}</Description>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(() => {
  const { currentTheme, theme } = useCustomTheme();
  return {
    background: theme === 'dark' ? currentTheme.backgroundTertiary : currentTheme.backgroundSecondary,
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

const Description = styled(Typography)<{ isDataAvailable: boolean }>((props) => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: props.isDataAvailable ? '1.5rem' : '1rem',
    lineHeight: '2rem',
    fontWeight: 400,
    color: props.isDataAvailable ? currentTheme.textPrimary : currentTheme.textSecondary,
    marginTop: '0.5rem',
  };
});
