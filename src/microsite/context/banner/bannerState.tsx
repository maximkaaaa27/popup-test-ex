import { ReactChild, ReactChildren, useReducer } from "react";
import { FirstBanner } from "../../views/FirstBanner";
import { BannerContext } from "./bannerContext";
import { bannerReducer } from "./bannerReducer";

interface IChildren {
  children: ReactChild | ReactChild[] | ReactChildren
}


const initState = {
  currentRender: <FirstBanner />
}


export const BannerContextProvider = ({children} : IChildren) => {

  const [state, dispatch] = useReducer(bannerReducer, initState);

  const showBanner = () => dispatch({type: 'showFirstBanner'});

  const showPromo = () => dispatch({type: 'showPromo'});

  const closeAll = () => dispatch({type: 'closeAll'})

  return (
    <BannerContext.Provider value={{
      currentRender: state.currentRender, showBanner, showPromo, closeAll}}
    >
      {children}
    </BannerContext.Provider>
  )
}