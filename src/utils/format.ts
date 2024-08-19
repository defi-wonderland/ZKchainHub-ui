export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatTimestampToDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export function formatDataNumber(input: string | number, formatDecimal = 3, currency?: boolean, compact?: boolean) {
  const res: number = Number.parseFloat(input.toString());

  if (res === 0 || isNaN(res)) return `${currency ? '$0' : '0'}`;

  if (res < 0.01) return formatSmallNumber(res);

  const userNotation = compact ? 'compact' : 'standard';
  const notation = res > 1e12 ? 'scientific' : userNotation;

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: formatDecimal,
    notation: notation,
    style: currency ? 'currency' : 'decimal',
    currency: 'USD',
  }).format(res);
}

export const formatSmallNumber = (value: number) => {
  if (value === 0) {
    return '0';
  }

  const formattedValue = value.toString();

  let numLeadingZeros = 0;

  // Count the leading zeros and decimal point
  for (let i = 0; i < formattedValue.length; i++) {
    if (formattedValue[i] === '0' || formattedValue[i] === '.') {
      numLeadingZeros++;
    } else {
      break;
    }
  }

  // Return the number with 3 digits after the last leading zero
  const result = formattedValue.slice(0, numLeadingZeros + 3);

  // Trim any trailing zeros from the result
  return result.replace(/\.?0+$/, '');
};

export const weiToGwei = (wei: string): number => {
  // Convert string to BigInt for precision
  const weiBigInt = BigInt(wei);

  // Convert wei to gwei (1 gwei = 1e9 wei)
  const gweiBigInt = weiBigInt / BigInt(1e9);

  // Convert BigInt to string with 2 decimal places
  const gwei = Number(gweiBigInt) + Number(weiBigInt % BigInt(1e9)) / 1e9;

  return Math.round(gwei);
};

export const calculateUSDGas = (txGas: bigint, gasPriceInWei: bigint, etherPrice: number): number => {
  const txGasInWei = BigInt(txGas) * BigInt(gasPriceInWei);
  const txCostInEther = Number(txGasInWei) / 1e18;
  return Math.round(txCostInEther * etherPrice);
};
