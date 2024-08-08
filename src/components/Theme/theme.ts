import { Theme } from '~/types';

const neutral: { [key: number]: string } = {
  50: '#F7F9FC',
  100: '#E8ECF2',
  200: '#DADDE5',
  300: '#BEC2CC',
  400: '#A1A7B3',
  500: '#858C99',
  600: '#6C7380',
  700: '#555A66',
  800: '#3D424D',
  900: '#262B33',
  950: '#11141A',
};

const primary: { [key: number]: string } = {
  50: '#D9E3FF',
  100: '#A6BFFF',
  200: '#739AFF',
  300: '#4075FF',
  400: '#1755F4',
  500: '#1650E5',
  600: '#2663FF',
  700: '#1347CC',
  800: '#113EB2',
  900: '#0C2C80',
  950: '#071B4D',
};

const warning: { [key: number]: string } = {
  50: '#FFF9E5',
  100: '#FFECB2',
  200: '#FFE080',
  300: '#FFD44D',
  400: '#FFC81A',
  500: '#FFC200',
  600: '#E5AF00',
  700: '#CC9B00',
  800: '#997500',
  900: '#664E00',
  950: '#4D3A00',
};

const error: { [key: number]: string } = {
  50: '#FFCCCC',
  100: '#FFB2B2',
  200: '#FF8C8C',
  300: '#FF6666',
  400: '#FF6666',
  500: '#FF0000',
  600: '#CC0000',
  700: '#A60000',
  800: '#800000',
  900: '#590000',
  950: '#330000',
};

const success: { [key: number]: string } = {
  50: '#CCFFE5',
  100: '#B2FFD9',
  200: '#8CFFC6',
  300: '#66FFB2',
  400: '#33FF99',
  500: '#00FF80',
  600: '#00CC66',
  700: '#00A653',
  800: '#008040',
  900: '#00592D',
  950: '#00331A',
};

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#A1A7B3',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#262B33',
  backgroundTertiary: 'rgba(17, 20, 26, 1)',
  titleFontFamily: 'Inter-Variable',
  textFontFamily: 'Inter-Variable',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  transition: 'all 180ms ease-in-out',
  border: '0.0625rem solid rgba(255, 255, 255, 0.05)',
  gap: '0.25rem',
  padding: '1rem',
  warningText: warning[400],
  warningBackground: 'rgba(255, 200, 26, 0.1)',
  warningBorder: '1px solid rgba(255, 200, 26, 0.051)',
  emptyBackground: 'rgba(133, 140, 153, 0.3)',
  neutral,
  primary,
  warning,
  error,
  success,
};

export const lightTheme: Theme = {
  // TBD
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: 'rgba(61, 66, 77, 1)',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: 'rgba(232, 236, 242, 1)',
  backgroundTertiary: ' rgba(218, 221, 229, 1)',
  titleFontFamily: 'Inter-Variable',
  textFontFamily: 'Inter-Variable',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  transition: 'all 180ms ease-in-out',
  border: '0.1rem solid rgba(0, 0, 0, 0.05)',
  gap: '0.25rem',
  warningText: warning[800],
  padding: '1rem',
  warningBackground: 'rgba(153, 117, 0, 0.051)',
  warningBorder: '1px solid rgba(153, 117, 0, 0.01)',
  emptyBackground: 'rgba(61, 66, 77, 1)',
  neutral,
  primary,
  warning,
  error,
  success,
};
