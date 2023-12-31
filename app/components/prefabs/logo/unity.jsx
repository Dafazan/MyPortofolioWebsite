import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

export const Unity = () => {
    const unity = useGLTF("./assets/logo/unity.gltf");
    const mixer = useRef();

    // Access the animation clip and create a mixer
    const clip = unity.animations[0];
    mixer.current = new THREE.AnimationMixer(unity.scene);
    const action = mixer.current.clipAction(clip);

    // Enable looping
    action.setLoop(THREE.LoopRepeat, Infinity);

    // Start the animation
    action.play();

    // Use useFrame to update the animation frame
    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return <primitive object={unity.scene} scale={10} position-y={-5} />;
};

export const UnityCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="always"
            dpr={[1, 5]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 60,
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
                <Unity />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};
export default UnityCanvas;
