import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
const [wor,setWork]=useState([]);
const [filter,setfilterk]=useState([]);
const [active,setactivek]=useState("all");
const [animation,setanimationk]=useState({y:0,opacity:1});
useEffect(()=>{
const query='*[_type=="work"]';
client.fetch(query).then((data)=>{
    setWork(data)
    setfilterk(data)
})
},[])
const handleWorkFilter=(item)=>{
setfilterk(item);
setanimationk([{y:100,opacity:0}]);
setTimeout(()=>{
setanimationk([{y:0,opacity:1}]);

if(item == "all"){
    setfilterk(Work);
}else{
    setfilterk(Work.filter(work=>work.tags.includes(item)))
}
},3000)
}
    return (
    <>
     {/* <h2 className="head-text">My  <span>b</span> S</h2> */}
<div className='work-filter'>
{['UI','FOOD'].map((item,index)=>{
    return(
        <div 
        key={index}
        onClick=''
        className=''>
            {item}
        </div>
    )
})}
</div>
<motion.div
animate={animation}
transition={{duration:0.5,delayChildren:0.5}}
className='work-p'>
    {filter.map((item,index)=>(
        <div key={index} className='work-i flex'>
            <div className='work-image flex'>
<img src={urlFor(item.image)} alt={item.name}/>
<motion.div
whileHover={{opacity:[0,1]}}
transition={{duration:1,ease:'easeInOut',staggerChildren:0.5}}
className="work-h"
>
    <a href='' target="_blank" rel='noreferrer'>
    <motion.div
whileInView={{scale:[0,1]}}
whileHover={{scale:[1,0.90]}}
transition={{duration:1}}
className="flex"
>
    <AiFillGithub/>
</motion.div>
    </a>
</motion.div>
            </div>
            <div className='work-content'>
                <h4 className='bold-text'>{item.title}</h4>
                <p className='p-text' style={{paddingTop:20}}>{item.description}</p>
            </div>
            <div className='work-tag flex'>
                <p className='p-text'>{item.tags[0]}</p>
            </div>
        </div>
    ))}
</motion.div>
    </>
  )
}

export default Work