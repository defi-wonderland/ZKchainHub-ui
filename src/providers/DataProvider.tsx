import { createContext, useState } from 'react';

import { ChainData } from '~/types';

type ContextType = {
  selectedChain?: ChainData;
  setSelectedChain: (val: ChainData) => void;
};

interface DataProps {
  children: React.ReactElement;
}

export const DataContext = createContext({} as ContextType);

export const DataProvider = ({ children }: DataProps) => {
  const [selectedChain, setSelectedChain] = useState<ChainData>();

  return (
    <DataContext.Provider
      value={{
        selectedChain,
        setSelectedChain,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
