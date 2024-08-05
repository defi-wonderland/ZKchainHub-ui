export interface ChainData {
  chainType: string;
  tvl: ChainTvl[];
  batchesInfo: {
    commited: number;
    verified: number;
    proved: number;
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
  token: string;
  tokenName: string;
  total: number;
  imageUrl: string;
}

export interface ChainTvl {
  token: string;
  tokenName: string;
  total: number;
  imageUrl: string;
  price: number;
}
