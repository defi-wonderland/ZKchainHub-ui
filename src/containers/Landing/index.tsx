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

const LandingContainer = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 7rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '4rem',
  marginTop: '4rem',
  marginBottom: '4rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  },
}));
