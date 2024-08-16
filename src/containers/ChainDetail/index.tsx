import { Box, styled } from '@mui/material';

import { useData } from '~/hooks';
import { ChainMetadata } from './ChainMetadata';
import { ChainDescription } from './ChainDescription';
import { SkeletonChainDetail } from './SkeletonChainDetail';
import { Breadcrumb } from '~/components';

export const ChainDetail = () => {
  const { isChainLoading } = useData();

  return (
    <ChainContainer>
      {isChainLoading && <SkeletonChainDetail />}
      {!isChainLoading && (
        <>
          <Box>
            <Breadcrumb isChain={true} />
            <ChainMetadata />
          </Box>

          <ChainDescription />
        </>
      )}
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
  minHeight: 'calc(100vh - 19rem)',
  [theme.breakpoints.down('md')]: {
    padding: '0 1rem',
    minHeight: 'calc(100vh - 23rem)',
  },
}));
