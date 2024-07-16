import { styled } from '@mui/material/styles';

import Dashboard from '../Dashboard';
import { LockedAssets } from '../LockedAssets';
import { TitleBanner } from '~/components/TitleBanner';

export const Landing = () => {
  return (
    <LandingContainer>
      <TitleBanner />
      <LockedAssets />
      <Dashboard />
    </LandingContainer>
  );
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
