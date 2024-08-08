import { useTranslation } from 'next-i18next';
import { Box, Typography, Tooltip, styled } from '@mui/material';
import { CheckCircle as CheckIcon, Cancel as CancelIcon } from '@mui/icons-material';

import { useData, useCustomTheme } from '~/hooks';
import { DataContainer, STitle } from '~/components';

export const RPC = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  return (
    <article>
      <STitle>{t('CHAIN.RPC.title')}</STitle>
      <DataContainer>
        {chainData?.metadata?.publicRpcs &&
          chainData.metadata.publicRpcs.map((rpc, index) => (
            <RPCBox key={index}>
              <Tooltip title={rpc.status ? t('CHAIN.RPC.statusActive') : t('CHAIN.RPC.statusInactive')}>
                {rpc.status ? <CheckIcon color='success' /> : <CancelIcon color='error' />}
              </Tooltip>
              <RPCUrl>{rpc.url}</RPCUrl>
            </RPCBox>
          ))}
      </DataContainer>
    </article>
  );
};

export const RPCBox = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: currentTheme.gap,
    height: '4.5rem',
    alignItems: 'center',
    padding: currentTheme.padding,
  };
});

export const RPCUrl = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    textDecoration: 'underline',
    textUnderlineOffset: currentTheme.gap,
  };
});
