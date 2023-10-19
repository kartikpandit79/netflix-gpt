import { useEffect } from 'react'
import { API_OPTIONS, TMDB_GET_MOVIES } from "../Utils/constant"
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.nowPlayingMovies);

    useEffect(() => {
        !movies && nowPlayingMovies();
    }, []);

    const nowPlayingMovies = async () => {
        try {
            const data = await fetch(TMDB_GET_MOVIES, API_OPTIONS)
            const jsonData = await data.json();
            // console.log("***********>>>>>>>>>>>>>>>", jsonData)
            dispatch(addNowPlayingMovies(jsonData.results))
        } catch (err) {
            console.error("====<><><><", err)
        }
    }
}

export default useNowPlayingMovies;

