import { useTranslation } from 'next-i18next';
import { InfoBox, Title } from '~/components';
import { useData } from '~/hooks';

export const ChainInformation = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <article>
      <Title title={t('CHAIN.CHAININFORMATION.title')} />
      <div>
        <InfoBox title={t('CHAIN.CHAININFORMATION.chainType')} description={chainData?.chainType} />
        <InfoBox title={t('CHAIN.CHAININFORMATION.lastBlock')} description={chainData?.l2ChainInfo.lastBlock} />
        <InfoBox
          title={t('CHAIN.CHAININFORMATION.lastBlockVerified')}
          description={chainData?.l2ChainInfo.lastBlockVerified}
        />
        <InfoBox title={t('CHAIN.CHAININFORMATION.transactionsPerSecond')} description={chainData?.l2ChainInfo.tps} />
        <InfoBox
          title={t('CHAIN.CHAININFORMATION.totalBatchesCommitted')}
          description={chainData?.batchesInfo.commited}
        />
        <InfoBox title={t('CHAIN.CHAININFORMATION.totalBatchesExecuted')} description={chainData?.batchesInfo.proved} />
        <InfoBox
          title={t('CHAIN.CHAININFORMATION.totalBatchesVerified')}
          description={chainData?.batchesInfo.verified}
        />
        <InfoBox
          title={t('CHAIN.CHAININFORMATION.averageBlockTime')}
          description={chainData?.l2ChainInfo.avgBlockTime}
        />
      </div>
    </article>
  );
};
