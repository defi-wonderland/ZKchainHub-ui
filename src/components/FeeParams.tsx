import { Grid } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox, Title } from '~/components';
import { useData } from '~/hooks';
import { StyledContainer } from '~/containers';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <StyledContainer>
      <Title title={t('CHAIN.FEEPARAMS.title')} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.FEEPARAMS.batch')} description={chainData?.feeParams.batchOverheadL1Gas} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.FEEPARAMS.compute')} description={chainData?.feeParams.maxPubdataPerBatch} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox title={t('CHAIN.FEEPARAMS.maxGasBatch')} description={chainData?.feeParams.maxL2GasPerBatch} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
