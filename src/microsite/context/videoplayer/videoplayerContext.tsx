import { createContext } from "react";
import { IVideoPlayerState } from "./videoplayerState";

interface IVideoContext {
   play: () => void
   pause: () => void
   setDuration: (duration: number) => void
   setProgress: (state: any) => void
   state: IVideoPlayerState
}


export const VideoPlayerContext = createContext({} as IVideoContext);