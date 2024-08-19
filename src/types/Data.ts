export interface ChainData {
  chainType: string;
  baseToken: {
    name: string;
    symbol: string;
    contractAddress: string | null;
    coingeckoId: string;
    type: string;
    imageUrl: string;
    decimals: number;
  };
  tvl: ChainTvl[];
  batchesInfo: {
    commited: string;
    verified: string;
    executed: string;
  };
  feeParams: {
    batchOverheadL1Gas: number;
    maxPubdataPerBatch: number;
    maxL2GasPerBatch: number;
    priorityTxMaxPubdata: number;
    minimalL2GasPrice: string;
  };
  metadata: {
    name: string;
    iconUrl: string;
    publicRpcs: string[];
    explorerUrl: string;
    launchDate: number;
    chainType?: string;
    tokenImgUrl?: string;
  };
  l2ChainInfo?: {
    tps: number;
    avgBlockTime: number;
    lastBlock: number;
    lastBlockVerified: number;
  };
}

export interface EcosystemChainData {
  chainId: string;
  chainType: string;
  baseToken: {
    name: string;
    symbol: string;
    contractAddress: string | null;
    coingeckoId: string;
    type: string;
    imageUrl: string;
    decimals: number;
  };
  tvl: string;
  metadata?: {
    iconUrl: string;
    name: string;
    publicRpcs: string[];
    explorerUrl: string;
    launchDate: number;
  };
  rpc: boolean;
}

export interface EcosystemData {
  l1Tvl: TvlData[];
  ethGasInfo: {
    gasPrice: string;
    ethTransfer: string;
    erc20Transfer: string;
  };
  zkChains: EcosystemChainData[];
}

export interface TvlData {
  amount: string;
  amountUsd: string;
  price: string;
  name: string;
  symbol: string;
  contractAddress: string | null;
  type: string;
  imageUrl: string;
  decimals: number;
}

export interface ChainTvl {
  symbol: string;
  name: string;
  amountUsd: string;
  imageUrl: string;
  price: string;
}
export interface TotalValueLockedProps {
  tvl: TvlData[];
}
