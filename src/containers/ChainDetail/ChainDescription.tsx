import { useTranslation } from 'next-i18next';
import { InfoBox } from '~/components';
import { useData } from '~/hooks';

export const ChainDescription = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <div>
      <div>
        <div>
          {/* <img></img> */}
          <button>{chainData?.name}</button>
          <span></span>
        </div>

        <button>{t('CHAIN.backButton')}</button>
      </div>

      <div>
        <InfoBox title={t('CHAIN.website')} description={chainData?.website} />
        <InfoBox title={t('CHAIN.explorer')} description={chainData?.explorer} />
        <InfoBox title={t('CHAIN.launchDate')} description={chainData?.launchDate} />
        <InfoBox title={t('CHAIN.environment')} description={chainData?.environment} />
        <InfoBox title={t('CHAIN.nativeToken')} description={chainData?.nativeToken} />
      </div>
    </div>
  );
};
