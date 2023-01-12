import { ColorTheme } from '#/types';
import { Dispatch, ReactNode, createContext, useState } from 'react';

type GlobalContextType = {
  theme: { get: ColorTheme; set: Dispatch<React.SetStateAction<ColorTheme>> };
  menuShown: { get: boolean; set: Dispatch<React.SetStateAction<boolean>> };
};

// *************** CONTEXT OBJECT *************** //
export const GlobalContext = createContext<GlobalContextType>(null!);

// *************** *************** *************** *************** //
// *************** GENERATING CONTEXT PROVIDER *************** //
// *************** *************** *************** *************** //
export function GlobalContextProvider({ children }: { children: ReactNode }) {
  // ---------- STARTING HOOKS ---------- //
  const [theme, setTheme] = useState<ColorTheme>('LightMode');
  const [menuShown, setMenuShown] = useState(false);

  // ---------- SETTING CONTEXTt VALUE ---------- //
  const GlobalContextValues: GlobalContextType = {
    theme: {
      get: theme,
      set: setTheme,
    },
    menuShown: {
      get: menuShown,
      set: setMenuShown,
    },
  };

  // ---------- RETURN CONTEXT COMPONENT ---------- //
  return (
    <GlobalContext.Provider value={GlobalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
}
