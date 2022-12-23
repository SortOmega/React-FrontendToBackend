import { ColorTheme } from '#/types';
import { Dispatch, ReactNode, createContext, useState } from 'react';

type GlobalContextType = {
  theme: { get: ColorTheme; set: Dispatch<React.SetStateAction<ColorTheme>> };
};

export const GlobalContext = createContext<GlobalContextType>(null!);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ColorTheme>('LightMode');

  const GlobalContextValues: GlobalContextType = {
    theme: {
      get: theme,
      set: setTheme,
    },
  };

  return (
    <GlobalContext.Provider value={GlobalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
}
