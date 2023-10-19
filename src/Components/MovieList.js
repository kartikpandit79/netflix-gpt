import React from 'react'
import MovieCard from "./MovieCard"
// import {
//     PerfectScrollbar,
//     initTE,
// } from "tw-elements";



const MovieList = ({ title, movieList }) => {
    // initTE({ PerfectScrollbar });
    // console.log("Movie list", movieList);

    let movieCardList = movieList?.map(movie => (
        <MovieCard key={movie.id} movieDetails={movie} />
    ))
    return (
        <div className='px-6 '>
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
            <div data-te-perfect-scrollbar-init className='flex overflow-x-hidden hover:overflow-x-scroll hover:scrollbar-hide'>
                <div className='flex'>
                    {movieList?.length > 0 && movieCardList}
                </div>
            </div>
        </div>
    )
}

export default MovieList

// GP*6N#PS