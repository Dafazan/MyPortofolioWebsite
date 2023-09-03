'use client'
import { NotFoundCanvas } from '../app/components/canvas/notfound';
import React, { Suspense } from "react";


export default function about() {
    return (
        <main>
            <div className="h-screen">
                <NotFoundCanvas />
            </div>
        </main>
    )

}