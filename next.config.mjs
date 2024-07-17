/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
  outputFileTracing: true
};

export default nextConfig;
