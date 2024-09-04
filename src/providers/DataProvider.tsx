import { createContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { formatGwei } from 'viem';

import { ChainData, EcosystemData, TvlData } from '~/types';
import { fetchEcosystemData, fetchChainData, calculateUSDGas } from '~/utils';

type ContextType = {
  selectedChainId: string;
  setSelectedChainId: (val: string) => void;

  isEcosystemLoading: boolean;
  isChainLoading: boolean;
  refetchChainData: (options: { throwOnError: boolean; cancelRefetch: boolean }) => Promise<UseQueryResult>;

  ecosystemData: EcosystemData;
  chainData: ChainData;

  totalL1TVL: number;
  erc20USD: number;
  gasPriceInGwei: string;
  maxL2GasPerBatch: string;
};

interface DataProps {
  children: ReactNode;
}

export const DataContext = createContext({} as ContextType);

export const DataProvider = ({ children }: DataProps) => {
  const [selectedChainId, setSelectedChainId] = useState<string>('');
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [hasNavigatedToError, setHasNavigatedToError] = useState<boolean>(false);
  const router = useRouter();

  const {
    isLoading: isEcosystemLoading,
    data: ecosystemData,
    isError: isEcosystemError,
    error: ecosystemError,
  } = useQuery({
    queryKey: ['ecosystem'],
    queryFn: fetchEcosystemData,
    retry: false,
  });

  const {
    isLoading: isChainLoading,
    data: chainData,
    isError: isChainError,
    error: chainError,
    refetch: refetchChainData,
  } = useQuery({
    queryKey: ['chainData', selectedChainId],
    queryFn: () => fetchChainData(selectedChainId!),
    enabled: !!selectedChainId, // Only fetch chain data if selectedChainId is defined
    retry: false,
  });

  const hasError = useMemo(() => isEcosystemError || isChainError, [isEcosystemError, isChainError]);

  useEffect(() => {
    if (isEcosystemError) {
      setErrorCode((ecosystemError as Error)?.message || 'UNKNOWN_ERROR');
    }
    if (isChainError) {
      setErrorCode((chainError as Error)?.message || 'UNKNOWN_ERROR');
    }
  }, [isEcosystemError, isChainError, ecosystemError, chainError]);

  const handleNavigationToError = useCallback(() => {
    if (hasError && !hasNavigatedToError && errorCode) {
      setHasNavigatedToError(true);
      router.push(`/error?code=${errorCode}`);
    }
  }, [hasError, hasNavigatedToError, router, errorCode]);

  useEffect(() => {
    handleNavigationToError();
  }, [handleNavigationToError]);

  const totalL1TVL = (ecosystemData?.l1Tvl || []).reduce((accumulator: number, token: TvlData) => {
    return accumulator + (Number(token.amountUsd) || 0);
  }, 0);

  const { erc20USD, gasPriceInGwei } = useMemo(() => {
    if (!ecosystemData) return { erc20USD: 0, gasPriceInGwei: '0' };

    const { erc20Transfer, gasPrice, ethPrice } = ecosystemData.ethGasInfo;
    const erc20USD = calculateUSDGas(BigInt(erc20Transfer), BigInt(gasPrice), Number(ethPrice));
    const gasPriceInGwei = Number(formatGwei(BigInt(gasPrice))).toFixed(2);

    return { erc20USD, gasPriceInGwei };
  }, [ecosystemData]);

  const maxL2GasPerBatch = useMemo(() => {
    if (!chainData) return '0 gwei';

    const maxL2Gas = Number(formatGwei(BigInt(chainData.feeParams.maxL2GasPerBatch))).toFixed(2);

    return maxL2Gas + ' gwei';
  }, [chainData]);

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
        erc20USD,
        gasPriceInGwei,
        maxL2GasPerBatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
