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
import { isMobile } from "react-device-detect";
import Cursor from "../app/components/cursor"
import WebApp from '../app/components/portofolios/WebApp'
import GamesApp from '../app/components/portofolios/GamesApp'
import Arts from '../app/components/portofolios/Arts'
import Musics from '../app/components/portofolios/Musics'


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
  const [compport, setCompport] = useState(0);
  const [comp, setComp] = useState(0);
  return (
    <>
      <Cursor />
      <main className='text-white custom-cursor-element'>


        <div className=' w-screen h-4/5 bgl md:flex md:pt-20'>
          <div className=' md:w-2/6 w-[0px] md:pt-0 pt-10'>
            <div className='sm:me-20 md:ms-40 md:m-10 m-10 '>
              <img className='' src="logoM.png" alt="" />
            </div>
          </div>
          <div className='md:w-4/6 w-full'>
            <div className='sm:me-20 md:me-40 md:m-10 m-10 mb-0'>
              <p className='text-[#45FFCA] '>Hi, My name is</p>
              <p className='md:text-7xl text-4xl font-bold hoverin'>M. Daffa Fauzan</p>
              <br />
              <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] pb-3 duration-200 ease-in-out hoverin'>Designer.</p>
              <p className='text-[#45FFCA] md:text-6xl text-3xl font-semibold hover:text-gray-900 hover:bg-[#45FFCA] md:pb-3 pb-10 duration-200 ease-in-out hoverin'>Software Engineer.</p>
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

        <div id='aboutme' className='bgd md:px-20 p-10 '>
          <div>
            <p className='txt1 text-4xl md:text-6xl py-5 hoverin'>About Me</p>
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
          <div className='txt1 flex justify-center items-center text-center text-4xl md:text-6xl py-7 '><p>Where I&rsquo;ve Worked</p></div>
          <div className='md:px-48 md:flex'>

            <div className=' md:w-3/12 flex-row md:py-5 duration-100 ease-in-out md:justify-end md:text-end'>
              <div> <button onClick={() => setComp(0)} className={`${comp == 0 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"} `}>Cyberlabs</button></div>
              <div> <button onClick={() => setComp(1)} className={`${comp == 1 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"} `}>Saptaloka Digital</button></div>
              <div> <button onClick={() => setComp(2)} className={`${comp == 2 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"} `}>Programmer Jongkok</button></div>

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
            <p className='text-2xl py-2 txt1 '>Technologies I have been used:</p>
          </div>
          {!isMobile && (
            // Your 3D component goes here


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
          )}
          <div className=' mt-20'>
            <p className='text-2xl py-2 txt1 '>Tools I have been used:</p>
          </div>
          {!isMobile && (
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
          )}


        </div>



        <div className='bgl md:px-20 p-10 text-white'>
          <div className='txt1 text-4xl md:text-6xl py-5 text-end'><p>Some Things I&rsquo;ve Done</p></div>
          <div className='md:flex grid grid-cols-1 gap-2 justify-between z-20'>
            <button onClick={() => setCompport(0)} className={`${compport == 0 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF] rounded-ss-2xl rounded-se-2xl md:rounded-se-none py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : "rounded-ss-2xl rounded-se-2xl md:rounded-se-none py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"} hoverin`}>
              <p className={`${compport == 0 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Web and App
              </p>
            </button>
            <button onClick={() => setCompport(1)} className={`${compport == 1 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"} hoverin`}>
              <p className={`${compport == 1 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Game and Simulation
              </p>
            </button>
            <button onClick={() => setCompport(2)} className={`${compport == 2 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"} hoverin`}>
              <p className={`${compport == 2 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Art and illustration
              </p>
            </button>
            <button onClick={() => setCompport(3)} className={`${compport == 3 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF]  py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : " py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"} hoverin`}>
              <p className={`${compport == 3 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>3D Objects
              </p>
            </button>
            <button onClick={() => setCompport(4)} className={`${compport == 4 ? "md:translate-y-3 border-2 md:border-b-0 border-[#00F0FF] rounded-se-none  md:rounded-se-2xl py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out" : "rounded-se-none  md:rounded-se-2xl py-3 bgd w-full h-full flex justify-center items-center duration-100 ease-in-out"} hoverin`}>
              <p className={`${compport == 4 ? "text-xl txt1" : "txt1d duration-100 ease-in-out"}`}>Other
              </p>
            </button>
          </div>
          <div className='bgd mt-2 border-2 border-[#00F0FF] rounded-b-xl p-5 w-full'>
            {
              compport == 0 ?
                <div className='grid grid-cols-1 gap-5'>

                  <WebApp
                    image1='./assets/default.jpeg'
                    image2='./assets/default.jpeg'
                    image3='./assets/default.jpeg'
                    image4='./assets/default.jpeg'
                    image5='./assets/default.jpeg'
                    title='DVoteE' tech='Laravel, Livewire, Bootstrap 5' desc='This web app provide place for digital election where admin can register the candidate and voters account wich could be done faster with csv import, also admins can see the live statistic that can be exported to excel or pdf' />
                  <WebApp
                    image1='./assets/launam1.png'
                    image2='./assets/launam2.png'
                    image3='./assets/launam3.png'
                    image4='./assets/launam4.png'
                    image5='./assets/launam5.png'
                    title='Launam Coffee' tech='Next.js, Tailwind,Three.js, Firebase' desc='This is a catalog web for Launam, a coffee shop. This web used three.js for more interactive website' />


                </div>
                : compport == 1 ?
                  <div className='grid grid-cols-1 gap-5'>

                    <GamesApp
                      image1='./assets/default.jpeg'
                      image2='./assets/default.jpeg'
                      image3='./assets/default.jpeg'
                      image4='./assets/default.jpeg'
                      image5='./assets/default.jpeg'
                      title='Vespa Bodypaint Order' tech='Unity, Vuforia SDK, Blender, Firebase, Flutter' desc='This AR app is used for ordering Vespa bodypaint, it can detect a Vespa and a 3D decoy of it will appear within the AR and users can customizing the colors of the decoy then save the desired color for ordering wich will be saved in Firebase and the owner of the shop can view the order from the second app that made with Flutter' />
                    <GamesApp
                      image1='./assets/default.jpeg'
                      image2='./assets/default.jpeg'
                      image3='./assets/default.jpeg'
                      image4='./assets/default.jpeg'
                      image5='./assets/default.jpeg'
                      title='Traditional Loop' tech='Unity' desc='This App simulating some traditional Indonesian music instrumental like Bonang, Angklung, Saron, Kecapi, etc. it has two mode, the regular mode and loop mode. Users can record the sounds and the note when they play the instrument wich the Audio and Note can be viewed later via app itself' />


                  </div>

                  : compport == 2 ?

                    <div className='grid grid-cols-1 gap-5'>

                      <Arts
                        image1='https://cdna.artstation.com/p/assets/images/images/039/968/002/large/dafazan-w-moon-c2.jpg?1627470927'
                        image2='https://cdnb.artstation.com/p/assets/images/images/039/968/043/large/dafazan-2.jpg?1627471053'
                        image3='https://cdna.artstation.com/p/assets/images/images/039/968/002/large/dafazan-w-moon-c2.jpg?1627470927'
                        image4='https://cdnb.artstation.com/p/assets/images/images/039/968/043/large/dafazan-2.jpg?1627471053'
                        image5='https://cdna.artstation.com/p/assets/images/images/039/968/002/large/dafazan-w-moon-c2.jpg?1627470927'
                        title='Earth and Moon' tech='Blender, Photoshop' desc='Earth and Moon Illustration for wallpaper rendered with Blender Cycles and composited with Adobe Photoshop' />
                      <Arts
                        image1='https://cdna.artstation.com/p/assets/images/images/040/695/712/large/dafazan-mini-city-compnonwm.jpg?1629640055'
                        image2='https://cdnb.artstation.com/p/assets/images/images/040/695/721/large/dafazan-mini-city-compnonwm2.jpg?1629640087'
                        image3='https://cdna.artstation.com/p/assets/images/images/040/695/712/large/dafazan-mini-city-compnonwm.jpg?1629640055'
                        image4='https://cdnb.artstation.com/p/assets/images/images/040/695/721/large/dafazan-mini-city-compnonwm2.jpg?1629640087'
                        image5='https://cdna.artstation.com/p/assets/images/images/040/695/712/large/dafazan-mini-city-compnonwm.jpg?1629640055'
                        title='City Scene' tech='Blender, Photoshop' desc='I Created a city scene, I rendered daytime version and nightime version and composite it using Adobe Photoshop' />

                    </div>
                    : compport == 3 ?
                      <div className='grid grid-cols-1 gap-5'>
                        <Arts
                          image1='https://cdnb.artstation.com/p/assets/images/images/053/506/003/large/dafazan-1.jpg?1662385038'
                          image2='https://cdna.artstation.com/p/assets/images/images/053/505/996/large/dafazan-igc3.jpg?1662385024'
                          image3='https://cdnb.artstation.com/p/assets/images/images/053/506/053/large/dafazan-civic4.jpg?1662385098'
                          image4='https://cdna.artstation.com/p/assets/images/images/053/506/030/large/dafazan-4.jpg?1662385067'
                          image5='https://cdnb.artstation.com/p/assets/images/images/053/506/081/large/dafazan-igc2.jpg?1662385138'
                          title='Honda Civic' tech='Blender' desc='I made Type R Honda Civic into 3D model with 90% acuracy' />
                        <Arts
                          image1='https://cdnb.artstation.com/p/assets/images/images/032/943/625/large/dafazan-3uplox.jpg?1607955553'
                          image2='https://cdnb.artstation.com/p/assets/images/images/032/943/635/large/dafazan-2uplox.jpg?1607955572'
                          image3='https://cdna.artstation.com/p/assets/images/images/032/943/642/large/dafazan-1uplox.jpg?1607955588'
                          image4='https://cdnb.artstation.com/p/assets/images/images/032/943/625/large/dafazan-3uplox.jpg?1607955553'
                          image5='https://cdnb.artstation.com/p/assets/images/images/032/943/635/large/dafazan-2uplox.jpg?1607955572'
                          title='Tv Table' tech='Blender' desc='I designed and applying the design into 3D model and rendered It with Blender Cycles Render' />

                      </div>

                      : compport == 4 ?

                        <div className='grid grid-cols-1 gap-5'>
                          <Arts
                            image1='./assets/projok1.png'
                            image2='./assets/projok2.png'
                            image3='./assets/projok1.png'
                            image4='./assets/projok2.png'
                            image5='./assets/projok1.png'
                            title='Programmer Jongkok&rsquo;s Logo' tech='Illustrator' desc='I designed logo for Programmer jongkok. the meaning of the logo is that like the P and the J in it has compeletly different size and shape but still can be perfectly united with that difference. and the colors resembling Saptaloka Digital&rsquo;s colors, wich is the place that unite us' />

                          <Musics
                            image1='./assets/utb.png'
                            image2='./assets/utb.png'
                            image3='./assets/utb.png'
                            image4='./assets/utb.png'
                            image5='./assets/utb.png'
                            title='Used To Be'
                            tech='FL Studio, Spitfire'
                            desc='I Created music for game soundtrack need using Fruity Loop Studio and some samples from Spitfire Audio'
                            audioSource='./assets/utb.mp3' />
                        </div> : false

            }

          </div>
          <div className='flex my-24 justify-center items-center'>
            <a href="/portofolio" >
              <div className='py-3 px-4 text-3xl hover:text-4xl duration-100 ease-in-out font-semibold text-[#090d47] rounded-lg bglb hoverin text-center'>
                <p>See More Things he has done</p>
              </div>
            </a>
          </div>

        </div>
        <div className='bgd h-screen flex items-center justify-center p-5'>
          <div>
            <p className='text-6xl txt1'>Got a Project?</p>
            <a href="/contacts" >
              <div className='py-3 px-4 text-3xl hover:text-4xl duration-100 ease-in-out font-semibold text-[#090d47] rounded-lg bglb hoverin flex justify-center items-center text-center mt-5'>
                <p>Let&rsquo;s Talk !</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
