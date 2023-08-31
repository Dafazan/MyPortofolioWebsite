"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";




export const Logo = () => {
    const logo = useGLTF('./assets/projok3d.gltf');

    return (
        <primitive object={logo.scene} scale={5} position-y={0} />
    );
};

export const LogoCanvas = () => {
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

            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} />
            <Suspense>
                <OrbitControls


                    enableZoom={false}
                    maxPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 3}
                />
                <Logo />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};
