import { useTranslation } from 'next-i18next';
import { InfoBox, Title } from '~/components';
import { useData } from '~/hooks';

export const RPC = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <article>
      <Title title={t('CHAIN.TVL.title')} />
      <div>
        {chainData?.tvl &&
          Object.entries(chainData.tvl).map(([token, value]) => (
            <InfoBox key={token} title={token} description={value.toString()} />
          ))}
      </div>
    </article>
  );
};
