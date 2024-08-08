import { Box, styled } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import { ChainMetadata } from './ChainMetadata';
import { ChainDescription } from './ChainDescription';

export const ChainDetail = () => {
  return (
    <ChainContainer>
      <ChainMetadata />
      <ChainDescription />
    </ChainContainer>
  );
};

const ChainContainer = styled(Box)(() => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return {
    width: '100%',
    padding: isMobile ? '0 1rem' : '0 7rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    marginTop: '4rem',
    marginBottom: '4rem',
  };
});
