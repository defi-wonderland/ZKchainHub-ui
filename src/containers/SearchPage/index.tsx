import { styled } from '@mui/material/styles';

import { Dashboard } from '~/containers';

export const SearchPage = () => {
  return (
    <SearchContainer>
      <Dashboard />
    </SearchContainer>
  );
};

const SearchContainer = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 7rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 'calc(100vh - 15rem)',
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    padding: '0 1rem',
    minHeight: 'calc(100vh - 23rem)',
  },
}));
