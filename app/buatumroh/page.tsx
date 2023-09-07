import React from 'react'
import DetailCard from '../components/detailcard'
import Testimonial from '../components/testimonial'
import Image from 'next/image'

function Detail() {
    return (
        <>
            <div className='flex pt-32'>
                <div className='w-8/12'>
                    <div className=' bg-white w-[726px] h-[681px] ms-20 rounded-xl'>
                        <div className='h-[60px] rounded-t-xl center'>
                            <p className='text-2xl text-center pt-3 text-black'>Umroh Dream Exclusive Plus Kereta Cepat 10 Hari</p>
                        </div>
                        <div className='bg-gray-900 w-[726px] h-[315px] rounded-xl'></div>
                        <div className='grid grid-cols-2 gap-5 p-7'>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Pilihan Kamar</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Satu Kamar 4 Orang QUAD</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Tanggal Keberangkatan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>10 September 2023</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Maskapai Pesawat</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Garuda</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Kota Keberangkatan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Jakarta</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Durasi Perjalanan</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>9 Hari</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/12'>
                                    <Image
                                        src="/mdi_guest-room.png"
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <p className='ps-1 font-bold text-xl text-black'>Hotel</p>
                                    <p className='ps-1 pt-2 text-xl text-black'>Disini Bintang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-[726px] ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-3xl font-bold text-[#E3B02B] text-center pt-2'>Mitra Travel</p>
                        </div>
                        <div className='flex py-7 px-14'>
                            <div className='w-[140px]'>
                                <div className='w-[120px] h-[120px] bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='w-full ps-5'>
                                <h1 className=' text-black text-4xl pb-3 font-bold'>Travel Keren Dongs</h1>
                                <div className='flex pb-3'>
                                    <p className='text-black text-3xl'>60 Penilaian</p>
                                    <div className='flex'>
                                        <p className='text-black text-3xl'>Rating</p>
                                        <p className='text-black text-3xl'>Bintang</p>
                                    </div>
                                </div>
                                <p className='text-black text-3xl pb-3'>Nomor Izin Umroh</p>
                                <p className='text-black text-3xl pb-3'>123123123123</p>

                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-[726px] ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-3xl font-bold text-[#E3B02B] text-center pt-2'>Testimoni Travel</p>
                        </div>
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-[726px] ms-20 rounded-xl'>
                        <div >
                            <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                                <p className='text-3xl font-bold text-[#E3B02B] text-center pt-2'>Fasilitas Umroh</p>
                            </div>
                            <div className='py-7 px-14 text-3xl font-bold text-black'>
                                <p>Kamar Hotel</p>
                                <p>List nomer 2</p>
                                <p>List Nomer 3</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[50px]'></div>
                    <div className='bg-white w-[726px] ms-20 rounded-xl'>
                        <div className='h-[60px] w-[250px] bg-black mx-auto rounded-b-xl'>
                            <p className='text-3xl font-bold text-[#E3B02B] text-center pt-2'>Maskapai</p>
                        </div>
                        <div className='flex py-7 px-14'>
                            <div className='w-[140px]'>
                                <div className='w-[120px] h-[120px] bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='w-full ps-5'>
                                <h1 className=' text-black text-4xl pt-[40px] font-bold'>Air Asia Airlines</h1>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-4/12 z-10 fixed right-10'>
                    <DetailCard />
                </div>
            </div >
        </>
    )
}

export default Detail