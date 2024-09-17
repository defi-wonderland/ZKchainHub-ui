import { useState } from 'react';
import { styled, Button, Tooltip } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';

import { useCustomTheme, useData } from '~/hooks';
import { addNetwork } from '~/utils';
import { Icon } from '~/components';

export const AddNetworkButton = () => {
  const router = useRouter();
  const { chain } = router.query;
  const { t } = useTranslation();
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { chainData } = useData();

  const [isNetworkAdded, setIsNetworkAdded] = useState<boolean>(false);

  const handleAddNetwork = async () => {
    if (!chainData) {
      alert(t('CHAIN.networkDataMissing'));
      return;
    }

    try {
      await addNetwork({
        chainId: '0x' + Number(chain)?.toString(16),
        chainName: chainData?.metadata.name,
        rpcUrls: chainData?.metadata.publicRpcs[0],
        name: chainData?.baseToken.name,
        symbol: chainData?.baseToken.symbol,
        decimals: chainData?.baseToken.decimals,
        explorerUrl: chainData?.metadata.explorerUrl,
      });
      setIsNetworkAdded(true);
    } catch (error) {
      console.error('Failed to add network:', error);
      alert(t('CHAIN.addNetworkFailed'));
      setIsNetworkAdded(false);
    }
  };

  return (
    <>
      {!isConnected && (
        <>
          <STooltip title={t('WALLET.connectTooltip')}>
            <BlueButton onClick={openConnectModal}>{t('CHAIN.addNetwork')} </BlueButton>
          </STooltip>
        </>
      )}

      {isConnected && !isNetworkAdded && (
        <BlueButton variant='contained' onClick={handleAddNetwork}>
          <Icon icon='add' alt='Add' size={24} />
          {t('CHAIN.addNetwork')}
        </BlueButton>
      )}

      {isConnected && isNetworkAdded && (
        <BlueButton variant='contained' disabled>
          {t('CHAIN.networkAdded')}
        </BlueButton>
      )}
    </>
  );
};

const BlueButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    background: currentTheme.primary[500],
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    color: '#fff',
    textTransform: 'none',
    fontSize: '1rem',
    gap: '0.5rem',
    lineHeight: '1.5rem',
    boxShadow: 'none',
    '&:hover': {
      background: currentTheme.primary[300],
      boxShadow: 'none',
    },
    '&:disabled': {
      background: currentTheme.primary[900],
      color: currentTheme.textSecondary,
    },
  };
});

const STooltip = styled(Tooltip)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
  };
});
