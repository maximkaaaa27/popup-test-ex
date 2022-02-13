import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { switchFocus } from '../redux/arrow_navigate_slice/arrowNavigateSlice';
import { showElement } from '../redux/navigate_slice/navigateSlice';
import { route } from '../routes';



export const Banner = () => {

  const dispatch = useAppDispatch();
  const fieldFocus = useRef<HTMLDivElement>(null)

  const { playedSeconds } = useAppSelector(state => state.videoPlayer.onProgress);
  const { path } = useAppSelector(state => state.navigation.currentRoute);
  const { currentFocusTarget } = useAppSelector(state => state.arrowNavigation)

  const startSecond = 5; // ~seconds

  const fieldFocusElements = fieldFocus.current?.querySelectorAll('.promo .keypad')

  useEffect (() => {
    if (path === '/') {
      let playSecond = Math.round(playedSeconds);
        if ( playSecond === startSecond ) {
          dispatch(showElement( {path: 'firstbanner/'}) );
        }
      } 
    }
  )

  const setFocusElement = ({currentFocusTarget, fieldFocusElements} : {
    currentFocusTarget: string,
    fieldFocusElements: NodeListOf<Element> | undefined
  }) => {

    if (!fieldFocusElements) {
      console.warn('Attention. NodeList of focusElements is empty'); 
    } else {
      fieldFocusElements.forEach(Element => {
        if (Element.id === currentFocusTarget) console.log(Element)
      })
    }
  }

  useEffect (() => {
    setFocusElement({currentFocusTarget, fieldFocusElements})
  })

  const keyDownHandler = (e: any) => {

    dispatch( switchFocus( {key: e.code} ) );

  }

  
  return (
    <div onKeyDown={keyDownHandler} ref={fieldFocus}>
      {route({path})}
    </div>
  )
}