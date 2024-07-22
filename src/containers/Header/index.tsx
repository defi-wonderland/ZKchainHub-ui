import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Link from 'next/link';

import { useCustomTheme } from '~/hooks/useContext/useTheme';
import { zIndex, HEADER_HEIGHT } from '~/utils';

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();

  return (
    <StyledHeader>
      <Link href='/' passHref>
        <Logo>Logo</Logo>
      </Link>
      <SIconButton onClick={changeTheme}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</SIconButton>
      <ConnectButton />
    </StyledHeader>
  );
};

//Styles
const StyledHeader = styled('header')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: `${HEADER_HEIGHT}rem`,
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.backgroundSecondary,
    width: '100%',
    zIndex: zIndex.HEADER,
  };
});

const Logo = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const SIconButton = styled(IconButton)({
  position: 'absolute',
  left: '50%',
});
