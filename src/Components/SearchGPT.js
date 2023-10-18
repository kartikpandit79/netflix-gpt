import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { WALL_IMG } from '../Utils/constant'

const SearchGPT = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={WALL_IMG}
                    alt='logo' className='h-full'
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default SearchGPT