export const mockData = [
  {
    name: 'ZKSync Era',
    chainId: 324,
    website: 'https://example.com',
    explorer: 'https://example.com',
    launchDate: '2023-12-05',
    environment: 'Production',
    nativeToken: 'ETH',
    chainType: 'ZKRollup',
    lastBlock: 123456789,
    lastBlockVerified: 123456788,
    transactionsPerSecond: 15,
    totalBatchesCommitted: 1234567890,
    totalBatchesExecuted: 1234567890,
    totalBatchesVerified: 123456788,
    averageBlockTime: 100000,
    tvl: {
      ETH: {
        value: 500000000,
        address: '0x79db...d692',
      },
      USDT: {
        value: 100000000,
        address: '0x79db...d692',
      },
      USDC: {
        value: 50000000,
        address: '0x79db...d692',
      },
      WBTC: {
        value: 30000000,
        address: '0x79db...d692',
      },
    },
    rpcs: [
      {
        status: 'Active',
        url: 'https://lrpc.com',
      },
      {
        status: 'Active',
        url: 'https://blastapi.com',
      },
      {
        status: 'Inactive',
        url: 'https://llamarpc.com',
      },
      {
        status: 'Active',
        url: 'https://alchemy.com',
      },
    ],
    feeParams: {
      batchOverheadL1Gas: 1234567890,
      computeOverheadPart: 1234567890,
      maxGasPerBatch: 123456788,
    },
  },
  {
    name: 'Optimism',
    chainId: 10,
    website: 'https://optimism.io',
    explorer: 'https://explorer.optimism.io',
    launchDate: '2022-05-01',
    environment: 'Production',
    nativeToken: 'ETH',
    chainType: 'Optimistic Rollup',
    lastBlock: 987654321,
    lastBlockVerified: 987654320,
    transactionsPerSecond: 12,
    totalBatchesCommitted: 987654321,
    totalBatchesExecuted: 987654321,
    totalBatchesVerified: 987654320,
    averageBlockTime: 150000,
    tvl: {
      ETH: {
        value: 700000000,
        address: '0x1234...abcd',
      },
      DAI: {
        value: 200000000,
        address: '0x1234...abcd',
      },
    },
    rpcs: [
      {
        status: 'Active',
        url: 'https://mainnet.optimism.io',
      },
      {
        status: 'Inactive',
        url: 'https://backup.optimism.io',
      },
    ],
    feeParams: {
      batchOverheadL1Gas: 987654321,
      computeOverheadPart: 987654321,
      maxGasPerBatch: 987654320,
    },
  },
  {
    name: 'Arbitrum One',
    chainId: 42161,
    website: 'https://arbitrum.io',
    explorer: 'https://explorer.arbitrum.io',
    launchDate: '2021-08-31',
    environment: 'Production',
    nativeToken: 'ETH',
    chainType: 'Optimistic Rollup',
    lastBlock: 112233445,
    lastBlockVerified: 112233444,
    transactionsPerSecond: 20,
    totalBatchesCommitted: 112233445,
    totalBatchesExecuted: 112233445,
    totalBatchesVerified: 112233444,
    averageBlockTime: 80000,
    tvl: {
      ETH: {
        value: 800000000,
        address: '0xabcd...1234',
      },
      LINK: {
        value: 150000000,
        address: '0xabcd...1234',
      },
      USDC: {
        value: 60000000,
        address: '0xabcd...1234',
      },
    },
    rpcs: [
      {
        status: 'Active',
        url: 'https://arb1.arbitrum.io',
      },
    ],
    feeParams: {
      batchOverheadL1Gas: 112233445,
      computeOverheadPart: 112233445,
      maxGasPerBatch: 112233444,
    },
  },
  {
    name: 'Polygon',
    chainId: 137,
    website: 'https://polygon.technology',
    explorer: 'https://explorer.matic.network',
    launchDate: '2020-05-18',
    environment: 'Production',
    nativeToken: 'MATIC',
    chainType: 'Sidechain',
    lastBlock: 998877665,
    lastBlockVerified: 998877664,
    transactionsPerSecond: 30,
    totalBatchesCommitted: 998877665,
    totalBatchesExecuted: 998877665,
    totalBatchesVerified: 998877664,
    averageBlockTime: 20000,
    tvl: {
      MATIC: {
        value: 400000000,
        address: '0x5678...efgh',
      },
      AAVE: {
        value: 50000000,
        address: '0x5678...efgh',
      },
      WBTC: {
        value: 25000000,
        address: '0x5678...efgh',
      },
    },
    rpcs: [
      {
        status: 'Active',
        url: 'https://rpc-mainnet.maticvigil.com',
      },
      {
        status: 'Active',
        url: 'https://rpc-mainnet.matic.network',
      },
    ],
    feeParams: {
      batchOverheadL1Gas: 998877665,
      computeOverheadPart: 998877665,
      maxGasPerBatch: 998877664,
    },
  },
];
