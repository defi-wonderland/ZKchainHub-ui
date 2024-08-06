import { useTranslation } from 'next-i18next';
import { Grid, Typography, Tooltip } from '@mui/material';
import { CheckCircle as CheckIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { useData } from '~/hooks';
import { StyledContainer } from '~/containers';

export const RPC = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  return (
    <StyledContainer>
      <Typography variant='h4' gutterBottom>
        {t('CHAIN.RPC.title')}
      </Typography>
      <Grid container spacing={2}>
        {chainData?.metadata?.publicRpcs &&
          chainData.metadata.publicRpcs.map((rpc, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grid container alignItems='center' spacing={1}>
                <Grid item>
                  <Tooltip title={rpc.status ? t('CHAIN.RPC.statusActive') : t('CHAIN.RPC.statusInactive')}>
                    {rpc.status ? <CheckIcon color='success' /> : <CancelIcon color='error' />}
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Typography variant='body1'>{rpc.url}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </StyledContainer>
  );
};
