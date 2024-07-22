export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatTimestampToDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString();
};
