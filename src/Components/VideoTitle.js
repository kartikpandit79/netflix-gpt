import React from 'react'
import { PLAY_BUTTON } from '../Utils/constant'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' absolute w-screen aspect-video pt-[10%] px-24  text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 w-1/4 text-lg'>{overview}</p>
            <div className=' flex'>
                <button className=' flex mx-2 font-bold bg-white text-black p-4 px-12 text-2xl rounded-lg hover:bg-opacity-80 '>
                    <img className='w-8 p-1' src={PLAY_BUTTON} /> Play</button>
                <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-2xl bg-opacity-50 rounded-lg hover:bg-opacity-20'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle