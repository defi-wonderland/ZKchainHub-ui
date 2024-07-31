import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { BasicSelect, SearchBar } from '~/components';
import { useCustomTheme } from '~/hooks/useContext/useTheme';
import { zIndex } from '~/utils';
import { getConfig } from '~/config';
import LightMode from '~/assets/icons/lightMode.svg';
// temporary awaiting dark mode icon
import DarkMode from '~/assets/icons/lightMode.svg';

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

  return (
    <StyledHeader>
      <Box>
        <StyledLink href='/' passHref>
          <Logo>ZKchainHub</Logo>
        </StyledLink>
      </Box>
      <SBox>
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
  zIndex: zIndex.HEADER,
});

const Logo = styled('h1')({
  fontSize: '1.5rem',
  cursor: 'pointer',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const SIconButton = styled(IconButton)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    marginRight: '1rem',
    color: `${currentTheme.textPrimary}`,
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    padding: '1rem',
    gap: '0.5rem',
    width: '3.5rem',
    height: '3.5rem',
  };
});

const SBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});
