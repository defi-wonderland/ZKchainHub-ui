import { Avatar, Box, Button, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useCustomTheme, useData } from '~/hooks';
import { formatTimestampToDate } from '~/utils';
import { Icon, AddNetworkButton } from '~/components';

import WebDark from '~/assets/icons/webDark.svg';
import WebLight from '~/assets/icons/webLight.svg';
import LinkDark from '~/assets/icons/linkDark.svg';
import LinkLight from '~/assets/icons/linkLight.svg';
import BlockDark from '~/assets/icons/whiteBlockDark.svg';
import BlockLight from '~/assets/icons/blackBlockLight.svg';
import ClockDark from '~/assets/icons/clockDark.svg';
import ClockLight from '~/assets/icons/clockLight.svg';
import SettingsDark from '~/assets/icons/settingsDark.svg';
import SettingsLight from '~/assets/icons/settingsLight.svg';

export const ChainMetadata = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { chain } = router.query;
  const { chainData } = useData();
  const { theme } = useCustomTheme();
  const chainMetadata = chainData?.metadata;
  const dark = theme === 'dark';

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
          <MetadataButton variant='contained' href={chainMetadata?.explorerUrl}>
            <WebIcon src={dark ? WebDark : WebLight} alt='web icon' />
            {t('CHAIN.website')}
            <SIcon src={dark ? LinkDark : LinkLight} alt='link icon' />
          </MetadataButton>

          <MetadataButton variant='contained' href={chainMetadata?.explorerUrl}>
            <SIcon src={dark ? BlockDark : BlockLight} alt='block icon' />
            {t('CHAIN.explorer')}
            <SIcon src={dark ? LinkDark : LinkLight} alt='link icon' />
          </MetadataButton>

          <AddNetworkButton />
        </ButtonsContainer>
      </FirstRow>
      <SecondRow>
        <MetadataItem>
          <Icon darkIcon={ClockDark} lightIcon={ClockLight} alt={t('CHAIN.launchDate')} size={48} />
          <Box>
            <Label variant='subtitle1' color='textSecondary' gutterBottom>
              {t('CHAIN.launchDate')}
            </Label>
            <Value>{formatTimestampToDate(chainMetadata?.launchDate)}</Value>
          </Box>
        </MetadataItem>

        <MetadataItem>
          <Icon darkIcon={SettingsDark} lightIcon={SettingsLight} alt={t('CHAIN.environment')} size={48} />
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
            <Label>{t('CHAIN.nativeToken')}</Label>T<Value>{chainData?.baseToken.symbol}</Value>
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
  [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
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

const MetadataButton = styled(Button)(() => {
  const { currentTheme, theme } = useCustomTheme();

  return {
    background: theme === 'dark' ? currentTheme.backgroundSecondary : currentTheme.backgroundTertiary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    color: currentTheme.textPrimary,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1rem',
    gap: '0.5rem',
    lineHeight: '1.5rem',
    '&:hover': {
      background: theme === 'dark' ? currentTheme.neutral[800] : currentTheme.neutral[300],
      boxShadow: 'none',
    },
  };
});

const SIcon = styled(Image)({
  width: '1.5rem',
  height: '1.5rem',
});

const WebIcon = styled(Image)({
  width: '1.25rem',
  height: '1.25rem',
});

const ButtonsContainer = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: currentTheme.gap,
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
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
