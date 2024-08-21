import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Typography, Tooltip, styled, Skeleton } from '@mui/material';
import { CheckCircle as CheckIcon, Cancel as CancelIcon } from '@mui/icons-material';

import { useData, useCustomTheme } from '~/hooks';
import { DataContainer, STitle } from '~/components';
import { checkRpcStatus } from '~/utils';

export const RPC = () => {
  const { t } = useTranslation();
  const { chainData } = useData();
  const [rpcData, setRpcData] = useState<{ url: string; status: boolean }[]>([]);
  const [rpcIsLoading, setRpcIsLoading] = useState(true);

  useEffect(() => {
    const updateRpcStatuses = async () => {
      setRpcIsLoading(true);
      if (!chainData?.metadata?.publicRpcs) return;

      const updatedRpcData = await Promise.all(
        chainData.metadata.publicRpcs.map(async (rpc) => {
          const status = await checkRpcStatus(rpc);
          return { url: rpc, status };
        }),
      );

      setRpcData(updatedRpcData);
      setRpcIsLoading(false);
    };

    updateRpcStatuses();
  }, [chainData]);

  return (
    <article>
      <STitle>{t('CHAIN.RPC.title')}</STitle>
      <DataContainer>
        {rpcIsLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <RPCBox key={index}>
                <Skeleton variant='circular' width={20} height={20} />
                <Skeleton variant='text' width='100%' />
              </RPCBox>
            ))
          : rpcData.map((rpc, index) => (
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

const RPCBox = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: currentTheme.gap,
    height: '4.5rem',
    alignItems: 'center',
    padding: currentTheme.padding,
  };
});

const RPCUrl = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    textDecoration: 'underline',
    textUnderlineOffset: currentTheme.gap,
  };
});
