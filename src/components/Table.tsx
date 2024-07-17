import { useTranslation } from 'next-i18next';

import { useData } from '~/hooks';

export const Table = () => {
  const { t } = useTranslation();
  const { ecosystemData } = useData();

  return (
    <table>
      <tr>
        <th>{t('HOME.DASHBOARD.chain')}</th>
        <th>{t('HOME.DASHBOARD.chainId')}</th>
        <th>{t('HOME.DASHBOARD.nativeToken')}</th>
        <th>{t('HOME.DASHBOARD.tvl')}</th>
        <th>{t('HOME.DASHBOARD.type')}</th>
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
