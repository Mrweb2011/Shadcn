import React from 'react';
import Image  from './components/men-CuWGShr9.png';
import { FaNpm } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { GiOwl } from "react-icons/gi";
import { GrWordpress } from "react-icons/gr";

function Work() {
  return (
    <div>
    <div className="bg-black pt-12 pl-48 text-white">
        <div className="text">
            <h1 className='mt-24 text-9xl text-semibold ml-5'>WORKOUT <br />WITH ME</h1>
            <p className='text-gray-400 ml-5'>A hugo selection of health and fitness content,heathly recipes and transformation <br />stories to help you get fit and stay fit!</p>
            <button className='bg-white border-none py-5 px-10 rounded mt-5 ml-5 text-black text-semibold'>Join club now</button>
        </div>
        <img className='w-[340px] absolute -mt-[300px] ml-[590px]' src={Image} alt="" />
        <div className="mt-24">
            <h3 className='text-gray-400 font-semibold ml-5'>AS FEATURED IN</h3>
            <div className="icons">
              <button className='bg-black border-none text-white text-5xl ml-5'><FaNpm /></button>
              <button className='bg-black border-none text-white text-5xl ml-5'><FaApple /></button>
              <button className='bg-black border-none text-white text-5xl ml-5'><FaGithubAlt /></button>
              <button className='bg-black border-none text-white text-5xl ml-5'><GiOwl /></button>
              <button className='bg-black border-none text-white text-5xl ml-5'><DiVisualstudio /></button>
              <button className='bg-black border-none text-white text-5xl ml-5'><GrWordpress /></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Work