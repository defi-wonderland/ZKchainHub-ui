import { Typography, styled, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ChainInfoCard } from '~/components';
import { useData, useCustomTheme } from '~/hooks';

import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';
import ChainTypeDark from '~/assets/icons/chainTypeDark.svg';
import ChainTypeLight from '~/assets/icons/chainTypeLight.svg';
import CheckBlockDark from '~/assets/icons/checkBlockDark.svg';
import CheckBlockLight from '~/assets/icons/checkBlockLight.svg';
import SpeedDark from '~/assets/icons/speedDark.svg';
import SpeedLight from '~/assets/icons/speedLight.svg';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  const getDescription = (data: string | number | undefined) => data ?? t('CHAIN.CHAININFORMATION.notAvailable');

  return (
    <article>
      <STitle variant='h5' gutterBottom>
        {t('CHAIN.CHAININFORMATION.title')}
      </STitle>
      <DataContainer>
        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.chainType')}
          description={getDescription(chainData?.chainType)}
          isDataAvailable={!!chainData?.chainType}
          darkIcon={ChainTypeDark}
          lightIcon={ChainTypeLight}
          size={22}
          alt='chain-type-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlock')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlock)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlock}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          darkIcon={CheckBlockDark}
          lightIcon={CheckBlockLight}
          size={22}
          alt='check-block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')}
          description={getDescription(chainData?.l2ChainInfo?.tps)}
          isDataAvailable={!!chainData?.l2ChainInfo?.tps}
          darkIcon={SpeedDark}
          lightIcon={SpeedLight}
          size={22}
          alt='speed-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
          description={getDescription(chainData?.batchesInfo?.commited)}
          isDataAvailable={!!chainData?.batchesInfo?.commited}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')}
          description={getDescription(chainData?.batchesInfo?.executed)}
          isDataAvailable={!!chainData?.batchesInfo?.executed}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={22}
          alt='block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
          description={getDescription(chainData?.batchesInfo?.verified)}
          isDataAvailable={!!chainData?.batchesInfo?.verified}
          darkIcon={CheckBlockDark}
          lightIcon={CheckBlockLight}
          size={22}
          alt='check-block'
        />

        <ChainInfoCard
          title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
          description={getDescription(chainData?.l2ChainInfo?.avgBlockTime)}
          isDataAvailable={!!chainData?.l2ChainInfo?.avgBlockTime}
          darkIcon={SpeedDark}
          lightIcon={SpeedLight}
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
