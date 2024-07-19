import { useTranslation } from 'next-i18next';
import { styled } from '@mui/material/styles';

import { useCustomTheme } from '~/hooks';
import { FOOTER_HEIGHT } from '~/utils';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <h1>Footer</h1>
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
    height: `${FOOTER_HEIGHT}rem`,
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.backgroundSecondary,
    borderTop: currentTheme.border,
    width: '100%',
  };
});

const Subtitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  '& p': {
    display: 'inline-block',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});
