import React, { useContext ,useEffect} from 'react'
import Contextpage from '../Contextpage';
import Button from '../assets/Btn'


export const Pagebtn = () => {

    const { setPage, page } = useContext(Contextpage);
    
    return (
        <div className='btnpanel flex justify-center items-center'>
            <div onClick={() => setPage(page - 1)}><Button item="Back" /></div>
            <div className='px-4 py-2 bg-slate-700  text-white font-semibold rounded-full'>{page}</div>
            <div onClick={() => setPage(page + 1)}><Button item="Next" /></div>
        </div>
    )
}
