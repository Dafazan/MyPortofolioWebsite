'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React, { Suspense } from "react";
import CardInfo from '../app/components/frontcard';
import Splide from '@splidejs/splide'
import { useEffect, useRef, useState } from 'react';
import CyberlabsDesc from '../app/components/workplaces/cyberlabs'
import SaptalokaDesc from '../app/components/workplaces/saptaloka'
import EmptyDesc from '../app/components/workplaces/empty'
import ProjokDesc from '../app/components/workplaces/projok'
//import { BlenderCanvas } from './components/prefabs/logo/blender'
// import { UnityCanvas } from './components/prefabs/logo/unity'
// import { VuforiaCanvas } from './components/prefabs/logo/vuforia'
// import { TailwindCanvas } from './components/prefabs/logo/tailwind'
// import { BootstrapCanvas } from './components/prefabs/logo/bootstrap'
// import { NextCanvas } from './components/prefabs/logo/next'
// import { LaravelCanvas } from './components/prefabs/logo/laravel'
// import { MysqlCanvas } from './components/prefabs/logo/mysql'
// import { FigmaCanvas } from './components/prefabs/logo/figma'
// import { PrCanvas } from './components/prefabs/logo/pr'
// import { PsCanvas } from './components/prefabs/logo/ps'
// import { XdCanvas } from './components/prefabs/logo/xd'
// import { AiCanvas } from './components/prefabs/logo/ai'
// import { IgniterCanvas } from './components/prefabs/logo/igniter'
// import { FlsCanvas } from './components/prefabs/logo/fls'


export default function Home() {
  const DynamicBlenderCanvas = dynamic(() =>
    import('./components/prefabs/logo/blender').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicUnityCanvas = dynamic(() =>
    import('./components/prefabs/logo/unity').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicVuforiaCanvas = dynamic(() =>
    import('./components/prefabs/logo/vuforia').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicTailwindCanvas = dynamic(() =>
    import('./components/prefabs/logo/tailwind').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicBootstrapCanvas = dynamic(() =>
    import('./components/prefabs/logo/bootstrap').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicNextCanvas = dynamic(() =>
    import('./components/prefabs/logo/next').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicLaravelCanvas = dynamic(() =>
    import('./components/prefabs/logo/laravel').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicMysqlCanvas = dynamic(() =>
    import('./components/prefabs/logo/mysql').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicFigmaCanvas = dynamic(() =>
    import('./components/prefabs/logo/figma').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicPrCanvas = dynamic(() =>
    import('./components/prefabs/logo/pr').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicPsCanvas = dynamic(() =>
    import('./components/prefabs/logo/ps').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicXdCanvas = dynamic(() =>
    import('./components/prefabs/logo/xd').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicAiCanvas = dynamic(() =>
    import('./components/prefabs/logo/ai').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicIgniterCanvas = dynamic(() =>
    import('./components/prefabs/logo/igniter').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });
  const DynamicFlsCanvas = dynamic(() =>
    import('./components/prefabs/logo/fls').then((module) => module.default), {
    loading: () => <p>Loading 3D Objects</p>,
    ssr: false,
  });

  // const [loadingStep, setLoadingStep] = useState(1);

  // useEffect(() => {
  //   const loadNextComponent = () => {
  //     if (loadingStep < 5) {
  //       setLoadingStep((prevStep) => prevStep + 1);
  //     }
  //   };
  //   // Simulate loading one component at a time with a delay
  //   const loadingInterval = setInterval(loadNextComponent, 2000);

  //   return () => {
  //     clearInterval(loadingInterval);
  //   };
  // }, [loadingStep]);


  // const [isComponentVisible, setIsComponentVisible] = useState(false);
  // const componentRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsComponentVisible(true);
  //           // Stop observing once it's visible (optional)
  //           observer.unobserve(componentRef.current);
  //         }
  //       });
  //     },
  //     {
  //       root: null, // Use the viewport as the root
  //       threshold: 0.5, // Trigger when 50% of the component is visible
  //     }
  //   );

  //   if (componentRef.current) {
  //     observer.observe(componentRef.current);
  //   }

  //   return () => {
  //     if (componentRef.current) {
  //       observer.unobserve(componentRef.current);
  //     }
  //   };
  // }, []);

  const components = [
    // eslint-disable-next-line react/jsx-key
    <p>No Data</p>

  ]

  const [comp, setComp] = useState(0);
  return (
    <main className='text-white'>


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
        <div className=' mt-20'>
          <p className='text-2xl py-2 txt1'>Technologies I have been used:</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-6 gap-5'>


          <div className='bgd flex flex-col justify-center items-center'>

            <DynamicUnityCanvas />
            <a href="https://unity.com/">
              <p>Unity</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            {/* {loadingStep === 2 && } */}
            <DynamicVuforiaCanvas />
            <a href="https://developer.vuforia.com/">
              <p>Vuforia</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>

            <DynamicTailwindCanvas />
            <a href="https://tailwindcss.com/">
              <p>Tailwind CSS</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>

            <DynamicBootstrapCanvas />
            <a href="https://getbootstrap.com/">
              <p>Bootstrap 5</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicNextCanvas />
            <a href="https://nextjs.org/">
              <p>Next.Js</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicLaravelCanvas />
            <a href="https://laravel.com/">
              <p>Laravel</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicMysqlCanvas />
            <a href="https://www.mysql.com/">
              <p>MySQL</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicIgniterCanvas />
            <a href="https://codeigniter.com/">
              <p>CodeIgniter 3</p>
            </a>
          </div>
        </div>
        <div className=' mt-20'>
          <p className='text-2xl py-2 txt1'>Tools I have been used:</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-6 gap-5'>
          <div className='bgd flex flex-col justify-center items-center'>

            <DynamicBlenderCanvas />
            <a href="https://www.blender.org/">
              <p>Blender</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicFigmaCanvas />
            <a href="https://www.figma.com">
              <p>Figma</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicAiCanvas />
            <a href="https://www.adobe.com/id_en/products/illustrator.html">
              <p>Adobe Illustrator</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicXdCanvas />
            <a href="https://helpx.adobe.com/id_en/support/xd.html">
              <p>Adobe XD</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicPsCanvas />
            <a href="https://www.adobe.com/id_en/products/photoshop.html">
              <p>Adobe Photoshop</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicPrCanvas />
            <a href="https://www.adobe.com/id_en/products/premiere.html">
              <p>Adobe Premiere</p>
            </a>
          </div>
          <div className='bgd flex flex-col justify-center items-center'>
            <DynamicFlsCanvas />
            <a href="https://www.image-line.com/">
              <p>Fruity Loop Studio</p>
            </a>
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
