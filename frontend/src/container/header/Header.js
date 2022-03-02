<<<<<<< HEAD
import React from "react";
import { motion } from 'framer-motion'

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import './Header.scss';
=======
import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss';
// import { images } from '../../../../bdark/bruce/bu/src/constants';
import {images} from '../../constants/index'
>>>>>>> 6d08975e86137f78bd40cc1eddee7fa95f20367f
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
<<<<<<< HEAD
    <div className="header flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-info"
      >
        <div className="header-badge">
          <div className="badge-cmp flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">I'm</p>
              <h1 className="head-text">Neza Bruce</h1>
            </div>
          </div>
          <div className="tag-cmp flex">
            <p className="p-text">Neza</p>
            <p className="p-text">bruce</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1 }}
          src={images.circle}
          alt="profile-cirlce"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header-circle"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp flex" key={"circle-" + index}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
// export default Header;
export default AppWrap(MotionWrap(Header, "header"), "header", "whitebg");
=======
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
<<<<<<< HEAD
=======

>>>>>>> 1081e94607d7a2c63e7b0c8ec8571f7d17bb56e8
export default Header
>>>>>>> 6d08975e86137f78bd40cc1eddee7fa95f20367f
