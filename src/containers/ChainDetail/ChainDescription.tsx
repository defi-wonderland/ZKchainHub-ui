import { ChainInformation, FeeParams, RPC, TVL } from '~/components';

export const ChainDescription = () => {
  return (
    <section>
      <ChainInformation />
      <TVL />
      <RPC />
      <FeeParams />
    </section>
  );
};
