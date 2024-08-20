import { useTranslation } from 'next-i18next';
import { Table, Typography, Box } from '@mui/material';

import { TotalValueLockedProps, TvlData } from '~/types';
import {
  STableContainer,
  STableHead,
  STableRow,
  STableCellHead,
  STableCell,
  STableBody,
  TokenAvatar,
  STitle,
  STableBodyRow,
  FirstCellWithLogo,
  TableCellHeadFirst,
} from '~/components';
import { formatDataNumber } from '~/utils';

export const TokensTable = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <STitle>{t('TOKENS.title')}</STitle>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <TableCellHeadFirst sx={{ width: '40%' }}>{t('CHAIN.TVL.token')}</TableCellHeadFirst>
              <STableCellHead sx={{ width: '30%' }}>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead sx={{ width: '30%' }}>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl
              .sort((a, b) => parseFloat(b.amountUsd) - parseFloat(a.amountUsd))
              .map((token: TvlData, index) => (
                <STableBodyRow key={index}>
                  <FirstCellWithLogo>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </FirstCellWithLogo>
                  <STableCell sx={{ width: '30%' }}>{formatDataNumber(token.price, 0, true)}</STableCell>
                  <STableCell sx={{ width: '30%' }}>{formatDataNumber(token.amountUsd, 0, true)}</STableCell>
                </STableBodyRow>
              ))}
          </STableBody>
        </Table>
      </STableContainer>
    </Box>
  );
};
