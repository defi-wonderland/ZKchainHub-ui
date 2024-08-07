import { ChainMetadata } from './ChainMetadata';
import { ChainDescription } from './ChainDescription';
import { Breadcrumb } from '~/components';

export const ChainDetail = () => {
  return (
    <div>
      <Breadcrumb isChain={true} />
      <ChainMetadata />
      <ChainDescription />
    </div>
  );
};
