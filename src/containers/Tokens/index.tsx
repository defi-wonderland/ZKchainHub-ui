import { styled } from '@mui/material';

import { useData } from '~/hooks';
import { Breadcrumb } from '~/components';
import { TokensTable } from './TokensTable';
import { SkeletonTokens } from './SkeletonTokens';

export const Tokens = () => {
  const { ecosystemData, isEcosystemLoading } = useData();
  const tvl = ecosystemData?.l1Tvl || [];
  return (
    <TokensContainer>
      {isEcosystemLoading && <SkeletonTokens />}
      {!isEcosystemLoading && (
        <>
          <Breadcrumb isChain={false} />
          <TokensTable tvl={tvl} />
        </>
      )}
    </TokensContainer>
  );
};

const TokensContainer = styled('main')(({ theme }) => ({
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
