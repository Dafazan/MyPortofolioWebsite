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
                            <WebApp
                                image1='./dafazan.png'
                                image2='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                image3='./dafazan.png'
                                image4='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                image5='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                title='Judul disini' tech='Laravel, Bootstrap 5' desc='This is my app' />

                        </div>
                        : comp == 1 ?
                            <div className='grid grid-cols-1 gap-5'>
                                <GamesApp
                                    image1='./dafazan.png'
                                    image2='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                    image3='./dafazan.png'
                                    image4='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                    image5='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                    title='Judul disini' tech='Laravel, Bootstrap 5' desc='This is my app' />

                            </div>

                            : comp == 2 ?

                                <div className='grid grid-cols-1 gap-5'>
                                    <Arts
                                        image1='https://cdnb.artstation.com/p/assets/images/images/053/506/003/large/dafazan-1.jpg?1662385038'
                                        image2='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                                        image3='https://cdnb.artstation.com/p/assets/images/images/053/506/053/large/dafazan-civic4.jpg?1662385098'
                                        image4='https://cdna.artstation.com/p/assets/images/images/053/506/030/large/dafazan-4.jpg?1662385067'
                                        image5='https://cdnb.artstation.com/p/assets/images/images/053/506/081/large/dafazan-igc2.jpg?1662385138'
                                        title='Honda Civic' tech='Blender' desc='I made Type R Honda Civic into 3D model with 90% acuracy' />

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