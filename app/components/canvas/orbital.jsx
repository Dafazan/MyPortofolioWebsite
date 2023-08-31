"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";




export const Orbital = () => {
    const orbit = useGLTF('./assets/orbital.gltf');

    return (
        <primitive object={orbit.scene} scale={1.5} position-y={0} />
    );
};

export const OrbitalCanvas = () => {
    return (

        <Canvas
            shadows
            frameloop='demand'

            dpr={[1, 5]}
            gl={{ preserveDrawingBuffer: true }}

            camera={{
                fov: 70,
                near: 0.1,
                far: 200,
                position: [20, 15, 12]
            }}
        >

            <ambientLight intensity={2} />
            <directionalLight position={[0, 2, 0.05]} />
            <directionalLight position={[0, -2, -0.05]} intensity={0.5} />
            <Suspense>
                <OrbitControls


                    enableZoom={false}
                    maxPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 3}
                />
                <Orbital />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};
