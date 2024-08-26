import { formatDataNumber } from './format';

export const getDescription = (data: string | number | undefined, notAvailable: string) => {
  if (data === undefined || data === null) {
    return notAvailable;
  }

  if (typeof data === 'number') {
    return formatDataNumber(data);
  }

  if (typeof data === 'string') {
    return data;
  }

  // Fallback: return notAvailable message
  return notAvailable;
};

export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
