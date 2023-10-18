import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import SearchGPT from './SearchGPT';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  console.log("showGptSearch", showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()


  return (
    <div>
      <Header />
      {showGptSearch ? <SearchGPT /> : <>
        <MainContainer />
        <SecondaryContainer />
       </>}
    </div>
  )
}

export default Browse