import Image from "next/image";
import "../globals.css";

export default function Button() {
    return (
        <div className="flex">
            <button className="bg-[#1B2943] rounded-3xl text-cyan-500 text-base py-2 px-4 relative flex flex-row items-center gap-2 border-2 border-slate-700 hover:bg-slate-900/60 transition-all duration-300 tracking-[2px]">
                <span data-glow="true" className="ui_glowing_borders"></span>
                <span>BUY $ARCANE ON PUMP FUN</span>
                <Image
                    src="/pump.png"
                    alt="Pump Fun"
                    width={20}
                    height={20}
                />
            </button>
        </div>

    );
}
