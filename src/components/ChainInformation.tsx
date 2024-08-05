import { Grid, Typography, Box, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { InfoBox } from '~/components';
import { useData } from '~/hooks';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <StyledArticle>
      <Typography variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.CHAININFORMATION.chainType')} description={chainData?.chainType} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.CHAININFORMATION.lastBlock')} description={chainData?.l2ChainInfo.lastBlock} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
            description={chainData?.l2ChainInfo.lastBlockVerified}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')} description={chainData?.l2ChainInfo.tps} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
            description={chainData?.batchesInfo.commited}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
            description={chainData?.batchesInfo.proved}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
            description={chainData?.batchesInfo.verified}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
            description={chainData?.l2ChainInfo.avgBlockTime}
          />
        </Grid>
      </Grid>
    </StyledArticle>
  );
};

const StyledArticle = styled(Box)({
  padding: '1rem',
  backgroundColor: '#11141A',
  borderRadius: '0.5rem',
});
