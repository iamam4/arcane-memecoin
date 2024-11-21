import React, { useRef, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';



export default function FlashingPointLight() {
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