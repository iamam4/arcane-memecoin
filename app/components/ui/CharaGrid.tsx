
import Image from "next/image";


interface CharaImageProps {
    src: string;
    alt: string;
}
interface CharaGridProps {
    id: number;
    name: string;
    description: string;
    images: CharaImageProps[];
}

const gridData: CharaGridProps[] = [
    {
        id: 1,
        name: "Jayce",
        description: "The Defender of Tomorrow",
        images: [
            {
                src: "/jayce.jpg",
                alt: "Vi"
            }
        ]
    },
    {
        id: 2,
        name: "Viktor",
        description: "The Machine Herald",
        images: [
            {
                src: "/viktor.jpg",
                alt: "Jinx"
            }
        ]
    },
    {
        id: 3,
        name: "Vi",
        description: "The Piltover Enforcer",
        images: [
            {
                src: "/vi.jpg",
                alt: "Vi"
            }
        ]
    },
    {
        id: 4,
        name: "Jinx",
        description: "The Loose Cannon",
        images: [
            {
                src: "/jinx.jpg",
                alt: "Jinx"
            }
        ]
    },
    {
        id: 5,
        name: "Ekko",
        description:"The Boy Who Shattered Time",
        images: [
            {
                src: "/ekko.jpg",
                alt: "Ekko"
            }
        ]
    },
    {
        id: 6,
        name: "Heimerdinger",
        description: "The Revered Inventor",
        images: [
            {
                src: "/heimerdinger.jpg",
                alt: "Heimerdinger"
            }
        ]
    }
];

const CharaGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-12 h-[800px]">
            {gridData.map((chara) => (
            <div key={chara.id} className="relative flex flex-col overflow-hidden rounded-sm cursor-pointer">
                <div className="flex w-full h-full group">
                                <Image 
                                    src={chara.images[0].src} 
                                    alt={chara.images[0].alt} 
                                    objectFit="cover" 
                                    fill 
                                    className="rounded-sm transition-transform duration-300 scale-105 group-hover:scale-100"
                                />
                                </div>
                <div className="flex flex-col w-full h-auto bg-[#101217] z-0 rounded-b-sm border-t border-t-[#7C623A] justify-center items-center">
                <div className="mt-1">
                    <h1 className="text-center text-[#937341] text-lg">{chara.name}</h1>
                </div>
                <div className="w-32 h-[1px] mt-1 bg-gradient-to-r from-[#101217] from-49% via-[#937341] via-50% to-[#101217] to-100%"></div>
                <div className="p-2">
                    <h2 className="text-center text-[#C4B999] text-xs">{chara.description}</h2>
                </div>
                </div>
            </div>
            ))}
        </div>
        );

}

export default CharaGrid;


