import { Box, Skeleton } from '@mui/material';

export const SkeletonChainDetail = () => {
  return (
    <Box sx={{ padding: 4 }} width='100%'>
      {/* Breadcrumb Skeleton */}
      <Skeleton variant='text' width='20%' height={40} sx={{ marginBottom: 2, borderRadius: 4 }} />

      {/* Chain Metadata Skeleton */}
      <Skeleton variant='rectangular' width='100%' height={150} sx={{ borderRadius: 4, marginBottom: 4 }} />

      {/* Chain Information Skeleton */}
      <Box sx={{ marginBottom: 4 }}>
        <Skeleton variant='text' width='40%' height={60} sx={{ marginBottom: 2, borderRadius: 4 }} />
        <Skeleton variant='rectangular' width='100%' height={80} sx={{ borderRadius: 4, marginBottom: 2 }} />
        <Skeleton variant='rectangular' width='100%' height={80} sx={{ borderRadius: 4 }} />
      </Box>

      {/* RPCs Skeleton */}
      <Box sx={{ marginBottom: 4 }}>
        <Skeleton variant='text' width='40%' height={60} sx={{ marginBottom: 2, borderRadius: 4 }} />
        <Skeleton variant='rectangular' width='100%' height={80} sx={{ borderRadius: 4, marginBottom: 2 }} />
      </Box>

      {/* Fee Params Skeleton */}
      <Box sx={{ marginBottom: 4 }}>
        <Skeleton variant='text' width='40%' height={60} sx={{ marginBottom: 2, borderRadius: 4 }} />
        <Skeleton variant='rectangular' width='100%' height={80} sx={{ borderRadius: 4, marginBottom: 2 }} />
      </Box>

      {/* TVL Skeleton */}
      <Box>
        <Skeleton variant='text' width='40%' height={60} sx={{ marginBottom: 2, borderRadius: 4 }} />
        <Box>
          <Skeleton variant='rectangular' width='100%' height={50} sx={{ marginBottom: 2 }} />
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} variant='rectangular' width='100%' height={50} sx={{ marginBottom: 1 }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
