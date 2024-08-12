import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { Dashboard, LockedAssets } from '~/containers';
import { TitleBanner } from '~/components';
import { useStateContext } from '~/hooks';

export const Landing = () => {
  const { isSearch } = useStateContext();
  return (
    <LandingContainer>
      {isSearch && <Dashboard />}
      {!isSearch && (
        <>
          <TitleBanner />
          <LockedAssets />
          <Dashboard />
        </>
      )}
    </LandingContainer>
  );
};

const LandingContainer = styled('main')(() => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '0 1rem' : '0 7rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '4rem',
    marginTop: '4rem',
    marginBottom: '4rem',
  };
});
