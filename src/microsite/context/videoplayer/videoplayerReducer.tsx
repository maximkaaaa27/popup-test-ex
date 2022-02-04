import { IVideoPlayerState } from "./videoplayerState"



export const videoplayerReducer = (state: IVideoPlayerState, action: {type: string, payload?: number}) => {
  switch(action.type) {

    case 'play' : {
      return Object.assign({}, state, {
        playing: true
      })
    }

      case 'pause' : {
        return Object.assign({}, state, {
          playing: false
        })
    }

    case 'playPause' : {
      return Object.assign({}, state, {
        playing: !state.playing
        })
    }

    case 'setDuration' : {
      return Object.assign({}, state, {
        duration: action.payload
      })
    }

    default:
      return state
    }
  }