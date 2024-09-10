import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  const descriptionText = 'ZKsync ecosystem live L1 & L2 metrics.';
  const bannerImage = 'https://mainnet-zkchainhub.vercel.app/banner.png';

  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel='icon' href='/favicon.png' type='image/x-icon' sizes='48x48' />
        <meta name='description' content={descriptionText} />

        <meta property='og:title' content='ZK Chain Hub' />
        <meta property='og:description' content={descriptionText} />
        <meta name='twitter:image' content={bannerImage} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@zksync' />
        <meta name='twitter:creator' content='@zksync' />
        <meta name='twitter:title' content='ZK Chain Hub' />
        <meta name='twitter:description' content={descriptionText} />

        <meta name='twitter:image' content={bannerImage} />

        {/* To prevent all search engines from indexing */}
        <meta name='robots' content='noindex' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ) as JSX.Element;
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
