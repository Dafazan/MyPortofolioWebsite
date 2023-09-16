'use client'
import Image from 'next/image'
import React, { Suspense } from "react";
import CardInfo from '../app/components/frontcard';
import Splide from '@splidejs/splide'

export default function Home() {
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
      <div id='aboutme' className="w-screen h-[100px] bgl"></div>

      <div className='bgd md:px-20 p-10'>
        <div className='bg-red-900 md:flex'>
          <div className='md:w-8/12 bg-green-300'>About me</div>
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
        <div className='bg-red-900'>Where ive worked</div>
        <div className='bg-green-300 md:px-48 md:flex'>
          <div className='bg-violet-800 md:w-3/12'>where</div>
          <div className='bg-violet-400 md:w-9/12'>desc</div>
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
