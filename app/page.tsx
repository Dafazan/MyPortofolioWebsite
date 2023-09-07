'use client'
import Image from 'next/image'
import React, { Suspense } from "react";
import CardInfo from '../app/components/frontcard';
import Splide from '@splidejs/splide'

export default function Home() {
  return (
    <main >
      <div className=' w-screen md:h-[100px] h-[70px]'> </div>
      <div className=' w-screen h-4/5 bg-gray-900 md:flex md:pt-20'>
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
            <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] pb-3'>Designer.</p>
            <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] md:pb-3 pb-10'>Software Engineer.</p>
          </div>
        </div>
      </div >
      <div className=' h-[200px] md:h-full w-screen bg-gray-900'>
        <div className="grid justify-center md:pt-0 pt-[100px]">
          <a href="#aboutme">
            <button className='w-[200px] h-[50px] text-[#45FFCA] bg-gray-800 rounded-full hover:text-gray-800 hover:bg-[#45FFCA]'>About Me</button>
          </a>
        </div>
      </div>
      <div id='aboutme' className="w-screen h-[100px] bg-gray-900"></div>

      <div className="w-screen h-[200px]">

      </div>

      <div id='porto' className="flex flex-col p-10 md:pt-10 pt-0 sm:ps-20 sm:pe-20 md:ps-40 md:pe-40 bg-gray-900">
        <p className='text-4xl font-semibold pb-5'>Portofolio</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-3'>
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>



    </main>
  )
}
