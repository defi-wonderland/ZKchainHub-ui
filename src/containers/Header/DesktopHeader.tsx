import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { StyledHeader, LogoContainer, Logo, SIconButton } from '~/containers';
import { HeaderProps } from '.';

import { BasicSelect, SearchBar, Gas, SBox } from '~/components';
import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';
import LightMode from '~/assets/icons/lightMode.svg';
import DarkMode from '~/assets/icons/darkMode.svg';

interface DesktopHeaderProps extends HeaderProps {}

export const DesktopHeader = ({
  theme,
  goToHome,
  handleChangeLanguage,
  localesMap,
  changeTheme,
}: DesktopHeaderProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <StyledHeader>
      <LogoContainer onClick={goToHome} role='button' aria-label='Navigate to home'>
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
