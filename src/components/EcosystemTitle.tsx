import { useTranslation } from 'next-i18next';
import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import ZkLogoDark from '~/assets/icons/zkLogoDark.svg';
import ZkLogoLight from '~/assets/icons/zkLogoLight.svg';
import { useCustomTheme } from '~/hooks';

export const EcosystemTitle = () => {
  const { t } = useTranslation();
  const { theme } = useCustomTheme();

  return (
    <TitleBox>
      <Image src={theme === 'dark' ? ZkLogoDark : ZkLogoLight} alt='ZKsync logo' />
      <Title>
        <Bold>{t('HOME.title').slice(0, 2)}</Bold>
        {t('HOME.title').slice(2)}
      </Title>
      <Subtitle>{t('HOME.subtitle')}</Subtitle>
    </TitleBox>
  );
};

const TitleBox = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  return {
    display: isMobile ? 'grid' : 'flex',
    gridTemplateColumns: isMobile ? 'auto 1fr' : 'none',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: currentTheme.gap,
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      justifyContent: 'start',
      textAlign: 'left',
    },
  };
});

const Title = styled(Typography)(() => ({
  fontSize: '3rem',
  lineHeight: '4rem',
  letterSpacing: '-0.03em',
  fontWeight: 300,
}));

const Bold = styled('span')({
  fontWeight: 700,
});

const Subtitle = styled(Typography)(({ theme }) => {
  return {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '4rem',
    letterSpacing: '-0.03em',
    gridColumn: 'auto',
    [theme.breakpoints.down('md')]: {
      gridColumn: 'span 2',
    },
  };
});
