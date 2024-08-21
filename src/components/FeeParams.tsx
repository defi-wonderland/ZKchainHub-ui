import { useTranslation } from 'next-i18next';

import { ChainInfoCard, STitle, DataContainer } from '~/components';
import { useData } from '~/hooks';
import { getDescription } from '~/utils';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
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
          title={t('CHAIN.FEEPARAMS.compute')}
          description={getDescription(chainData?.feeParams.maxPubdataPerBatch, notAvailable)}
          isDataAvailable={!!chainData?.feeParams.maxPubdataPerBatch}
          icon='block'
          size={20}
          alt='Maximum pubdata per batch block icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified, notAvailable)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          icon='checkBlock'
          size={20}
          alt='Last verified block check icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={getDescription(chainData?.feeParams.maxL2GasPerBatch, notAvailable)}
          isDataAvailable={!!chainData?.feeParams.maxL2GasPerBatch}
          icon='max'
          size={20}
          alt='Maximum gas per batch icon'
        />
      </DataContainer>
    </article>
  );
};
