import { Avatar, Box, Button, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useCustomTheme, useData } from '~/hooks';
import { formatTimestampToDate } from '~/utils';
import { Icon } from '~/components';

import WebDark from '~/assets/icons/webDark.svg';
import WebLight from '~/assets/icons/webLight.svg';
import LinkDark from '~/assets/icons/linkDark.svg';
import LinkLight from '~/assets/icons/linkLight.svg';
import BlockDark from '~/assets/icons/whiteBlockDark.svg';
import BlockLight from '~/assets/icons/blackBlockLight.svg';
import Add from '~/assets/icons/add.svg';
import ClockDark from '~/assets/icons/clockDark.svg';
import ClockLight from '~/assets/icons/clockLight.svg';
import SettingsDark from '~/assets/icons/settingsDark.svg';
import SettingsLight from '~/assets/icons/settingsLight.svg';

export const ChainMetadata = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const { theme } = useCustomTheme();
  const data = chainData?.metadata;
  const dark = theme === 'dark';

  return (
    <MetadataContainer>
      <FirstRow>
        <ChainIdentity>
          <Avatar src={data?.iconUrl} alt={data?.chainName} sx={{ width: 56, height: 56 }} />
          <Box>
            <ChainName>{data?.chainName}</ChainName>
            <ChainId>
              {t('CHAIN.chainId')}: <ChainIdValue>{data?.chainId}</ChainIdValue>
            </ChainId>
          </Box>
        </ChainIdentity>

        <ButtonsContainer>
          <MetadataButton variant='contained' href={data?.websiteUrl}>
            <WebIcon src={dark ? WebDark : WebLight} alt='web icon' />
            {t('CHAIN.website')}
            <SIcon src={dark ? LinkDark : LinkLight} alt='link icon' />
          </MetadataButton>

          <MetadataButton variant='contained' href={data?.explorerUrl}>
            <SIcon src={dark ? BlockDark : BlockLight} alt='block icon' />
            {t('CHAIN.explorer')}
            <SIcon src={dark ? LinkDark : LinkLight} alt='link icon' />
          </MetadataButton>

          <MetadataButton variant='contained'>
            <SIcon src={Add} alt='add icon' />
            {t('CHAIN.addNetwork')}
          </MetadataButton>
        </ButtonsContainer>
      </FirstRow>
      <SecondRow>
        <MetadataItem>
          <Icon darkIcon={ClockDark} lightIcon={ClockLight} alt={t('CHAIN.launchDate')} size={48} />
          <Box>
            <Label variant='subtitle1' color='textSecondary' gutterBottom>
              {t('CHAIN.launchDate')}
            </Label>
            <Value>{formatTimestampToDate(data?.launchDate)}</Value>
          </Box>
        </MetadataItem>

        <MetadataItem>
          <Icon darkIcon={SettingsDark} lightIcon={SettingsLight} alt={t('CHAIN.environment')} size={48} />
          <Box>
            <Label variant='subtitle1' color='textSecondary' gutterBottom>
              {t('CHAIN.environment')}
            </Label>
            <Value>{data?.environment}</Value>
          </Box>
        </MetadataItem>

        <MetadataItem>
          <NativeTokenAvatar src={data?.nativeTokenIconUrl} alt={data?.nativeToken} />
          <Box>
            <Label>{t('CHAIN.nativeToken')}</Label>
            <Value>{data?.nativeToken}</Value>
          </Box>
        </MetadataItem>
      </SecondRow>
    </MetadataContainer>
  );
};

const MetadataContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundTertiary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    border: currentTheme.border,
  };
});

const FirstRow = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 1rem',
  };
});

const SecondRow = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    width: '100%',
    borderTop: currentTheme.border,
  };
});

const ChainIdentity = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '1rem',
  };
});

const MetadataButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    color: currentTheme.textPrimary,
    textTransform: 'none',
    fontSize: '1rem',
    gap: '0.5rem',
    lineHeight: '1.5rem',
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

const ButtonsContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: currentTheme.gap,
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
