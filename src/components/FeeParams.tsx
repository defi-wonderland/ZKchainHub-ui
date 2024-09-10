import { useTranslation } from 'next-i18next';

import { ChainInfoCard, STitle, DataContainer } from '~/components';
import { useData } from '~/hooks';
import { getDescription } from '~/utils';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData, maxL2GasPerBatch } = useData();
  const notAvailable = t('CHAIN.CHAININFORMATION.notAvailable');

  return (
    <article>
      <STitle>{t('CHAIN.FEEPARAMS.title')} </STitle>
      <DataContainer>
        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.batch')}
          description={getDescription(chainData?.feeParams.batchOverheadL1Gas, notAvailable)}
          isDataAvailable={!!chainData?.feeParams.batchOverheadL1Gas}
          icon='tag'
          size={20}
          alt='Batch overhead gas tag icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.maxPubData')}
          description={getDescription(chainData?.feeParams.maxPubdataPerBatch, notAvailable)}
          isDataAvailable={!!chainData?.feeParams.maxPubdataPerBatch}
          icon='block'
          size={20}
          alt='Maximum pubdata per batch block icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.priorityTxMaxPubdata')}
          description={getDescription(chainData?.feeParams?.priorityTxMaxPubdata, notAvailable)}
          isDataAvailable={!!chainData?.feeParams?.priorityTxMaxPubdata}
          icon='checkBlock'
          size={20}
          alt='Last verified block check icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={getDescription(maxL2GasPerBatch, notAvailable)}
          isDataAvailable={!!maxL2GasPerBatch}
          icon='max'
          size={20}
          alt='Maximum gas per batch icon'
        />
      </DataContainer>
    </article>
  );
};
