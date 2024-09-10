import { Box } from '@mui/material';
import { Skeleton } from '@mui/material';

export const SkeletonTokens = () => {
  return (
    <Box width='100%'>
      {/* Breadcrumb Skeleton */}
      <Skeleton variant='text' width='20%' height={40} sx={{ marginBottom: 2, borderRadius: 4 }} />

      {/* Title Skeleton */}
      <Skeleton variant='text' width='40%' height={80} sx={{ marginBottom: 4, borderRadius: 4 }} />

      {/* Main Container Skeleton for Locked Assets */}
      <Skeleton variant='rectangular' width='100%' height={500} sx={{ borderRadius: 4, marginBottom: 12 }} />
    </Box>
  );
};
