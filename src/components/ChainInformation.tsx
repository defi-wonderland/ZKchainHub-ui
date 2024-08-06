import { Grid, Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox } from '~/components';
import { useData, useCustomTheme } from '~/hooks';
import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <>
      <STitle variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </STitle>
      <DataContainer>
        <GridContainer container>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.chainType')}
              description={chainData?.chainType}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.lastBlock')}
              description={chainData?.l2ChainInfo.lastBlock}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
              description={chainData?.l2ChainInfo.lastBlockVerified}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')}
              description={chainData?.l2ChainInfo.tps}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
              description={chainData?.batchesInfo.commited}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
              description={chainData?.batchesInfo.proved}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
              description={chainData?.batchesInfo.verified}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox
              title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
              description={chainData?.l2ChainInfo.avgBlockTime}
              darkIcon={BlockDark}
              lightIcon={BlockLight}
              size={22}
              alt='block'
            />
          </Grid>
        </GridContainer>
      </DataContainer>
    </>
  );
};

export const DataContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundTertiary,
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
  };
});

export const GridContainer = styled(Grid)(() => ({
  width: '100%',
  borderRadius: 'inherit',
  overflow: 'hidden',
}));

export const STitle = styled(Typography)(() => {
  return {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
  };
});
