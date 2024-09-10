import { useTranslation } from 'next-i18next';
import { Table, Typography, Box, styled } from '@mui/material';

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
  STooltip,
} from '~/components';
import { useCopyToClipboard, useCustomTheme } from '~/hooks';
import { formatDataNumber, truncateAddress } from '~/utils';

export const TokensTable = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();
  const [copiedState, copy] = useCopyToClipboard();

  return (
    <Box>
      <STitle data-testid='tokens-title'>{t('TOKENS.title')}</STitle>
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
              .sort((a, b) => {
                const amountA = parseFloat(a.amountUsd) || 0;
                const amountB = parseFloat(b.amountUsd) || 0;
                return amountB - amountA;
              })
              .map((token: TvlData, index) => (
                <STableBodyRow key={index} data-testid='tokens-row'>
                  <FirstCellWithLogo>
                    <TokenAvatar alt={token.name} src={token.imageUrl} />
                    <Typography>
                      {token.name} ({token.symbol})
                    </Typography>
                  </FirstCellWithLogo>

                  <STableCell>
                    {token.contractAddress && (
                      <STooltip
                        title={
                          token.contractAddress === copiedState['token contract'] ? t('HOME.copied') : t('HOME.copy')
                        }
                      >
                        <CopyText onClick={() => copy('token contract', token.contractAddress || '')}>
                          {truncateAddress(token.contractAddress || '')}
                        </CopyText>
                      </STooltip>
                    )}
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

const CopyText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    cursor: 'pointer',
  };
});
