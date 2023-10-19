import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        movieResults: null,
        singleList: null,
    },
    reducers: {
        toogleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults, singleList } = action.payload
            state.movieResults = movieResults
            state.movieNames = movieNames
            state.singleList = singleList
        }
    }
});

export const { toogleGptSearchView, addGptMovieResults } = gptSlice.actions

export default gptSlice.reducer;    