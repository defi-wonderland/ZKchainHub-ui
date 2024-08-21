import { useTranslation } from 'next-i18next';
import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import WonderlandDark from '~/assets/icons/wonderlandDark.svg';
import WonderlandLight from '~/assets/icons/wonderlandLight.svg';
import { useCustomTheme } from '~/hooks';
import { SBox, Icon } from '~/components';

export const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useCustomTheme();

  return (
    <FooterContainer>
      <SBox>
        <FooterButton>{t('FOOTER.docs')}</FooterButton>
        <FooterButton>
          <Icon icon={'github'} alt='github' size={24} />
          <Typography>{t('FOOTER.github')}</Typography>
        </FooterButton>
      </SBox>
      <Subtitle>
        <SBox>
          <Typography>{t('FOOTER.madeWith')}</Typography>
          <Icon icon={'heart'} alt='heart' size={24} />
          <Typography>{t('FOOTER.by')}</Typography>
        </SBox>
        <Link href='https://defi.sucks' target='_blank'>
          <Image src={theme === 'dark' ? WonderlandDark : WonderlandLight} alt='Wonderland' />
        </Link>
      </Subtitle>
    </FooterContainer>
  );
};

export const FooterContainer = styled('footer')(({ theme }) => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    padding: currentTheme.padding,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '0',

    [theme.breakpoints.down('md')]: {
      display: 'grid',
      justifyContent: 'center',
      gap: '2rem',
    },
  };
});

const Subtitle = styled('div')(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,

    '& p': {
      display: 'inline-block',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
    },
  };
});

const FooterButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    gap: currentTheme.gap,
    alignItems: 'center',
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    cursor: 'pointer',
    color: currentTheme.textPrimary,
    textTransform: 'none',
    fontSize: '1rem',
    height: '3.5rem',
    '&:hover': {
      backgroundColor: currentTheme.backgroundHover,
    },
  };
});
