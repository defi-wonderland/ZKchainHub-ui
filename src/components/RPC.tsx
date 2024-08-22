import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Typography, Tooltip, styled, Skeleton } from '@mui/material';

import { useData, useCustomTheme } from '~/hooks';
import { DataContainer, STitle, Icon } from '~/components';
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
      <DataContainer aria-live='polite' aria-busy={rpcIsLoading}>
        {rpcIsLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <RPCBox key={index}>
              <Skeleton variant='circular' width={20} height={20} />
              <Skeleton variant='text' width='100%' />
            </RPCBox>
          ))}

        {!rpcIsLoading &&
          rpcData.map((rpc, index) => (
            <RPCBox
              key={index}
              aria-label={`${rpc.url} - ${rpc.status ? t('CHAIN.RPC.statusActive') : t('CHAIN.RPC.statusInactive')}`}
            >
              <Tooltip title={rpc.status ? t('CHAIN.RPC.statusActive') : t('CHAIN.RPC.statusInactive')}>
                {rpc.status ? (
                  <Icon icon='check' alt='Check icon representing active RPC' size={20} />
                ) : (
                  <Icon icon='error' alt='Error icon representing inactive RPC' size={20} />
                )}
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
