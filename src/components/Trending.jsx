import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from './Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import { Pagebtn } from './Pagebtn';

function Trending() {

  const { loader, page, fetchTrending, trending } = useContext(Contextpage);
    
    useEffect(() => {
        fetchTrending();
    }, [page])


  return (
      <>
        <div className='w-full bg-[#10141e] p-10'>
            <Header />
            <motion.div
                layout
                className="w-full p-2 flex flex-wrap relative justify-around">
                <AnimatePresence>
                    {
                        loader ?  <span className="loader m-10"></span>:
                            <>
                                {trending.map((tred) => (
                                    <Moviecard key={tred.id} movie={tred} />
                                ))}
                            </>
                    }
                </AnimatePresence>
            </motion.div>
            <Pagebtn/>
            
        </div>
      </>
  )
}

export default Trending