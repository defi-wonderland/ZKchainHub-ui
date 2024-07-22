export interface ChainData {
  chainType: string;
  tvl: {
    [token: string]: number;
  };
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
  name: string;
  id: number;
  nativeToken: string;
  tvl: number;
  type: string;
}

export interface EcosystemData {
  chains: EcosystemChainData[];
  total: number;
  tvl: {
    [token: string]: number;
  }[];
}
