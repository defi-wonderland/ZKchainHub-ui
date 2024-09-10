import { Box, Typography, Grid, styled, useMediaQuery, useTheme } from '@mui/material';

import { TotalValueLockedProps } from '~/types';
import { useCustomTheme } from '~/hooks';
import { MobileTvlContainer, DesktopTVLGraph } from '~/components';

export const TVLGraph = ({ tvl }: TotalValueLockedProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {isMobile && <MobileTvlContainer tvl={tvl} />}
      {!isMobile && <DesktopTVLGraph tvl={tvl} />}
    </>
  );
};

export const TvlContainer = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
});

export interface GridContainerProps {
  image?: string;
  height?: string;
  small?: string;
}

export const GridContainer = styled(Grid)(({ image, height, small }: GridContainerProps) => {
  const { currentTheme } = useCustomTheme();
  const smallCard = small === 'true';
  return {
    position: 'relative',
    height: height || 'fit-content',
    display: 'flex',
    color: currentTheme.textPrimary,
    overflow: 'hidden',
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: '1rem',
    padding: currentTheme.padding,
    border: currentTheme.border,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: small ? -20 : -25,
      left: small ? -50 : -95,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: smallCard ? '200px' : '400px',
      backgroundPosition: smallCard && 'center',
      filter: smallCard ? 'blur(85px)' : 'blur(120px)',
    },
    '@media (max-width: 600px)': {
      '&::before': {
        top: smallCard ? -10 : -15,
        left: smallCard ? -25 : -45,
        backgroundSize: smallCard ? '150px' : '250px',
        filter: smallCard ? 'blur(60px)' : 'blur(90px)',
      },
    },
  };
});

export const OthersBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const OthersText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textSecondary,
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
  };
});
