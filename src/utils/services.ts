import { getConfig } from '~/config';
import ecosystemMockData from '~/data/ecosystemMockData.json';
import chainMockData from '~/data/chainMockData.json';

const { API_URL } = getConfig();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

console.log('Fetching backend data from:', API_URL);

export const fetchEcosystemData = async () => {
  // temporary for mock data
  if (!API_URL) {
    await delay(2000); // Simulate 2 seconds delay
    return Promise.resolve(ecosystemMockData);
  }
  const res = await fetch(`${API_URL}/metrics/ecosystem`);
  if (!res.ok) {
    throw new Error('Failed to fetch ecosystem data');
  }
  return await res.json();
};

export const fetchChainData = async (chainId: string) => {
  // temporary for mock data
  if (!API_URL) {
    await delay(2000); // Simulate 2 seconds delay
    return Promise.resolve(chainMockData);
  }
  const res = await fetch(`${API_URL}/metrics/zkchain/${chainId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch chain data');
  }
  return await res.json();
};

export async function checkRpcStatus(rpcUrl: string): Promise<boolean> {
  try {
    // Ping the RPC endpoint with a basic request
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'web3_clientVersion', // A basic method that should be supported by most RPC endpoints
        params: [],
      }),
    });

    // If the response is successful and contains a valid result, return true
    const data = await response.json();
    return response.ok && !!data.result;
  } catch (error) {
    // If there is an error or the endpoint is not responding, return false
    return false;
  }
}
