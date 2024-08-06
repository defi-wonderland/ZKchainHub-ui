import { Avatar, Box, Button, Typography, Grid, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { InfoBox } from '~/components';
import { useCustomTheme, useData } from '~/hooks';
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
          <MetadataButton variant='contained' startIcon={<WebIcon />} href={data?.websiteUrl} sx={{ mr: 2 }}>
            {t('CHAIN.website')}
          </MetadataButton>
          <MetadataButton variant='contained' startIcon={<ExploreIcon />} href={data?.explorerUrl} sx={{ mr: 2 }}>
            {t('CHAIN.explorer')}
          </MetadataButton>
          <MetadataButton
            variant='contained'
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => console.log('Add to Network')}
          >
            {t('CHAIN.addNetwork')}
          </MetadataButton>
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

export const StyledContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundTertiary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
  };
});

export const MetadataButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    color: currentTheme.textPrimary,
  };
});
