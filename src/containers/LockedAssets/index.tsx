import { useTranslation } from 'next-i18next';

import { TotalValueLocked, Title } from '~/components';
import { useData } from '~/hooks';
import { formatDataNumber } from '~/utils';

export const LockedAssets = () => {
  const { t } = useTranslation();
  const { ecosystemData, totalL1TVL } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <Title title={`${t('HOME.lockedAssets')}: ${formatDataNumber(totalL1TVL, 0, true, true)}`} />
          <TotalValueLocked tvl={ecosystemData.l1Tvl} />
        </>
      )}
    </section>
  );
};
