import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import movieSlice from "./movieSlice"
import gptSlice from "./gptSlice.js";
import configSlice from "./configSlice.js";


const appStore = configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            movies: movieSlice,
            gpt: gptSlice,
            config: configSlice,
        }, 
    }
)


export default appStore;