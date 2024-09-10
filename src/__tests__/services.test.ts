import { expect } from '@jest/globals';
import { fetchEcosystemData, fetchChainData, checkRpcStatus } from '~/utils/services';
import { getConfig } from '~/config/';

global.fetch = jest.fn();

jest.mock('../config', () => ({
  getConfig: jest.fn(),
}));

const mockApiUrl = 'http://mock-api-url.com';

describe('Data Fetching Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
  });

  describe('fetchEcosystemData', () => {
    it('should throw an error if API_URL is not set', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: '' });

      await expect(fetchEcosystemData()).rejects.toThrow('API_URL_NOT_SET');
    });

    it('should fetch data from the API if API_URL is set', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
      const mockResponse = { some: 'data' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await fetchEcosystemData();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/metrics/ecosystem`);
      expect(result).toEqual(mockResponse);
    });

    it('should throw an error if fetch fails', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

      await expect(fetchEcosystemData()).rejects.toThrow('ERROR_FETCHING_DATA');
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchChainData', () => {
    const chainId = '1234';

    it('should throw an error if fetch fails', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

      await expect(fetchEcosystemData()).rejects.toThrow('ERROR_FETCHING_DATA');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should fetch chain data from the API if API_URL is set', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
      const mockResponse = { chain: 'data' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await fetchChainData(chainId);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/metrics/zkchain/${chainId}`);
      expect(result).toEqual(mockResponse);
    });

    it('should throw an error if fetch fails', async () => {
      (getConfig as jest.Mock).mockReturnValue({ API_URL: mockApiUrl });
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

      await expect(fetchChainData(chainId)).rejects.toThrow('ERROR_FETCHING_DATA');
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('checkRpcStatus', () => {
    const rpcUrl = 'http://mock-rpc-url.com';
    const rpcRequestBody = {
      jsonrpc: '2.0',
      id: 1,
      method: 'web3_clientVersion',
      params: [],
    };

    it('should return true for a successful RPC status check', async () => {
      const mockResponse = { result: 'clientVersion' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await checkRpcStatus(rpcUrl);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rpcRequestBody),
      });
      expect(result).toBe(true);
    });

    it('should return false for a failed RPC status check', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('RPC failed'));

      const result = await checkRpcStatus(rpcUrl);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toBe(false);
    });

    it('should return false if the RPC response is invalid', async () => {
      const mockResponse = { result: null }; // Invalid result
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await checkRpcStatus(rpcUrl);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toBe(false);
    });
  });
});
