import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss';
// import { images } from '../../../../bdark/bruce/bu/src/constants';
import {images} from '../../constants/index'
const scaleVariants={
    whileInView:{
        scale:[0,1],
        opacity:[0,1],
        transition:{
            duration:1,
            ease:"easeInOut"
        },
    },
};
const Header = () => {
  return (
    <div className='header flex'>
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="header-info"
        >
    <div className='header-badge'>
   <div className='badge-cmp flex'>
   <span>👋</span>
   <div style={{marginLeft:20}}>
       <p className='p-text'>I'm</p>
       <h1 className='head-text'>
           Neza Bruce
       </h1>
   </div>
   <div className='tag-cmp flex'>
   <p className='p-text'>Neza</p>
   <p className='p-text'>bruce</p>
       
   </div>
   </div>
    </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5}}
        className="header-img"
        >
<img src={images.profile} alt="profile"/>
<motion.img
whileInView={{scale:[0,1]}}
transition={{duration:1}}
src={images.circle}
alt='profile-cirlce'
className='overlay_cirlce'
/>
        </motion.div>
        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header-circle"
        >
{[images.flutter,images.redux,images.sass].map((circle,index)=>(
    <div className='circle-cmp flex' key={"circle-"+index}>
        <img src={circle} alt="circle"/>
    </div>
))}
        </motion.div>
    </div>
  )
}
export default Header