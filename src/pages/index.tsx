import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import { Landing } from '~/containers';

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

const Ecosystem = () => {
  return (
    <>
      <Head>
        <title>ZKchainHub</title>
      </Head>
      <Landing />
    </>
  );
};

export default Ecosystem;
