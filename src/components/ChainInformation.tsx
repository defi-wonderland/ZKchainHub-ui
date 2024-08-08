import { Grid, Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox } from '~/components';
import { useData, useCustomTheme } from '~/hooks';

import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';
import ChainTypeDark from '~/assets/icons/chainTypeDark.svg';
import ChainTypeLight from '~/assets/icons/chainTypeLight.svg';
import CheckBlockDark from '~/assets/icons/checkBlockDark.svg';
import CheckBlockLight from '~/assets/icons/checkBlockLight.svg';
import SpeedDark from '~/assets/icons/speedDark.svg';
import SpeedLight from '~/assets/icons/speedLight.svg';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <article>
      <STitle variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </STitle>
      <DataContainer>
        <InfoBox
          title={t('CHAIN.CHAININFORMATION.chainType')}
          description={chainData?.chainType}
          darkIcon={ChainTypeDark}
          lightIcon={ChainTypeLight}
          size={22}
          alt='chain-type-icon'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.lastBlock')}
          description={chainData?.l2ChainInfo.lastBlock}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block-icon'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
          description={chainData?.l2ChainInfo.lastBlockVerified}
          darkIcon={CheckBlockDark}
          lightIcon={CheckBlockLight}
          size={22}
          alt='check-block-icon'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')}
          description={chainData?.l2ChainInfo.tps}
          darkIcon={SpeedDark}
          lightIcon={SpeedLight}
          size={22}
          alt='speed-icon'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
          description={chainData?.batchesInfo.commited}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
          description={chainData?.batchesInfo.proved}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
          description={chainData?.batchesInfo.verified}
          darkIcon={CheckBlockDark}
          lightIcon={CheckBlockLight}
          size={22}
          alt='check-block'
        />

        <InfoBox
          title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
          description={chainData?.l2ChainInfo.avgBlockTime}
          darkIcon={SpeedDark}
          lightIcon={SpeedLight}
          size={22}
          alt='speed-icon'
        />
      </DataContainer>
    </article>
  );
};

export const DataContainer = styled(Box)(() => {
  const { currentTheme, theme } = useCustomTheme();
  return {
    background: theme === 'dark' ? currentTheme.backgroundTertiary : currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  };
});

export const GridContainer = styled(Grid)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '100%',
    borderRadius: 'inherit',
    overflow: 'hidden',
    border: currentTheme.border,
  };
});

export const STitle = styled(Typography)(() => {
  return {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
    marginBottom: '1.5rem',
  };
});
