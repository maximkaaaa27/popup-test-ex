import { createContext } from "react";

interface INavKey {
  currentFocusTarget: string
  keyPressListener: (event: any) => void
}


export const navKeyContext = createContext({} as INavKey);