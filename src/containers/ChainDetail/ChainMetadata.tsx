import { Avatar, Box, Button, Typography, Grid, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox } from '~/components';
import { useData } from '~/hooks';
import { formatTimestampToDate } from '~/utils';
import WebIcon from '@mui/icons-material/Web';
import ExploreIcon from '@mui/icons-material/Explore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ChainMetadata = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const data = chainData?.metadata;

  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} display='flex' alignItems='center'>
          <Avatar src={data?.iconUrl} alt={data?.chainName} sx={{ width: 56, height: 56 }} />
          <Box ml={2}>
            <Typography variant='h6'>{data?.chainName}</Typography>
            <Typography variant='subtitle2'>{data?.chainId}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display='flex' justifyContent='flex-end' alignItems='center'>
          <Button variant='contained' startIcon={<WebIcon />} href={data?.websiteUrl} target='_blank' sx={{ mr: 2 }}>
            {t('CHAIN.website')}
          </Button>
          <Button
            variant='contained'
            startIcon={<ExploreIcon />}
            href={data?.explorerUrl}
            target='_blank'
            sx={{ mr: 2 }}
          >
            {t('CHAIN.explorer')}
          </Button>
          <Button
            variant='contained'
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => console.log('Add to Network')}
          >
            {t('CHAIN.addToNetwork')}
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <InfoBox title={t('CHAIN.launchDate')} description={formatTimestampToDate(data?.launchDate)} />
            </Grid>
            <Grid item xs={12} md={4}>
              <InfoBox title={t('CHAIN.environment')} description={data?.environment} />
            </Grid>
            <Grid item xs={12} md={4}>
              <InfoBox title={t('CHAIN.nativeToken')} description={data?.nativeToken} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)({
  background: 'rgba(17, 20, 26, 1)',
  padding: '1rem',
  borderRadius: '0.5rem',
});
