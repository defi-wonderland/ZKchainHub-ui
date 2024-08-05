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
  LogoCell,
  TokenAvatar,
} from '~/components/Table';

export const TVL = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const tvl = chainData?.tvl || [];
  return (
    <article>
      <Typography variant='h4' gutterBottom>
        {t('CHAIN.TVL.title')}
      </Typography>
      <STableContainer>
        <Table>
          <STableHead>
            <STableRow>
              <STableCellHead>{t('CHAIN.TVL.token')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.price')}</STableCellHead>
              <STableCellHead>{t('CHAIN.TVL.total')}</STableCellHead>
            </STableRow>
          </STableHead>
          <STableBody>
            {tvl.map((token, index) => (
              <STableRow key={index}>
                <LogoCell>
                  <TokenAvatar alt={token.tokenName} src={token.imageUrl} />
                  <Typography>
                    {token.tokenName} ({token.token})
                  </Typography>
                </LogoCell>
                <STableCell>${token.price.toLocaleString()}</STableCell>
                <STableCell>${((token.total * token.price) / 1e18).toLocaleString()}</STableCell>{' '}
                {/* Adjust for precision */}
              </STableRow>
            ))}
          </STableBody>
        </Table>
      </STableContainer>
    </article>
  );
};
