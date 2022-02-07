import React, { createContext } from "react";

interface IBannerContext {
  currentRender: JSX.Element | null
  showBanner: () => void
  showPromo: () => void
  showFinal: () => void
  closeAll: () => void
}


export const BannerContext = createContext({} as IBannerContext);
