export interface Env {
  RPC_URL: string;
  PROJECT_ID: string;
  ALCHEMY_KEY: string;
  API_URL: string;
}

export type SupportedLanguage = 'en' | 'es';
export interface Constants {
  SUPPORTED_LANGUAGES: SupportedLanguage[];
  DEFAULT_LANG: SupportedLanguage;
}

export interface Config extends Env, Constants {}
