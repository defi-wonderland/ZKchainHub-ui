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
  NotAvailable,
} from '~/components';
import { formatDataNumber, truncateAddress } from '~/utils';

export const TokensTable = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <STitle data-test='tokens-title'>{t('TOKENS.title')}</STitle>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <TableCellHeadFirst>{t('CHAIN.TVL.token')}</TableCellHeadFirst>

              <STableCellHead scope='col'>{t('CHAIN.TVL.address')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl
              .sort((a, b) => parseFloat(b.amountUsd) - parseFloat(a.amountUsd))
              .map((token: TvlData, index) => (
                <STableBodyRow key={index} data-test='tokens-row'>
                  <FirstCellWithLogo>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </FirstCellWithLogo>

                  <STableCell>
                    {token.contractAddress && <Typography>{truncateAddress(token.contractAddress || '')}</Typography>}
                    {!token.contractAddress && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>

                  <STableCell>
                    {token.price && formatDataNumber(token.price, 0, true)}
                    {!token.price && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>

                  <STableCell>
                    {token.amountUsd && formatDataNumber(token.amountUsd, 0, true)}
                    {!token.amountUsd && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>
                </STableBodyRow>
              ))}
          </STableBody>
        </Table>
      </STableContainer>
    </Box>
  );
};
