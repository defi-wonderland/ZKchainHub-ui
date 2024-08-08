import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { BasicSelect, SearchBar, Gas, SBox } from '~/components';
import { useCustomTheme } from '~/hooks/useContext/useTheme';
import { getConfig } from '~/config';

import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';
import LightMode from '~/assets/icons/lightMode.svg';
import DarkMode from '~/assets/icons/darkMode.svg';

const { DEFAULT_LANG } = getConfig();

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const router = useRouter();
  const { locales, pathname, query } = router;

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

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <StyledHeader>
      <LogoContainer onClick={handleLogoClick} role='button' aria-label='Navigate to home'>
        <Logo src={theme === 'dark' ? LogoDark : LogoLight} alt='ZK Chain Hub' />
      </LogoContainer>
      <SBox>
        <Gas />
        <SearchBar />
        <BasicSelect
          value={t(`LOCALES.${language}`)}
          setValue={handleChangeLanguage}
          list={Object.values(localesMap)}
        />
        <SIconButton onClick={changeTheme}>
          {theme === 'dark' ? <Image src={LightMode} alt='light mode' /> : <Image src={DarkMode} alt='dark mode' />}
        </SIconButton>
      </SBox>
    </StyledHeader>
  );
};

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
  width: '13rem',
  height: 'auto',
  maxHeight: '100%',
});

const SIconButton = styled(IconButton)(() => {
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
