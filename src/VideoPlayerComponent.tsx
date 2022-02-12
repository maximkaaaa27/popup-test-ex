import React from "react";
import ReactPlayer from "react-player/youtube";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { IProgresState, setDuration, setProgress } from "./redux/video_control_slice/videoPlayerSlice";

export const VideoPlayerComponent = ({urlYouTube} : {urlYouTube: string}) => {

  const dispatch = useAppDispatch();
  const playing = useAppSelector(state => state.videoPlayer.playing);

  const durationHandle = (duration: number) => {
    dispatch(setDuration(duration));
  }

  const progressHandle = (state: IProgresState)  => {
    dispatch(setProgress({...state}))
  }


  return (
    <ReactPlayer 
      url={urlYouTube} 
      width='1280px'
      height='720px'
      playing={playing}
      onDuration={durationHandle}
      onProgress={progressHandle}
    />
  )
}