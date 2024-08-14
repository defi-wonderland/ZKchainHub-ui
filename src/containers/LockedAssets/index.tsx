import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Box, Typography, styled, Button } from '@mui/material';

import { TotalValueLocked } from '~/components';
import { useData, useCustomTheme } from '~/hooks';
import { formatDataNumber } from '~/utils';

export const LockedAssets = () => {
  const { t } = useTranslation();
  const { ecosystemData, totalL1TVL } = useData();
  const router = useRouter();

  const goToTokensPage = () => {
    router.push('/tokens');
  };

  return (
    <StyledSection>
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
          <ButtonContainer>
            <AllTokensButton onClick={goToTokensPage}> {t('HOME.LOCKEDASSETS.allTokens')} </AllTokensButton>{' '}
          </ButtonContainer>
        </>
      )}
    </StyledSection>
  );
};

export const StyledSection = styled('section')(() => ({
  width: '100%',
}));

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

const AllTokensButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    padding: '0.5rem 1rem',
    gap: currentTheme.gap,
    width: '5.5rem',
    height: '2.25rem',
    textTransform: 'none',
    fontSize: '0.75rem',
    marginTop: '1.5rem',
    alignItems: 'center',
  };
});

export const ButtonContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});
