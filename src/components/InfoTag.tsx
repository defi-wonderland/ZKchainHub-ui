import { styled, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { useCustomTheme } from '~/hooks';
import informationIconDark from '~/assets/icons/infoDark.svg';
import informationIconLight from '~/assets/icons/infoLight.svg';

interface InfoTagProps {
  information: string;
}

export const InfoTag = ({ information }: InfoTagProps) => {
  const { theme } = useCustomTheme();
  return (
    <InfoTagContainer>
      <InfoIcon src={theme === 'dark' ? informationIconDark : informationIconLight} alt={information} />
      <InfoText>{information}</InfoText>
    </InfoTagContainer>
  );
};

const InfoTagContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
    backgroundColor: currentTheme.warningBackground,
    borderRadius: currentTheme.borderRadius,
    padding: '0.1rem 0.5rem 0.1rem 0.1rem',
    border: currentTheme.warningBorder,
    width: 'max-content',
  };
});

const InfoText = styled(Typography)(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: '0.7rem',
    color: currentTheme.warningText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem',
    },
  };
});

const InfoIcon = styled(Image)(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      width: '1rem',
    },
  };
});
