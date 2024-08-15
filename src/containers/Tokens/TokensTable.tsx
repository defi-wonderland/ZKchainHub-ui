import { useTranslation } from 'next-i18next';
import { Table, Typography } from '@mui/material';

import { TotalValueLockedProps } from '~/types';
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
} from '~/components';

export const TokensTable = ({ tvl }: TotalValueLockedProps) => {
  const { t } = useTranslation();

  return (
    <article>
      <STitle>{t('TOKENS.title')}</STitle>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <STableCellHead>{t('CHAIN.TVL.chain')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.tvl')}</STableCellHead>
            </STableRow>
          </STableHead>

          <STableBody>
            {tvl.map((token, index) => (
              <STableRow key={index}>
                <LogoCell>
                  <TokenAvatar alt={token.name} src={token.imageUrl} />
                  <Typography>
                    {token.name} ({token.symbol})
                  </Typography>
                </LogoCell>

                <STableCell>${token.price.toLocaleString()}</STableCell>

                <STableCell>${((token.amountUsd * token.price) / 1e18).toLocaleString()}</STableCell>
              </STableRow>
            ))}
          </STableBody>
        </Table>
      </STableContainer>
    </article>
  );
};
