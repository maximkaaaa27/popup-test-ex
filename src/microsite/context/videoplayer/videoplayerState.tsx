import React, { ReactChild, ReactChildren, useReducer } from "react";
import { VideoPlayerContext } from "./videoplayerContext";
import { videoplayerReducer } from "./videoplayerReducer";

interface IChildren {
  children: ReactChild | ReactChild[] | ReactChildren
}

export interface IVideoPlayerState {
  playing: boolean
  playedSeconds: number
}

const initState = {
  playing: true,
  playedSeconds: 0,
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
    dispatch({type: 'setDuration', payload: {duration}})
  }

  const setProgress = (state: IVideoPlayerState) => {
    dispatch({type: 'setProgress', payload: {...state}})
  }
  return (
    <VideoPlayerContext.Provider value={{
      play, pause, setDuration, setProgress, state

      }}>
      {children}
    </VideoPlayerContext.Provider>
  )
}