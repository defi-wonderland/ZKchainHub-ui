import { TotalValueLocked } from '~/components';
import { useData } from '~/hooks';

export const LockedAssets = () => {
  const { ecosystemData } = useData();

  return (
    <div>
      {ecosystemData && (
        <>
          <h2>Locked assets in shared bridge: {ecosystemData.total}</h2>
          <TotalValueLocked tvl={ecosystemData.tvl} />
        </>
      )}
    </div>
  );
};
