import { Box, styled } from '@mui/material';

import { ChainInformation, FeeParams, RPC, TVL } from '~/components';

export const ChainDescription = () => {
  return (
    <ChainDescriptionContainer>
      <ChainInformation />
      <RPC />
      <FeeParams />
      <TVL />
    </ChainDescriptionContainer>
  );
};

const ChainDescriptionContainer = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  };
});
