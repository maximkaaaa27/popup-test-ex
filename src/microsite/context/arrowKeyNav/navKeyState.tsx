import { ReactChild, ReactChildren, useReducer } from "react"
import { navKeyContext } from "./navKeyContext"
import { navKeyReducer } from "./navKeyReducer"


interface IChildren {
  children: ReactChild | ReactChild[] | ReactChildren
}

export interface INavState {
  gridNavigationMap: string[][],
  currentFocusTarget: string,
  X: number
  Y: number 
}

const initState = {
  gridNavigationMap : [
    ['num-1', 'num-2', 'num-3', 'close-btn'],
    ['num-4', 'num-5', 'num-6'],
    ['num-7', 'num-8', 'num-9'],
    ['backspace', 'num-0'],
    ['check'],
    ['submit']
  ],
  currentFocusTarget: 'num-1',
  X: 0,
  Y: 0
}


export const NavKeyContextProvider = ({children}: IChildren) => {

  const [state, dispatch] = useReducer(navKeyReducer, initState)
  const keyPressListener = (e: any) => {

    const lengthY = state.gridNavigationMap.length;

    switch(e.key) {

      case 'ArrowUp' : {
        const X = state.X; 
        let Y = state.Y;

          if (Y === 0) {
            Y = lengthY - 1
          } else {
            Y = state.Y - 1
          }

        const currentTarget = state.gridNavigationMap[Y][X]

        return dispatch({type: 'up', payload: {currentTarget, X, Y}})
      }

      case 'ArrowDown' : {

        let X = state.X;
        let Y = state.Y;

          if (Y === lengthY - 1) {
            Y = 0
          } else {
            Y = state.Y + 1
          }

        let currentTarget = state.gridNavigationMap[Y][X];

          while (!currentTarget) {
            X = state.X - 1
            currentTarget = state.gridNavigationMap[Y][X];
          }

        return dispatch({type: 'down', payload: {currentTarget, X, Y}}) 
      }
      
      case 'ArrowLeft' : {

        const lengthX = state.gridNavigationMap[state.Y].length;

        let X = state.X;
        const Y = state.Y;

          if (X === 0) {
            X = lengthX - 1
          } else {
            X = state.X - 1
          }

        const currentTarget = state.gridNavigationMap[Y][X];

        return dispatch({type: 'left', payload: {currentTarget, X, Y}}) 
      }
      
      case 'ArrowRight' : {

        const lengthX = state.gridNavigationMap[state.Y].length;

        let X = state.X;
        const Y = state.Y;

          if (X === lengthX - 1) {
            X = 0
          } else {
            X = state.X + 1
          }

        const currentTarget = state.gridNavigationMap[Y][X];

        return dispatch({type: 'right', payload: {currentTarget, X, Y}}) 
      }
      default: return
      }
  
  }

  return (
    <navKeyContext.Provider value={
      {currentFocusTarget: state.currentFocusTarget, keyPressListener}
    }>
      {children}
    </navKeyContext.Provider>
  )
}