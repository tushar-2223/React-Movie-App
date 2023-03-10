import React,{useContext,useState} from 'react'
import Contextpage from '../Contextpage';

function Searchbar() {
  
  const {filteredGenre,fetchSearch,setBackGenre ,setGenres} = useContext(Contextpage);
  const [value, setValue] = useState("");

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();

      if (query === "") {
        filteredGenre();
      } else {
        fetchSearch(query);
        setGenres([]);
        setBackGenre(true);
       
      }
      setValue("");
    }
  };

  return (
    <div className='w-full bg-searchbg bg-cover h-[10rem] md:h-[12rem]'>
      <div className='h-full w-full bg-black/80 flex justify-center items-center'>
        <input
        type="search"
        name="searchpanel"
        id="searchpanel"
        placeholder='Search movie'
        className='p-3 w-full mx-10 md:w-[40rem]  rounded-xl outline-none'
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Searchbar