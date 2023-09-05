'use client'
import Image from 'next/image'
import { LogoCanvas } from '../app/components/canvas/logo';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pt-10">
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
