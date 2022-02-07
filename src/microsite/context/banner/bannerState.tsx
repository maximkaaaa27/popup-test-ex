import { ReactChild, ReactChildren, useReducer } from "react";
import { BannerContext } from "./bannerContext";
import { bannerReducer } from "./bannerReducer";

interface IChildren {
  children: ReactChild | ReactChild[] | ReactChildren
}

export interface IViewState {
  currentRender: JSX.Element | null
}

const initState = {
  currentRender: null
}


export const BannerContextProvider = ({children} : IChildren) => {

  const [state, dispatch] = useReducer(bannerReducer, initState);

  const showBanner = () => dispatch({type: 'showFirstBanner'});
  const showPromo = () => dispatch({type: 'showPromo'});
  const showFinal = () => dispatch({type: 'showFinal'});
  const closeAll = () => dispatch({type: 'closeAll'});

  return (
    <BannerContext.Provider value={{
      currentRender: state.currentRender, showBanner, showPromo, showFinal, closeAll}}
    >
      {children}
    </BannerContext.Provider>
  )
}