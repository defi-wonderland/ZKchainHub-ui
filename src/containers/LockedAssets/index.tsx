import { TotalValueLocked } from '~/components';
import { Title } from '~/components/Title';
import { useData } from '~/hooks';

export const LockedAssets = () => {
  const { ecosystemData } = useData();

  return (
    <section>
      {ecosystemData && (
        <>
          <Title title={`Locked assets in shared bridge: ${ecosystemData.total}`} />
          <TotalValueLocked tvl={ecosystemData.tvl} />
        </>
      )}
    </section>
  );
};
