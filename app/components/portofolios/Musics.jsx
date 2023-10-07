'use client'
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Musics({ image1, image2, image3, image4, image5, title, tech, desc, audioSource }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1); // Initial volume (0 to 1)

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSliderChange = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };
    const [img, setImg] = useState(2);
    const handleClick = () => {
        setImg((prevImg) => (prevImg === 4 ? 0 : prevImg + 1));
    };
    const handleClickr = () => {
        setImg((prevImg) => (prevImg === 0 ? 4 : prevImg - 1));
    };
    let imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';

    if (img === 0) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 1) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 2) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    } else if (img === 3) {
        imageSopay = 'h-[170px] md:h-[300px] rounded-xl flex flex-col bg-center bg-no-repeat bg-cover ';
    }
    let backgroundImageUrl = `${image5}`;
    if (img === 0) {
        backgroundImageUrl = `${image1}`;
    } else if (img === 1) {
        backgroundImageUrl = `${image2}`;
    } else if (img === 2) {
        backgroundImageUrl = `${image3}`;
    } else if (img === 3) {
        backgroundImageUrl = `${image4}`;
    }
    return (


        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className={imageSopay}
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className='w-full h-full flex-grow'></div>
                <div className='flex'>
                    <button onClick={handleClickr} className='w-1/12 bgl txt1 hover:text-2xl rounded-es-xl flex justify-center items-center text-'><p >&lt;</p></button>
                    <div className='w-10/12 h-[30px]'></div>
                    <button onClick={handleClick} className='w-1/12 bgl txt1 hover:text-2xl rounded-ee-xl flex justify-center items-center text-'><p >&gt;</p></button>
                </div>
            </motion.div>


            <div className='px-3 mt-3 md:m-0 bg-gray-700 rounded-xl py-3 md:bg-transparent md:py-0'>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='text-2xl'>{title}</motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='txt1'>{tech}</motion.p>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='h-[2px] w-full bg-white mb-2'></motion.div>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='text-xl'>{desc}</motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className='txt1 mt-4'>Sound Preview</motion.p>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className='p-4 bg-[#141A29] rounded-lg'>
                    <audio
                        ref={audioRef}
                        src={audioSource}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                    />
                    <div className='flex md:flex-row flex-col'>
                        <div className="md:w-2/12 flex items-center justify-center">
                            <button
                                onClick={togglePlayPause}
                                className="bg-[#202B37] text-white font-bold p-4 rounded-full"
                            >
                                {isPlaying ?
                                    <div className='h-[20px] w-[20px] md:h-[30px] md:w-[30px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='#ffffff' d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" /></svg>
                                    </div>
                                    :
                                    <div className='h-[20px] w-[20px] md:h-[30px] md:w-[30px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='#ffffff' d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                                    </div>

                                }
                            </button>

                        </div>
                        <div className='flex justify-center items-center md:w-7/12 md:m-0 my-5'><input
                            type="range"
                            min="0"
                            max={audioRef.current && audioRef.current.duration}
                            value={currentTime}
                            onChange={handleSliderChange}
                            className="w-full md:me-3"
                        /></div>
                        <div className='flex md:w-3/12'>
                            <div className='w-10 flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z" /></svg>
                            </div>
                            <div className="w-full md:w-20 flex justify-center items-center">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Musics