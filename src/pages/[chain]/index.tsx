import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { EcosystemChainData } from '~/types';
import { CustomHead } from '~/components';
import { useData } from '~/hooks';
import { fetchEcosystemData } from '~/utils';
import { ChainDetail } from '~/containers';
import { getConfig } from '~/config';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

interface ChainProps {
  chain: EcosystemChainData | null;
}

const Chain = ({ chain }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSelectedChainId, refetchChainData } = useData();
  const { t } = useTranslation();

  useEffect(() => {
    if (chain?.chainId) {
      setSelectedChainId(chain.chainId);
    }
  }, [chain?.chainId, setSelectedChainId, refetchChainData]);

  if (!chain) {
    return <div>{t('ERROR.errorFetchingData')}</div>;
  }

  return (
    <>
      <CustomHead title={chain?.chainId} />
      <ChainDetail />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];

  try {
    const ecosystemData = await fetchEcosystemData();
    const chains = ecosystemData.zkChains;

    paths = SUPPORTED_LANGUAGES.flatMap((locale) =>
      chains.map((chain: EcosystemChainData) => ({
        params: { chain: chain.chainId.toString() },
        locale,
      })),
    );
  } catch (error) {
    console.error('Failed to fetch ecosystem data:', error);
  }

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ChainProps> = async ({ params, locale }: GetStaticPropsContext) => {
  const chain: EcosystemChainData | null = null;

  try {
    const ecosystemData = await fetchEcosystemData();
    const chains = ecosystemData.zkChains;
    const chainId = params?.chain;
    const chain = chains.find((chain: EcosystemChainData) => chain.chainId === chainId);
    if (!chain) {
      return { notFound: true };
    }
  } catch (error) {
    console.error('Failed to fetch ecosystem data:', error);
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
