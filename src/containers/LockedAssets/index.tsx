import { TotalValueLocked, Title } from '~/components';
import { useData } from '~/hooks';
import { formatDataNumber } from '~/utils';

export const LockedAssets = () => {
  const { ecosystemData } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <Title title={`Locked assets in shared bridge: ${formatDataNumber(ecosystemData.total, 0, true, true)}`} />
          <TotalValueLocked tvl={ecosystemData.tvl} />
        </>
      )}
    </section>
  );
};
