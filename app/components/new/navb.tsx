'use client'
import React, { useEffect, useState, useRef } from 'react'

function Navb() {
    const [scrolledPastScreen, setScrolledPastScreen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // <-- added
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const screenHeight = window.innerHeight;

            if (!menuOpen && currentScroll > screenHeight && currentScroll > lastScrollY.current) {
                setShowNavbar(true);
            } else if (!menuOpen) {
                setShowNavbar(false);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]); // <-- include menuOpen in dependency


    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-14 bg-black z-50 shadow-md md:px-12 px-2 py-3 flex justify-between duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <img
                    src="/assets/DAFAZAN.svg"
                    alt="Logo"
                    className="h-full"
                />
                <div className='h-full flex flex-col justify-center'>
                    <div
                        onClick={() => setMenuOpen(prev => !prev)} // <-- added
                        className='w-6 h-6 flex flex-col justify-between'
                    >
                        <div className='h-[1px] w-full bg-white'></div>
                        <div className='h-[1px] w-full bg-white'></div>
                        <div className='h-[1px] w-full bg-white'></div>

                    </div>
                </div>
            </div>

            {/* Slide-in Nav Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-40 p-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-4 text-lg mt-16 items-end">
                    <a href="#home" className="boldonse-regular hover:underline">HOME</a>
                    <a href="#about" className=" boldonse-regular hover:underline">PORTFOLIO</a>
                    <a href="#about" className="boldonse-regular hover:underline">ABOUT</a>
                    <a href="#contact" className="boldonse-regular hover:underline">CONTACT</a>
                    <div className='flex flex-col text-lg mt-16 items-end'>
                        <a className='font-regular uppercase' href="#">LinkedIn</a>
                        <a className='font-regular uppercase' href="#">Instagram</a>
                        <a className='font-regular uppercase' href="#">Artstation</a>

                    </div>
                </div>
            </div>

            {/* Optional backdrop */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 z-30"
                />
            )}
        </>
    )
}

export default Navb
