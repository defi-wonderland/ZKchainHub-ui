import { expect } from '@jest/globals';

import {
  truncateAddress,
  formatTimestampToDate,
  formatDataNumber,
  calculateUSDGas,
  formatSmallNumber,
} from '~/utils/format';

describe('truncateAddress', () => {
  it('should truncate the address correctly', () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    expect(truncateAddress(address)).toBe('0x1234...5678');
  });

  it('should format the timestamp to date correctly', () => {
    const timestamp = 1627580800; // July 29, 2021
    expect(formatTimestampToDate(timestamp)).toBe('7/29/2021'); // The format may vary based on locale
  });

  it('should format a number correctly', () => {
    expect(formatDataNumber(1234.567)).toBe('1,234.567');
    expect(formatDataNumber(0.0001234, 6)).toBe('0.000123');
    expect(formatDataNumber(1000000, 2, true)).toBe('$1,000,000.00');
    expect(formatDataNumber(1234567890, 3, false, true)).toBe('1.235B');
  });

  it('should return 0 for invalid or zero input', () => {
    expect(formatDataNumber('not a number')).toBe('0');
    expect(formatDataNumber(0, 2, true)).toBe('$0');
  });

  it('should return significant digit from small number', () => {
    expect(formatSmallNumber(0.00002123333, true)).toBe('$0.0000212');
    expect(formatDataNumber(0, 2, true)).toBe('$0');
  });

  it('should calculate the USD value of gas correctly', () => {
    const txGas = BigInt(21000);
    const gasPriceInWei = BigInt(1000000000); // 1 Gwei
    const etherPrice = 2000; // $2000 per ETH

    expect(calculateUSDGas(txGas, gasPriceInWei, etherPrice)).toBe(0.04); // 21000 * 1 Gwei * 2000 / 1e18
  });
});
