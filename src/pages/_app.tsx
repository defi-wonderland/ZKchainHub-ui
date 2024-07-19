import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Providers } from '~/providers';
import Layout from './layout';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default appWithTranslation(Home);
