import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';

import { STitle } from '~/components';

type ErrorContainerProps = {
  errorCode?: string;
};

export const ErrorContainer = ({ errorCode }: ErrorContainerProps) => {
  const { t } = useTranslation();
  console.log(errorCode);

  const getErrorMessage = () => {
    switch (errorCode) {
      case 'API_URL_NOT_SET':
        return t('ERROR.noApiUrl');
      case 'NETWORK_ERROR':
        return t('ERROR.networkError');
      default:
        return t('ERROR.errorFetchingData');
    }
  };

  return (
    <ErrorPageContainer>
      <STitle>{t('ERROR.title')}</STitle>
      <Typography>{getErrorMessage()}</Typography>
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
