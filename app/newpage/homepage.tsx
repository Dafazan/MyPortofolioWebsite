'use client'
import React, { useState, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { motion } from "motion/react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation"
import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";
import { Parallax } from 'react-parallax';
import { LampContainer } from '@/app/components/ui/lamp';
import Portocard from '../components/ui/portocard';
import Contacts from '../contacts/page';

function HomePage() {

    const [hovered, setHovered] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ReactLenis root>


            <div className="">
                <div className='absolute'>

                    <BackgroundGradientAnimation
                        gradientBackgroundStart="rgb(0, 0, 0)"
                        gradientBackgroundEnd="rgb(0, 0, 0)"
                        firstColor="255, 0, 0"
                        secondColor="220, 20, 60"
                        thirdColor="255, 69, 0"
                        fourthColor="178, 34, 34"
                        fifthColor="255, 99, 71"
                        pointerColor="255, 0, 0"
                    >

                    </BackgroundGradientAnimation>
                    <div className='bg-white h-[1px] w-full'></div>
                    <div className='h-screen bg-black'>
                        <div className=' h-full flex flex-col justify-center'>
                            <div className=' md:px-12 px-2 flex md:flex-row flex-col md:gap-0 gap-5 items-center'>
                                <div className='md:w-[50%] w-full'>
                                    <div className='flex flex-col text-xl text-white'>
                                        <a
                                            onMouseEnter={() => setHovered(1)}
                                            onMouseLeave={() => setHovered(0)}
                                            href="/"
                                        >
                                            <div className="relative w-full">
                                                {/* Background layer */}
                                                <div className={`absolute inset-0  z-0  py-3 duration-300 ${hovered === 1 ? 'bg-white w-full' : 'w-0'}`} />

                                                {/* Text layer */}
                                                <div className="relative z-10 md:px-4 px-2 py-2 border-white  border-t">
                                                    <p className={`${hovered === 1 ? `text-black` : `text-white`}`}>UI / UX DESIGNER</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a
                                            onMouseEnter={() => setHovered(2)}
                                            onMouseLeave={() => setHovered(0)}
                                            href="/"
                                        >
                                            <div className="relative w-full">
                                                {/* Background layer */}
                                                <div className={`absolute inset-0  z-0  py-3 duration-300 ${hovered === 2 ? 'bg-white w-full' : 'w-0'}`} />

                                                {/* Text layer */}
                                                <div className="relative z-10 md:px-4 px-2 py-2 border-white  border-t">
                                                    <p className={`${hovered === 2 ? `text-black` : `text-white`}`}>GRAPHIC DESIGNER</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            onMouseEnter={() => setHovered(3)}
                                            onMouseLeave={() => setHovered(0)}
                                            href="/"
                                        >
                                            <div className="relative w-full">
                                                {/* Background layer */}
                                                <div className={`absolute inset-0  z-0  py-3 duration-300 ${hovered === 3 ? 'bg-white w-full' : 'w-0'}`} />

                                                {/* Text layer */}
                                                <div className="relative z-10 md:px-4 px-2 py-2 border-white  border-t">
                                                    <p className={`${hovered === 3 ? `text-black` : `text-white`}`}>WEBSITE DEVELOPER</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            onMouseEnter={() => setHovered(4)}
                                            onMouseLeave={() => setHovered(0)}
                                            href="/"
                                        >
                                            <div className="relative w-full">
                                                {/* Background layer */}
                                                <div className={`absolute inset-0  z-0  py-3 duration-300 ${hovered === 4 ? 'bg-white w-full' : 'w-0'}`} />

                                                {/* Text layer */}
                                                <div className="relative z-10 md:px-4 px-2 py-2 border-white  border-t">
                                                    <p className={`${hovered === 4 ? `text-black` : `text-white`}`}>3D AND ANIMATIONS</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            onMouseEnter={() => setHovered(5)}
                                            onMouseLeave={() => setHovered(0)}
                                            href="/"
                                        >
                                            <div className="relative w-full">
                                                {/* Background layer */}
                                                <div className={`absolute inset-0  z-0  py-3 duration-300 ${hovered === 5 ? 'bg-white w-full' : 'w-0'}`} />

                                                {/* Text layer */}
                                                <div className="relative z-10 md:px-4 px-2 py-2 border-white  border-y">
                                                    <p className={`${hovered === 5 ? `text-black` : `text-white`}`}>FILMMAKING</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-[50%] w-full md:ps-10 p-0 '>
                                    <div className='w-full md:h-[70vh] h-[50vh]  flex gap-1'>
                                        <div className='w-full h-full flex flex-col gap-1'>
                                            <div className='w-full h-[40%] bg-red-400'>
                                                <img
                                                    src="DSC07040.webp"
                                                    alt="d"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className='w-full h-[60%]  bg-red-200'>
                                                <img
                                                    src="DSC07054.webp"
                                                    alt="d"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex flex-col gap-1'>
                                            <div className='w-full h-[70%] bg-red-400'>
                                                <img
                                                    src="DSC07048.webp"
                                                    alt="d"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className='w-full h-[30%]  bg-red-200'>
                                                <img
                                                    src="DSC07042.webp"
                                                    alt="d"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-32 bg-black">
                        <div className='w-full  bg-black md:px-12 px-2 '>
                            <div className='flex justify-end w-full pb-5'>
                                <h1 className='boldonse-regular text-white text-xl  md:text-5xl '>HIGHLIGHTED WORKS</h1>
                            </div>
                            <div className=' w-full grid md:grid-cols-3 grid-cols-1 gap-5'>
                                <Portocard img='/assets/dw.webp' title='QUN FILMS WEBSITE' roles={<><p className='font-thin'>WEB DEVELOPER</p></>} />
                                <Portocard img='/assets/dw.webp' title='SAPTALOKA DIGITAL WEBSITE' roles={<><p className='font-thin'>UI/UX DESIGNER</p></>} />
                                <Portocard img='/assets/dw.webp' title='PT. TELKOM INFRA ERP' roles={<><p className='font-thin'>UI/UX DESIGNER</p></>} />
                                <Portocard img='/assets/dw.webp' title='PT. CBL ERP' roles={<><p className='font-thin'>UI/UX DESIGNER</p></>} />
                                <Portocard img='/assets/dw.webp' title='PT. PLN ERP' roles={<><p className='font-thin'>UI/UX DESIGNER</p></>} />
                                <Portocard img='/assets/dw.webp' title='IBADAHKU' roles={<><p className='font-thin'>UI/UX DESIGNER</p></>} />
                            </div>
                        </div>
                        <div className='w-full  bg-black md:px-12 px-2 '>
                            <div className='flex justify-start w-full md:pb-5'>
                                <h1 className='boldonse-regular text-white text-xl  md:text-5xl '>GET IN TOUCH</h1>
                            </div>
                            <div className=' w-full '>
                                <Contacts />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='h-screen pointer-events-none bottom-0 w-screen flex justify-start items-end md:p-12 p-2 relative'>
                    <div className='flex md:flex-row flex-col md:gap-5 md:items-end md:pb-0 pb-20'>
                        <h1 className='boldonse-regular text-white text-4xl  -translate-y-[15px] md:text-8xl'>DAFAZAN</h1>
                        <div className='flex gap-5 pointer-events-auto'>

                            <a className='  md:text-2xl uppercase' href="">Portfolios</a>
                            <a className=' md:text-2xl uppercase' href="">About</a>
                            <a className=' md:text-2xl uppercase' href="">Contact</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" w-full h-screen ">

                {/* <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-[50vh] p-[5%] flex flex-col justify-center'  bgImage="/assets/bg.webp" strength={200}>
      <div className=' md:w-full w-full   py-5 flex flex-col justify-between'>
       </div>
       </Parallax> */}
            </div>

        </ReactLenis>
    )
}

export default HomePage
