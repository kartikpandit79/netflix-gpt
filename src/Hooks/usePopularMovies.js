import { useEffect } from 'react'
import { API_OPTIONS, TMDB_GET_POPULAR_MOVIES } from "../Utils/constant"
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        popularMovies();
    }, []);

    const popularMovies = async () => {
        try {
            const data = await fetch(TMDB_GET_POPULAR_MOVIES, API_OPTIONS)
            const jsonData = await data.json();
            // console.log("***********", jsonData)
            dispatch(addPopularMovies(jsonData.results))
        } catch (err) {
            // console.log("====<><><><", err)
        }
    }
}

export default usePopularMovies;

