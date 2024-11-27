import Image from "next/image";
import { ButtonProps } from "@/app/types";
import { buttons } from "../../data/buttons";
import "../../globals.css";

export default function Button({id = 0, showImage = true, glow = true}: ButtonProps) {
    const button = buttons[id];
    return (
        <div className="flex">
            <button className="bg-[#1B2943] rounded-3xl text-[#c99846] text-base py-2 px-4 relative flex flex-row items-center gap-2 border-2 border-slate-700 hover:bg-slate-900/60 transition-all duration-300 tracking-[2px]">
                {glow && <span data-glow="true" className="ui_glowing_borders"></span>}
                <span>{button.title}</span>
                {showImage && button.img && button.img.map((img, index) => (
                    <Image
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        width={20}
                        height={20}
                    />
                ))}
            </button>
        </div>
    );
}
