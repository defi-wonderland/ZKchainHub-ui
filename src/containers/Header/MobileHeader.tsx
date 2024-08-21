import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Drawer, List, ListItem, Typography, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { StyledHeader, LogoContainer, Logo, HeaderProps } from '~/containers';
import { BasicSelect, Gas, Icon } from '~/components';
import { useCustomTheme, useSearchContext } from '~/hooks';

import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';

interface MobileHeaderProps extends HeaderProps {}

export const MobileHeader = ({ theme, goToHome, handleChangeLanguage, localesMap, changeTheme }: MobileHeaderProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { navigateToSearch } = useSearchContext();

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
        <SIconButton onClick={navigateToSearch}>
          <Icon icon='search' alt='search-icon' size={24} />
        </SIconButton>

        <SIconButton onClick={toggleDrawer(true)}>
          <Icon icon='menu' alt='menu-icon' size={24} />
        </SIconButton>
      </IconsContainer>

      <Menu
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: '100%',
          },
        }}
      >
        <DrawerContent>
          <DrawerHeader>
            <MenuLabel>{t('HEADER.menu')}</MenuLabel>
            <SIconButton onClick={toggleDrawer(false)} aria-label='close menu'>
              <Icon icon='close' alt='close-icon' size={24} />
            </SIconButton>
          </DrawerHeader>

          <MenuList>
            <MenuListItem>
              <Gas />
            </MenuListItem>

            <MenuListItem>
              <BasicSelect
                value={t(`LOCALES.${language}`)}
                setValue={handleChangeLanguage}
                list={Object.values(localesMap)}
              />
            </MenuListItem>

            <MenuListItem>
              <ThemeButton onClick={changeTheme}>
                {theme === 'dark' ? t('HEADER.lightMode') : t('HEADER.darkMode')}
                <Icon icon='mode' alt='mode-icon' size={24} />
              </ThemeButton>
            </MenuListItem>
          </MenuList>
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

const MenuLabel = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: currentTheme.textPrimary,
    fontSize: '1.875rem',
  };
});

const MenuList = styled(List)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    padding: currentTheme.padding,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  };
});

const MenuListItem = styled(ListItem)(() => {
  return {
    justifyContent: 'center',
  };
});

const ThemeButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '100%',
    justifyContent: 'space-between',
    padding: currentTheme.padding,
    alignItems: 'center',
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    textTransform: 'none',
    fontSize: '1rem',
    color: currentTheme.textPrimary,
    '&:hover': {
      backgroundColor: `${currentTheme.backgroundSecondary}`,
    },
  };
});
