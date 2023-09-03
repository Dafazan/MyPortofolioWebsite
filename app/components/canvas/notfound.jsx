"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";




export const NotFound = () => {
    const notfound = useGLTF('./assets/notfound.gltf');
    return (
        <primitive object={notfound.scene} scale={6} position-y={-3} />
    );
};

export const NotFoundCanvas = () => {
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
                position: [20, 15, 12],
                autorotate: true

            }}
        >

            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 2, 0.05]} />

            <Suspense>
                <OrbitControls


                    enableZoom={false}
                    maxPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 3}
                />
                <NotFound />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};
