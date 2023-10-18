import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  // console.log("movies secondary container", movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title="Now Playing" movieList={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movieList={movies.topRatedMovies} />
        <MovieList title="Popular" movieList={movies.popularMovies} />
        <MovieList title="Horror" movieList={movies.nowPlayingMovies} />
        <MovieList title="Upcoming" movieList={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer