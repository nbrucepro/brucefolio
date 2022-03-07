import React, { useState } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'

import {images} from '../../constants/'

import './Navbar.scss'

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
<<<<<<< HEAD
=======

>>>>>>> e951173f6fa7776e4b899b65b0d9454c7c914813
    return (
    <nav className='navbar'>
        <div className='navbar-logo'>

            <img src={images.logo}/>

        </div>
        <ul className='navbar-links'>
            {['home','about','work','skills','contact'].map(item=>(
                <li className='flex p-text' key={"link-"+item}>
                    <div/>
                    <a href={"#"+item}>{item}</a>
                </li>
            ))}
        </ul>
        <div className='navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle && (
                <motion.div
                whileInView={{x:[300,0]}}
                transition={{duration:0.85,ease:"easeInOut"}}
                >
                    {/* {test} */}
                    {/* {test} */}
                    {/* {test} */}
                    {/* {test} */}
                    <HiX onClick={()=>{setToggle(false)}}/>
                    <ul>
              {['home','about','work','skills','contact'].map(item=>(
                <li key={item}>
                    <a href={"#"+item} onClick={()=>{setToggle(false)}}>{item}</a>
                </li>
            ))}      
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar