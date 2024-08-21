import { useTranslation } from 'next-i18next';

import { ChainInfoCard, STitle, DataContainer } from '~/components';
import { useData } from '~/hooks';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  const getDescription = (data: string | number | undefined) => data ?? t('CHAIN.CHAININFORMATION.notAvailable');

  return (
    <article>
      <STitle>{t('CHAIN.FEEPARAMS.title')} </STitle>
      <DataContainer>
        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.batch')}
          description={getDescription(chainData?.feeParams.batchOverheadL1Gas)}
          isDataAvailable={!!chainData?.feeParams.batchOverheadL1Gas}
          icon={'tag'}
          size={20}
          alt='tag-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.compute')}
          description={getDescription(chainData?.feeParams.maxPubdataPerBatch)}
          isDataAvailable={!!chainData?.feeParams.maxPubdataPerBatch}
          icon={'block'}
          size={20}
          alt='block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          icon={'checkBlock'}
          size={20}
          alt='check-block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={getDescription(chainData?.feeParams.maxL2GasPerBatch)}
          isDataAvailable={!!chainData?.feeParams.maxL2GasPerBatch}
          icon={'max'}
          size={20}
          alt='max-icon'
        />
      </DataContainer>
    </article>
  );
};
