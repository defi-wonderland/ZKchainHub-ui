import { useTranslation } from 'next-i18next';

import { NotFound, DataTable, Title } from '~/components';
import { useData, useStateContext } from '~/hooks';

export const Dashboard = () => {
  const { t } = useTranslation();
  const { ecosystemData } = useData();
  const { searchTerm } = useStateContext();

  const filteredChains = ecosystemData?.zkChains.filter((chain) => {
    const chainIdStr = String(chain.chainId);
    const formattedSearchTerm = String(searchTerm).toLowerCase();

    // Check if either chain name or chain ID matches the search term
    const matchesName = chain.chainName.toLowerCase().includes(formattedSearchTerm);
    const matchesId = chainIdStr.includes(formattedSearchTerm);

    return matchesName || matchesId;
  });

  const availableChains = filteredChains?.length > 0;

  return (
    <section>
      <header>
        <Title title={t('HOME.DASHBOARD.title')} />
      </header>

      {availableChains && <DataTable chains={filteredChains} />}
      {!availableChains && <NotFound text={t('HOME.DASHBOARD.notFound')} />}
    </section>
  );
};
