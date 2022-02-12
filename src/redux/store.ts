import { configureStore } from "@reduxjs/toolkit";
import arrowNavigateSlice from "./arrow_navigate_slice/arrowNavigateSlice";
import navigateSlice from "./navigate_slice/navigateSlice";
import videoPlayerSlice from "./video_control_slice/videoPlayerSlice";



const store = configureStore({
  reducer: {
    videoPlayer: videoPlayerSlice,
    navigation: navigateSlice,
    arrowNavigation: arrowNavigateSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;