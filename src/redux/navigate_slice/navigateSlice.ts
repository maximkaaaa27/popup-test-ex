import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoutes } from "../../routes";
import { RootState } from "../store";


interface INavigateState {
  currentRoute: IRoutes
}


const initialState: INavigateState = {
  currentRoute: {
    path: '/'
  }
}

const navigateSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    showElement: (state, action: PayloadAction<IRoutes>) => ({...state, currentRoute: action.payload}),
    closeAll: (state) => ({...state, currentRoute: {path: '/'}}) 
  }
})

export const { showElement, closeAll } = navigateSlice.actions;
export const selectElement = (state: RootState) => state;
export default navigateSlice.reducer;