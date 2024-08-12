import { createContext, useState } from 'react';
import router from 'next/router';

type ContextType = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;

  isSearch: boolean;
  setIsSearch: (val: boolean) => void;

  handleSearchOn: () => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const SearchContext = createContext({} as ContextType);

export const SearchProvider = ({ children }: StateProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleSearchOn = () => {
    setIsSearch(true);
    router.push('/search');
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        isSearch,
        setIsSearch,
        handleSearchOn,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
