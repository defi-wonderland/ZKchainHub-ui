import { expect } from '@jest/globals';

import { getDescription } from '~/utils/misc';
import { formatDataNumber } from '~/utils';

jest.mock('../utils', () => ({
  formatDataNumber: jest.fn(),
}));

describe('getDescription', () => {
  const notAvailable = 'N/A';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the notAvailable string if data is undefined', () => {
    const result = getDescription(undefined, notAvailable);
    expect(result).toBe(notAvailable);
  });

  it('should return the formatted number if data is a number', () => {
    const numberData = 12345;
    (formatDataNumber as jest.Mock).mockReturnValue('12,345');

    const result = getDescription(numberData, notAvailable);
    expect(result).toBe('12,345');
  });

  it('should return the string as is if data is a string', () => {
    const stringData = 'Some description';

    const result = getDescription(stringData, notAvailable);
    expect(result).toBe(stringData);
  });
});
