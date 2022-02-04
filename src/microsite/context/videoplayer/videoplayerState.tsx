import React, { ReactChild, ReactChildren, useReducer } from "react";
import { VideoPlayerContext } from "./videoplayerContext";
import { videoplayerReducer } from "./videoplayerReducer";

interface IChildren {
  children: ReactChild | ReactChild[] | ReactChildren
}

export interface IVideoPlayerState {
  playing: boolean
  played: number
  duration: number
}

const initState = {
  playing: true,
  duration: 0,
  played: 0
}


export const VideoPlayerContextProvider = ({children} : IChildren) => {

  const [state, dispatch] = useReducer(videoplayerReducer, initState);

  const play = () => {
    dispatch({type: 'play'})
  }

  const pause = () => {
    dispatch({type: 'pause'})
  }

  const setDuration = (duration: number) => {
    dispatch({type: 'setDuration', payload: duration})
  }
  return (
    <VideoPlayerContext.Provider value={{
      play, pause, setDuration,
      playing: state.playing,
      played: state.played, 
      duration: state.duration,
      }}>
      {children}
    </VideoPlayerContext.Provider>
  )
}