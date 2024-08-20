import { Box, styled } from '@mui/material';

import { ChainInformation, FeeParams, RPC, TVLTable } from '~/components';

export const ChainDescription = () => {
  return (
    <ChainDescriptionContainer>
      <ChainInformation />
      <RPC />
      <FeeParams />
      <TVLTable />
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
