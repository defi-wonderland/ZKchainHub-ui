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
