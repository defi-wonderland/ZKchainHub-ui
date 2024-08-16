interface AddNetwork {
  chainId: string;
  chainName: string;
  rpcUrls: string[];
  token: string;
  symbol: string;
  decimals: number;
  explorerUrl: string;
}

export const addNetwork = async ({ chainId, chainName, rpcUrls, token, symbol, decimals, explorerUrl }: AddNetwork) => {
  const networkData = {
    chainId: chainId,
    chainName: chainName,
    rpcUrls: [rpcUrls],
    nativeCurrency: {
      name: token,
      symbol: symbol,
      decimals: decimals,
    },
    blockExplorerUrls: [explorerUrl],
  };

  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [networkData],
    });
  } catch (error) {
    console.error('Failed to add network:', error);
    alert('Failed to add network. Please try again.');
  }
};
