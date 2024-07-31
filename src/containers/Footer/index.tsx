import { useTranslation } from 'next-i18next';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Github from '~/assets/icons/github.svg';

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
  return {
    display: 'flex',
    height: `5.5rem`,
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };
});

const Subtitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  '& p': {
    display: 'inline-block',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const SBox = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
});

const IconText = styled(Box)({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  backgroundColor: '#262B33',
  borderRadius: '1.5rem',
  padding: '1rem',
});

const SText = styled(Typography)({
  backgroundColor: '#262B33',
  borderRadius: '1.5rem',
  padding: '1rem',
});
