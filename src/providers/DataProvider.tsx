import { createContext, useState, useEffect, ReactNode } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { ChainData, EcosystemData, TvlData } from '~/types';
import { fetchEcosystemData, fetchChainData } from '~/utils';

type ContextType = {
  selectedChainId?: number;
  setSelectedChainId: (val: number) => void;

  isEcosystemLoading: boolean;
  isChainLoading: boolean;
  refetchChainData: (options: { throwOnError: boolean; cancelRefetch: boolean }) => Promise<UseQueryResult>;

  ecosystemData: EcosystemData;
  chainData: ChainData;

  totalL1TVL: number;
};

interface DataProps {
  children: ReactNode;
}

export const DataContext = createContext({} as ContextType);

export const DataProvider = ({ children }: DataProps) => {
  const [selectedChainId, setSelectedChainId] = useState<number>();
  const router = useRouter();

  const {
    isLoading: isEcosystemLoading,
    data: ecosystemData,
    isError: isEcosystemError,
  } = useQuery({
    queryKey: ['ecosystem'],
    queryFn: fetchEcosystemData,
  });

  const {
    isLoading: isChainLoading,
    data: chainData,
    isError: isChainError,
    refetch: refetchChainData,
  } = useQuery({
    queryKey: ['chainData', selectedChainId],
    queryFn: () => fetchChainData(selectedChainId!),
    enabled: !!selectedChainId,
  });

  useEffect(() => {
    if (isEcosystemError || isChainError) {
      router.push('/error');
    }
  }, [isEcosystemError, isChainError, router]);

  const totalL1TVL = (ecosystemData?.l1Tvl || []).reduce((accumulator: number, token: TvlData) => {
    return accumulator + (token.amountUsd || 0);
  }, 0);

  return (
    <DataContext.Provider
      value={{
        selectedChainId,
        setSelectedChainId,
        isEcosystemLoading,
        isChainLoading,
        ecosystemData,
        chainData,
        refetchChainData,
        totalL1TVL,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
