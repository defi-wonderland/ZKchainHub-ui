import { useTranslation } from 'next-i18next';
import { Box, Typography, styled } from '@mui/material';

import { TotalValueLocked } from '~/components';
import { useData, useCustomTheme } from '~/hooks';
import { formatDataNumber } from '~/utils';

export const LockedAssets = () => {
  const { t } = useTranslation();
  const { ecosystemData, totalL1TVL } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <LockedAssetsContainer>
            <Box>
              <Title>{t('HOME.LOCKEDASSETS.lockedAssets')}</Title>
              <Subtitle>{t('HOME.LOCKEDASSETS.lockedAssetsDescription')}</Subtitle>
            </Box>
            <TitleAmount>{formatDataNumber(totalL1TVL, 0, true, true)}</TitleAmount>
          </LockedAssetsContainer>
          <TotalValueLocked tvl={ecosystemData.l1Tvl} />
        </>
      )}
    </section>
  );
};

const LockedAssetsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.5rem',
}));

const Title = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  lineHeight: '2rem',
}));

const Subtitle = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
    color: currentTheme.textSecondary,
  };
});

const TitleAmount = styled(Typography)(() => ({
  fontSize: '2.25rem',
  fontWeight: 700,
  lineHeight: '2.5rem',
}));
