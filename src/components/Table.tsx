import { useData } from '~/hooks';

export const Table = () => {
  const { ecosystemData } = useData();
  return (
    <table>
      <tr>
        <th>Chain</th>
        <th>Chain ID</th>
        <th>Native token</th>
        <th>TVL - L1</th>
        <th>Type</th>
      </tr>

      {ecosystemData?.chains.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.id}</td>
            <td>{data.nativeToken}</td>
            <td>{data.tvl}</td>
            <td>{data.type}</td>
          </tr>
        );
      })}
    </table>
  );
};
