import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useCallback } from "react";
import * as THREE from "three";

function Scene() {
    const { scene } = useGLTF("/hextech_crystal.glb");
    useFrame(() => {
        scene.rotation.y -= 0.001;
    }
    );
    
    return <primitive object={scene} />;
}


function FlashingPointLight() {
    const pointLight = useRef<THREE.PointLight>(null);
    const speedRef = useRef(0.05);
    const intensityRef = useRef(0);
    const isWaitingRef = useRef(false);
    const minIntensity = 0;
    const maxIntensity = 20;
    const delayTime = 1500;

    const startDelay = useCallback(() => {
        isWaitingRef.current = true;
        setTimeout(() => {
            isWaitingRef.current = false;
            speedRef.current *= -1;
        }, delayTime);
    }, []);

    useFrame(() => {
        if (pointLight.current && !isWaitingRef.current) {
            intensityRef.current += speedRef.current;
            
            if (intensityRef.current >= maxIntensity) {
                speedRef.current *= -1;
            }
            
            if (intensityRef.current <= minIntensity) {
                intensityRef.current = minIntensity;
                startDelay();
            }
            
            pointLight.current.intensity = intensityRef.current;
        }
    });

    return (
        <pointLight
            ref={pointLight}
            position={[0, 0, 0]}
            intensity={intensityRef.current}
            color={'mediumturquoise'}
        />
    );
}




export default function Model() {

    return (
        <div className="w-full h-[430px]">
        <Canvas>
            <spotLight position={[0, 5, 10]} intensity={100} distance={20} color={'mediumblue'} />
            <spotLight  position={[0, 5, -10]} intensity={100} distance={20} color={'mediumblue'} />
            <spotLight position={[0, 5, -10]} intensity={100} distance={20} color={'white'} />
            <spotLight position={[0, 5, 10]} intensity={100} distance={20} color={'white'} />
            <pointLight position={[0, 0, 0]} intensity={5} color={'mediumturquoise'} />
            <FlashingPointLight />
            <OrbitControls
                enableZoom={true}
                minDistance={2.2}
                maxDistance={2.2}
                enableRotate={true}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />

            <Scene />
        </Canvas>
        </div>
    );
}