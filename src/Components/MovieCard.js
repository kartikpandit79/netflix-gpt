import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = (props) => {
    return (
        <div className='w-48 pr-4'>
            <img alt={props.title}
                src={IMG_CDN_URL + props?.movieDetails?.poster_path}
            />
        </div>
    )
}

export default MovieCard