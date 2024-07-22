import { useTranslation } from 'next-i18next';
import { InfoCard } from './InfoCard';

export const ChainInformation = () => {
  const { t } = useTranslation();

  return (
    <section>
      <InfoCard title={t('CHAIN.CHAININFORMATION.title')} />
      <InfoCard title={t('CHAIN.ZKCHAINTVL.title')} />
      <InfoCard title={t('CHAIN.RPC.title')} />
      <InfoCard title={t('CHAIN.FEEPARAMS.title')} />
    </section>
  );
};
