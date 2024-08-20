import { Grid } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { TvlData, TotalValueLockedProps } from '~/types';
import { TokenInfo, GridContainer, TvlContainer, OthersText, OthersBox } from '~/components';

export const MobileTvlContainer = ({ tvl }: TotalValueLockedProps) => {
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
        <TokenInfo
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
