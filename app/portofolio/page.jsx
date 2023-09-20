'use client'
import React from 'react'
import { useState } from 'react';
//translate-y-3 border-x-2 border-t-2 border-[#00F0FF]
function Portofolio() {
    const [img, setImg] = useState(0);
    const handleClick = () => {
        setImg((prevImg) => (prevImg === 4 ? 0 : prevImg + 1));
    };
    const handleClickr = () => {
        setImg((prevImg) => (prevImg === 0 ? 4 : prevImg - 1));
    };
    let imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-red-500';

    if (img === 0) {
        imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-blue-500';
    } else if (img === 1) {
        imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-violet-500';
    } else if (img === 2) {
        imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-slate-400';
    } else if (img === 3) {
        imageSopay = 'h-[300px] w-3/6 rounded-xl flex flex-col bg-yellow-500';
    }


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
            <div className='flex bgd mt-2 border-2 border-[#00F0FF] rounded-b-xl p-5 w-full'>
                <div className='flex w-full'>
                    <div className={imageSopay}>
                        <div className='w-full h-full flex-grow'></div>
                        <div className='flex'>
                            <div className='w-1/12 bgl txt1 hover:text-2xl rounded-es-xl flex justify-center items-center text-'><button onClick={handleClickr}>&lt;</button></div>
                            <div className='w-10/12 h-[30px]'></div>
                            <div className='w-1/12 bgl txt1 hover:text-2xl rounded-ee-xl flex justify-center items-center text-'><button onClick={handleClick}>&gt;</button></div>
                        </div>
                    </div>


                    <div>tulisan</div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio