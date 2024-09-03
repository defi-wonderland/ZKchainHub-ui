import { useTranslation } from 'next-i18next';

import { StyledHeader, LogoContainer, Logo, SIconButton, HeaderProps, Testnet } from '~/containers';
import { BasicSelect, SearchBar, Gas, SBox, Icon } from '~/components';
import { getConfig } from '~/config';

import LogoDark from '~/assets/icons/logoDark.svg';
import LogoLight from '~/assets/icons/logoLight.svg';

const { TESTNET_MODE } = getConfig();

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
        <Logo src={theme === 'dark' ? LogoDark : LogoLight} alt='ZK Chain Hub' priority={true} />
        {TESTNET_MODE === 'true' && <Testnet>Testnet</Testnet>}
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
          <Icon icon='mode' alt='mode-icon' size={24} />
        </SIconButton>
      </SBox>
    </StyledHeader>
  );
};
