import { getConfig } from '~/config';

/**
 * Fetch data from the API or return mock data if API_URL is not set.
 * @param endpoint - The API endpoint to fetch data from.
 * @param mockData - The mock data to return if API_URL is not set.
 * @returns The fetched data or mock data.
 */
const fetchData = async (endpoint: string) => {
  const { API_URL } = getConfig();
  const url = `${API_URL}${endpoint}`;

  if (!API_URL) {
    console.error('Error: API URL is not set');
    throw new Error('API URL is not set');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

/**
 * Fetch ecosystem data from the API or return mock data.
 * @returns The ecosystem data.
 */
export const fetchEcosystemData = async () => {
  return fetchData('/metrics/ecosystem');
};

/**
 * Fetch chain data from the API or return mock data.
 * @param chainId - The ID of the chain to fetch data for.
 * @returns The chain data.
 */
export const fetchChainData = async (chainId: string) => {
  return fetchData(`/metrics/zkchain/${chainId}`);
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
