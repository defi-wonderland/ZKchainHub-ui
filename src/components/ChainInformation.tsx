import { Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ChainInfoCard } from '~/components';
import { useData, useCustomTheme } from '~/hooks';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  const getDescription = (data: string | number | undefined) => data ?? t('CHAIN.CHAININFORMATION.notAvailable');

  return (
    <article>
      <STitle variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </STitle>
      <DataContainer role='region' aria-labelledby='chain-info'>
        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.chainType')}
          description={getDescription(chainData?.chainType)}
          isDataAvailable={!!chainData?.chainType}
          icon='chainType'
          size={22}
          alt='Icon representing a type of chain'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlock')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlock)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlock}
          icon='block'
          size={22}
          alt='Block icon representing the last block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          icon='checkBlock'
          size={22}
          alt='Checked block icon indicating the last verified block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')}
          description={getDescription(chainData?.l2ChainInfo?.tps)}
          isDataAvailable={!!chainData?.l2ChainInfo?.tps}
          icon='speed'
          size={22}
          alt='Speed icon  representing transactions per second'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
          description={getDescription(chainData?.batchesInfo?.commited)}
          isDataAvailable={!!chainData?.batchesInfo?.commited}
          icon='block'
          size={22}
          alt='Block icon  representing total batches committed'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
          description={getDescription(chainData?.batchesInfo?.executed)}
          isDataAvailable={!!chainData?.batchesInfo?.executed}
          icon='block'
          size={22}
          alt='Block icon representing total batches executed'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
          description={getDescription(chainData?.batchesInfo?.verified)}
          isDataAvailable={!!chainData?.batchesInfo?.verified}
          icon='checkBlock'
          size={22}
          alt='Checked block icon representing total batches verified'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
          description={getDescription(chainData?.l2ChainInfo?.avgBlockTime)}
          isDataAvailable={!!chainData?.l2ChainInfo?.avgBlockTime}
          icon='speed'
          size={22}
          alt='Speed icon representing average block time'
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
