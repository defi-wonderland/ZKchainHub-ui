import { getConfig } from '~/config';
import ecosystemMockData from '~/data/ecosystemMockData.json';
import chainMockData from '~/data/chainMockData.json';
import { ChainData, EcosystemData } from '~/types';

/**
 * Fetch data from the API or return mock data if API_URL is not set.
 * @param endpoint - The API endpoint to fetch data from.
 * @returns The fetched data.
 */
const fetchData = async (endpoint: string, mockData: EcosystemData | ChainData) => {
  const { API_URL, TESTING_MODE } = getConfig();

  if (TESTING_MODE) {
    return mockData;
  }

  if (!API_URL) {
    console.error('API URL is not set. Please set the NEXT_PUBLIC_API_BASE_URL environment variable.');
    throw new Error('API_URL_NOT_SET');
  }

  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('NETWORK_ERROR');

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error('ERROR_FETCHING_DATA');
  }
};

/**
 * Fetch ecosystem data from the API or return mock data.
 * @returns The ecosystem data.
 */
export const fetchEcosystemData = async () => {
  return fetchData('/metrics/ecosystem', ecosystemMockData);
};

/**
 * Fetch chain data from the API or return mock data.
 * @param chainId - The ID of the chain to fetch data for.
 * @returns The chain data.
 */
export const fetchChainData = async (chainId: string) => {
  return fetchData(`/metrics/zkchain/${chainId}`, chainMockData);
};

/**
 * Check the RPC status by sending a request to the RPC URL.
 * @param rpcUrl - The URL of the RPC endpoint.
 * @returns True if the RPC is available, false otherwise.
 */
export const checkRpcStatus = async (rpcUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'web3_clientVersion', // A basic method that should be supported by most RPC endpoints
        params: [],
      }),
    });

    const data = await response.json();
    // If the response is successful and contains a valid result, return true
    return response.ok && !!data.result;
  } catch (error) {
    console.error('Error checking RPC status:', error);
    // If there is an error or the endpoint is not responding, return false
    return false;
  }
};
