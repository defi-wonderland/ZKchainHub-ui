import { useTranslation } from 'next-i18next';

import { ChainInfoCard, STitle, DataContainer } from '~/components';
import { useData } from '~/hooks';

import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';
import TagDark from '~/assets/icons/tagDark.svg';
import TagLight from '~/assets/icons/tagLight.svg';
import MaxDark from '~/assets/icons/maxDark.svg';
import MaxLight from '~/assets/icons/maxLight.svg';
import CheckBlockDark from '~/assets/icons/checkBlockDark.svg';
import CheckBlockLight from '~/assets/icons/checkBlockLight.svg';

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
          darkIcon={TagDark}
          lightIcon={TagLight}
          size={20}
          alt='tag-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.compute')}
          description={getDescription(chainData?.feeParams.maxPubdataPerBatch)}
          isDataAvailable={!!chainData?.feeParams.maxPubdataPerBatch}
          darkIcon={BlockDark}
          lightIcon={BlockLight}
          size={20}
          alt='block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.lastBlockVerified')}
          description={getDescription(chainData?.l2ChainInfo?.lastBlockVerified)}
          isDataAvailable={!!chainData?.l2ChainInfo?.lastBlockVerified}
          darkIcon={CheckBlockDark}
          lightIcon={CheckBlockLight}
          size={20}
          alt='check-block-icon'
        />

        <ChainInfoCard
          title={t('CHAIN.FEEPARAMS.maxGasBatch')}
          description={getDescription(chainData?.feeParams.maxL2GasPerBatch)}
          isDataAvailable={!!chainData?.feeParams.maxL2GasPerBatch}
          darkIcon={MaxDark}
          lightIcon={MaxLight}
          size={20}
          alt='max-icon'
        />
      </DataContainer>
    </article>
  );
};
