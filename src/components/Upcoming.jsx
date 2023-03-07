import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from './Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import { Pagebtn } from './Pagebtn';

function Upcoming() {

  const { loader,setPage, page, fetchUpcoming, upcoming } = useContext(Contextpage);
    
    useEffect(() => {
        fetchUpcoming();
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
                                {upcoming.map((upc) => (
                                    <Moviecard key={upc.id} movie={upc} />
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

export default Upcoming