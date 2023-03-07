import { createContext, useState } from "react";

const Contextpage = createContext();

export function MovieProvider({ children }) {

  const [header, setHeader] = useState("Trending");
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming,setUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const [activegenre, setActiveGenre] = useState(28);
  const [genres, setGenres] = useState([])
  const [loader, setLoader] = useState(true);
  const [backgenre, setBackGenre] = useState(false);
 
  if (page < 1) {
    setPage(1)
  }

  const filteredGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activegenre}&api_key=b454aa11fb4b5fc5b515d2e80a898a1c&page=${page}`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setLoader(false);
    setHeader("Genres");
  };

  const fetchSearch = async(query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const searchmovies = await data.json();
    setMovies(searchmovies.results);
    setLoader(false);
    setHeader(`Results for "${query}"`);
  }

  const fetchGenre = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US'
    );
    const gen = await data.json();
    setGenres(gen.genres);
  }

  const fetchTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&page=${page}`
    );
    const trend = await data.json();
    setTrending(trend.results);
    setLoader(false)
    setHeader("Trending Movies")
  }

  const fetchUpcoming = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=${page}`
    );
    const upc = await data.json();
    setUpcoming(upc.results)
    setLoader(false)
    setHeader("Upcoming Movies")
  }


  return (
    <Contextpage.Provider
      value={{
        fetchGenre,
        genres,
        setGenres,
        filteredGenre ,
        header,
        setHeader,
        movies,
        setMovies,
        page,
        setPage,
        activegenre,
        setActiveGenre,
        fetchSearch,
        loader,
        setBackGenre,
        backgenre,
        setLoader,
        fetchTrending,
        trending,
        fetchUpcoming,
        upcoming,
      }}
    >
      {children}
    </Contextpage.Provider>
  );

}

export default Contextpage;