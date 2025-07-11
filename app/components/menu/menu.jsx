'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import Logo from '@/components/icons/Logo'


import "./menu.css"

//import { gsap } from 'gsap/gsap-core'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


const menuLinks = [
    { path: "/", label: "" },
    { path: "/portfolios", label: "Portfolios" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/partner", label: "Out Partner" },
    { path: "/infos", label: "Information Center" },
];

const Menu = () => {

    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        gsap.set(".menu-overlay", { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" });
        gsap.set(".menu-link-item-holder", { y: 75 });
        gsap.set(".menu-link-item-al", { scale: 0 });
        gsap.set(".menu-link-item-icon", { x: -300 });
        gsap.set(".menu-link-item-adr", { x: 350 });
        gsap.set(".menu-link-item-adr2", { x: 500 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
            .to(".menu-link-item-al", {
                scale: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
            .to(".menu-link-item-icon", {
                x: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
            .to(".menu-link-item-adr", {
                x: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
            .to(".menu-link-item-adr2", {
                x: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
    }, { scope: container });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);
    return (
        <div className='menu-container z-[99]' ref={container}>


            <div className="menu-bar z-50 relative ">
                <div className={`absolute ${isMenuOpen ? '' : 'bg-black'} opacity-30 w-screen h-[50px]`}></div>
                <div className=' w-screen flex justify-between items-center px-[5%] py-1 absolute'>
                    <div className='w-20 h-10 flex flex-col justify-center' >
                        <Link href={'/'} className='menu-link' onClick={() => isMenuOpen && toggleMenu()} >
                            <svg className={`menu-open ${isMenuOpen ? 'text-black' : 'text-white'}`} viewBox="0 0 585 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='duration-300' d="M29.8001 90.576C24.8081 90.576 20.0081 89.776 15.4001 88.176C10.8561 86.512 7.33613 84.4 4.84013 81.84L7.62413 76.368C9.99213 78.672 13.1601 80.624 17.1281 82.224C21.1601 83.76 25.3841 84.528 29.8001 84.528C34.0241 84.528 37.4481 84.016 40.0721 82.992C42.7601 81.904 44.7121 80.464 45.9281 78.672C47.2081 76.88 47.8481 74.896 47.8481 72.72C47.8481 70.096 47.0801 67.984 45.5441 66.384C44.0721 64.784 42.1201 63.536 39.6881 62.64C37.2561 61.68 34.5681 60.848 31.6241 60.144C28.6801 59.44 25.7361 58.704 22.7921 57.936C19.8481 57.104 17.1281 56.016 14.6321 54.672C12.2001 53.328 10.2161 51.568 8.68013 49.392C7.20813 47.152 6.47213 44.24 6.47213 40.656C6.47213 37.328 7.33613 34.288 9.06413 31.536C10.8561 28.72 13.5761 26.48 17.2241 24.816C20.8721 23.088 25.5441 22.224 31.2401 22.224C35.0161 22.224 38.7601 22.768 42.4721 23.856C46.1841 24.88 49.3841 26.32 52.0721 28.176L49.6721 33.84C46.7921 31.92 43.7201 30.512 40.4561 29.616C37.2561 28.72 34.1521 28.272 31.1441 28.272C27.1121 28.272 23.7841 28.816 21.1601 29.904C18.5361 30.992 16.5841 32.464 15.3041 34.32C14.0881 36.112 13.4801 38.16 13.4801 40.464C13.4801 43.088 14.2161 45.2 15.6881 46.8C17.2241 48.4 19.2081 49.648 21.6401 50.544C24.1361 51.44 26.8561 52.24 29.8001 52.944C32.7441 53.648 35.6561 54.416 38.5361 55.248C41.4801 56.08 44.1681 57.168 46.6001 58.512C49.0961 59.792 51.0801 61.52 52.5521 63.696C54.0881 65.872 54.8561 68.72 54.8561 72.24C54.8561 75.504 53.9601 78.544 52.1681 81.36C50.3761 84.112 47.6241 86.352 43.9121 88.08C40.2641 89.744 35.5601 90.576 29.8001 90.576ZM59.5826 90L90.3026 22.8H97.3106L128.031 90H120.543L92.3186 26.928H95.1986L66.9746 90H59.5826ZM71.6786 72.048L73.7906 66.288H112.863L114.975 72.048H71.6786ZM139.147 90V22.8H164.299C169.995 22.8 174.891 23.728 178.987 25.584C183.083 27.376 186.219 30 188.395 33.456C190.635 36.848 191.755 40.976 191.755 45.84C191.755 50.576 190.635 54.672 188.395 58.128C186.219 61.52 183.083 64.144 178.987 66C174.891 67.856 169.995 68.784 164.299 68.784H143.083L146.251 65.424V90H139.147ZM146.251 66L143.083 62.544H164.107C170.827 62.544 175.915 61.104 179.371 58.224C182.891 55.28 184.651 51.152 184.651 45.84C184.651 40.464 182.891 36.304 179.371 33.36C175.915 30.416 170.827 28.944 164.107 28.944H143.083L146.251 25.584V66ZM217.922 90V28.944H194.306V22.8H248.642V28.944H225.026V90H217.922ZM245.864 90L276.584 22.8H283.592L314.312 90H306.824L278.6 26.928H281.48L253.256 90H245.864ZM257.96 72.048L260.072 66.288H299.144L301.256 72.048H257.96ZM325.428 90V22.8H332.532V83.856H370.164V90H325.428ZM410.023 90.576C404.967 90.576 400.263 89.744 395.911 88.08C391.623 86.352 387.879 83.952 384.679 80.88C381.543 77.744 379.079 74.128 377.287 70.032C375.559 65.872 374.695 61.328 374.695 56.4C374.695 51.472 375.559 46.96 377.287 42.864C379.079 38.704 381.543 35.088 384.679 32.016C387.879 28.88 391.623 26.48 395.911 24.816C400.199 23.088 404.903 22.224 410.023 22.224C415.079 22.224 419.751 23.088 424.039 24.816C428.327 26.48 432.039 28.848 435.175 31.92C438.375 34.992 440.839 38.608 442.567 42.768C444.359 46.928 445.255 51.472 445.255 56.4C445.255 61.328 444.359 65.872 442.567 70.032C440.839 74.192 438.375 77.808 435.175 80.88C432.039 83.952 428.327 86.352 424.039 88.08C419.751 89.744 415.079 90.576 410.023 90.576ZM410.023 84.24C414.055 84.24 417.767 83.568 421.159 82.224C424.615 80.816 427.591 78.864 430.087 76.368C432.647 73.808 434.631 70.864 436.039 67.536C437.447 64.144 438.151 60.432 438.151 56.4C438.151 52.368 437.447 48.688 436.039 45.36C434.631 41.968 432.647 39.024 430.087 36.528C427.591 33.968 424.615 32.016 421.159 30.672C417.767 29.264 414.055 28.56 410.023 28.56C405.991 28.56 402.247 29.264 398.791 30.672C395.335 32.016 392.327 33.968 389.767 36.528C387.271 39.024 385.287 41.968 383.815 45.36C382.407 48.688 381.703 52.368 381.703 56.4C381.703 60.368 382.407 64.048 383.815 67.44C385.287 70.832 387.271 73.808 389.767 76.368C392.327 78.864 395.335 80.816 398.791 82.224C402.247 83.568 405.991 84.24 410.023 84.24ZM467.322 73.296L467.034 64.656L507.738 22.8H515.898L486.234 53.904L482.202 58.224L467.322 73.296ZM461.178 90V22.8H468.282V90H461.178ZM509.466 90L480.474 56.592L485.274 51.408L517.914 90H509.466ZM516.051 90L546.771 22.8H553.779L584.499 90H577.011L548.787 26.928H551.667L523.443 90H516.051ZM528.147 72.048L530.259 66.288H569.331L571.443 72.048H528.147Z" fill={` ${isMenuOpen ? 'white' : 'white'}`} />
                                <path className='duration-300' d="M8.29738 198V130.8H38.8254C46.1214 130.8 52.5534 132.208 58.1214 135.024C63.6894 137.776 68.0414 141.648 71.1774 146.64C74.3134 151.632 75.8814 157.552 75.8814 164.4C75.8814 171.184 74.3134 177.104 71.1774 182.16C68.0414 187.152 63.6894 191.056 58.1214 193.872C52.5534 196.624 46.1214 198 38.8254 198H8.29738ZM23.8494 185.232H38.0574C42.5374 185.232 46.4094 184.4 49.6734 182.736C53.0014 181.008 55.5614 178.576 57.3534 175.44C59.2094 172.304 60.1374 168.624 60.1374 164.4C60.1374 160.112 59.2094 156.432 57.3534 153.36C55.5614 150.224 53.0014 147.824 49.6734 146.16C46.4094 144.432 42.5374 143.568 38.0574 143.568H23.8494V185.232ZM117.37 198V130.8H132.922V198H117.37ZM211.078 199.152C205.766 199.152 200.87 198.32 196.39 196.656C191.974 194.928 188.102 192.496 184.774 189.36C181.51 186.224 178.95 182.544 177.094 178.32C175.302 174.096 174.406 169.456 174.406 164.4C174.406 159.344 175.302 154.704 177.094 150.48C178.95 146.256 181.542 142.576 184.87 139.44C188.198 136.304 192.102 133.904 196.582 132.24C201.062 130.512 205.99 129.648 211.366 129.648C217.318 129.648 222.662 130.64 227.398 132.624C232.198 134.608 236.23 137.488 239.494 141.264L229.51 150.48C227.078 147.92 224.422 146.032 221.542 144.816C218.662 143.536 215.526 142.896 212.134 142.896C208.87 142.896 205.894 143.408 203.206 144.432C200.518 145.456 198.182 146.928 196.198 148.848C194.278 150.768 192.774 153.04 191.686 155.664C190.662 158.288 190.15 161.2 190.15 164.4C190.15 167.536 190.662 170.416 191.686 173.04C192.774 175.664 194.278 177.968 196.198 179.952C198.182 181.872 200.486 183.344 203.11 184.368C205.798 185.392 208.742 185.904 211.942 185.904C215.014 185.904 217.99 185.424 220.87 184.464C223.814 183.44 226.662 181.744 229.414 179.376L238.246 190.608C234.598 193.36 230.342 195.472 225.478 196.944C220.678 198.416 215.878 199.152 211.078 199.152ZM224.038 188.592V163.344H238.246V190.608L224.038 188.592ZM282.452 198V130.8H298.004V198H282.452ZM357.632 198V143.472H336.128V130.8H394.688V143.472H373.184V198H357.632ZM420.609 198L450.561 130.8H465.921L495.969 198H479.649L455.073 138.672H461.217L436.545 198H420.609ZM435.585 183.6L439.713 171.792H474.273L478.497 183.6H435.585ZM532.701 198V130.8H548.253V185.328H581.949V198H532.701Z" fill={` ${isMenuOpen ? 'white' : 'white'}`} />
                            </svg>
                        </Link>
                    </div>
                    <div className={`menu-open`} onClick={toggleMenu}>
                        <p className={` ${isMenuOpen ? 'text-black' : 'text-white'} duration-300`}>MENU</p>
                    </div>
                </div>
            </div>
            <div className="menu-overlay w-screen" >


                <div className="menu-copy  w-full flex flex-col items-end text-end ">
                    <div className="menu-links  w-full px-[5%] uppercase">
                        {menuLinks.map((link, index) => (
                            <div className='menu-link-item w-full' key={index}>
                                <div className="menu-link-item-holder flex justify-end w-full  " onClick={toggleMenu}>
                                    <Link href={link.path} className='menu-link text-[#1e1e1e] opacity-35 hover:opacity-100 duration-300 py-2'>{link.label}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-black w-full h-[1px] my-5"></div>
                    <div className="menu-info"></div>
                    <div className=' w-full h-full flex justify-between px-[5%]'>
                        <div className=' menu-link-item-icon flex flex-col justify-center opacity-20'>
                            <p>DAPZ</p>
                        </div>
                        <div className="flex flex-col py-5">

                            <div className='flex justify-end '>
                                <div className='w-72 flex flex-col gap-1 items-end justify-end'>
                                    <a href='https://www.google.com/maps/place/PT+SAPTALOKA+DIGITAL+INDONESIA/data=!4m2!3m1!1s0x0:0x2124ffb9cb7ee4ad?sa=X&ved=1t:2428&ictx=111' target='blank' className='menu-link-item-adr text-[20px] text-al'>138 Melong Tengah Cimahi, Jawa Barat 40534</a>
                                    <a href="https://wa.me/62895339887714"
                                        target="blank" className='menu-link-item-adr text-[16px]'>+62 895 3398 87714</a>
                                    <a href="mailto:admin@saptalokadigital.com"
                                        target="blank" className='menu-link-item-adr text-[16px] font-medium'>admin@saptalokadigital.com</a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center h-full '>
                                <div className='flex gap-8 menu-link-item-adr2'>

                                    <a className='menu-link-item-al' href="https://www.instagram.com/saptaloka.digital/" target='blank'>INSTAGRAM</a>


                                    <a className='menu-link-item-al' href="https://web.facebook.com/bengkelcoding/?locale=id_ID&_rdc=1&_rdr#" target='blank'>FACEBOOK</a>


                                    <a className='menu-link-item-al' href="https://www.youtube.com/@SaptalokaDigital" target='blank'>YOUTUBE</a>


                                    <a className='menu-link-item-al' href="https://www.linkedin.com/company/pt-saptaloka-digital-indonesia/" target='blank'>LINKEDIN</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-preview"></div>
            </div>
        </div>
    )
}

export default Menu