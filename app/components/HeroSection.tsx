import { heroSection } from "../data/heroSection"
import Button from "./ui/Button"

export const BackdropBlur = () => {
    return (
        <>
            <div className="absolute top-[500px] right-[-250px] w-[250px] h-[400px] bg-[#395D8B] blur-[450px] opacity-70 rounded-[118px] z-[-9999]"></div>
            <div className="absolute top-[-250px] left-[-125px] w-[250px] h-[400px] bg-[#395D8B] blur-[450px] opacity-70 rounded-[118px] z-[-9999]"></div>
        </>
    )
}


export const Coin = () => {
    return (
        <div className="relative flex items-center justify-between z-0">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#c99846] to-[#554023] text-5xl p-5 w-fit">{heroSection.coin_name}</h1>
            <div className="pr-5">
                <Button id={0} glow={false} />
            </div>

        </div>
    )
}

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-8">
            <div>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#081428] from-49% via-[#08C8B9] via-50% to-[#081428] text-[3.5em] text-center">{heroSection.title}</h2>
            </div>
            <Button id={1} />
            <div className="flex justify-center items-center w-full">
                <p className="text-slate-400 text-center w-7/12 md:text-sm text-xs">{heroSection.description}</p>
            </div>
        </div>
    )
};