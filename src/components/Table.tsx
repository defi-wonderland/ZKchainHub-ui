import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { styled, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { EcosystemChainData } from '~/types';
import { formatDataNumber } from '~/utils';
import { useCustomTheme } from '~/hooks';

interface TableProps {
  chains: EcosystemChainData[];
}

export const DataTable = ({ chains }: TableProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleChainNavigation = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <STableContainer>
      <Table>
        <STableHead>
          <STableRow>
            <STableCellHead sx={{ width: '60%' }}>{t('HOME.DASHBOARD.chain')}</STableCellHead>
            <STableCellHead sx={{ width: '10%' }}>{t('HOME.DASHBOARD.chainId')}</STableCellHead>
            <STableCellHead sx={{ width: '10%' }}>{t('HOME.DASHBOARD.nativeToken')}</STableCellHead>
            <STableCellHead sx={{ width: '10%' }}>{t('HOME.DASHBOARD.tvl')}</STableCellHead>
            <STableCellHead sx={{ width: '10%' }}>{t('HOME.DASHBOARD.type')}</STableCellHead>
          </STableRow>
        </STableHead>
        <STableBody>
          {chains?.map((data, index) => {
            return (
              <STableRow key={index} onClick={() => handleChainNavigation(data.chainId)}>
                <STableCell sx={{ width: '60%' }}>{data.chainName}</STableCell>
                <STableCell sx={{ width: '10%' }}>{data.chainId}</STableCell>
                <STableCell sx={{ width: '10%' }}>{data.nativeToken}</STableCell>
                <STableCell sx={{ width: '10%' }}>{formatDataNumber(data.tvl, 0, true)}</STableCell>
                <STableCell sx={{ width: '10%' }}>{data.chainType}</STableCell>
              </STableRow>
            );
          })}
        </STableBody>
      </Table>
    </STableContainer>
  );
};

const STableContainer = styled(TableContainer)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    width: '75rem',
    borderRadius: `${currentTheme.borderRadius}`,
    border: '1px solid #FFFFFF0D',
    zIndex: '1',
  };
});

const STableHead = styled(TableHead)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    backgroundColor: `${currentTheme.backgroundTertiary}`,
    color: `${currentTheme.textSecondary}`,
  };
});

const STableBody = styled(TableBody)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    backgroundColor: `${currentTheme.backgroundSecondary}`,
  };
});

const STableRow = styled(TableRow)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    border: `${currentTheme.border}`,
  };
});

const STableCellHead = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textSecondary}`,
  };
});

const STableCell = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textPrimary}`,
  };
});
