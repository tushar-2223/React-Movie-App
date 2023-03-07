import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import { Detail } from './components/Detail';
import Navbar from './components/Navbar'
import Trending from './components/Trending';
import Upcoming from './components/Upcoming';
import { MovieProvider } from "./Contextpage";

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <div className="md:ml-[15rem]">
      <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/moviedetail/:id' element={<Detail/>} />
      </Routes>
      </div>
    </MovieProvider>
  )
}

export default App
