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
  Box,
  Link,
} from '@mui/material';

import { EcosystemChainData } from '~/types';
import { formatDataNumber } from '~/utils';
import { useCustomTheme } from '~/hooks';
import { InfoTag } from './InfoTag';

interface TableProps {
  chains: EcosystemChainData[];
}

export const ChainTable = ({ chains }: TableProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleChainNavigation = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <STableContainer data-testid='chains-dashboard'>
      <Table>
        {/* Table titles */}
        <STableHead>
          <STableRow>
            <TableCellHeadFirst sx={{ width: '60%' }} scope='col'>
              {t('HOME.DASHBOARD.chain')}
            </TableCellHeadFirst>
            <STableCellHead sx={{ width: '10%' }} scope='col'>
              {t('HOME.DASHBOARD.chainId')}
            </STableCellHead>
            <STableCellHead sx={{ width: '10%' }} scope='col'>
              {t('HOME.DASHBOARD.nativeToken')}
            </STableCellHead>
            <STableCellHead sx={{ width: '10%' }} scope='col'>
              {t('HOME.DASHBOARD.tvl')}
            </STableCellHead>
            <STableCellHead sx={{ width: '10%' }} scope='col'>
              {t('HOME.DASHBOARD.type')}
            </STableCellHead>
          </STableRow>
        </STableHead>

        {/* Table data */}
        <STableBody>
          {chains?.map((data, index) => {
            return (
              <STableBodyRowLink
                key={index}
                onClick={() => handleChainNavigation(data.chainId)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleChainNavigation(data.chainId);
                  }
                }}
                tabIndex={0}
                role='button' // Indicate that the row is interactive
                aria-label={`Navigate to ${data.metadata?.name || `ZK Chain ${data.chainId}`}`}
                data-testid='chain-row'
              >
                {/* Chain Name with Logo and Tags */}
                <FirstCellWithLogo>
                  <ChainAvatar alt={`${data.chainId} logo`} src={data.metadata?.iconUrl} />
                  <ChainName>{data.metadata?.name ? data.metadata.name : `ZK Chain ${data.chainId}`}</ChainName>

                  <InfoTagsContainer>
                    {!data.rpc && <InfoTag information={t('HOME.DASHBOARD.noRPC')} />}

                    {data.metadata === undefined && <InfoTag information={t('HOME.DASHBOARD.noMetadata')} />}
                  </InfoTagsContainer>
                </FirstCellWithLogo>

                <STableCell sx={{ width: '10%' }}>{data.chainId}</STableCell>

                <STableCell sx={{ width: '10%' }}>
                  <LogoCell>
                    <TokenAvatar alt={`${data.baseToken.symbol} logo`} src={data.baseToken.imageUrl} />
                    <Typography>{data.baseToken.symbol}</Typography>
                  </LogoCell>
                </STableCell>

                <STableCell sx={{ width: '10%' }}>{formatDataNumber(data.tvl, 0, true)}</STableCell>

                <STableCell sx={{ width: '10%' }}>{data.chainType}</STableCell>
              </STableBodyRowLink>
            );
          })}
        </STableBody>
      </Table>
    </STableContainer>
  );
};

export const STableContainer = styled(TableContainer)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '100%',
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
    overflow: 'auto',

    // Hide scrollbar for WebKit browsers
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    // Hide scrollbar for Firefox
    scrollbarWidth: 'none',
    msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
  };
});

export const STableHead = styled(TableHead)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    backgroundColor: currentTheme.backgroundTertiary,
    color: currentTheme.textSecondary,
  };
});

export const STableBody = styled(TableBody)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    backgroundColor: currentTheme.backgroundSecondary,
    border: currentTheme.border,
  };
});

export const STableRow = styled(TableRow)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '&:not(:last-child)': {
      border: currentTheme.border,
    },
    transition: currentTheme.transition,
  };
});

export const STableBodyRow = styled(TableRow)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '&:not(:last-child)': {
      border: currentTheme.border,
    },
    transition: currentTheme.transition,
  };
});

export const STableBodyRowLink = styled(TableRow)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    cursor: 'pointer',
    '&:not(:last-child)': {
      border: currentTheme.border,
    },
    transition: currentTheme.transition,
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: currentTheme.backgroundHover,
      },
    },
  };
});

export const STableCellHead = styled(TableCell)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textSecondary,
    textAlign: 'center',
    borderBottom: 'none',
  };
});

export const TableCellHeadFirst = styled(TableCell)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textSecondary,
    textAlign: 'left',
    borderBottom: 'none',
    [theme.breakpoints.down('md')]: {
      position: 'sticky',
      left: 0,
      zIndex: 1,
      backgroundColor: currentTheme.backgroundTertiary,
    },
  };
});

export const STableCell = styled(TableCell)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    textAlign: 'center',
    border: 'none',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
  };
});

export const FirstCellWithLogo = styled(TableCell)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
    border: 'none',
    textAlign: 'left',
    minWidth: 'max-content',
    [theme.breakpoints.down('md')]: {
      position: 'sticky',
      left: 0,
      backgroundColor: currentTheme.backgroundSecondary,
      zIndex: 1,
      minWidth: '17rem',
    },
  };
});

export const LogoCell = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
  };
});

export const ContractCell = styled(Link)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: currentTheme.gap,
    color: currentTheme.textPrimary,
  };
});

export const ChainAvatar = styled(Avatar)(() => {
  return {
    width: '2rem',
    height: '2rem',
  };
});

export const TokenAvatar = styled(Avatar)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '1.5rem',
    height: 'auto',
    verticalAlign: 'middle',
    backgroundColor: currentTheme.emptyBackground,
  };
});

export const ChainName = styled(Typography)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1rem',
    color: currentTheme.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
  };
});

export const NotAvailable = styled(Typography)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1rem',
    color: currentTheme.textSecondary,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
  };
});

export const InfoTagsContainer = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1rem',
    color: currentTheme.textPrimary,
    display: 'flex',
    gap: currentTheme.gap,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
      display: 'grid',
    },
  };
});
