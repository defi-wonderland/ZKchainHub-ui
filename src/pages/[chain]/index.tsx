import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { EcosystemChainData } from '~/types';
import { CustomHead } from '~/components';
import { useData } from '~/hooks';
import { fetchEcosystemData } from '~/utils';
import { ChainDetail } from '~/containers';
import { getConfig } from '~/config';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES, API_URL } = getConfig();

interface ChainProps {
  chain: EcosystemChainData;
}

const Chain = ({ chain }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSelectedChainId, refetchChainData } = useData();

  useEffect(() => {
    if (chain.chainId) {
      setSelectedChainId(chain.chainId);
    }
  }, [chain?.chainId, setSelectedChainId, refetchChainData]);

  return (
    <>
      <CustomHead title={chain?.chainId} />
      <ChainDetail />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!API_URL) {
    console.warn('API URL not set, generating fallback paths.');
    return {
      paths: [],
      fallback: true,
    };
  }

  let ecosystemData;
  try {
    ecosystemData = await fetchEcosystemData();
  } catch (error) {
    console.error('Failed to fetch ecosystem data:', error);
    return {
      paths: [],
      fallback: true,
    };
  }

  const chains = ecosystemData.zkChains || [];

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
  const chainId = params?.chain;
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
