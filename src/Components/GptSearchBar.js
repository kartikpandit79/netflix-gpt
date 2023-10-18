import React from 'react'
import { useSelector } from 'react-redux'
import { SUPPORTED_LANG } from '../Utils/constant';
import lang from '../Utils/languageConstant';

const GptSearchBar = () => {

    const langConfig = useSelector(store => store.config)
    let langSupported = SUPPORTED_LANG.find(item => item.identifier == langConfig.lang)

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input type='text' className='p-4 m-4  col-span-9'
                    placeholder={lang[langSupported.identifier].gptSearchPlaceholder} />
                <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' >
                    {lang[langSupported.identifier].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar