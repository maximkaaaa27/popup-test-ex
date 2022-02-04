import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { VideoPlayerContext } from "./microsite/context/videoplayer/videoplayerContext";

export const VideoPlayer = ({urlYouTube} : {urlYouTube: string}) => {

  const {playing, played, setDuration} = useContext(VideoPlayerContext)

  return (
    <ReactPlayer 
      url={urlYouTube} 
      width='1280px'
      height='720px'
      playing={playing}
      played={played}
      onDuration={setDuration}
    />
  )
}