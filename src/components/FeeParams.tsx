import { useTranslation } from 'next-i18next';
import { InfoBox, Title } from '~/components';
import { useData } from '~/hooks';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <article>
      <Title title={t('CHAIN.FEEPARAMS.title')} />
      <div>
        <InfoBox title={t('CHAIN.FEEPARAMS.batch')} description={chainData?.feeParams.batchOverheadL1Gas} />
        <InfoBox title={t('CHAIN.FEEPARAMS.compute')} description={chainData?.feeParams.maxPubdataPerBatch} />
        <InfoBox title={t('CHAIN.FEEPARAMS.maxGasBatch')} description={chainData?.feeParams.maxL2GasPerBatch} />
      </div>
    </article>
  );
};
