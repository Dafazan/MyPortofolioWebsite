import React from 'react'
import { motion } from 'framer-motion'

function CyberlabsDesc() {
    return (
        <>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className='text-xl'>Internship at <span className='txt1'><a href="https://cyberlabs.co.id/">Cyberlabs</a></span></motion.p>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='txt1'>July 2022 - December 2022</motion.p>
            <div className='h-[2px] bg-white mb-2'></div>
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>Description here</motion.p>
        </>
    )
}

export default CyberlabsDesc