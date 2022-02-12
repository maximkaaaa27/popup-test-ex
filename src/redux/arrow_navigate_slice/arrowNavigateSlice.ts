import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { nextFocusedElement } from "./nextFocusedElement";


const initialState = {
  currentFocusTarget: 'num-1',
  Xcurrent: 0,
  Ycurrent: 0,
}

const arrowNavigateSlice = createSlice({
  name: 'arrowNavigator', initialState,
  reducers: {
    switchFocus: (state, action: PayloadAction<{key: string}>) => {
      const nextFocusTarget = nextFocusedElement(state.Xcurrent, state.Ycurrent, action.payload.key)
      return {
        ...state, 
        currentFocusTarget: nextFocusTarget.currentFocusTarget,
        Xcurrent: nextFocusTarget.nextX,
        Ycurrent: nextFocusTarget.nextY
      }
    }
  }
})

export const { switchFocus } = arrowNavigateSlice.actions;
export const selectElement = (state: RootState) => state;
export default arrowNavigateSlice.reducer;
