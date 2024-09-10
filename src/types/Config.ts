export interface Env {
  PROJECT_ID: string;
  API_URL: string;
  TESTNET_MODE: string;
}

export type SupportedLanguage = 'en' | 'es';

export interface Constants {
  SUPPORTED_LANGUAGES: SupportedLanguage[];
  DEFAULT_LANG: SupportedLanguage;
  THEME_KEY: string;
}

export interface Config extends Env, Constants {}
