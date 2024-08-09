import { styled } from '@mui/material/styles';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useCustomTheme } from '~/hooks/useContext/useTheme';
import { getConfig } from '~/config';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

const { DEFAULT_LANG } = getConfig();

export interface HeaderProps {
  theme: 'light' | 'dark';
  goToHome: () => void;
  handleChangeLanguage: (value: string) => void;
  localesMap: Record<string, string>;
  changeTheme: () => void;
}

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const router = useRouter();
  const { locales, pathname, query } = router;
  const isMobile = useMediaQuery('(max-width:600px)');

  const localesMap = locales ? Object.fromEntries(locales.map((locale) => [locale, t(`LOCALES.${locale}`)])) : {};

  const handleChangeLanguage = (value: string) => {
    const locale = Object.keys(localesMap).find((key) => localesMap[key] === value) || DEFAULT_LANG;
    const newPath = `/${locale}${pathname}`;

    router.replace(
      {
        pathname: newPath,
        query,
      },
      undefined,
      { locale },
    );

    changeLanguage(locale);
  };

  const goToHome = () => {
    router.push('/');
  };

  return isMobile ? (
    <MobileHeader
      theme={theme}
      goToHome={goToHome}
      handleChangeLanguage={handleChangeLanguage}
      localesMap={localesMap}
      changeTheme={changeTheme}
    />
  ) : (
    <DesktopHeader
      theme={theme}
      goToHome={goToHome}
      handleChangeLanguage={handleChangeLanguage}
      localesMap={localesMap}
      changeTheme={changeTheme}
    />
  );
};

export const StyledHeader = styled('header')({
  display: 'flex',
  height: '5.5rem',
  padding: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  flexShrink: 0,
});

export const Logo = styled(Image)({
  width: '13rem',
  height: 'auto',
  maxHeight: '100%',
});

export const SIconButton = styled(IconButton)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    color: `${currentTheme.textPrimary}`,
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    padding: '1rem',
    gap: '0.5rem',
    width: '3.5rem',
    height: '3.5rem',
  };
});
