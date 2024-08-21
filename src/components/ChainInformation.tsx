import { Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ChainInfoCard } from '~/components';
import { useData, useCustomTheme } from '~/hooks';
import { getDescription } from '~/utils';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const notAvailable = t('CHAIN.CHAININFORMATION.notAvailable');

  return (
    <article>
      <STitle variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </STitle>
      <DataContainer>
        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.chainType')}
          description={getDescription(chainData?.chainType, notAvailable)}
          isDataAvailable={!!chainData?.chainType}
          icon='chainType'
          size={22}
          alt='chain-type-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlock')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlock, notAvailable)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlock}
          icon='block'
          size={22}
          alt='block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified, notAvailable)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          icon='checkBlock'
          size={22}
          alt='check-block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')}
          description={getDescription(chainData?.l2ChainInfo?.tps, notAvailable)}
          isDataAvailable={!!chainData?.l2ChainInfo?.tps}
          icon='speed'
          size={22}
          alt='speed-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
          description={getDescription(Number(chainData?.batchesInfo?.commited), notAvailable)}
          isDataAvailable={!!chainData?.batchesInfo?.commited}
          icon='block'
          size={22}
          alt='block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
          description={getDescription(Number(chainData?.batchesInfo?.executed), notAvailable)}
          isDataAvailable={!!chainData?.batchesInfo?.executed}
          icon='block'
          size={22}
          alt='block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
          description={getDescription(Number(chainData?.batchesInfo?.verified), notAvailable)}
          isDataAvailable={!!chainData?.batchesInfo?.verified}
          icon='checkBlock'
          size={22}
          alt='check-block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
          description={getDescription(chainData?.l2ChainInfo?.avgBlockTime, notAvailable)}
          isDataAvailable={!!chainData?.l2ChainInfo?.avgBlockTime}
          icon='speed'
          size={22}
          alt='speed-icon'
        />
      </DataContainer>
    </article>
  );
};

export const DataContainer = styled(Box)(({ theme: muiTheme }) => {
  const { currentTheme, theme } = useCustomTheme();

  return {
    background: theme === 'dark' ? currentTheme.backgroundTertiary : currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',

    [muiTheme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  };
});

export const STitle = styled(Typography)(() => {
  return {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
    marginBottom: '1.5rem',
  };
});
