'use client'
import Image from 'next/image'
import { OrbitalCanvas } from '../../app/components/canvas/orbital';
import React, { useState } from "react";


export default function about() {
    const numero = {
        total: 50,
        available: 35,

    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [number, setNumber] = useState(0);

    // Function to increase the number
    const increaseNumber = () => {
        setNumber(number + 1);
    };

    // Function to decrease the number
    const decreaseNumber = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };



    const availability = (number / numero.total) * 100 + "%";
    return (
        <main>
            <div className="h-screen">
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1'>
                        <p>Total stok: {numero.total}</p>
                        <p>Stok tersedia: {number}</p>

                        <button onClick={increaseNumber}>Increase</button>
                        <button onClick={decreaseNumber}>Decrease</button>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-[500px] h-6 rounded-sm bg-red-900'>
                        <div className='w-[500px] absolute flex items-center justify-center text-center'>
                            <p>berarti tinggal {availability}</p>
                        </div>
                        <div style={{ width: availability }} className='h-full bg-green-500 rounded-sm'></div>
                    </div>
                </div>
            </div>
        </main>
    )

}