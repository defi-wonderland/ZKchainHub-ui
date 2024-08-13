import { useContext } from 'react';
import { SearchContext } from '~/providers/SearchProvider';

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};
