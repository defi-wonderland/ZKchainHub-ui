import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Avatar,
} from '@mui/material';

import { EcosystemChainData } from '~/types';
import { formatDataNumber } from '~/utils';
import { useCustomTheme } from '~/hooks';
import { InfoTag } from './InfoTag';

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
                <LogoCell sx={{ width: '60%' }}>
                  <ChainAvatar alt={`${data.chainName} logo`} src={data.iconUrl} />
                  <Typography>{data.chainName}</Typography>
                  {!data.rpc && <InfoTag information={t('HOME.DASHBOARD.noRPC')} />}
                  {!data.metadata && <InfoTag information={t('HOME.DASHBOARD.noMetadata')} />}
                </LogoCell>
                <STableCell sx={{ width: '10%' }}>{data.chainId}</STableCell>
                <LogoCell sx={{ width: '10%' }}>
                  <TokenAvatar alt={`${data.nativeToken} logo`} src={data.tokenImgUrl} />
                  <Typography>{data.nativeToken}</Typography>
                </LogoCell>
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
    border: `1px solid ${currentTheme.neutral[700]}`,
    overflow: 'hidden',
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
    '&:not(:last-child)': {
      borderBottom: `1px solid ${currentTheme.neutral[700]}`,
    },
    cursor: 'pointer',
    transition: currentTheme.transition,
  };
});

const STableCellHead = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textSecondary}`,
    textAlign: 'left',
  };
});

const STableCell = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textPrimary}`,
    textAlign: 'left',
  };
});

const LogoCell = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textPrimary}`,
    display: 'flex',
    alignItems: 'center',
    gap: `${currentTheme.gap}`,
    border: 'none',
    textAlign: 'left',
  };
});

const ChainAvatar = styled(Avatar)(() => {
  return {
    width: '2rem',
    height: '2rem',
  };
});

const TokenAvatar = styled(Avatar)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: `${currentTheme.backgroundTertiary}`,
  };
});
