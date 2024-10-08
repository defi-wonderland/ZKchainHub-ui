import { IconPaths } from '~/types';

import BlockDark from '~/assets/icons/blockDark.svg';
import BlockLight from '~/assets/icons/blockLight.svg';
import ChainTypeDark from '~/assets/icons/chainTypeDark.svg';
import ChainTypeLight from '~/assets/icons/chainTypeLight.svg';
import CheckBlockDark from '~/assets/icons/checkBlockDark.svg';
import CheckBlockLight from '~/assets/icons/checkBlockLight.svg';
import SpeedDark from '~/assets/icons/speedDark.svg';
import SpeedLight from '~/assets/icons/speedLight.svg';
import TagDark from '~/assets/icons/tagDark.svg';
import TagLight from '~/assets/icons/tagLight.svg';
import MaxDark from '~/assets/icons/maxDark.svg';
import MaxLight from '~/assets/icons/maxLight.svg';
import ClockDark from '~/assets/icons/clockDark.svg';
import ClockLight from '~/assets/icons/clockLight.svg';
import SettingsDark from '~/assets/icons/settingsDark.svg';
import SettingsLight from '~/assets/icons/settingsLight.svg';
import WebDark from '~/assets/icons/webDark.svg';
import WebLight from '~/assets/icons/webLight.svg';
import LinkDark from '~/assets/icons/linkDark.svg';
import LinkLight from '~/assets/icons/linkLight.svg';
import LightMode from '~/assets/icons/lightMode.svg';
import DarkMode from '~/assets/icons/darkMode.svg';
import SearchDark from '~/assets/icons/searchDark.svg';
import SearchLight from '~/assets/icons/searchLight.svg';
import MenuDark from '~/assets/icons/menuDark.svg';
import MenuLight from '~/assets/icons/menuLight.svg';
import CloseDark from '~/assets/icons/closeDark.svg';
import CloseLight from '~/assets/icons/closeLight.svg';
import WonderlandDark from '~/assets/icons/wonderlandDark.svg';
import WonderlandLight from '~/assets/icons/wonderlandLight.svg';
import HeartDark from '~/assets/icons/heartDark.svg';
import HeartLight from '~/assets/icons/heartLight.svg';
import GithubDark from '~/assets/icons/githubDark.svg';
import GithubLight from '~/assets/icons/githubLight.svg';
import GasLight from '~/assets/icons/gasLight.svg';
import GasDark from '~/assets/icons/gasDark.svg';
import SmallArrowDark from '~/assets/icons/smallArrowDark.svg';
import SmallArrowLight from '~/assets/icons/smallArrowLight.svg';
import ArrowDownDark from '~/assets/icons/arrowDownDark.svg';
import ArrowDownLight from '~/assets/icons/arrowDownLight.svg';
import Add from '~/assets/icons/add.svg';
import CheckDark from '~/assets/icons/checkDark.svg';
import CheckLight from '~/assets/icons/checkLight.svg';
import ErrorDark from '~/assets/icons/errorDark.svg';
import ErrorLight from '~/assets/icons/errorLight.svg';
import DisabledWebLight from '~/assets/icons/disabledWebLight.svg';
import DisabledWebDark from '~/assets/icons/disabledWebDark.svg';
import DisabledLinkDark from '~/assets/icons/disabledLinkDark.svg';
import DisabledLinkLight from '~/assets/icons/disabledLinkLight.svg';
import DisabledBlockDark from '~/assets/icons/disabledBlockDark.svg';
import DisabledBlockLight from '~/assets/icons/disabledBlockLight.svg';
import WhiteBlock from '~/assets/icons/whiteBlock.svg';

export const iconPaths: IconPaths = {
  block: {
    dark: BlockDark,
    light: BlockLight,
  },
  btnBlock: {
    dark: WhiteBlock,
    light: BlockLight,
  },
  disabledBlock: {
    dark: DisabledBlockDark,
    light: DisabledBlockLight,
  },
  chainType: {
    dark: ChainTypeDark,
    light: ChainTypeLight,
  },
  checkBlock: {
    dark: CheckBlockDark,
    light: CheckBlockLight,
  },
  speed: {
    dark: SpeedDark,
    light: SpeedLight,
  },
  tag: {
    dark: TagDark,
    light: TagLight,
  },
  max: {
    dark: MaxDark,
    light: MaxLight,
  },
  clock: {
    dark: ClockDark,
    light: ClockLight,
  },
  settings: {
    dark: SettingsDark,
    light: SettingsLight,
  },
  web: {
    dark: WebDark,
    light: WebLight,
  },
  disabledWeb: {
    dark: DisabledWebDark,
    light: DisabledWebLight,
  },
  link: {
    dark: LinkDark,
    light: LinkLight,
  },
  disabledLink: {
    dark: DisabledLinkDark,
    light: DisabledLinkLight,
  },
  mode: {
    dark: LightMode, // Intended to show the light mode icon when the theme is dark
    light: DarkMode, // Intended to show the dark mode icon when the theme is light
  },
  search: {
    dark: SearchDark,
    light: SearchLight,
  },
  menu: {
    dark: MenuDark,
    light: MenuLight,
  },
  close: {
    dark: CloseDark,
    light: CloseLight,
  },
  wonderland: {
    dark: WonderlandDark,
    light: WonderlandLight,
  },
  heart: {
    dark: HeartDark,
    light: HeartLight,
  },
  github: {
    dark: GithubDark,
    light: GithubLight,
  },
  gas: {
    dark: GasDark,
    light: GasLight,
  },
  smallArrow: {
    dark: SmallArrowDark,
    light: SmallArrowLight,
  },
  arrowDown: {
    dark: ArrowDownDark,
    light: ArrowDownLight,
  },
  add: {
    dark: Add,
    light: Add,
  },
  check: {
    dark: CheckDark,
    light: CheckLight,
  },
  error: {
    dark: ErrorDark,
    light: ErrorLight,
  },
} as const;
