import { Box, Typography, Grid, styled } from '@mui/material';
import { TvlData } from '~/types';
import { TvlContentBox } from './TvlContentBox';

import { useCustomTheme } from '~/hooks';

interface TotalValueLockedProps {
  tvl: TvlData[];
}

export const TotalValueLocked = ({ tvl }: TotalValueLockedProps) => {
  const firstTvl = tvl[0];
  const secondTvl = tvl[1];
  const thirdTvl = tvl[2];
  const fourthTvl = tvl[3];
  const fifthTvl = tvl[4];
  const sixthTvl = tvl[5];

  return (
    <TvlContainer container spacing={0.5}>
      {/* First tvl row */}
      <Grid item xs={12}>
        <GridContainer imageUrl={firstTvl.imageUrl} height={'12rem'}>
          <TvlContentBox
            avatar={firstTvl.imageUrl}
            token={firstTvl.token}
            total={firstTvl.total}
            tokenName={firstTvl.tokenName}
          />
        </GridContainer>
      </Grid>

      {/* Second tvl row */}
      <Grid item container xs={12} spacing={0.5}>
        <Grid item xs={6}>
          <GridContainer imageUrl={secondTvl.imageUrl} height={'12rem'}>
            <TvlContentBox
              avatar={secondTvl.imageUrl}
              token={secondTvl.token}
              total={secondTvl.total}
              tokenName={secondTvl.tokenName}
            />
          </GridContainer>
        </Grid>

        <Grid item container xs={6} spacing={0.5}>
          <Grid item xs={4}>
            <GridContainer imageUrl={thirdTvl.imageUrl} height={'12rem'} smallCard>
              <TvlContentBox
                avatar={thirdTvl.imageUrl}
                token={thirdTvl.token}
                total={thirdTvl.total}
                tokenName={thirdTvl.tokenName}
              />
            </GridContainer>
          </Grid>

          <Grid item xs={4}>
            <GridContainer imageUrl={fourthTvl.imageUrl} height={'12rem'} smallCard>
              <TvlContentBox
                avatar={fourthTvl.imageUrl}
                token={fourthTvl.token}
                total={fourthTvl.total}
                tokenName={fourthTvl.tokenName}
              />
            </GridContainer>
          </Grid>

          {/* Last tvl container */}
          <Grid item container xs={4} direction='column'>
            <Grid item xs={6}>
              <GridContainer imageUrl={fifthTvl.imageUrl} height={'5.85rem'} smallCard>
                <TvlContentBox
                  avatar={fifthTvl.imageUrl}
                  token={fifthTvl.token}
                  total={fifthTvl.total}
                  tokenName={fifthTvl.tokenName}
                  isLast={true}
                />
              </GridContainer>
            </Grid>

            <Grid item container xs={6} spacing={0.5}>
              <Grid item xs={9}>
                <GridContainer imageUrl={sixthTvl.imageUrl} height={'5.85rem'} smallCard>
                  <TvlContentBox
                    avatar={sixthTvl.imageUrl}
                    token={sixthTvl.token}
                    total={sixthTvl.total}
                    tokenName={sixthTvl.tokenName}
                    isLast={true}
                  />
                </GridContainer>
              </Grid>

              <Grid item xs={3}>
                <GridContainer height={'5.85rem'}>
                  <OthersBox>
                    <OthersText>Others</OthersText>
                  </OthersBox>
                </GridContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TvlContainer>
  );
};

const TvlContainer = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  width: '75rem',
});

interface GridContainerProps {
  imageUrl?: string;
  height?: string;
  smallCard?: boolean;
}

const GridContainer = styled(Grid)(({ imageUrl, height, smallCard }: GridContainerProps) => {
  const { currentTheme } = useCustomTheme();
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
      top: -25,
      left: smallCard ? -50 : -95,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      backgroundSize: smallCard ? '200px' : '400px',
      filter: smallCard ? 'blur(95px)' : 'blur(150px)',
    },
  };
});

const OthersBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const OthersText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textSecondary,
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
  };
});
