import React, { useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { VideoPlayerContext } from "./microsite/context/videoplayer/videoplayerContext";

export const VideoPlayerComponent = ({urlYouTube} : {urlYouTube: string}) => {

  const {setDuration, setProgress, state} = useContext(VideoPlayerContext)

  return (
    <ReactPlayer 
      url={urlYouTube} 
      width='1280px'
      height='720px'
      playing={state.playing}
      onDuration={setDuration}
      onProgress={setProgress}
    />
  )
}