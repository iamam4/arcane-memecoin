import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function Model() {
    const { scene } = useGLTF("/hextech_crystal.glb");
    scene.scale.set(2.2,2.2,2.2);
    useFrame(() => {
        scene.rotation.y -= 0.001;
    }
    );
    
    return <primitive object={scene} />;
}