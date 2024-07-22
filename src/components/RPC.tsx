import { useTranslation } from 'next-i18next';
import { InfoBox, Title } from '~/components';
import { useData } from '~/hooks';

export const TVL = () => {
  const { t } = useTranslation();
  const { chainData } = useData();

  return (
    <article>
      <Title title={t('CHAIN.RPC.title')} />
      <div>
        {chainData?.metadata?.publicRpcs &&
          chainData.metadata.publicRpcs.map((rpc, index) => (
            <div key={index}>
              <InfoBox title={t('CHAIN.RPC.status')} description={rpc.url} />
            </div>
          ))}
      </div>
    </article>
  );
};
