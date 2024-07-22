import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { NotFound, SearchBar, Table, Title } from '~/components';
import { useData } from '~/hooks';

export const Dashboard = () => {
  const { t } = useTranslation();
  const { ecosystemData } = useData();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredChains = ecosystemData?.chains.filter((chain) => {
    const chainIdStr = String(chain.id);
    const formattedSearchTerm = String(searchTerm).toLowerCase();

    // Check if either chain name or chain ID matches the search term
    const matchesName = chain.name.toLowerCase().includes(formattedSearchTerm);
    const matchesId = chainIdStr.includes(formattedSearchTerm);

    return matchesName || matchesId;
  });

  const availableChains = filteredChains?.length > 0;

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <section>
      <header>
        <Title title={t('HOME.DASHBOARD.title')} />
        <SearchBar value={searchTerm} onChange={handleChange} />
      </header>

      {availableChains && <Table chains={filteredChains} />}
      {!availableChains && <NotFound text={t('HOME.DASHBOARD.notFound')} />}
    </section>
  );
};
