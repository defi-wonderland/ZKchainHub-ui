import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';

import { STitle } from '~/components';

export const ErrorContainer = () => {
  const { t } = useTranslation();

  return (
    <ErrorPageContainer>
      <STitle>{t('ERROR.title')}</STitle>
      <Typography>{t('ERROR.message')}</Typography>
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 7rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '4rem',
  marginTop: '4rem',
  marginBottom: '4rem',
  minHeight: 'calc(100vh - 19rem)',
  [theme.breakpoints.down('md')]: {
    padding: '0 1rem',
    minHeight: 'calc(100vh - 23rem)',
  },
}));
