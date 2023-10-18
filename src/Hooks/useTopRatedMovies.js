import { useEffect } from 'react'
import { API_OPTIONS, TMDB_GET_TOP_RATED_MOVIES } from "../Utils/constant"
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/movieSlice';

const UseTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        topRatedMovies();
    }, []);

    const topRatedMovies = async () => {
        try {
            const data = await fetch(TMDB_GET_TOP_RATED_MOVIES, API_OPTIONS)
            const jsonData = await data.json();
            console.log("***********", jsonData)
            dispatch(addTopRatedMovies(jsonData.results))
        } catch (err) {
            console.log("====<><><><", err)
        }
    }
}

export default UseTopRatedMovies;

