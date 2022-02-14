import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { switchFocus } from '../redux/arrow_navigate_slice/arrowNavigateSlice';
import { showElement } from '../redux/navigate_slice/navigateSlice';
import { route } from '../routes';



export const Banner = () => {

  const dispatch = useAppDispatch();

  const { playedSeconds } = useAppSelector(state => state.videoPlayer.onProgress);
  const { path } = useAppSelector(state => state.navigation.currentRoute);
  const { currentFocusTarget } = useAppSelector(state => state.arrowNavigation)

  const startSecond = 5; // ~seconds


  useEffect (() => {
    if (path === '/') {
      let playSecond = Math.round(playedSeconds);
        if ( playSecond === startSecond ) {
          dispatch(showElement( {path: 'firstbanner/'}) );
        }
      } 
    }
  )

  useEffect (() => {
    document.getElementById(currentFocusTarget)?.focus()
  })



  const keyDownHandler = (e: any) => {

    dispatch( switchFocus( {key: e.code} ) );

  }

  
  return (
    <div onKeyDown={keyDownHandler}>
      {route({path})}
    </div>
  )
}