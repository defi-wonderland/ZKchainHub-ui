import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

import { CustomHead } from '~/components';
import { getConfig } from '~/config';
import { ErrorContainer } from '~/containers';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

type ErrorPageProps = {
  errorCode: string;
};

const ErrorPage = ({ errorCode }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <CustomHead title={t('ERROR.title')} />
      <ErrorContainer errorCode={errorCode} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const i18Config = await serverSideTranslations(locale || DEFAULT_LANG, ['common'], null, SUPPORTED_LANGUAGES);

  // Retrieve error code from params or context
  const errorCode = params?.code || 'ERROR_FETCHING_DATA';

  return {
    props: {
      ...i18Config,
      errorCode,
    },
  };
};

export default ErrorPage;
