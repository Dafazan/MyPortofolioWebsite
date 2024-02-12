'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function CardSkillProfile() {
    const [isHover, setIsHover] = useState(false);
    const hovering = () => {

        animateLeft();

        setIsHover(true); // Set isHover after 0.4 seconds

    };
    const unhovering = () => {

        animateRight();
        setTimeout(() => {
            setIsHover(false); // Set isHover after 0.4 seconds
        }, 400);
    };


    const [animateX, setAnimateX] = React.useState(0);
    const [animateT, setAnimateT] = React.useState(0);

    const animateRight = () => {
        setAnimateX(200);
        setAnimateT(-50); // Set x to 100 to animate from 0 to 100
    };

    const animateLeft = () => {
        setAnimateX(0);
        setAnimateT(0); // Set x to 0 to animate from 100 to 0
    };

    return (
        <div onMouseEnter={hovering} onMouseLeave={unhovering} className='overflow-hidden w-full h-full rounded-2xl bg-[#D9B57F] relative'>
            <img className='w-full h-full absolute rounded-xl' src="https://media.licdn.com/dms/image/D5603AQHOt-ZoBNMMrw/profile-displayphoto-shrink_800_800/0/1685204279901?e=2147483647&v=beta&t=zGUusgrgd1OfxIe5-7afwdyhWaOsQGGSDqTjqoBpoqU" alt="profile" />

            <div className={` inset-0 ${isHover ? ' bg-[#D9B57F] bg-opacity-25 backdrop-blur-sm' : ''} w-full h-full rounded-xl flex flex-col p-5 duration-500`}>
                <div className=' w-full  font-semibold text-xl flex justify-center font-abril'>
                    <motion.p
                        animate={{
                            y: animateT // Animate based on the value of animateX
                        }}
                        transition={{ duration: 0.4 }}
                    >Social Media</motion.p>
                </div>
                <div className=' w-full h-full mt-5 font-semibold text-md grid grid-cols-2 gap-5'>
                    <motion.div
                        animate={{
                            y: animateX // Animate based on the value of animateX
                        }}
                        transition={{ duration: 0.4 }} // Animation duration
                        className='bg-violet-600  w-full h-full rounded-md'>IG</motion.div>
                    <motion.div
                        animate={{
                            y: animateX // Animate based on the value of animateX
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }} // Animation duration
                        className='bg-violet-600  w-full h-full rounded-md'>IG</motion.div>
                    <motion.div
                        animate={{
                            y: animateX // Animate based on the value of animateX
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }} // Animation duration
                        className='bg-violet-600  w-full h-full rounded-md'>IG</motion.div>
                    <motion.div
                        animate={{
                            y: animateX // Animate based on the value of animateX
                        }}
                        transition={{ duration: 0.4, delay: 0.3 }} // Animation duration
                        className='bg-violet-600  w-full h-full rounded-md'>IG</motion.div>

                </div>
            </div>
        </div>
    )
}

export default CardSkillProfile