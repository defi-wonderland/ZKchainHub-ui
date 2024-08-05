import { ChainInformation, FeeParams, RPC, TVL } from '~/components';

export const ChainDescription = () => {
  return (
    <section>
      <ChainInformation />
      <RPC />
      <FeeParams />
      <TVL />
    </section>
  );
};
