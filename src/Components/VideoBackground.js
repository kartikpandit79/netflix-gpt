import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    const trailerVideoSelected = useSelector(store => store?.movies?.trailerVideo)
    useMovieTrailer(movieId);   
    return (
        <div className=''>
            {trailerVideoSelected && <iframe className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideoSelected.key+"?&autoplay=1&mute=1&rel=0"}
                // src="https://www.youtube.com/embed/fQfrzHFmVe8?si=QGSQkuz9z3gyDZLl"
                
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>}

        </div>
    )
}

export default VideoBackground