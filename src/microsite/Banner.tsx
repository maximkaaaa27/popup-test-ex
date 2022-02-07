import React, { useContext, useEffect } from 'react';
import { navKeyContext } from './context/arrowKeyNav/navKeyContext';
import { BannerContext } from './context/banner/bannerContext';
import { VideoPlayerContext } from './context/videoplayer/videoplayerContext';

export const Banner = () => {

  const { currentRender, showBanner } = useContext(BannerContext);
  const { state } = useContext(VideoPlayerContext);
  const { keyPressListener, currentFocusTarget } = useContext(navKeyContext)

  useEffect (() => {
    
    if (!currentRender) {
      let counter = Math.round(state.playedSeconds);
        if ( counter === 5) {
          showBanner();
        }
      } 
    }
  )

  document.getElementById(currentFocusTarget)?.focus()
  
  return (
    <div onKeyDown={(e) => keyPressListener(e)}>
      {currentRender}
    </div>
  )
}