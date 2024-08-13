import { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

type ContextType = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  isSearch: boolean;
  setIsSearch: (val: boolean) => void;
  navigateToSearch: () => void;
  closeSearch: () => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const SearchContext = createContext({} as ContextType);

export const SearchProvider = ({ children }: StateProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [previousPage, setPreviousPage] = useState<string>('');
  const router = useRouter();

  const navigateToSearch = useCallback(() => {
    setPreviousPage(router.asPath); // Save the current page before navigating to search
    router.push('/search');
  }, [router]);

  const closeSearch = useCallback(() => {
    if (previousPage && previousPage !== '/search') {
      router.push(previousPage); // Go back to the previous page if it's not the search page
    } else {
      router.push('/'); // Otherwise, go to the home page
    }
    setIsSearch(false);
  }, [previousPage, router]);

  useEffect(() => {
    if (!isSearch) {
      setPreviousPage('');
    }
  }, [isSearch]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        isSearch,
        setIsSearch,
        navigateToSearch,
        closeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
