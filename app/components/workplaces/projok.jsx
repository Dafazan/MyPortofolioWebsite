import React from 'react'
import { motion } from 'framer-motion'

function ProjokDesc() {
    return (
        <>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className='text-xl'>Creator at <span className='txt1'><a href="https://www.tiktok.com/@programmerjongkok">Programmer Jongkok</a></span></motion.p>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='txt1'>June 2023 - Present</motion.p>
            <div className='h-[2px] bg-white mb-2'></div>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>This is definetely a description here</motion.p>
        </>
    )
}

export default ProjokDesc