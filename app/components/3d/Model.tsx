import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshToonMaterial } from "three";
import { useEffect } from "react";

export default function Model() {
    const { scene } = useGLTF("/hextech_crystal.glb");
    scene.scale.set(2.2, 2.2, 2.2);

    useFrame(() => {
        scene.rotation.y -= 0.002;
        // Floating movement
        const time = window.performance.now() / 1000;
        scene.position.y = Math.sin(time) / 10 + Math.sin(time * 1.5) / 15;
        scene.position.x = Math.sin(time * 0.8) / 20;
        scene.position.z = Math.cos(time * 0.7) / 20;
        // Slight tilt
        scene.rotation.x = Math.sin(time * 0.5) / 30;
        scene.rotation.z = Math.cos(time * 0.6) / 30;
    });

    return <primitive object={scene} />;
}