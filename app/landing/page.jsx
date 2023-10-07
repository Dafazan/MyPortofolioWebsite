'use client'
import React from 'react'
import CustomAudioPlayer from '../components/audioplayer'

function Landing
    () {
    return (
        <>
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Custom Audio Player</h1>
                <CustomAudioPlayer audioSource="./assets/record.mp3" />
            </div>


        </>
    )
}

export default Landing
