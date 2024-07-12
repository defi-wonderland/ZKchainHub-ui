import { getConfig } from '~/config';
import ecosystemMockData from '~/data/ecosystemMockData.json';
import chainMockData from '~/data/chainMockData.json';

const { API_URL } = getConfig();

export const fetchEcosystemData = async () => {
  // temporary for mock data
  if (!API_URL) {
    return Promise.resolve(ecosystemMockData);
  }
  const res = await fetch(`${API_URL}/ecosystem`);
  if (!res.ok) {
    throw new Error('Failed to fetch ecosystem data');
  }
  return res.json();
};

export const fetchChainData = async (chainId: number) => {
  // temporary for mock data
  if (!API_URL) {
    return Promise.resolve(chainMockData);
  }
  const res = await fetch(`${API_URL}/zkchain/${chainId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch chain data');
  }
  return res.json();
};
