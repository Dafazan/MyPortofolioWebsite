'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React, { Suspense, } from "react";
import CardInfo from '../app/components/frontcard';
import Splide from '@splidejs/splide'
import { useEffect, useRef, useState } from 'react';
import CyberlabsDesc from '../app/components/workplaces/cyberlabs'
import SaptalokaDesc from '../app/components/workplaces/saptaloka'
import EmptyDesc from '../app/components/workplaces/empty'
import ProjokDesc from '../app/components/workplaces/projok'
import { isMobile } from "react-device-detect";
import MobileLayout from "./components/Layouts/MobileLayout";
import DesktopLayout from "./components/Layouts/DesktopLayout";
import SideButton from './components/Layouts/Buttons/SideButton';
import MobileInnerLayout from './components/Layouts/MobileInnerLayout';
import Profile from './components/pages/profile';
import ProfileIntro from './components/pages/profileIntro';
import Employment from './components/pages/employment';


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
    }, []); // Empty dependency array ensures this effect runs only once on component mount


    // useEffect(() => {
    //     if (scrollCount >= 2) {
    //         // Adjust the scale based on the scroll count
    //         const newScale = Math.max(1 - (scrollPosition - SCROLL_THRESHOLD) / 1000, 0.5); // Adjust the divisor for different scaling speeds
    //         setScale(newScale);
    //     }
    // }, [scrollCount, scrollPosition]);

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
                        <div ref={scrollDivRef} className="fixed h-screen body overflow-y-scroll top-0 w-screen ">
                            <div className="w-full h-full relative">

                                <div className=" w-full h-screen scale-[0.6] bgmn absolute">

                                    <Display
                                        s1={scrollY}
                                        s2={scale}
                                        s3={page}
                                    />
                                </div>
                                <div className='w-full h-full flex justify-center items-center absolute '>
                                    <div onClick={handlepageRev} className='mx-14 mt-5 w-screen h-screen rounded-3xl border-[40px]  border-slate-600 hover:border-slate-500 scale-[0.7]'></div>
                                </div>
                            </div>
                            <div className='h-screen w-screen bg-red-900'>asdjkasjdkasjdkasdjkasd</div>
                            <div className='h-screen w-screen bg-red-900'>asdjkasjdkasjdkasdjkasd</div>
                            <div className='h-screen w-screen bg-red-900'>asdjkasjdkasjdkasdjkasd</div>
                            <div className='h-screen w-screen bg-red-900'>asdjkasjdkasjdkasdjkasd</div>
                            <div className='h-screen w-screen bg-red-900'>asdjkasjdkasjdkasdjkasd</div>
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


function Page() {
    const [isProfileImg, setProfileImg] = useState(false);
    const [isEmployment, setIsEmployment] = useState(false)


    const handleProfileImg = () => {
        setProfileImg(!isProfileImg);
        setIsEmployment(false)
            ;
    };
    const handleEmployment = () => {
        setProfileImg(false);
        setIsEmployment(!isEmployment);
    };
    return (
        <div className='w-full h-full flex flex-col justify-center '>
            <div className="flex gap-3">

                <div className='flex flex-col w-80 bgblur border-y-2 border-red-600 p-2 '>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-xs'>SUBJECT:</p>
                            <p className='text-3xl text-lime-500'>DAFFA FAUZAN</p>
                        </div>
                        <div className='flex  flex-col justify-end py-1'>
                            <button onClick={handleProfileImg}>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff" />
                                    <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-blue-600'></div>
                    <div><p className='text-lime-500'>SUBJECT RECORD:</p></div>
                    <div className='w-full h-[2px] bg-blue-600'></div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>EMPLOYMENT HISTORY</p></div>
                        <button onClick={handleEmployment} className='hover:text-lime-500'><p>SHOW DATA &gt;</p></button>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>EDUCATION RECORDS</p></div>
                        <button className='hover:text-lime-500'><p>SHOW DATA &gt;</p></button>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>BIRTH DATA</p></div>
                        <div className='text-red-600'><p>REDACTED</p></div>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>SKILL RECORDS</p></div>
                        <button className='hover:text-lime-500'><p>SHOW DATA &gt;</p></button>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>FINANCIAL HISTORY</p></div>
                        <div className='text-red-600'><p>REDACTED</p></div>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>BANKING DATA</p></div>
                        <div className='text-red-600'><p>REDACTED</p></div>
                    </div>
                    <div className='flex justify-between text-start text-sm'>
                        <div><p>SOCIAL MEDIA RECORDS</p></div>
                        <button className='hover:text-lime-500'><p>SHOW DATA &gt;</p></button>
                    </div>
                    <ProfileIntro />
                </div>
                {isProfileImg ? (
                    <Profile />
                ) : null}
                {isEmployment ? (
                    <Employment />
                ) : null}




            </div>
        </div>
    )
}
