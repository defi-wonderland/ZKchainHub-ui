import { useState } from 'react';
import { Typography, Box, styled, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import GasLight from '~/assets/icons/gasLight.svg';
import GasDark from '~/assets/icons/gasDark.svg';
import { useCustomTheme, useData } from '~/hooks';
import { SBox } from '~/components';
import { weiToGwei, calculateUSDGas } from '~/utils';
import { useEffect } from 'react';

export const Gas = () => {
  const { theme } = useCustomTheme();
  const { t } = useTranslation();
  const { isEcosystemLoading, ecosystemData } = useData();
  const [erc20inUSD, setErc20inUSD] = useState<number>(0);

  useEffect(() => {
    if (!isEcosystemLoading && ecosystemData?.ethGasInfo) {
      const { erc20Transfer, gasPrice, ethPrice } = ecosystemData.ethGasInfo;
      const erc20USD = calculateUSDGas(BigInt(erc20Transfer), BigInt(gasPrice), Number(ethPrice));
      setErc20inUSD(erc20USD);
    }
  }, [isEcosystemLoading, ecosystemData]);

  return (
    <GasContainer>
      {isEcosystemLoading && <Skeleton variant='rectangular' width={175} height={50} sx={{ borderRadius: 4 }} />}
      {!isEcosystemLoading && (
        <>
          <Image src={theme === 'dark' ? GasDark : GasLight} alt='gas' />
          <Box>
            <SBox>
              <GasLabel>{t('HEADER.gasPrice')}:</GasLabel>
              <GasValueText>{weiToGwei(ecosystemData.ethGasInfo.gasPrice)} gwei</GasValueText>
            </SBox>
            <SBox>
              <GasLabel>{t('HEADER.transfer')}:</GasLabel>
              <GasValueText>$ {erc20inUSD}</GasValueText>
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
