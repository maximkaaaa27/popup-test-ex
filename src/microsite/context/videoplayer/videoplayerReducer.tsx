import { IVideoPlayerState } from "./videoplayerState"




export const videoplayerReducer = (state: IVideoPlayerState, action: {type: string, payload?: any}) => {
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
        duration: action.payload.duration
      })
    }

    case 'setProgress' : {
      return Object.assign({}, state, {
        ...action.payload
      })
    }

    default:
      return state
    }
  }