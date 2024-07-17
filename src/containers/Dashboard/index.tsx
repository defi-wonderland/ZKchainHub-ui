import { useState } from 'react';
import { SearchBar, Table, Title } from '~/components';
import { useData } from '~/hooks';

export const Dashboard = () => {
  const { ecosystemData } = useData();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  // Filter chains based on search term
  const filteredChains = ecosystemData?.chains.filter((chain) =>
    chain.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section>
      <header>
        <Title title={'Chain list'} />
        <SearchBar value={searchTerm} onChange={handleChange} />
      </header>

      <Table chains={filteredChains} />
    </section>
  );
};
