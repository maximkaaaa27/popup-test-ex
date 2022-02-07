import React from "react";
import { Banner } from "./Banner";
import { NavKeyContextProvider } from "./context/arrowKeyNav/navKeyState";
import { BannerContextProvider } from "./context/banner/bannerState";

export const MicroSiteApp = () => {

  return (
    <BannerContextProvider>
      <NavKeyContextProvider>
        <Banner />
      </NavKeyContextProvider>
    </BannerContextProvider>
  )
}