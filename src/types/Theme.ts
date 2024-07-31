export type ThemeName = 'light' | 'dark';

export interface Theme {
  type: ThemeName;
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  titleColor: string;
  titleFontFamily: string;
  textFontFamily: string;
  borderRadius: string;
  secondaryBorderRadius: string;
  border: string;
}

export interface PropTheme {
  theme: Theme;
}
