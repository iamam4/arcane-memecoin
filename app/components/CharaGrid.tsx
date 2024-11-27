
import Image from "next/image";
import { characters } from "../data/characters";
const CharaGrid = () => {
    return (
        <div>
            <div className="flex w-full justify-center items-center">
                <h1 className="text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#c89c3c30] from-49% via-[#C89B3C] via-50% to-[#c89c3c30] px-8">HEXTECH CHAMPIONS</h1>
            </div>
            <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 p-12 h-[2000px] sm:h-[1200px] md:h-[1000px] my-5">
                {characters.map((chara) => (
                    <div key={chara.id} className="relative flex flex-col overflow-hidden rounded-sm cursor-pointer ">
                        <div className=" relative flex w-full h-full group">
                            <Image
                                src={chara.images[0].src}
                                alt={chara.images[0].alt}
                                fill
                                sizes="100%"
                                priority={true}
                                className="rounded-sm transition-transform duration-300 group-hover:scale-105 object-cover"
                            />
                        </div>
                        <div className="flex flex-col w-full h-auto bg-[#101217] z-0 rounded-b-sm border-t border-t-[#7C623A] justify-center items-center">
                            <div className="mt-1">
                                <h1 className="text-center text-[#937341] md:text-lg text-sm">{chara.name}</h1>
                            </div>
                            <div className="w-32 h-[1px] mt-1 bg-gradient-to-r from-[#101217] from-49% via-[#937341] via-50% to-[#101217] to-100%"></div>
                            <div className="p-2">
                                <h2 className="text-center text-[#C4B999] md:text-sm text-xs">{chara.description}</h2>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );

}

export default CharaGrid;


