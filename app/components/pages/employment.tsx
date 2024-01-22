'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Employment() {
    return (
        <div className='flex flex-col'>

            <motion.div
                initial={{ opacity: 50, }}
                animate={{ opacity: 100, }}
                transition={{ duration: 0.3, }}
                className='w-80 bgblur border-y-2 border-red-600 mb-2'>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 100, }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className='p-2 uppercase'>
                    <h5 className='text-xl'>Employment History</h5>
                    <p className='text-xs text-lime-500'>3 Records Found</p>
                </motion.div>


            </motion.div>
            <div className='uppercase flex flex-col gap-2'>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 100, }}
                    transition={{ duration: 0.3, delay: 0.5 }}

                    className="flex flex-col border-y-2 border-blue-500 bgblur p-2 hover:text-lime-500">
                    <div className="flex justify-between">
                        <p>CyberLabs</p>
                        <p>INTERNSHIP</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xs'>Jul 2022 - Dec 2022</p>
                        <p className='text-xs text-red-600'>ENDED</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 100, }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex flex-col border-y-2 border-blue-500 bgblur p-2 hover:text-lime-500">
                    <div className="flex justify-between">
                        <p>Saptaloka Digital</p>
                        <p>Full Time</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xs'>June 2023 - Present</p>
                        <p className='text-xs text-lime-500'>ACTIVE</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 100, }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    className="flex flex-col border-y-2 border-blue-500 bgblur p-2 hover:text-lime-500">
                    <div className="flex justify-between">
                        <p>Programmer Jongkok</p>
                        <p>Part Time</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xs'>July 2023 - Present</p>
                        <p className='text-xs text-lime-500'>ACTIVE</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Employment