import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IProgresState {
  played: number
  playedSeconds: number
  loaded: number
  loadedSeconds: number
}

interface IVideoSliceInitialState {
  playing: boolean
  duration: number
  onProgress: IProgresState
}



const initialState: IVideoSliceInitialState = {
  playing: true,
  duration: 0,
  onProgress: {
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0
  }
}

const videoPlayerSlice = createSlice({
  name: 'videoControl',
  initialState,
  reducers: {

    play: state => ({...state, playing: true}),

    pause: state => ({...state, playing: false}),

    playAndPause: state => ({...state, playing: !state.playing}),

    setDuration: (state, action: PayloadAction<number>) => ({...state, duration: action.payload}),

    setProgress: (state, action: PayloadAction<IProgresState>) => (
      {...state, onProgress: {...action.payload}}
    )
  }
})


export const { play, pause, playAndPause, setDuration, setProgress } = videoPlayerSlice.actions;
export const selectCount = (state: RootState) => state;
export default videoPlayerSlice.reducer;