import { Box, Typography, Grid, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { TvlData } from '~/types';
import { TvlContentBox } from '~/components';
import { useCustomTheme } from '~/hooks';

interface TotalValueLockedProps {
  tvl: TvlData[];
}

export const TotalValueLocked = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  /**
   * Renders the TVL content within a grid container.
   * @param data - The TVL data.
   * @param index - The index of the item in the array.
   * @param height - The height of the container.
   * @param xs - The grid size for the container.
   * @param smallCard - Whether the card is small or not.
   * @param isLast - Whether the card is the last one or not.
   */
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
          token={data.token}
          total={data.total}
          tokenName={data.tokenName}
          isLast={isLast}
        />
      </GridContainer>
    </Grid>
  );

  return (
    <TvlContainer container spacing={0.5}>
      {renderTvlContent(tvl[0], 0, '12rem', 12)}

      <Grid item container xs={12} spacing={0.5}>
        {renderTvlContent(tvl[1], 1, '12rem', 6)}

        <Grid item container xs={6} spacing={0.5}>
          {tvl.slice(2, 4).map((data, index) => renderTvlContent(data, index + 2, '12rem', 4, true))}

          <Grid item container xs={4} direction='column'>
            {renderTvlContent(tvl[4], 4, '5.85rem', 6, true)}

            <Grid item container xs={6} spacing={0.5}>
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
      top: smallCard ? -20 : -25,
      left: smallCard ? -50 : -95,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: smallCard ? '200px' : '400px',
      backgroundPosition: 'center',
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
