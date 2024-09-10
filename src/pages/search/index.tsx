import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

import { CustomHead } from '~/components';
import { SearchPage } from '~/containers';
import { getConfig } from '~/config';
import { useSearchContext } from '~/hooks';

const { DEFAULT_LANG, SUPPORTED_LANGUAGES } = getConfig();

const Search = () => {
  const { t } = useTranslation();
  const { setIsSearch } = useSearchContext();

  useEffect(() => {
    setIsSearch(true);

    // Cleanup function to reset the state when the component unmounts
    return () => setIsSearch(false);
  }, [setIsSearch]);

  return (
    <>
      <CustomHead title={t('HEADER.search')} />
      <SearchPage />
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

export default Search;
