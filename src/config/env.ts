import { Env } from '~/types';

export const getEnv = (): Env => {
  const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
  const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const NEXT_PUBLIC_TESTNET_MODE = process.env.NEXT_PUBLIC_TESTNET_MODE;
  const NEXT_PUBLIC_TESTING_MODE = process.env.NEXT_PUBLIC_TESTING_MODE;

  return {
    PROJECT_ID: NEXT_PUBLIC_PROJECT_ID as string,
    API_URL: NEXT_PUBLIC_API_BASE_URL as string,
    TESTNET_MODE: NEXT_PUBLIC_TESTNET_MODE as string,
    TESTING_MODE: NEXT_PUBLIC_TESTING_MODE as string,
  };
};
