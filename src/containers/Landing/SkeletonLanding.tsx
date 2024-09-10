import { Box } from '@mui/material';
import { Skeleton } from '@mui/material';

export const SkeletonLanding = () => {
  return (
    <Box width='100%'>
      {/* Title Skeleton */}
      <Skeleton variant='text' width='40%' height={80} sx={{ marginBottom: 4, borderRadius: 4 }} />

      {/* Sub-Title Skeleton */}
      <Skeleton variant='text' width='100%' height={60} sx={{ marginBottom: 4, borderRadius: 4 }} />

      {/* Main Container Skeleton for Locked Assets */}
      <Skeleton variant='rectangular' width='100%' height={300} sx={{ borderRadius: 4, marginBottom: 12 }} />

      {/* Secondary Title Skeleton for Chain List */}
      <Skeleton variant='text' width='30%' height={60} sx={{ marginBottom: 4, borderRadius: 4 }} />

      {/* Table Skeleton */}
      <Box>
        <Skeleton variant='rectangular' width='100%' height={50} sx={{ marginBottom: 2, borderRadius: 4 }} />
        {[...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            variant='rectangular'
            width='100%'
            height={50}
            sx={{ marginBottom: 1, borderRadius: 4 }}
          />
        ))}
      </Box>
    </Box>
  );
};
