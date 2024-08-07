import { useTranslation } from 'next-i18next';

import { InfoBox, STitle, DataContainer } from '~/components';
import { useData } from '~/hooks';
import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';

export const FeeParams = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <>
      <STitle>{t('CHAIN.FEEPARAMS.title')} </STitle>
      <DataContainer>
        <InfoBox
          title={t('CHAIN.FEEPARAMS.batch')}
          description={chainData?.feeParams.batchOverheadL1Gas}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block'
        />

        <InfoBox
          title={t('CHAIN.FEEPARAMS.compute')}
          description={chainData?.feeParams.maxPubdataPerBatch}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block'
        />

        <InfoBox
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={chainData?.feeParams.maxL2GasPerBatch}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block'
        />

        <InfoBox
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={chainData?.feeParams.maxL2GasPerBatch}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block'
        />
      </DataContainer>
    </>
  );
};
