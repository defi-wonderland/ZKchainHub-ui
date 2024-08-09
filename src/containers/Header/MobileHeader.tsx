import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';
import LightMode from '~/assets/icons/lightMode.svg';
import DarkMode from '~/assets/icons/darkMode.svg';
import { BasicSelect, Gas, Icon } from '~/components';
import { useCustomTheme } from '~/hooks';
import SearchDark from '~/assets/icons/searchDark.svg';
import SearchLight from '~/assets/icons/searchLight.svg';

interface MobileHeaderProps {
  theme: string;
  goToHome: () => void;
  handleChangeLanguage: (value: string) => void;
  localesMap: Record<string, string>;
  changeTheme: () => void;
}

export const MobileHeader = ({ theme, goToHome, handleChangeLanguage, localesMap, changeTheme }: MobileHeaderProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <StyledHeader>
      <LogoContainer onClick={goToHome} role='button' aria-label='Navigate to home'>
        <Logo src={theme === 'dark' ? LogoDark : LogoLight} alt='ZK Chain Hub' />
      </LogoContainer>
      <IconsContainer>
        <SearchIconButton>
          <Icon darkIcon={SearchDark} lightIcon={SearchLight} alt='Search' size={20} />
        </SearchIconButton>
        <IconButton onClick={toggleDrawer(true)} aria-label='open menu'>
          <MenuIcon />
        </IconButton>
      </IconsContainer>
      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent>
          <List>
            <ListItem>
              <Gas />
            </ListItem>
            <ListItem>
              <BasicSelect
                value={t(`LOCALES.${language}`)}
                setValue={handleChangeLanguage}
                list={Object.values(localesMap)}
              />
            </ListItem>
            <ListItem>
              <SIconButton onClick={changeTheme}>
                {theme === 'dark' ? (
                  <Image src={LightMode} alt='light mode' />
                ) : (
                  <Image src={DarkMode} alt='dark mode' />
                )}
              </SIconButton>
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </StyledHeader>
  );
};

export default MobileHeader;

// Styled components
const StyledHeader = styled('header')({
  display: 'flex',
  height: '5.5rem',
  padding: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  flexShrink: 0,
});

const Logo = styled(Image)({
  width: '10rem',
  height: 'auto',
});

const IconsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const SearchIconButton = styled(IconButton)({
  padding: 0,
});

const SIconButton = styled(IconButton)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textPrimary}`,
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    padding: '1rem',
    width: '3.5rem',
    height: '3.5rem',
  };
});

const DrawerContent = styled(Box)({
  width: '250px',
  padding: '1rem',
});
