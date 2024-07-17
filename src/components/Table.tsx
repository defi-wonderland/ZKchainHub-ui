import { EcosystemChainData } from '~/types';

interface TableProps {
  chains: EcosystemChainData[];
}

export const Table = ({ chains }: TableProps) => {
  return (
    <table>
      <tr>
        <th>Chain</th>
        <th>Chain ID</th>
        <th>Native token</th>
        <th>TVL - L1</th>
        <th>Type</th>
      </tr>

      {chains?.map((data, index) => {
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
