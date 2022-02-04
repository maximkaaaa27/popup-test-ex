import React, { createContext } from "react";

interface IVideoContext {
   playing: boolean
   played: number
   duration: number
   play: () => void
   pause: () => void
   setDuration: (duration: number) => void
}


export const VideoPlayerContext = createContext({} as IVideoContext);