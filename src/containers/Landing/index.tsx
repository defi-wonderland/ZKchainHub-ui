import { styled } from '@mui/material/styles';

import { Dashboard, LockedAssets } from '~/containers';
import { TitleBanner } from '~/components';

export const Landing = () => {
  return (
    <LandingContainer>
      <TitleBanner />
      <LockedAssets />
      <Dashboard />
    </LandingContainer>
  );
};

const LandingContainer = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
