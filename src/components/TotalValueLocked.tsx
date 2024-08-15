import { Box, Typography, Grid, styled, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { TvlData, TotalValueLockedProps } from '~/types';
import { TvlContentBox } from '~/components';
import { useCustomTheme } from '~/hooks';

export const TotalValueLocked = ({ tvl }: TotalValueLockedProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isMobile && <MobileTvlContainer tvl={tvl} />}
      {!isMobile && <DesktopTvlContainer tvl={tvl} />}
    </>
  );
};

const MobileTvlContainer = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  const renderTvlContent = (
    data: TvlData,
    index: number,
    height: string,
    xs: number,
    smallCard?: boolean,
    isLast?: boolean,
  ) => (
    <Grid item xs={xs} key={index}>
      <GridContainer imageUrl={data.imageUrl} height={height} smallCard={smallCard}>
        <TvlContentBox
          avatar={data.imageUrl}
          token={data.symbol}
          total={data.amountUsd}
          tokenName={data.name}
          isLast={isLast}
        />
      </GridContainer>
    </Grid>
  );

  return (
    <TvlContainer container spacing={0.5}>
      {/* First item: full width */}
      {renderTvlContent(tvl[0], 0, '12rem', 12)}

      {/* Second item: full width, half height */}
      {renderTvlContent(tvl[1], 1, '6rem', 12)}

      {/* Third and Fourth items: half width each */}
      <Grid item container xs={12} spacing={0.5}>
        {renderTvlContent(tvl[2], 2, '6rem', 6)}
        {renderTvlContent(tvl[3], 3, '6rem', 6)}
      </Grid>

      {/* Fifth item: half width */}
      <Grid item container xs={12} spacing={0.5}>
        {renderTvlContent(tvl[4], 4, '5rem', 6, true, true)}

        {/* Sixth item: two-thirds width +  others remaining */}
        <Grid item container xs={6} spacing={0.5}>
          {renderTvlContent(tvl[5], 5, '5rem', 9, true, true)}
          <Grid item xs={3}>
            <GridContainer height='5rem'>
              <OthersBox>
                <OthersText>{t('HOME.LOCKEDASSETS.others')}</OthersText>
              </OthersBox>
            </GridContainer>
          </Grid>
        </Grid>
      </Grid>
    </TvlContainer>
  );
};

const DesktopTvlContainer = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  const renderTvlContent = (
    data: TvlData,
    index: number,
    height: string,
    xs: number,
    smallCard?: boolean,
    isLast?: boolean,
  ) => (
    <Grid item xs={xs} key={index}>
      <GridContainer imageUrl={data.imageUrl} height={height} smallCard={smallCard}>
        <TvlContentBox
          avatar={data.imageUrl}
          token={data.symbol}
          total={data.amountUsd}
          tokenName={data.name}
          isLast={isLast}
        />
      </GridContainer>
    </Grid>
  );

  return (
    <TvlContainer container spacing={0.5}>
      {/* First item: full width */}
      {renderTvlContent(tvl[0], 0, '12rem', 12)}

      <Grid item container xs={12} spacing={0.5}>
        {/* Second item: half width */}
        {renderTvlContent(tvl[1], 1, '12rem', 6)}

        <Grid item container xs={6} spacing={0.5}>
          {/* Third and fourth items: one-third width each*/}
          {tvl.slice(2, 4).map((data, index) => renderTvlContent(data, index + 2, '12rem', 4, true))}

          <Grid item container xs={4} direction='column'>
            {/* Fifth item: one-third width and half height */}
            {renderTvlContent(tvl[4], 4, '5.85rem', 6, true)}

            <Grid item container xs={6} spacing={0.5}>
              {/* Sixth item: three-fourths width and halft height + others remaining width same height*/}
              {renderTvlContent(tvl[5], 5, '5.85rem', 9, true, true)}
              <Grid item xs={3}>
                <GridContainer height='5.85rem'>
                  <OthersBox>
                    <OthersText>{t('HOME.LOCKEDASSETS.others')}</OthersText>
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
  alignItems: 'flex-start',
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
      top: smallCard ? -20 : -25,
      left: smallCard ? -50 : -95,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: smallCard ? '200px' : '400px',
      backgroundPosition: smallCard && 'center',
      filter: smallCard ? 'blur(85px)' : 'blur(120px)',
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
