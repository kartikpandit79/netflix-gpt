import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = (props) => {
    // console.log("MovieCard", props);
    if (!props?.movieDetails?.poster_path) return null
    return (
        <div className='w-36 md:w-48 pr-4'>
            <img alt={props?.movieDetails?.title}
                src={IMG_CDN_URL + props?.movieDetails?.poster_path}
            />
        </div>
    )
}

export default MovieCard