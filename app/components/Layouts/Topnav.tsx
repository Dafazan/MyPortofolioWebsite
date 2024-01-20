import React from 'react'

function Topnav() {
    return (
        <>
            <div className=' w-full h-16 flex items-center justify-center text-xs absolute z-40'>
                <div className='w-full h-[2px] bg-blue-500'>

                </div>
                <div className=' h-full w-full text-blue-400 flex justify-between items-center gap-2 text-sm uppercase'>
                    <div className='w-[2px] h-[15px] bg-blue-500'></div>
                    <a className='hover:text-yellow-300' href="https://www.dtc.my.id/">Dashboard</a>
                    <div className='w-[1px] h-[15px] bg-blue-500'></div>
                    <a className='hover:text-yellow-300' href="https://www.dtc.my.id/Tools">Tools</a>
                    <div className='w-[1px] h-[15px] bg-blue-500'></div>
                    <a className='hover:text-yellow-300' href="https://github.com/Dafazan">GitHub</a>
                    <div className='w-[1px] h-[15px] bg-blue-500'></div>
                    <a className='hover:text-yellow-300' href="/Info">Information</a>
                    <div className='w-[1px] h-[15px] bg-blue-500'></div>
                    <a className='hover:text-yellow-300' href="/posts">Posts</a>
                    <div className='w-[1px] h-[15px] bg-blue-500'></div>

                </div>
                <div className='w-full h-[2px] bg-blue-500'></div>

            </div>
        </>
    )
}

export default Topnav