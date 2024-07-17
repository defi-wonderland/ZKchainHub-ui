import { useTranslation } from 'next-i18next';

import { TotalValueLocked, Title } from '~/components';
import { useData } from '~/hooks';

export const LockedAssets = () => {
  const { t } = useTranslation();
  const { ecosystemData } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <Title title={`${t('HOME.lockedAssets')}: ${ecosystemData.total}`} />
          <TotalValueLocked tvl={ecosystemData.tvl} />
        </>
      )}
    </section>
  );
};
