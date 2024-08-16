import { useTranslation } from 'next-i18next';
import { Table, Typography } from '@mui/material';

import { useData } from '~/hooks';
import {
  STableContainer,
  STableHead,
  STableRow,
  STableCellHead,
  STableCell,
  STableBody,
  FirstCellWithLogo,
  TokenAvatar,
  STitle,
  STableBodyRow,
  TableCellHeadFirst,
} from '~/components';
import { formatDataNumber } from '~/utils';

export const TVL = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const tvl = chainData?.tvl || [];
  return (
    <article>
      <STitle>{t('CHAIN.TVL.title')}</STitle>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <TableCellHeadFirst>{t('CHAIN.TVL.token')}</TableCellHeadFirst>
              <STableCellHead>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl
              .sort((a, b) => parseFloat(b.amountUsd) - parseFloat(a.amountUsd))
              .map((token, index) => (
                <STableBodyRow key={index}>
                  <FirstCellWithLogo>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </FirstCellWithLogo>
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
