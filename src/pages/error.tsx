import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

import { CustomHead } from '~/components';
import { getConfig } from '~/config';
import { ErrorContainer } from '~/containers';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CustomHead title={t('ERROR.title')} />
      <ErrorContainer />
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

export default ErrorPage;
