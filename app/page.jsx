'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React, { Suspense, } from "react";
import { useEffect, useRef, useState } from 'react';
import { isMobile } from "react-device-detect";
import MobileLayout from "./components/Layouts/MobileLayout";
import DesktopLayout from "./components/Layouts/DesktopLayout";
import SideButton from './components/Layouts/Buttons/SideButton';
import MobileInnerLayout from './components/Layouts/MobileInnerLayout';
import Page from './components/Page'
import CardSkillProfile from './components/Cards/CardSkillProfile'

function Display({ s1, s2, s3 }) {
    return (
        <>
            <DesktopLayout
                button2={<SideButton text={s1} />}
                button3={<SideButton text={s2} />}
                button4={<SideButton text={s3} />}
                button5={<SideButton text={'GALLERY'} />}
                button8={<SideButton text={'CONTACT'} />}
                button9={<SideButton text={'SOCIAL'} />}
                button10={<SideButton text={'ACT9'} />}
                button11={<a href='#top'>top</a>}
            >
                <Page />

            </DesktopLayout>
        </>
    )
}
export default function Home() {


    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleWheel = () => {
            setScrollY(window.scrollY);
        };

        const handleTouchMove = () => {
            setScrollY(window.scrollY);
        };

        // Attach event listeners for scroll, wheel, and touchmove events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchmove', handleTouchMove);

        // Detach event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    const [scale, setScale] = useState('scale-[1]');
    const [backgroundCol, setBackgroundCol] = useState('black');
    const [page, setPage] = useState(false);
    const [paget, setPaget] = useState("false");

    const [scrollDivY, setScrollDivY] = useState(0);
    const scrollDivRef = useRef(null);

    const handlepage = () => {
        setPage(true);
        setPaget('true');
    }
    const handlepageRev = () => {
        setPage(false);
        setPaget('false');
    }
    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY;
            setScrollY(newScrollY);

            // Calculate the scale based on the scroll position
            let newScale = 'scale-[1]';
            if (newScrollY >= 0 && newScrollY < 150) {
                newScale = 'scale-[1]';
            } else if (newScrollY >= 150 && newScrollY < 300) {
                newScale = 'scale-[0.9]';
            } else if (newScrollY >= 300 && newScrollY < 450) {
                newScale = 'scale-[0.8]';
            } else if (newScrollY >= 450 && newScrollY < 600) {
                newScale = 'scale-[0.6]';
            } else if (newScrollY >= 600) {
                newScale = 'scale-[0.6]';
            }
            setScale(newScale);

            if (newScrollY >= 600) {
                setBackgroundCol('blue-500');
                handlepage();
            } else {
                setBackgroundCol('black');

            }

            const handleDivScroll = () => {
                const scrollDiv = scrollDivRef.current;
                if (scrollDiv) {
                    setScrollDivY(scrollDiv.scrollTop);
                }
            };
            const scrollDiv = scrollDivRef.current;
            if (scrollDiv) {
                scrollDiv.addEventListener('scroll', handleDivScroll);
            }

            return () => {
                window.removeEventListener('scroll', handleWindowScroll);
                if (scrollDiv) {
                    scrollDiv.removeEventListener('scroll', handleDivScroll);
                }
            };

        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            {isMobile ? (
                <MobileLayout>
                    <MobileInnerLayout>

                        <Page />
                    </MobileInnerLayout>
                </MobileLayout>
            ) : (
                <>
                    <div className='fixed w-full text-green-500 text-center z-50'>{scrollY} - {scale} - {paget} - {scrollDivY}</div>
                    {page ? <>
                        <div ref={scrollDivRef} className={`fixed h-screen duration-1000 ease-in-out ${scrollDivY >= 1000 ? 'bg-[#D3EAFF] ' : 'bg-[#37486A] '} overflow-y-scroll overflow-x-hidden top-0 w-screen `}>
                            <div className="w-full h-full relative">
                                <img className='w-full absolute' src="/bgw.png" alt="" />

                                <div className='w-full h-screen scale-[0.7] absolute px-10'>
                                    <div className='w-full h-full bg-[#090c11] rounded-xl p-2 flex flex-col justify-end items-center'>
                                        <button onClick={handlepageRev} className='bg-[#090c11] hover:bg-black rounded-xl px-4 py-1'>Enter Fullscreen Mode</button>
                                    </div>
                                </div>

                                <div className=" w-full h-screen scale-[0.6] bgmn absolute">

                                    <Display
                                        s1={scrollY}
                                        s2={scale}
                                        s3={page}
                                    />
                                </div>


                            </div>
                            <div className='h-3/6 w-screen '>

                            </div>
                            <div className=' w-screen p-32 text-[#0F1035] font-abril'>
                                <h1 className='text-5xl font-bold'>DAFFA</h1>
                                <h1 className='text-5xl font-bold'>FAUZAN</h1>
                                <div className='w-full flex gap-7 mt-6'>
                                    <div className='w-3/12 h-64'>
                                        <CardSkillProfile />
                                    </div>
                                    <div className='w-9/12 h-64 rounded-2xl bg-[#7FC7D9]'></div>
                                </div>
                                <div className='w-full flex gap-7 mt-7'>
                                    <div className='w-7/12 h-64 rounded-2xl bg-[#D97F7F]'></div>
                                    <div className='w-5/12 h-64 rounded-2xl bg-[#7FD9A8]'></div>
                                </div>
                            </div>
                            <div className='h-screen w-screen px-32'>


                            </div>
                            <div className='h-screen w-screen'>asdjkasjdkasjdkasdjkasd</div>
                            <div className='h-screen w-screen'>asdjkasjdkasjdkasdjkasd</div>
                        </div>
                    </> : <>


                        <div id='#top' className={`w-full duration-100 bg-${backgroundCol} fixed`}>

                            <div className={`bgmn inset-0 transform transition-transform ${scale}`}

                            >
                                <Display
                                    s1={scrollY}
                                    s2={scale}
                                    s3={page}
                                />



                            </div>
                            <div className='w-screnn h-screen'></div>
                            <div className='w-screnn h-screen'></div>
                            <div className='w-screnn h-screen'></div>
                            <div className='w-screnn h-screen'></div>
                            <div className='w-screnn h-screen'></div>
                        </div>
                        <div className='w-screnn h-screen'></div>
                        <div className='w-screnn h-screen'></div>
                        <div className='w-screnn h-screen'></div>
                        <div className='w-screnn h-screen'></div>

                    </>}


                </>
            )}

        </>
    )
}


