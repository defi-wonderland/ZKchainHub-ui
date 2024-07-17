import { SearchBar, Table, Title } from '~/components';

const Dashboard = () => {
  return (
    <section>
      <header>
        <Title title="Chain list" />
        <SearchBar />
      </header>
      <Table />
    </section>
  );
};

export default Dashboard;
