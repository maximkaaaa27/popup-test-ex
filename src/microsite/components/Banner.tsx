import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../context/banner/bannerContext';
import { VideoPlayerContext } from '../context/videoplayer/videoplayerContext';

export const Banner = () => {

  const { currentRender, showBanner } = useContext(BannerContext);
  const { state } = useContext(VideoPlayerContext);

  useEffect (() => {
    
    if (!currentRender) {
      let counter = Math.round(state.playedSeconds);
        if ( counter === 5) {
          showBanner();
        }
      } 
  })
  
  return (
    <>
      {currentRender}
    </>
  )
}