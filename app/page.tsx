'use client'
import Image from 'next/image'
import React, { Suspense } from "react";
import CardInfo from '../app/components/frontcard';
import Splide from '@splidejs/splide'
import { useState } from 'react';
import CyberlabsDesc from '../app/components/workplaces/cyberlabs'
import SaptalokaDesc from '../app/components/workplaces/saptaloka'
import EmptyDesc from '../app/components/workplaces/empty'
import ProjokDesc from '../app/components/workplaces/projok'


export default function Home() {
  const components = [
    // eslint-disable-next-line react/jsx-key
    <p>No Data</p>

  ]

  const [comp, setComp] = useState(0);
  return (
    <main >

      <p className='md:text-7xl text-3xl font-bold items-center text-black bg-yellow-300'>Website under development</p>
      <div className=' w-screen h-4/5 bgl md:flex md:pt-20'>
        <div className=' md:w-2/6 w-[0px] md:pt-0 pt-10'>
          <div className='sm:me-20 md:ms-40 md:m-10 m-10 '>
            <img className='' src="logoM.png" alt="" />
          </div>
        </div>
        <div className='md:w-4/6 w-full'>
          <div className='sm:me-20 md:me-40 md:m-10 m-10 mb-0'>
            <p className='text-[#45FFCA] '>Hi, My name is</p>
            <p className='md:text-7xl text-4xl font-bold'>M. Daffa Fauzan</p>
            <br />
            <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] pb-3 duration-200 ease-in-out'>Designer.</p>
            <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] md:pb-3 pb-10 duration-200 ease-in-out'>Software Engineer.</p>
          </div>
        </div>
      </div >
      <div className=' h-[200px] md:h-full w-screen bgl'>
        <div className="grid justify-center md:pt-0 pt-[100px]">
          <a href="#aboutme">
            <button className='w-[140px] h-[50px] hover:w-[220px] duration-75 ease-in-out text-[#45FFCA] bg-gray-800 rounded-full hover:text-gray-800 hover:bg-[#45FFCA] hover:text-2xl'>About Me</button>
          </a>
        </div>
      </div>
      <div className="w-screen h-[100px] bgl"></div>

      <div id='aboutme' className='bgd md:px-20 p-10'>
        <div>
          <p className='txt1 text-4xl md:text-6xl py-5'>About Me</p>
        </div>
        <div className=' md:flex'>
          <div className='md:w-8/12 md:text-2xl md:flex text-justify md:text-start'>
            <div className=''>
              <p>Hello There, My name is Daffa, and I&rsquo;m passionate about 3D design, Game developing and Website developing. I&rsquo;m graduated as a Software Engineer at a Vocational High School. I found my passion in the field of Designing and Developing when I was studying in Mid school then I decided to take a Software Engineer Vocational High School.

              </p>
              <br />
              <p>I&rsquo;ve spending 4 years learning 3D Modelling as a hobby, and learn how to develop website at school for 3 years. As soon as I graduated from high school, I started to learn how to make a Game with Unity Game Engine. </p>
            </div>
            <div className='md:w-[300px] '></div>
          </div>

          <div className='md:w-4/12 bg-red-800'>image</div>
        </div>
        <div className='bg-violet-400 mt-20'>
          Skills
        </div>
        <div className='bg-violet-800 grid grid-cols-2 md:grid-cols-4 gap-5'>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
          <div className='bgd'>skillGrid</div>
        </div>
      </div>

      <div className='bgl md:px-20 p-10'>
        <div className='txt1 flex justify-center items-center text-center text-4xl md:text-6xl py-7'><p>Where I&rsquo;ve Worked</p></div>
        <div className='md:px-48 md:flex'>
          <div className=' md:w-3/12 flex-row md:py-5 duration-100 ease-in-out md:justify-end md:text-end'>
            <div> <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Cyberlabs</button></div>
            <div> <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Saptaloka Digital</button></div>
            <div> <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Programmer Jongkok</button></div>

          </div>
          <div className=' md:w-9/12'>
            <div className='bgd md:m-5 mt-3 p-3 min-h-[200px] rounded-xl'>
              {
                comp == 0 ?
                  <CyberlabsDesc />
                  : comp == 1 ?

                    <SaptalokaDesc />
                    : comp == 2 ?

                      <ProjokDesc />
                      : comp == 3 ?

                        components[0] : false

              }
            </div>
          </div>
        </div>
      </div>

      <div className='bgd md:px-20 p-10'>
        <div className='bg-red-900'>Things ive done</div>
        <div className='bg-violet-900 md:flex'>
          <div className='bg-violet-600 md:w-7/12'>image</div>
          <div className='bg-violet-300 md:w-5/12 flex-row'>
            <div className='bg-red-600'>title</div>
            <div className='bg-red-800'>desc</div>
          </div>
        </div>
      </div>
    </main>
  )
}
