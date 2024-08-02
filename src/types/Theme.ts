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
  transition: string;
  border: string;
  gap: string;
  warningText: string;
  warningBackground: string;
  warningBorder: string;
  padding: string;
  neutral: { [key: number]: string };
  primary: { [key: number]: string };
  warning: { [key: number]: string };
  error: { [key: number]: string };
  success: { [key: number]: string };
}

export interface PropTheme {
  theme: Theme;
}
