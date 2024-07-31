import { useTranslation } from 'next-i18next';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Github from '~/assets/icons/github.svg';
import { useCustomTheme } from '~/hooks';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <SBox>
        <SText>{t('FOOTER.docs')}</SText>
        <IconText>
          <Image src={Github} alt='github' />
          <Typography>{t('FOOTER.github')}</Typography>
        </IconText>
      </SBox>
      <Subtitle>
        <p>{t('FOOTER.madeWithLove')}</p>
        <a href='https://defi.sucks'>Wonderland</a>
      </Subtitle>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    height: `5.5rem`,
    padding: `${currentTheme.padding}`,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };
});

const Subtitle = styled('div')(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: `${currentTheme.gap}`,
    '& p': {
      display: 'inline-block',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  };
});

const SBox = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: `${currentTheme.gap}`,
    alignItems: 'center',
  };
});

const IconText = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: `${currentTheme.gap}`,
    alignItems: 'center',
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    padding: `${currentTheme.padding}`,
  };
});

const SText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    padding: `${currentTheme.padding}`,
  };
});
