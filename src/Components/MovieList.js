import React from 'react'
import MovieCard from "./MovieCard"


const MovieList = ({ title, movieList }) => {
    console.log("Movie list", movieList);

    let movieCardList = movieList?.map(movie => (
        <MovieCard key={movie.id} movieDetails={movie} />
    ))
    return (
        <div className='px-6 '>
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movieList?.length > 0 && movieCardList}
                </div>
            </div>
        </div>
    )
}

export default MovieList

// GP*6N#PS