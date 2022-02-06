import React from "react";
import { Banner } from "./Banner";
import { BannerContextProvider } from "./context/banner/bannerState";

export const MicroSiteApp = () => {

  return (
    <BannerContextProvider>
      <Banner />
    </BannerContextProvider>
  )
}