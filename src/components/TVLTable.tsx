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
  ContractCell,
  Icon,
  NotAvailable,
} from '~/components';
import { formatDataNumber, truncateAddress } from '~/utils';

export const TVLTable = () => {
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
              <TableCellHeadFirst scope='col'>{t('CHAIN.TVL.token')}</TableCellHeadFirst>

              <STableCellHead scope='col'>{t('CHAIN.TVL.address')}</STableCellHead>
              <STableCellHead scope='col'>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead scope='col'>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl
              .sort((a, b) => parseFloat(b.amountUsd) - parseFloat(a.amountUsd))
              .map((token, index) => (
                <STableBodyRow key={index} tabIndex={0} role='row' aria-label={`${token.name} (${token.symbol})`}>
                  <FirstCellWithLogo>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </FirstCellWithLogo>

                  <STableCell>
                    {token.contractAddress && (
                      <ContractCell href={`https://etherscan.io/address/${token.contractAddress}`} target='_blank'>
                        <Typography> {truncateAddress(token.contractAddress || '')}</Typography>
                        <Icon icon='link' size={20} alt='Icon of a link to redirect to contract address on explorer' />
                      </ContractCell>
                    )}

                    {!token.contractAddress && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>

                  <STableCell>
                    {token.price && <Typography>{formatDataNumber(token.price, 0, true)}</Typography>}

                    {!token.price && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>

                  <STableCell>
                    {token.amountUsd && <Typography>{formatDataNumber(token.amountUsd, 0, true)}</Typography>}
                    {!token.amountUsd && <NotAvailable>{t('CHAIN.CHAININFORMATION.notAvailable')}</NotAvailable>}
                  </STableCell>
                </STableBodyRow>
              ))}
          </STableBody>
        </Table>
      </STableContainer>
    </article>
  );
};
