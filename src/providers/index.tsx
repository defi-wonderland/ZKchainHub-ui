import type { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';
import { DataProvider } from './DataProvider';

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StateProvider>
          <DataProvider>
            <WalletProvider>{children}</WalletProvider>
          </DataProvider>
        </StateProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
