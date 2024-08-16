import { Typography, Box, styled, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import GasLight from '~/assets/icons/gasLight.svg';
import GasDark from '~/assets/icons/gasDark.svg';
import { useCustomTheme, useData } from '~/hooks';
import { SBox } from '~/components';

export const Gas = () => {
  const { theme } = useCustomTheme();
  const { t } = useTranslation();
  const { isEcosystemLoading } = useData();

  return (
    <GasContainer>
      {isEcosystemLoading && <Skeleton variant='rectangular' width={175} height={50} sx={{ borderRadius: 4 }} />}
      {!isEcosystemLoading && (
        <>
          <Image src={theme === 'dark' ? GasDark : GasLight} alt='gas' />
          <Box>
            <SBox>
              <GasLabel>{t('HEADER.gasPrice')}:</GasLabel>
              <GasValueText>10 wei</GasValueText>
            </SBox>
            <SBox>
              <GasLabel>{t('HEADER.transfer')}:</GasLabel>
              <GasValueText>$10</GasValueText>
            </SBox>
          </Box>
        </>
      )}
    </GasContainer>
  );
};

const GasContainer = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
    padding: '0.5rem 1rem',

    [theme.breakpoints.down('md')]: {
      display: 'grid',
      justifyItems: 'center',
    },
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
