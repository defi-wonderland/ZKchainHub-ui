import { styled, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Image } from '@mui/icons-material';

import { useCustomTheme } from '~/hooks';
import { addNetwork } from '~/utils';
// import Add from '~/assets/icons/add.svg';

export const AddNetworkButton = () => {
  const { t } = useTranslation();
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  // const { chainData } = useData();

  const handleAddNetwork = async () => {
    await addNetwork({
      chainId: '1',
      chainName: 'Ethereum',
      rpcUrls: ['https://mainnet.infura.io/v3/'],
      token: 'ETH',
      symbol: 'ETH',
      decimals: '18',
      explorerUrl: 'https://etherscan.io/',

      //   chainId: '1',
      //   chainName: chainData?.metadata.name,
      //   rpcUrls: [...chainData?.publicRpcs],
      //   token: chainData?.baseToken.name,
      //   symbol: chainData?.baseToken.symbol,
      //   decimals: chainData?.baseToken.decimals,
      //   explorerUrl: chainData?.metadata.explorerUrl,
    });
  };

  return (
    <>
      {!isConnected && <BlueButton onClick={openConnectModal}> {t('WALLET.connection')} </BlueButton>}
      {isConnected && (
        <BlueButton variant='contained' onClick={handleAddNetwork}>
          <SIcon />
          {t('CHAIN.addNetwork')}
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
  };
});

const SIcon = styled(Image)({
  width: '1.5rem',
  height: '1.5rem',
});
