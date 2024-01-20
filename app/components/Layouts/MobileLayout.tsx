import React from 'react'

function MobileLayout({ children }: { children?: any }) {
    return (
        <div className='p-1 flex justify-center items-center h-screen w-screen'>

            {children}

        </div>
    )
}

export default MobileLayout