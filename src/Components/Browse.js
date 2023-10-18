import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer /> 
    </div>
  )
}

export default Browse