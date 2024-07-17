import { useTranslation } from 'next-i18next';

import { SearchBar, Table, Title } from '~/components';

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <section>
      <header>
        <Title title={t('HOME.DASHBOARD.title')} />
        <SearchBar />
      </header>
      <Table />
    </section>
  );
};
