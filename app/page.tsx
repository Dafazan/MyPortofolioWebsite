'use client'
import Image from 'next/image'
import { LogoCanvas } from '../app/components/canvas/logo';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='h-80 p-5'>
        <LogoCanvas />
      </div>


      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image

          src="/dafazan.png"
          alt="Dafazan Logo"
          width={360}
          height={74}
          priority
        />
      </div>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b text-[30px] bg-zinc-800/30 z-10 pt-2 pb-2 text-blue-600 ">
        Website Under Maintenance
      </p>
      <p className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
        Things you can do in the meantime:
      </p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.instagram.com/dafazan_/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Visit Instagram{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Follow him on instagram.
          </p>
        </a>

        <a
          href="https://dafazan.artstation.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Visit Artstation{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See his 3D artwork on Artstation
          </p>
        </a>

        <a
          href="https://wa.me/6285864714906"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Call Him{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            I would recommend text him first, do not do voice call unless it is urgent.
          </p>
        </a>

        <a
          href="https://www.instagram.com/dafazanlbs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Another IG{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            This one is his other instagram account where he post his 3D artwork.
          </p>
        </a>
      </div>
    </main>

    //   <div className="h-[600px] sm:h-screen md:h-screen py-5 md:py-20 text-indigo-100 z-10 relative">
    //     <div className="h-full  mx-auto md:flex md:items-center md:justify-between">
    //       <div className="w-full mt-20 sm:mb-10 mb-20 md:h-full md:w-1/2 md:mb-0 md:ml-16 sm:mt-10  md:mt-48  text-center">

    //         Kedai Kopi Launam.

    //       </div>

    //     </div>

    //     <div>
    //       <div className="w-full h-full mb-16 mt-5 justify-center col-start-2 text-center">

    //         Menu Terbaru.

    //       </div>
    //       <div className="flex justify-evenly">
    //         <LogoCanvas />
    //       </div>
    //     </div>
    //     <div>
    //       <div className="w-full h-full mb-16 mt-32 justify-center col-start-2 text-center">

    //         Promo.

    //         Berbagai promo di Launam Coffee.

    //       </div>

    //     </div>
    //     <div className="h-9/12 container mx-auto md:flex md:items-center md:justify-between">
    //       <div className="w-full h-full mb-40 mt-40 md:mt-80 md:mb-56 justify-center">

    //         Yuk Ngop
    //         Launam Coffe.

    //       </div>
    //     </div>

    //   </div>

    // );
  )
}
