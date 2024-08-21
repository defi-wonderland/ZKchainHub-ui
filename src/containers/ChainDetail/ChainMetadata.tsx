import { Avatar, Box, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { useCustomTheme, useData } from '~/hooks';
import { formatTimestampToDate } from '~/utils';
import { Icon, AddNetworkButton } from '~/components';

export const ChainMetadata = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { chain } = router.query;
  const { chainData } = useData();
  const chainMetadata = chainData?.metadata;

  return (
    <MetadataContainer>
      <FirstRow>
        <ChainIdentity>
          <Avatar src={chainMetadata?.iconUrl} alt={chainMetadata?.name} sx={{ width: 72, height: 72 }} />
          <Box>
            <ChainName>{chainMetadata?.name}</ChainName>
            <ChainId>
              {t('CHAIN.chainId')}: <ChainIdValue>{chain}</ChainIdValue>
            </ChainId>
          </Box>
        </ChainIdentity>

        <ButtonsContainer>
          <MetadataButton href={chainMetadata?.explorerUrl} target='_blank'>
            <Icon icon={'web'} alt='web-icon' size={20} />
            {t('CHAIN.website')}
            <Icon icon={'link'} alt='link-icon' size={24} />
          </MetadataButton>

          <MetadataButton href={chainMetadata?.explorerUrl} target='_blank'>
            <Icon icon={'block'} alt='block-icon' size={24} />
            {t('CHAIN.explorer')}
            <Icon icon={'link'} alt='link-icon' size={24} />
          </MetadataButton>

          <AddNetworkButton />
        </ButtonsContainer>
      </FirstRow>

      <SecondRow>
        <MetadataItem>
          <Icon icon={'clock'} alt={t('CHAIN.launchDate')} size={48} />
          <Box>
            <Label variant='subtitle1' color='textSecondary' gutterBottom>
              {t('CHAIN.launchDate')}
            </Label>
            <Value>{formatTimestampToDate(chainMetadata?.launchDate)}</Value>
          </Box>
        </MetadataItem>

        <MetadataItem>
          <Icon icon={'settings'} alt={t('CHAIN.environment')} size={48} />
          <Box>
            <Label variant='subtitle1' color='textSecondary' gutterBottom>
              {t('CHAIN.environment')}
            </Label>
            <Value>{chainData?.chainType}</Value>
          </Box>
        </MetadataItem>

        <MetadataItem>
          <NativeTokenAvatar src={chainData?.baseToken.imageUrl || ''} alt={chainData?.baseToken.symbol} />
          <Box>
            <Label>{t('CHAIN.nativeToken')}</Label>
            <Value>{chainData?.baseToken.symbol}</Value>
          </Box>
        </MetadataItem>
      </SecondRow>
    </MetadataContainer>
  );
};

const MetadataContainer = styled(Box)(() => {
  const { currentTheme, theme } = useCustomTheme();

  return {
    background: theme === 'dark' ? currentTheme.backgroundTertiary : currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
  };
});

const FirstRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 1rem',
  [theme.breakpoints.down('md')]: {
    display: 'grid',
  },
}));

const SecondRow = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: currentTheme.gap,
    width: '100%',
    borderTop: currentTheme.border,
    [theme.breakpoints.down('md')]: {
      display: 'grid',
      justifyContent: 'space-between',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  };
});

const ChainIdentity = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };
});

const MetadataButton = styled('a')(() => {
  const { currentTheme, theme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme === 'dark' ? currentTheme.backgroundSecondary : currentTheme.backgroundTertiary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    color: currentTheme.textPrimary,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1rem',
    gap: '0.5rem',
    lineHeight: '1.5rem',
    textDecoration: 'none',
    '&:hover': {
      background: theme === 'dark' ? currentTheme.neutral[800] : currentTheme.neutral[300],
      boxShadow: 'none',
    },
  };
});

const ButtonsContainer = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: currentTheme.gap,
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      display: 'grid',
      justifyContent: 'space-between',
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginTop: '1rem',
    },
  };
});

export const ChainName = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
    color: currentTheme.textPrimary,
  };
});

export const ChainId = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
    color: currentTheme.textSecondary,
  };
});

export const ChainIdValue = styled('span')(() => {
  const { currentTheme } = useCustomTheme();

  return {
    color: currentTheme.textPrimary,
  };
});

const MetadataItem = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    padding: currentTheme.padding,
    gap: '0.5rem',
    borderRight: currentTheme.border,
    '&:last-child': {
      borderRight: 'none',
    },
  };
});

const Label = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    color: currentTheme.textSecondary,
  };
});

const Value = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    textTransform: 'capitalize',
    color: currentTheme.textPrimary,
  };
});

const NativeTokenAvatar = styled(Avatar)(() => {
  return {
    width: '44px',
    height: '44px',
  };
});
