import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Model() {
    const { scene } = useGLTF("/hextech_crystal.glb");
    const { viewport, gl } = useThree();
    const [modelScale, setModelScale] = useState(2.2);

    useEffect(() => {
        const calculateScale = () => {
            const baseScale = 2.2;
            const aspectRatio = viewport.width / viewport.height;
            const dpr = gl.getPixelRatio();
            let newScale = baseScale * (aspectRatio < 1 ? 0.8 : 1);
            newScale *= Math.min(dpr, 2) / 2;
            return ( Math.max(1.5, Math.min(newScale, 2.5)) );
        };

        setModelScale(calculateScale());
    }, [viewport, gl]);

    useFrame(() => {
        scene.scale.set(modelScale, modelScale, modelScale);
        scene.rotation.y -= 0.002;

        const time = window.performance.now() / 1000;

        const animationScale = modelScale / 2.2;
        
        scene.position.y = (Math.sin(time) / 10 + Math.sin(time * 1.5) / 15) * animationScale;
        scene.position.x = (Math.sin(time * 0.8) / 20) * animationScale;
        scene.position.z = (Math.cos(time * 0.7) / 20) * animationScale;
        
        scene.rotation.x = Math.sin(time * 0.5) / 30;
        scene.rotation.z = Math.cos(time * 0.6) / 30;
    });

    return <primitive object={scene} />;
}