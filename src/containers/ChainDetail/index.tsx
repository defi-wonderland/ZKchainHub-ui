import { Box, styled } from '@mui/material';

import { ChainMetadata } from './ChainMetadata';
import { ChainDescription } from './ChainDescription';
import { Breadcrumb } from '~/components';

export const ChainDetail = () => {
  return (
    <ChainContainer>
      <Box>
        <Breadcrumb isChain={true} />
        <ChainMetadata />
      </Box>

      <ChainDescription />
    </ChainContainer>
  );
};

export const ChainContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 7rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  marginTop: '4rem',
  marginBottom: '4rem',

  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  },
}));
