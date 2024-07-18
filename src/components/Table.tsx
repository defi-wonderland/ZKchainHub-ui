import { useTranslation } from 'next-i18next';

import { EcosystemChainData } from '~/types';

interface TableProps {
  chains: EcosystemChainData[];
}

export const Table = ({ chains }: TableProps) => {
  const { t } = useTranslation();

  return (
    <table>
      <tr>
        <th>{t('HOME.DASHBOARD.chain')}</th>
        <th>{t('HOME.DASHBOARD.chainId')}</th>
        <th>{t('HOME.DASHBOARD.nativeToken')}</th>
        <th>{t('HOME.DASHBOARD.tvl')}</th>
        <th>{t('HOME.DASHBOARD.type')}</th>
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
