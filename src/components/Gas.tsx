import { Typography, Box, styled, Skeleton } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { useCustomTheme, useData } from '~/hooks';
import { SBox, Icon } from '~/components';

export const Gas = () => {
  const { t } = useTranslation();
  const { isEcosystemLoading, erc20USD, gasPriceInGwei } = useData();

  return (
    <GasContainer aria-live='polite' aria-busy={isEcosystemLoading}>
      {isEcosystemLoading && <Skeleton variant='rectangular' width={175} height={50} sx={{ borderRadius: 4 }} />}
      {!isEcosystemLoading && (
        <>
          <Icon icon='gas' alt='Gas price icon' size={24} />
          <Box>
            <SBox>
              <GasLabel>{t('HEADER.gasPrice')}:</GasLabel>
              <GasValueText>{gasPriceInGwei ? `${gasPriceInGwei} gwei` : '-'} </GasValueText>
            </SBox>
            <SBox>
              <GasLabel>{t('HEADER.transfer')}:</GasLabel>
              <GasValueText>{erc20USD ? `$ ${erc20USD}` : '-'}</GasValueText>
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
