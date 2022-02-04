import React, { createContext } from "react";

interface IBannerContext {
  currentRender: JSX.Element | null
  showBanner: () => void
  showPromo: () => void
  closeAll: () => void
}


export const BannerContext = createContext({} as IBannerContext);
