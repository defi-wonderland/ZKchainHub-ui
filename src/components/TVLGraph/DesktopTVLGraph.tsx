import { Grid } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { TvlData, TotalValueLockedProps } from '~/types';
import { TokenInfo, GridContainer, TvlContainer, OthersText, OthersBox } from '~/components';

export const DesktopTVLGraph = ({ tvl }: TotalValueLockedProps) => {
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
      <GridContainer image={data.imageUrl} height={height} small={smallCard?.toString()}>
        <TokenInfo
          avatar={data.imageUrl}
          token={data.symbol}
          total={data.amountUsd}
          tokenName={data.name}
          isLast={isLast?.toString()}
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
