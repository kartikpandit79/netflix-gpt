import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
  // console.log(gpt, "<<==========");
  if (!movieNames) return null

  let outputMovies = movieResults.map((movie, ind) => {
    return <MovieList key={movieNames[ind]} title={movieNames[ind]} movieList={movie} />
  })

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      {outputMovies}
    </div>
  )
}

export default GptMovieSuggestion