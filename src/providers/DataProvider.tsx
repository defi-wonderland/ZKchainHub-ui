import { createContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { ChainData, EcosystemData, TvlData } from '~/types';
import { fetchEcosystemData, fetchChainData } from '~/utils';

type ContextType = {
  selectedChainId: string;
  setSelectedChainId: (val: string) => void;

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
  const [selectedChainId, setSelectedChainId] = useState<string>('');
  const [hasNavigatedToError, setHasNavigatedToError] = useState<boolean>(false);
  const router = useRouter();

  const {
    isLoading: isEcosystemLoading,
    data: ecosystemData,
    isError: isEcosystemError,
  } = useQuery({
    queryKey: ['ecosystem'],
    queryFn: fetchEcosystemData,
    retry: false,
  });

  const {
    isLoading: isChainLoading,
    data: chainData,
    isError: isChainError,
    refetch: refetchChainData,
  } = useQuery({
    queryKey: ['chainData', selectedChainId],
    queryFn: () => fetchChainData(selectedChainId!),
    enabled: !!selectedChainId, // Only fetch chain data if selectedChainId is defined
    retry: false,
  });

  const hasError = useMemo(() => isEcosystemError || isChainError, [isEcosystemError, isChainError]);

  const handleNavigationToError = useCallback(() => {
    if (hasError && !hasNavigatedToError) {
      setHasNavigatedToError(true);
      router.push('/error');
    }
  }, [hasError, hasNavigatedToError, router]);

  useEffect(() => {
    handleNavigationToError();
  }, [handleNavigationToError]);

  const totalL1TVL = (ecosystemData?.l1Tvl || []).reduce((accumulator: number, token: TvlData) => {
    return accumulator + (Number(token.amountUsd) || 0);
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
