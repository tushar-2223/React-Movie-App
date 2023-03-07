import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import Contextpage from '../Contextpage';
import { motion } from "framer-motion";

function Navbar() {

    const { header } = useContext(Contextpage);

    return (

        <nav className="fixed bg-black
         h-full w-[15rem] z-20">

            <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Link to="/" className="logo flex flex-col justify-center items-center m-7 gap-2">
                    <img src={logo} alt="logo" className="w-24" />
                    <h1 className="text-gray-400/70 font-bold text-2xl text-center">BlueBird Movies</h1>
                </Link>
            </motion.div>


            <ul className="text-white font-semibold text-[16px] text-center mx-5">

                <Link to="/"><li className={`${header == "Genres" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`}>Genres</li></Link>

                <Link to="/trending"><li className={`${header == "Trending Movies" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `}>Trending</li></Link>

                <Link to="/upcoming"><li className={`${header == "Upcoming Movies" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `}>Upcoming</li></Link>
            </ul>

            
            {/* temp */}
            <div className="text-gray-400 font-semibold text-center absolute bottom-0 w-full p-3 border-t-2 border-white/20">
                Developed By Tushar
            </div>
        </nav>
    )
}

export default Navbar