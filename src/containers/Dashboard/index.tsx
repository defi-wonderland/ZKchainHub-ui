import { SearchBar, Table } from '~/components';
import { Title } from '~/components/Title';

const Dashboard = () => {
  return (
    <section>
      <header>
        <Title title={'Chain list'} />
        <SearchBar />
      </header>
      <Table />
    </section>
  );
};

export default Dashboard;
