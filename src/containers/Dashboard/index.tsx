import { SearchBar, Table } from '~/components';

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1>Chain list</h1>
        <SearchBar />
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
