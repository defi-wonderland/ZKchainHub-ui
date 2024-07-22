import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { InfoBox } from '~/components';
import { useData } from '~/hooks';
import { formatTimestampToDate } from '~/utils';

export const ChainMetadata = () => {
  const { t } = useTranslation();
  const { chainData, ecosystemData } = useData();
  const router = useRouter();
  const data = chainData?.metadata;

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
          <select onChange={handleChange} value={data?.chainName || ''}>
            {ecosystemData?.chains.map((chain) => (
              <option key={chain.id} value={chain.id}>
                {chain.name}
              </option>
            ))}
          </select>
          <span>{data?.chainId}</span>
        </div>

        <button onClick={handleBack}>{t('CHAIN.backButton')}</button>
      </div>

      <div>
        <InfoBox title={t('CHAIN.website')} description={data?.websiteUrl} />
        <InfoBox title={t('CHAIN.explorer')} description={data?.explorerUrl} />
        <InfoBox title={t('CHAIN.launchDate')} description={formatTimestampToDate(data?.launchDate)} />
        <InfoBox title={t('CHAIN.environment')} description={data?.environment} />
        <InfoBox title={t('CHAIN.nativeToken')} description={data?.nativeToken} />
      </div>
    </div>
  );
};
