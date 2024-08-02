import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#99A4B8',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#262B33',
  backgroundTertiary: '#11141A',
  titleFontFamily: 'Inter-Variable',
  textFontFamily: 'Inter-Variable',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(153, 164, 184, 0.1)',
  gap: '0.25rem',
  padding: '1rem',
};

export const lightTheme: Theme = {
  // TBD
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: '#717171',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#E8ECF2',
  backgroundTertiary: '#f8f8f8',
  titleFontFamily: 'Inter-Variable',
  textFontFamily: 'Inter-Variable',
  borderRadius: '1.5rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(183, 183, 183, 0.3)',
  gap: '0.25rem',
  padding: '1rem',
};
