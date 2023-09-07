import React from 'react'

function Testimonial() {
  return (
    <div className='w-full py-7 px-14 font-semibold'>
      <h1 className='text-2xl text-black pb-1'>Acep Wahyu</h1>
      <h3 className='text-1xl text-gray-400 pb-1'>Jakarta</h3>
      <p className='text-1xl text-black pb-2'>Layanan umrohnya bagus banget aku suka, lain kali umroh lagi disini sama keluarga, otw langganan ke travel ini aku rekomendasiin ke kalian juga dijamin gabakal nyesel deh.</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='w-[122px] h-[88px] bg-gray-500'></div>
        <div className='w-[122px] h-[88px] bg-gray-500'></div>
        <div className='w-[122px] h-[88px] bg-gray-500'></div>
        <div className='w-[122px] h-[88px] bg-gray-500'></div>
      </div>
    </div>
  )
}

export default Testimonial