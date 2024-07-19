import { useTranslation } from 'next-i18next';

import { TotalValueLocked, Title } from '~/components';
import { useData } from '~/hooks';
import { formatDataNumber } from '~/utils';

export const LockedAssets = () => {
  const { t } = useTranslation();
  const { ecosystemData } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <Title title={`${t('HOME.lockedAssets')}: ${formatDataNumber(ecosystemData.total, 0, true, true)}`}/>
          <TotalValueLocked tvl={ecosystemData.tvl} />
        </>
      )}
    </section>
  );
};
