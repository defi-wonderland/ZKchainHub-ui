import { Typography, Box, styled } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import GasLight from '~/assets/icons/gasLight.svg';
import GasDark from '~/assets/icons/gasDark.svg';
import { useCustomTheme } from '~/hooks';
import { SBox } from '~/components';

export const Gas = () => {
  const { theme } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <GasContainer>
      <Image src={theme === 'dark' ? GasDark : GasLight} alt='gas' />
      <Box>
        <SBox>
          <GasLabel>{t('HOME.gasPrice')}:</GasLabel>
          <GasValueText>10 wei</GasValueText>
        </SBox>
        <SBox>
          <GasLabel>{t('HOME.transfer')}:</GasLabel>
          <GasValueText>$10</GasValueText>
        </SBox>
      </Box>
    </GasContainer>
  );
};

const GasContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
    padding: '0.5rem 1rem',
  };
});

const GasValueText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    color: currentTheme.textPrimary,
    fontWeight: 500,
    fontSize: '0.9rem',
  };
});

const GasLabel = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    color: currentTheme.textSecondary,
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: '1rem',
  };
});
