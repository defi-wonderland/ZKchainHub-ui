import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { InfoBox } from '~/components';
import { useData } from '~/hooks';

export const ChainDescription = () => {
  const { t } = useTranslation();
  const { chainData, ecosystemData } = useData();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChainId = event.target.value;
    router.push(`/${selectedChainId}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <div>
        <div>
          {/* <img></img> */}
          <select onChange={handleChange} value={chainData?.chainId || ''}>
            {ecosystemData?.chains.map((chain) => (
              <option key={chain.id} value={chain.id}>
                {chain.name}
              </option>
            ))}
          </select>
          <span>{chainData?.chainId}</span>
        </div>

        <button onClick={handleBack}>{t('CHAIN.backButton')}</button>
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
