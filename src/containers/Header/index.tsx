import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { BasicSelect } from '~/components';
import { useCustomTheme } from '~/hooks/useContext/useTheme';
import { zIndex, HEADER_HEIGHT } from '~/utils';
import { getConfig } from '~/config';

const { DEFAULT_LANG } = getConfig();

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { locales, replace } = useRouter();

  const localesMap = locales ? Object.fromEntries(locales.map((locale) => [locale, t(`LOCALES.${locale}`)])) : {};

  const handleChangeLanguage = (value: string) => {
    const locale = Object.keys(localesMap).find((key) => localesMap[key] === value) || DEFAULT_LANG;
    replace('/', undefined, { locale: locale });
    changeLanguage(locale);
  };

  return (
    <StyledHeader>
      <Link href='/' passHref>
        <Logo>ZKchainHub</Logo>
      </Link>
      <SIconButton onClick={changeTheme}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</SIconButton>
      <BasicSelect value={t(`LOCALES.${language}`)} setValue={handleChangeLanguage} list={Object.values(localesMap)} />
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
