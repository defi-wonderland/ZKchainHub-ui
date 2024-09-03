import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents() {},
    env: {
      NEXT_PUBLIC_API_BASE_URL: 'http://mock-api:3000',
    },
  },
});
