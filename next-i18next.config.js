/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales')
  },
};
