import React from 'react'

function SideButton({ text }: { text?: string }) {
    return (
        <button className=' w-56 py-1 border border-t-0 border-yellow-300 hover:bg-[#002c41]'>{text}</button>
    )
}

export default SideButton