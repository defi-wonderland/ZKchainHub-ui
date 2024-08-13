import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Drawer, List, ListItem, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { StyledHeader, LogoContainer, Logo, HeaderProps } from '~/containers';
import { BasicSelect, Gas } from '~/components';
import { useCustomTheme, useSearchContext } from '~/hooks';

import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';
import LightMode from '~/assets/icons/lightMode.svg';
import DarkMode from '~/assets/icons/darkMode.svg';
import SearchDark from '~/assets/icons/searchDark.svg';
import SearchLight from '~/assets/icons/searchLight.svg';
import MenuDark from '~/assets/icons/menuDark.svg';
import MenuLight from '~/assets/icons/menuLight.svg';
import CloseDark from '~/assets/icons/closeDark.svg';
import CloseLight from '~/assets/icons/closeLight.svg';

interface MobileHeaderProps extends HeaderProps {}

export const MobileHeader = ({ theme, goToHome, handleChangeLanguage, localesMap, changeTheme }: MobileHeaderProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { handleSearchOn } = useSearchContext();

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
        <SIconButton onClick={handleSearchOn}>
          {theme === 'dark' ? (
            <Image src={SearchDark} alt='search-icon' />
          ) : (
            <Image src={SearchLight} alt='search-icon' />
          )}
        </SIconButton>
        <SIconButton onClick={toggleDrawer(true)}>
          {theme === 'dark' ? <Image src={MenuDark} alt='menu-icon' /> : <Image src={MenuLight} alt='menu-icon' />}
        </SIconButton>
      </IconsContainer>
      <Menu anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent>
          <DrawerHeader>
            <Typography>{t('HOME.menu')}</Typography>
            <SIconButton onClick={toggleDrawer(false)} aria-label='close menu'>
              <Image src={theme === 'dark' ? CloseDark : CloseLight} alt='close icon' />
            </SIconButton>
          </DrawerHeader>
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
      </Menu>
    </StyledHeader>
  );
};

export default MobileHeader;

const IconsContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.gap,
  };
});

export const SIconButton = styled(IconButton)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    padding: currentTheme.padding,
    width: '3.5rem',
    height: '3.5rem',
  };
});

const Menu = styled(Drawer)(() => {
  return {
    width: '100%',
  };
});

const DrawerContent = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '100%',
    height: '100%',
    backgroundColor: currentTheme.backgroundPrimary,
    padding: currentTheme.padding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

const DrawerHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
}));
