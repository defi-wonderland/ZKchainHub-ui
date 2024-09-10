import { Constants } from '~/types';

const constants: Constants = {
  SUPPORTED_LANGUAGES: ['en', 'es'],
  DEFAULT_LANG: 'en',
  THEME_KEY: 'theme',
};

export const getConstants = (): Constants => {
  return constants;
};
