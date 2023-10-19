import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, SUPPORTED_LANG } from '../Utils/constant';
import lang from '../Utils/languageConstant';
import openai from '../Utils/openai';
import { addGptMovieResults } from '../Utils/gptSlice';

const GptSearchBar = () => {

    const langConfig = useSelector(store => store.config);
    const dispatch = useDispatch();
    const searchText = useRef(null)
    let langSupported = SUPPORTED_LANG.find(item => item.identifier == langConfig.lang)

    const searchMovieTMDB = async (movieName) => {
        // Error Handling
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
            + movieName +
            '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const movieDetails = await data.json();
        return movieDetails.results;
    }


    const handleGptSearchClick = async (e) => {
        // Error Handling
        e.preventDefault();
        // console.log(searchText.current.value);
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        //"Get Out, The Shining, Psycho, The Exorcist, Halloween"
        // console.log(chatCompletion.choices[0]?.message.content);
        let rawResult = chatCompletion.choices[0]?.message.content.split(", ");
        let moviePromiseArray = rawResult.map(movie => searchMovieTMDB(movie));
        let tmdbResults = await Promise.all(moviePromiseArray);
        console.log("tmdbResults", tmdbResults);
        let finalTMDBResult = []
        tmdbResults.forEach((val, ind) => {
            let filterValue = val.filter(details => details.title == rawResult[ind]);
            finalTMDBResult = [...finalTMDBResult, ...filterValue]
        });
        // console.log("finalTMDBResult", finalTMDBResult);
        dispatch(addGptMovieResults({ movieNames: rawResult, movieResults: tmdbResults, singleList: finalTMDBResult }))
    }

    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12'>
                <input type='text' className='p-4 m-4 col-span-8  md:col-span-9' ref={searchText}
                    placeholder={lang[langSupported.identifier].gptSearchPlaceholder} />
                <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-4 md:col-span-3'
                    onClick={(e) => handleGptSearchClick(e)}
                >
                    {lang[langSupported.identifier].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar