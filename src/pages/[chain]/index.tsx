import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { EcosystemChainData } from '~/types';
import { CustomHead } from '~/components';
import { useData } from '~/hooks';
import { fetchEcosystemData } from '~/utils';
import { ChainDetail } from '~/containers';
import { getConfig } from '~/config';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

interface ChainProps {
  chain: EcosystemChainData;
}

const Chain = ({ chain }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSelectedChainId, refetchChainData } = useData();

  useEffect(() => {
    setSelectedChainId(chain?.chainId);
    refetchChainData({ throwOnError: true, cancelRefetch: false });
  }, [chain?.chainId, setSelectedChainId, refetchChainData]);

  return (
    <>
      <CustomHead title={chain?.chainName} />
      <ChainDetail />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ecosystemData = await fetchEcosystemData();
  const chains = ecosystemData.zkChains;

  const paths = SUPPORTED_LANGUAGES.flatMap((locale) =>
    chains.map((chain: EcosystemChainData) => ({
      params: { chain: chain.chainId.toString() },
      locale,
    })),
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ChainProps> = async ({ params, locale }: GetStaticPropsContext) => {
  const ecosystemData = await fetchEcosystemData();
  const chains = ecosystemData.zkChains;
  const chainId = parseInt(params?.chain as string);
  const chain = chains.find((chain: EcosystemChainData) => chain.chainId === chainId);

  if (!chain) {
    return { notFound: true };
  }

  const i18Config = await serverSideTranslations(locale || DEFAULT_LANG, ['common'], null, SUPPORTED_LANGUAGES);

  return {
    props: {
      chain,
      ...i18Config,
    },
  };
};

export default Chain;
