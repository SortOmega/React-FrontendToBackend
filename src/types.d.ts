// REACT-ROUTER-DOM custom types

export type ColorTheme = 'LightMode' | 'DarkMode';

export type NavClassNameType =
  | string
  | ((props: { isActive: boolean; isPending: boolean }) => string);
