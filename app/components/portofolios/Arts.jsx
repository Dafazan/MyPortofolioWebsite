'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Arts({ image1, image2, image3, image4, image5, title, tech, desc }) {
    const [img, setImg] = useState(2);
    const handleClick = () => {
        setImg((prevImg) => (prevImg === 4 ? 0 : prevImg + 1));
    };
    const handleClickr = () => {
        setImg((prevImg) => (prevImg === 0 ? 4 : prevImg - 1));
    };
    let imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';

    if (img === 0) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 1) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 2) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 3) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
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


        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className={imageSopay}
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className='w-full h-full flex-grow'></div>
                <div className='flex'>
                    <button onClick={handleClickr} className='hoverin w-1/12 bgl txt1 hover:text-2xl rounded-es-xl flex justify-center items-center text-'><p >&lt;</p></button>
                    <div className='w-10/12 h-[30px]'></div>
                    <button onClick={handleClick} className='hoverin w-1/12 bgl txt1 hover:text-2xl rounded-ee-xl flex justify-center items-center text-'><p >&gt;</p></button>
                </div>
            </motion.div>


            <div className='px-3 mt-3 md:m-0 bg-gray-700 rounded-xl py-3 md:bg-transparent md:py-0'>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='text-2xl'>{title}</motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='txt1'>{tech}</motion.p>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='h-[2px] w-full bg-white mb-2'></motion.div>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='text-xl'>{desc}</motion.p>
            </div>
        </div>
    )
}

export default Arts