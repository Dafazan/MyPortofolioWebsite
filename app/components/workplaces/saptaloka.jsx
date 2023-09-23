import React from 'react'
import { motion } from 'framer-motion';

function SaptalokaDesc() {
    return (
        <>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className='text-xl'>IT Staff at <span className='txt1'><a href="https://saptalokadigital.com/">Saptaloka Digital</a></span></motion.p>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='txt1'>May 2023 - Present</motion.p>
            <div className='h-[2px] bg-white mb-2'></div>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>In Saptaloka Digotal, I had experienced developing various simulation app and games with Unity Engine, Vuforia, Blender and Firebase. also developing various Websites as a Front-End Developer with Next.js Framework and Tailwind CSS.</motion.p>
        </>
    )
}

export default SaptalokaDesc