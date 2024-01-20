import React from 'react'
import { motion } from 'framer-motion'

function Profile() {
    return (
        <motion.div
            initial={{ width: 10, opacity: 50 }}
            animate={{ width: 320, opacity: 100 }}
            transition={{ duration: 0.3, delay: 0.5 }}

            className='w-80 flex flex-col gap-1'>
            <div className='bgblur w-full '>
                <div className='w-full h-3 flex justify-between'>
                    <div className='w-3 h-3 border-t-2 border-s-2 border-blue-500'></div>
                    <div className='w-3 h-3 border-t-2 border-e-2 border-blue-500'></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 100, }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='px-3'>
                    <img src="https://media.licdn.com/dms/image/D5603AQHOt-ZoBNMMrw/profile-displayphoto-shrink_800_800/0/1685204279901?e=2147483647&v=beta&t=zGUusgrgd1OfxIe5-7afwdyhWaOsQGGSDqTjqoBpoqU" alt="profile" />
                </motion.div>
                <div className='w-full h-3 flex justify-between'>
                    <div className='w-3 h-3 border-b-2 border-s-2 border-blue-500'></div>
                    <div className='w-3 h-3 border-b-2 border-e-2 border-blue-500'></div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 100, }}
                transition={{ duration: 0.2, delay: 1.5 }}
                className='flex bgblur w-full border-y-2 border-blue-500 px-2'>
                <div className='w-8 flex flex-col justify-center'>
                    <svg width="15px" fill='#ffffff' height="15px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44,6H4A2,2,0,0,0,2,8V40a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V8A2,2,0,0,0,44,6ZM42,29.1l-6.6-6.5a1.9,1.9,0,0,0-2.8,0L26,29.1,15.4,18.6a1.9,1.9,0,0,0-2.8,0L6,25.1V10H42Z" />
                    </svg>
                </div>
                <button className='hover:text-lime-500'>IMG001</button>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 100, }}
                transition={{ duration: 0.2, delay: 1.8 }}
                className='flex bgblur w-full border-y-2 border-blue-500 px-2'>
                <div className='w-8 flex flex-col justify-center'>
                    <svg width="15px" fill='#ffffff' height="15px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44,6H4A2,2,0,0,0,2,8V40a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V8A2,2,0,0,0,44,6ZM42,29.1l-6.6-6.5a1.9,1.9,0,0,0-2.8,0L26,29.1,15.4,18.6a1.9,1.9,0,0,0-2.8,0L6,25.1V10H42Z" />
                    </svg>
                </div>
                <button className='hover:text-lime-500'>IMG002</button>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 100, }}
                transition={{ duration: 0.2, delay: 2.1 }}
                className='flex bgblur w-full border-y-2 border-blue-500 px-2'>
                <div className='w-8 flex flex-col justify-center'>
                    <svg width="15px" fill='#ffffff' height="15px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44,6H4A2,2,0,0,0,2,8V40a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V8A2,2,0,0,0,44,6ZM42,29.1l-6.6-6.5a1.9,1.9,0,0,0-2.8,0L26,29.1,15.4,18.6a1.9,1.9,0,0,0-2.8,0L6,25.1V10H42Z" />
                    </svg>
                </div>
                <button className='hover:text-lime-500'>IMGSYMBOL001</button>

            </motion.div>
        </motion.div>
    )
}

export default Profile