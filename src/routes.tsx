import React from "react";
import { Promo } from "./microsite/views/Promo/Promo";
import { FirstBanner } from "./microsite/views/FirstBanner/FirstBanner";
import { FinalPromo } from "./microsite/views/FinalPromo/FinalPromo";


export interface IRoutes {
  path: '/' | 'firstbanner/' | 'promo/' |  'finalPromo/'
}



export const route = ({path}: IRoutes): JSX.Element | null => {

  switch(path) {
    case 'firstbanner/' : return (<FirstBanner />);
    case 'promo/' : return (<Promo />);
    case 'finalPromo/' : return (<FinalPromo />);
    default: return null
  }
}