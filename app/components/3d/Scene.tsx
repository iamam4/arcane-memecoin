import Model from "./Model";
import FlashingPointLight from "./FlashingPointLight";
import { Canvas } from "@react-three/fiber";


export default function Scene() {

    return (
        <div className="flex w-full justify-center items-center">
            <div className="w-full h-[430px] z-[-500]">
                <Canvas>
                    <spotLight position={[0, 5, 10]} intensity={200} distance={50} color={'mediumblue'} />
                    <spotLight position={[0, 5, -10]} intensity={200} distance={50} color={'mediumblue'} />
                    <spotLight position={[0, 5, -10]} intensity={100} distance={50} color={'white'} />
                    <spotLight position={[0, 5, 10]} intensity={100} distance={50} color={'white'} />
                    <FlashingPointLight />
                    <Model />
                </Canvas>
            </div>
        </div>
    );
}