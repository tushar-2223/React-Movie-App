import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '../assets/images/no-image.jpg'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Moviecard({ movie }) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{ opacity: 1 }}
        exit={{opacity:1}}
        layout
        className="card relative w-60 h-[360px] my-5 cursor-pointer rounded-xl overflow-hidden">
            <div className='absolute bottom-0 w-full flex justify-between items-end p-3 z-10'>
                <h1 className='text-white text-xl font-semibold  break-normal break-words'>{movie.title || movie.name}</h1>

                {movie.vote_average > 7 ? <h1 className='font-bold text-green-500 p-2 bg-zinc-900 rounded-full'>{movie.vote_average.toFixed(1)}</h1> : movie.vote_average > 5.5 ? <h1 className='font-bold text-orange-400 p-2 bg-zinc-900 rounded-full'>{movie.vote_average.toFixed(1)}</h1> : <h1 className='font-bold text-red-600 p-2 bg-zinc-900 rounded-full'>{movie.vote_average.toFixed(1)}</h1>}
            </div>
            
            <div className='h-full w-full shadow absolute'></div>

            <Link to={`/moviedetail/${movie.id}`}>
            {movie.poster_path === null ? <img className='img' src={noimage} /> :
                    <LazyLoadImage effect='blur' className='img' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />}
            </Link>
        
        </motion.div>
    )
}

export default Moviecard