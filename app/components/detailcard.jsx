import React from 'react'

function DetailCard() {
    return (
        <div className='w-[405px] bg-slate-700 rounded-xl'>
            <div className='p-7'>
                <div className='w-full h-[100px] bg-red-900'>
                    <h1>Harga</h1>
                    <h2 >Rp. 39.000</h2>
                </div>
                <div className='w-full h-[50px] bg-green-900'>
                    <p>bar</p>
                </div>
                <div className='w-full '>
                    <p>Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet</p>
                </div>
                <div className='bg-red-900 grid'>
                    <div className='w-10/12 h-[80px] bg-[#E3B02B] rounded-xl mx-auto'>
                        <p>Pesan Paket Umroh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard