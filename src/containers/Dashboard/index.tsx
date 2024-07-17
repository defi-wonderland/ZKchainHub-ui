import { SearchBar, Table, Title } from '~/components';

export const Dashboard = () => {
  return (
    <section>
      <header>
        <Title title='Chain list' />
        <SearchBar />
      </header>
      <Table />
    </section>
  );
};
