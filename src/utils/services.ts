import { getConfig } from '~/config';
import ecosystemMockData from '~/data/ecosystemMockData.json';
import chainMockData from '~/data/chainMockData.json';
import { ChainData, EcosystemData } from '~/types';

const { API_URL } = getConfig();

const fetchData = async (url: string, mockData: EcosystemData | ChainData) => {
  if (!API_URL) return mockData;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchEcosystemData = async () => {
  const url = `${API_URL}/metrics/ecosystem`;
  return fetchData(url, ecosystemMockData);
};

export const fetchChainData = async (chainId: string) => {
  const url = `${API_URL}/metrics/zkchain/${chainId}`;
  return fetchData(url, chainMockData);
};

export const checkRpcStatus = async (rpcUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'web3_clientVersion',
        params: [],
      }),
    });

    const data = await response.json();
    return response.ok && !!data.result;
  } catch (error) {
    console.error('Error checking RPC status:', error);
    return false;
  }
};
