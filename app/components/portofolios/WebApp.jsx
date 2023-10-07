'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function WebApp({ image1, image2, image3, image4, image5, title, tech, desc }) {
  const [img, setImg] = useState(0);
  const handleClick = () => {
    setImg((prevImg) => (prevImg === 4 ? 0 : prevImg + 1));
  };
  const handleClickr = () => {
    setImg((prevImg) => (prevImg === 0 ? 4 : prevImg - 1));
  };
  let imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-cover';

  if (img === 0) {
    imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-cover';
  } else if (img === 1) {
    imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-cover';
  } else if (img === 2) {
    imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-cover';
  } else if (img === 3) {
    imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-cover';
  }
  let backgroundImageUrl = `${image5}`;
  if (img === 0) {
    backgroundImageUrl = `${image1}`;
  } else if (img === 1) {
    backgroundImageUrl = `${image2}`;
  } else if (img === 2) {
    backgroundImageUrl = `${image3}`;
  } else if (img === 3) {
    backgroundImageUrl = `${image4}`;
  }


  return (


    <div className='flex w-full'>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={imageSopay}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className='w-full h-full flex-grow'></div>
        <div className='flex'>
          <div className='w-1/12 bgl txt1 hover:text-2xl rounded-es-xl flex justify-center items-center text-'><button onClick={handleClickr}>&lt;</button></div>
          <div className='w-10/12 h-[30px]'></div>
          <div className='w-1/12 bgl txt1 hover:text-2xl rounded-ee-xl flex justify-center items-center text-'><button onClick={handleClick}>&gt;</button></div>
        </div>
      </motion.div>


      <div className='px-3 w-3/6'>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className='text-2xl'>{title}</motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className='txt1'>{tech}</motion.p>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='h-[2px] w-full bg-white mb-2'></motion.div>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-xl'>{desc}</motion.p>
      </div>
    </div>
  )
}

export default WebApp