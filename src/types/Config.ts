export interface Env {
  RPC_URL: string;
  PROJECT_ID: string;
  ALCHEMY_KEY: string;
  API_URL: string;
}

export interface Constants {
  // ...
}

export interface Config extends Env, Constants {}
