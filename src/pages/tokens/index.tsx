import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

import { CustomHead } from '~/components';
import { Tokens } from '~/containers';
import { getConfig } from '~/config';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

const TokensPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CustomHead title={t('TOKENS.title')} />
      <Tokens />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18Config = await serverSideTranslations(locale || DEFAULT_LANG, ['common'], null, SUPPORTED_LANGUAGES);

  return {
    props: {
      ...i18Config,
    },
  };
};

export default TokensPage;
