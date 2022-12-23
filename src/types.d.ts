// APP STYLES TYPE
export type ColorTheme = 'LightMode' | 'DarkMode';

export type NavClassNameType =
  | string
  | ((props: { isActive: boolean; isPending: boolean }) => string);

// SERVER REQUESTS TYPES
export type ServerLoginResponse = {
  Id: number;
  responseMessage: string;
  jwt: string;
};
