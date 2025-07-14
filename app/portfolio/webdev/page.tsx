'use client'
import React, { useState, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Cardsport from "../../components/new/cardsport";
import NavbaryS from "../../components/new/navs";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation"
import Contacts from '@/app/contacts/page';
import Portocard from '@/app/components/ui/portocard';

function WebDev() {
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
    <>
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
            <div className='bg-white h-[1px] w-full mb-10'></div>

            <div className="flex flex-col gap-32 bg-black">
              <div className='w-full  bg-black md:px-12 px-2 '>
                <div className='flex justify-end w-full pb-5'>
                  <h1 className='boldonse-regular text-white text-xl  md:text-5xl '>HIGHLIGHTED WORKS</h1>
                </div>
                <div className=' w-full grid md:grid-cols-3 grid-cols-1 gap-5'>
                  <Portocard />
                  <Portocard />
                  <Portocard />
                  <Portocard />
                  <Portocard />
                  <Portocard />
                </div>
              </div>

            </div>


          </div>
          <div className='h-screen pointer-events-none bottom-0 w-screen flex justify-start items-end md:p-12 p-2 relative'>
            <div className='flex md:flex-row flex-col md:gap-5 md:items-end md:pb-0 pb-20'>
              <h1 className='boldonse-regular text-white text-4xl  -translate-y-[15px] md:text-8xl'>DAFAZAN</h1>
              <div className='flex gap-5 pointer-events-auto'>

                <p className='  md:text-2xl uppercase' >WEBSITE DEVELOPMENT</p>

              </div>
            </div>
          </div>
        </div>


        <div className=" w-full h-screen ">


        </div>

      </ReactLenis>
    </>
  );
}

export default WebDev;
