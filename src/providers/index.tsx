import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';
import { DataProvider } from './DataProvider';
import { SearchProvider } from './SearchProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <StateProvider>
        <SearchProvider>
          <WalletProvider>
            <DataProvider>{children}</DataProvider>
          </WalletProvider>
        </SearchProvider>
      </StateProvider>
    </ThemeProvider>
  );
};
