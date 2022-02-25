import React, { useEffect, useState } from 'react'
import {motion, MotionConfig} from 'framer-motion';
import './About.scss';
import { client, urlFor } from '../../../../../bdark/bruce/bu/src/client';
// import {client} from 'client'
const About = () => {
  const [about,setAbout]=useState([]);
  useEffect(()=>{
  const query='*[_type==abouts]';
client.fetch(query).then(data=>{
  setAbout(data)});
  },[]);
  return (
    <>
<h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
<div className='profiles'>
{abouts.map((item,index)=>(
  <motion.div
  whileInView={{opacity:[0,1]}}
  whileHover={{scale:1}}
  transition={{duration:0.5,type:tween}}
  className='about-item'
  key={about.title + index}
    >
    <img src={urlFor(about.image)} alt={about.title}/>
    <h2 className='bold-text' style={{paddingTop:20}}>{about.title}</h2>
    <p className='p-text' style={{paddingTop:20}}>{about.description}</p>
    </motion.div>
    ))}
  </div>
</>
  )
}

export default About;
// MotionConfig.apply(thisArg)