import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { EcosystemChainData } from '~/types';
import { CustomHead } from '~/components';
import { useData } from '~/hooks';
import { fetchEcosystemData } from '~/utils';

interface ChainProps {
  chain: EcosystemChainData;
}

const Chain = ({ chain }: ChainProps) => {
  const { setSelectedChainId } = useData();

  useEffect(() => {
    setSelectedChainId(chain.id);
  }, [chain.id, setSelectedChainId]);

  return (
    <>
      <CustomHead title={chain.name} />
      <h1>{chain.name}</h1>
      {/* TODO: Add chain page containers */}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ecosystemData = await fetchEcosystemData();
  const chains = ecosystemData.chains;

  const paths = chains.map((chain: EcosystemChainData) => ({
    params: { chain: chain.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ecosystemData = await fetchEcosystemData();
  const chains = ecosystemData.chains;
  const chainId = parseInt(params?.chain as string);
  const chain = chains.find((chain: EcosystemChainData) => chain.id === chainId);

  if (!chain) {
    return { notFound: true };
  }

  return {
    props: {
      chain,
    },
  };
};

export default Chain;
