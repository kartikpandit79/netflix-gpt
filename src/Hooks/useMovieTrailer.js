import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';

// Modular coding
// Seperation of Concern

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        videoDetailsFetch()
    }, [])

    async function videoDetailsFetch() {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const jsonData = await data.json();
            let filterData = jsonData.results.filter(it => it.type == "Trailer");
            let trailer = filterData.length ? filterData[0] : jsonData[0]
            console.log(trailer);
            dispatch(addTrailerVideo(trailer))
        } catch (err) {
            console.error(err)
        }
    }

}

export default useMovieTrailer;