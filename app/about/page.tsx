'use client'
import Image from 'next/image'
import { OrbitalCanvas } from '../../app/components/canvas/orbital';
import React, { Suspense } from "react";


export default function about() {
    return (
        <main>
            <div className="h-screen">
                <OrbitalCanvas />
            </div>
        </main>
    )

}