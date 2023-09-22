'use client'
import React from 'react'
import { useState } from 'react';
//translate-y-3 border-x-2 border-t-2 border-[#00F0FF]
import WebApp from '../components/portofolios/WebApp'
import GamesApp from '../components/portofolios/GamesApp'
import Arts from '../components/portofolios/Arts'


function Portofolio() {


    const components = [
        // eslint-disable-next-line react/jsx-key
        <p>No Data</p>

    ]
    const [comp, setComp] = useState(0);
    return (
        <div className='bgl md:px-20 p-10'>
            <div className='txt1 text-4xl md:text-6xl py-5'><p>More Things I&rsquo;ve Done</p></div>
            <div className='md:flex grid grid-cols-1 gap-2 justify-between z-20'>
                <div className={`${comp == 0 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF] rounded-ss-2xl rounded-se-2xl md:rounded-se-none py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : "rounded-ss-2xl rounded-se-2xl md:rounded-se-none py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"}`}>
                    <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Web and App
                    </button>
                </div>
                <div className={`${comp == 1 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"}`}>
                    <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Game and Simulation
                    </button>
                </div>
                <div className={`${comp == 2 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"}`}>
                    <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Art and illustration
                    </button>
                </div>
                <div className={`${comp == 3 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"}`}>
                    <button onClick={() => setComp(3)} className={`${comp == 3 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>3D Objects
                    </button>
                </div>
                <div className={`${comp == 4 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF] rounded-se-none  md:rounded-se-2xl py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : "rounded-se-none  md:rounded-se-2xl py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"}`}>
                    <button onClick={() => setComp(4)} className={`${comp == 4 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Other
                    </button>
                </div>
            </div>
            <div className='bgd mt-2 border-2 border-[#00F0FF] rounded-b-xl p-5 w-full'>
                {
                    comp == 0 ?
                        <div className='grid grid-cols-1 gap-5'>
                            <WebApp />
                            <WebApp />
                            <WebApp />
                            <WebApp />
                        </div>
                        : comp == 1 ?
                            <div className='grid grid-cols-1 gap-5'>
                                <GamesApp />
                                <GamesApp />
                                <GamesApp />
                                <GamesApp />
                            </div>

                            : comp == 2 ?

                                <div className='grid grid-cols-1 gap-5'>
                                    <Arts />
                                    <Arts />
                                    <Arts />
                                    <Arts />
                                </div>
                                : comp == 3 ?
                                    <div className='grid grid-cols-1 gap-5'>
                                        3d
                                    </div>

                                    : comp == 4 ?

                                        <div className='grid grid-cols-1 gap-5'>
                                            Other
                                        </div> : false

                }

            </div>

        </div>
    )
}

export default Portofolio