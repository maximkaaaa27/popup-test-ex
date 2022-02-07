import { INavState } from "./navKeyState"


export const navKeyReducer = (state: INavState, action: {type: string, payload: {
  currentTarget: string, X: number, Y:  number
}}) => {
  switch(action.type) {
    case 'up' : return Object.assign({}, state, {
      currentFocusTarget: action.payload.currentTarget,
      X: action.payload.X,
      Y: action.payload.Y
    })
    case 'down' : return Object.assign({}, state, {
      currentFocusTarget: action.payload.currentTarget,
      X: action.payload.X,
      Y: action.payload.Y
    })
    case 'left' : return Object.assign({}, state, {
      currentFocusTarget: action.payload.currentTarget,
      X: action.payload.X,
      Y: action.payload.Y
    })
    case 'right' : return Object.assign({}, state, {
      currentFocusTarget: action.payload.currentTarget,
      X: action.payload.X,
      Y: action.payload.Y
    })
     
    
      default : return state
    }

   
  }
