
import { Promo } from '../../views/Promo/Promo';
import { FirstBanner } from '../../views/FirstBanner/FirstBanner';
import { IViewState } from './bannerState';
import { FinalPromo } from '../../views/FinalPromo/FinalPromo';




export const bannerReducer = (state: IViewState, action: {type: string}) => {
  switch(action.type) {
    case 'showFirstBanner' : {
      return Object.assign({}, state, {
        currentRender: <FirstBanner />
      })
    }

    case 'showPromo' : {
        return Object.assign({}, state, {
          currentRender: <Promo />
        })
    }

    case 'showFinal' : {
      return Object.assign({}, state, {
        currentRender: <FinalPromo />
      })
    }

    case 'closeAll' : {
      return Object.assign({}, state, {
        currentRender: null
        })
    }
    default:
      return state
    }
  }