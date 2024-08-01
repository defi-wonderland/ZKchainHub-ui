import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#A1A7B3',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#262B33',
  backgroundTertiary: '#11141A',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(255, 255, 255, 0.05)',
};

export const lightTheme: Theme = {
  // TBD
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: '#717171',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#f8f8f8',
  backgroundTertiary: '#f8f8f8',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(0, 0, 0, 0.05)',
};
