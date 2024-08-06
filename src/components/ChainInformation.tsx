import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox } from '~/components';
import { useData } from '~/hooks';
import { StyledContainer } from '~/containers';
import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <>
      <Typography variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </Typography>
      <StyledContainer>
        <Grid container spacing={2}>
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
        </Grid>
      </StyledContainer>
    </>
  );
};
