import React from 'react'
import { PLAY_BUTTON } from '../Utils/constant'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' absolute w-screen aspect-video pt-[165px] md:pt-[10%] px-6 md:px-24  text-white bg-gradient-to-r from-black'>
            <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 w-1/4 text-sm'>{overview}</p>
            <div className=' flex mt-[10px] md:m-0'>
                <button className=' flex mx-2 font-bold bg-white text-black py-1 md:py-[1rem] px-2 md:px-[1.5rem] text-sm md:text-2xl rounded-lg hover:bg-opacity-80 '>
                    <img className='w-[1.2rem] md:w-6 p-1 md:mt-[.4rem] mt-0' src={PLAY_BUTTON} /> Play</button>
                <button className=' hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-[1.5rem] text-2xl bg-opacity-50 rounded-lg hover:bg-opacity-20'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle