export interface ChainData {
  chainType: string;
  tvl: ChainTvl[];
  batchesInfo: {
    commited: number;
    verified: number;
    executed: number;
  };
  feeParams: {
    batchOverheadL1Gas: number;
    maxPubdataPerBatch: number;
    maxL2GasPerBatch: number;
    priorityTxMaxPubdata: number;
    minimalL2GasPrice: number;
  };
  metadata: {
    iconUrl: string;
    chainName: string;
    chainId: number;
    publicRpcs: {
      url: string;
      status: boolean;
    }[];
    websiteUrl: string;
    explorerUrl: string;
    launchDate: number;
    environment: string;
    nativeTokenIconUrl: string;
    nativeToken: string;
  };
  l2ChainInfo: {
    tps: number;
    avgBlockTime: number;
    lastBlock: number;
    lastBlockVerified: number;
  };
}

export interface EcosystemChainData {
  chainName: string;
  chainId: number;
  iconUrl: string;
  nativeToken: string;
  tokenImgUrl: string;
  tvl: number;
  chainType: string;
  metadata: boolean;
  rpc: boolean;
}

export interface EcosystemData {
  l1Tvl: TvlData[];
  ethGasInfo: {
    gasPrice: number;
    ethTransfer: number;
    erc20Transfer: number;
  };
  zkChains: EcosystemChainData[];
}

export interface TvlData {
  symbol: string;
  name: string;
  amountUsd: number;
  price: number;
  imageUrl: string;
}

export interface ChainTvl {
  symbol: string;
  name: string;
  amountUsd: number;
  imageUrl: string;
  price: number;
}
export interface TotalValueLockedProps {
  tvl: TvlData[];
}
