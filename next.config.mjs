/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  output: 'standalone',
};

export default nextConfig;
