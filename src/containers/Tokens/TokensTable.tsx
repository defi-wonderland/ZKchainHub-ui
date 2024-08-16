import { useTranslation } from 'next-i18next';
import { Table, Typography } from '@mui/material';

import { TotalValueLockedProps, TvlData } from '~/types';
import {
  STableContainer,
  STableHead,
  STableRow,
  STableCellHead,
  STableCell,
  STableBody,
  LogoCell,
  TokenAvatar,
  STitle,
  STableBodyRow,
} from '~/components';
import { formatDataNumber } from '~/utils';

export const TokensTable = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  return (
    <article>
      <STitle>{t('TOKENS.title')}</STitle>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <STableCellHead>{t('CHAIN.TVL.token')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl
              //FIXME: Use bignumber here
              .sort((a, b) => parseFloat(b.amountUsd) - parseFloat(a.amountUsd))
              .map((token: TvlData, index) => (
                <STableBodyRow key={index}>
                  <LogoCell>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </LogoCell>
                  <STableCell>{formatDataNumber(token.price, 0, true)}</STableCell>
                  <STableCell>{formatDataNumber(token.amountUsd, 0, true)}</STableCell>
                </STableBodyRow>
              ))}
          </STableBody>
        </Table>
      </STableContainer>
    </article>
  );
};
