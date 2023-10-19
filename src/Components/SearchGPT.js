import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { WALL_IMG } from '../Utils/constant'

const SearchGPT = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img src={WALL_IMG}
                    alt='logo' className='h-screen object-cover md:h-full'
                />
            </div>
            <div className='pt-[40%] md:pt-[0]'>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>

    )
}

export default SearchGPT