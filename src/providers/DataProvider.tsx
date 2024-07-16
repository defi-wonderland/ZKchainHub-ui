import { createContext, useState, useEffect, ReactNode } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { ChainData, EcosystemData } from '~/types';
import { fetchEcosystemData, fetchChainData } from '~/utils';

type ContextType = {
  selectedChain?: ChainData;
  setSelectedChain: (val: ChainData) => void;

  isEcosystemLoading: boolean;
  isChainLoading: boolean;
  refetchChainData: (options: { throwOnError: boolean; cancelRefetch: boolean }) => Promise<UseQueryResult>;

  ecosystemData: EcosystemData;
  chainData: ChainData;
};

interface DataProps {
  children: ReactNode;
}

export const DataContext = createContext({} as ContextType);

export const DataProvider = ({ children }: DataProps) => {
  const [selectedChain, setSelectedChain] = useState<ChainData>();
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
    queryKey: ['chainData', selectedChain?.chainId],
    queryFn: () => fetchChainData(selectedChain!.chainId!),
    enabled: !!selectedChain?.chainId,
  });

  useEffect(() => {
    if (isEcosystemError || isChainError) {
      router.push('/error');
    }
  }, [isEcosystemError, isChainError, router]);

  return (
    <DataContext.Provider
      value={{
        selectedChain,
        setSelectedChain,
        isEcosystemLoading,
        isChainLoading,
        ecosystemData,
        chainData,
        refetchChainData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
