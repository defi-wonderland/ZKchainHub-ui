import Head from 'next/head';

interface MetadataProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
}

export const CustomHead = ({ title }: MetadataProps) => {
  return (
    <Head>
      <title>{`${title} - ZKchainHub`}</title>
      <meta property='og:title' content={`${title} - ZKchainHub`} />
      <meta name='twitter:title' content={`${title} - ZKchainHub`} />
    </Head>
  );
};
