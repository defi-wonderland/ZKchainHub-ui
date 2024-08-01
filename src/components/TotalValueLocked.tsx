import { TvlData } from '~/types';
import { Box } from '@mui/material';
interface TotalValueLockedProps {
  tvl: TvlData[];
}

export const TotalValueLocked = ({ tvl }: TotalValueLockedProps) => {
  console.log(tvl);
  return <Box>{/* Token graph tvl */}</Box>;
};
