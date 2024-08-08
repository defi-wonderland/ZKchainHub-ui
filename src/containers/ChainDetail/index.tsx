import { Box, styled } from '@mui/material';

import { ChainMetadata } from './ChainMetadata';
import { ChainDescription } from './ChainDescription';
import { Breadcrumb } from '~/components';

export const ChainDetail = () => {
  return (
    <ChainContainer>
      <Breadcrumb isChain={true} />
      <ChainMetadata />
      <ChainDescription />
    </ChainContainer>
  );
};

const ChainContainer = styled(Box)(() => {
  return {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    marginTop: '4rem',
    marginBottom: '4rem',
  };
});
