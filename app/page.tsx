'use client'
import Image from 'next/image'
import React, { Suspense } from "react";
import CardInfo from '../app/components/frontcard';


export default function Home() {
  return (
    <main >
      <div className=' w-screen md:h-[100px] h-[70px]'> </div>
      <div className=' w-screen bg-gray-900 md:flex'>
        <div className=' md:w-2/6 w-full '>
          <div className='sm:me-20 md:ms-40 md:m-10 m-10'>
            <img className='' src="logoM.png" alt="" />
          </div>
        </div>
        <div className='md:w-4/6 w-full'>
          <div className='sm:me-20 md:me-40 md:m-10 m-10'>
            <p className='text-[#45FFCA] '>Hi, My name is</p>
            <p className='md:text-7xl text-4xl font-bold'>M. Daffa Fauzan</p>
            <br />
            <p className='md:text-white text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] pb-3'>Designer.</p>
            <p className='md:text-white text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] md:pb-3 pb-10'>Software Engineer.</p>
            {/* <div className='pt-5'>
              <p className='md:text-2xl text-1xl'>Development</p>
              <p className='md:text-3xl text-2xl text-[#64CCC5]'>Game - Website - Mobile</p>
            </div>
            <div className="pt-5 pb-10">
              <p className='md:text-2xl text-1xl'>Design</p>
              <p className='md:text-3xl text-[#64CCC5]'>3D - 2D - UI/UX</p>
            </div> */}

          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 md:pt-10 pt-0 sm:ps-20 sm:pe-20 md:ps-40 md:pe-40">
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
