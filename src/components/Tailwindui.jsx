import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Tailwindui() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState();

  // gener

  const [genreItem, setGenreItem] = useState([]);
  const [genreID,setGenreid] = useState(28);


  useEffect(() => {
    fetchPopular();
    fetchGener();
  }, [movies])

  const fetchGener = async() => {
    const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US`);
    const data = await genre.json();
    // console.log(data.genres)
    setGenreItem(data.genres);
  }


  const fetchPopular = async () => {
    const data = await fetch(
      // `https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=${page}`
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=b454aa11fb4b5fc5b515d2e80a898a1c&page=${page}`
    );
    const movies = await data.json();
    // console.log(movies)
    setMovies(movies.results);
    // console.log(movies.results);
  };

  return (

    <div>


      

      <div className='flex justify-around flex-wrap'>
        {genreItem.map((gener) => (
         
          <button className='bg-blue-200 p-3 m-3' onClick={() => setGenreid(gener.id)}>{gener.name}</button>
         
        ))}
      </div>
      

      <motion.div layout className='p-10 flex flex-wrap'>
        {movies.map((movie) => (<>
          <motion.div layout className='w-60 h-[450px] bg-blue-200 m-5' key={movie.id}>

            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />

            <h1 className='font-bold text-xl'>{movie.title}</h1>
          </motion.div>
        </>))}
      </motion.div>



      
      <div className='flex justify-center'>

        <button className='p-3 m-5 bg-blue-300 text-black' onClick={() => setPage(page >= 1 && page - 1)}>back</button>

        <div className='p-3 m-5 bg-blue-300 text-black'>{page || 1}</div>

        <button className='p-3 m-5 bg-blue-300 text-black' onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default Tailwindui;